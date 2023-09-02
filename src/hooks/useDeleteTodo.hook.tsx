import { todosApi } from "@/services/todos";
import { Axios, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteToDo = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e: AxiosResponse) => {
    },
) => {
    const client = useQueryClient();
    const deleteTodo = useMutation(todosApi.deleteTodo, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e: AxiosResponse) => {
            onError(e);
        },
    });
    return { deleteTodo }
};
