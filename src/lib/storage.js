export const storage = {
  getToken: () => {
    try {
      const token = localStorage.getItem("token");
      return token ? JSON.parse(token) : null;
    } catch (error) {
      console.error("Error parsing token from storage", error);
      return null;
    }
  },
  setToken: (token) => {
    if (!token) {
      localStorage.removeItem("token");
      return;
    }
    localStorage.setItem("token", JSON.stringify(token));
  },
  clearToken: () => {
    localStorage.removeItem("token");
  },
  getUser: () => {
    try {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error parsing user from storage", error);
      return null;
    }
  },
  setUser: (user) => {
    if (!user) {
      localStorage.removeItem("user");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
  },
  clearUser: () => {
    localStorage.removeItem("user");
  },
};
