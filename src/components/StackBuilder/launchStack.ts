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
  let utm: { [service: string]: string } | null = null;
  try {
    utm = Object.fromEntries(new URLSearchParams(document.location.search));
    // if (window && window.localStorage) {
    //   try {
    //     utm = {
    //       page: document.location.pathname,
    //     };

    //     const { params, time } = JSON.parse(window.localStorage.getItem('utm') || '{}');
    //     if (Date.now() - time < 24 * 60 * 60 * 1000) {
    //       utm = Object.assign({}, utm, params);
    //     }
    //   } catch (error) {
    //     console.error('Unable to parse UTM', error);
    //   }
    // }
  } catch (error) {
    console.error('Failed to parse utm', error);
  }

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
    try {
      if (window && window.localStorage) {
        window.localStorage.removeItem('utm');
      }
    } catch (error) {
      console.error('Failed to use localStorage', error);
    }

    window.location.href = `${apiUrl}/launch/${data.result.data.token}`;
  } else {
    // FIXME: This is too ugly...
    alert('Failed to start trial, please try again later...');
    button.disabled = false;
  }
};
