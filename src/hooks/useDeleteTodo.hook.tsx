import { todosApi } from "@/services/todos";
import { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useDeleteToDo = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e) => {
    },
) => {
    const client = useQueryClient();
    const deleteTodo = useMutation(todosApi.deleteTodo, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
    });
    return { deleteTodo }
};
