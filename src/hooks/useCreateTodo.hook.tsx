import { todosApi } from "@/services/todos";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useCreateToDo = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e: AxiosResponse) => {
    },
) => {
    const client = useQueryClient();
    const createTodo = useMutation(todosApi.createTodo, {
        onSuccess: (data: AxiosResponse) => {
            onSuccess(data);
        },
        onError: (e: AxiosResponse) => {
            onError(e);
        },
    });
    return { createTodo }
};
