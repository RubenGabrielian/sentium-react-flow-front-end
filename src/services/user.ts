import $axios from "../lib/AxiosInstance";

export const LoginService = async (user) => {
  return await $axios.post("/api/login", user);
};

export const RegisterService = async (user) => {
  return await $axios.post("/api/register", user);
};
