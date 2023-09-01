import axios from "axios";
import { getSession } from "next-auth/react";

export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

const $axios = axios.create({
    withCredentials: true,
    credentials: true,
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: headers,
});

$axios.interceptors.request.use(async (config) => {
    const session = await getSession();
    if (session) {
        config.headers.Authorization = `Bearer ${session?.user?.user?.token}`;
    }
    return config;
});

export default $axios;
