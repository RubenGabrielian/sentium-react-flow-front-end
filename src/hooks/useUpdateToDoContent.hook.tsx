import { todosApi } from "@/services/todos";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateToDoContent = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e: AxiosError) => {
    },
) => {
    const client = useQueryClient();
    const updateToDoContent = useMutation(todosApi.updateTodoContent, {
        onSuccess: (data: AxiosResponse) => {
            onSuccess(data);
        },
        onError: (e: AxiosError) => {
            onError(e);
        },
    });
    return { updateToDoContent }
};
