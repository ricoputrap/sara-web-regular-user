export const getCookie = (key: string): string | undefined => {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(key))?.split('=')[1];
}

export const setCookie = (key: string, value: string, tokenExpiration: number = 0) => {
  const now = new Date();
  const expDate = new Date(now.getTime() + tokenExpiration * 1000);
  document.cookie = `${key}=${value};expires=${expDate.toUTCString()};path=/`;
}

export const deleteCookie = (key: string) => {
  document.cookie = `${key}=;expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
}