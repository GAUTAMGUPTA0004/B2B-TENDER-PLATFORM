export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const isLoggedIn = (): boolean => {
  return !!getToken();
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};