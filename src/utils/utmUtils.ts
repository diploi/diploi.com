export const getUtmParams = () => {
  let utm: { [service: string]: string } | null = null;
  try {
    utm = Object.fromEntries(new URLSearchParams(document.location.search));
    if (window && window.localStorage) {
      try {
        utm = {
          page: document.location.pathname,
        };
        const { params, time } = JSON.parse(window.localStorage.getItem('utm') || '{}');
        if (Date.now() - time < 24 * 60 * 60 * 1000) {
          utm = Object.assign({}, utm, params);
        }
      } catch (error) {
        console.error('Unable to parse UTM', error);
      }
    }
  } catch (error) {
    console.error('Failed to parse utm', error);
  }
  return utm;
};

export const clearUtmParams = () => {
  try {
    if (window && window.localStorage) {
      window.localStorage.removeItem('utm');
    }
  } catch (error) {
    console.error('Failed to use localStorage', error);
  }
};
