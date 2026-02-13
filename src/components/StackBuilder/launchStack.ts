import { clearUtmParams, getUtmParams } from '../../utils/utmUtils';

export const launchStack = async ({
  button,
  componentIds,
  apiUrl,
}: {
  button: HTMLButtonElement;
  componentIds: number[];
  apiUrl: string;
}) => {
  button.disabled = true;

  // Check if this user came from an AD campaing
  const utm = getUtmParams();

  const response = await fetch(`${apiUrl}/api/trpc/account.anonymousTrialCreate`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      componentIds,
      utm,
    }),
  });

  const data = await response.json();
  if (data.result.data.status === 'ok') {
    clearUtmParams();

    try {
      // @ts-ignore
      console.log('track', window.umami, window.gtag);

      // @ts-ignore
      if (umami) {
        // @ts-ignore
        umami.track('launch', { page: location.pathname, componentIds });
      }

      // @ts-ignore
      if (gtag) {
        // @ts-ignore
        gtag('event', 'conversion_event_default_1', { page: location.pathname, componentIds });
      }
    } catch (error) {
      console.error(error);
    }

    if (data.result.data.isVerificationRequired) {
      window.location.href = `${apiUrl}/launch/verify?t=${data.result.data.token}`;
    } else {
      window.location.href = `${apiUrl}/launch?t=${data.result.data.token}`;
    }
  } else {
    // Move to the login screen as a fallback
    window.location.href = `${apiUrl}/login`;
  }
};
