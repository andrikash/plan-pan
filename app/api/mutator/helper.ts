export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp < Date.now() / 1000;
  } catch {
    // Return true if token is invalid
    return true;
  }
};

export const getCurrentLanguage = () => {
  const pathSegments = window.location.pathname.split("/");
  return pathSegments[1] || "en";
};
