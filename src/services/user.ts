import {IRegistration, IUser} from "@/entities/user";
import $axios from "../lib/AxiosInstance";
import {AxiosResponse} from "axios";
import {SignInResponse} from "next-auth/react";

export const LoginService = async (user: IRegistration): Promise<AxiosResponse<SignInResponse>> => {
    return await $axios.post<SignInResponse>("/api/login", {email: user?.email, password: user?.password});
};

export const RegisterService = async (registerForm: IRegistration): Promise<IUser> => {
    const response = await $axios.post<IUser>("/api/register", registerForm);
    return response?.data;
};
