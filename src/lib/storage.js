export const storage = {
  getToken: () => {
    return JSON.parse(localStorage.getItem("token"));
  },
  setToken: (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  },
  clearToken: () => {
    localStorage.removeItem("token");
  },
};
