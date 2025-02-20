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

  const response = await fetch(`${apiUrl}/api/trpc/account.anonymousTrialCreate`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      componentIds,
    }),
  });

  const data = await response.json();
  if (data.result.data.status === 'ok') {
    window.location.href = `${apiUrl}/launch/${data.result.data.token}`;
  } else {
    // FIXME: This is too ugly...
    alert('Failed to start trial, please try again later...');
    button.disabled = false;
  }
};
