// FIXME: Replace this...
const CONSOLE_URL = 'https://tuomas.diploi.dev';

export const launchTemplateWithTryOut = async (template: string) => {
  const response = await fetch(
    `${CONSOLE_URL}/api/account/create-anonymous-trial`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        template: template,
        token: 'token', // TODO: ??
      }),
    }
  );

  const data = await response.json();
  if (data.status === 'ok') {
    window.location.href = `${CONSOLE_URL}/launch`;
  } else {
    // FIXME: This is too ugly...
    alert('Failed to start trial, please try again later...');
  }
};
