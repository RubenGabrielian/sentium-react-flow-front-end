import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

const axiosConfig: AxiosRequestConfig = {
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers,
}

const $axios: AxiosInstance = axios.create(axiosConfig);


$axios.interceptors.request.use(async (config) => {
    const session = await getSession();
    if (session) {
        config.headers.Authorization = `Bearer ${session?.user?.token}`;
    }
    return config;
});

export default $axios;
