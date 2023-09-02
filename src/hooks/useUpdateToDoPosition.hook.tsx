import { todosApi } from "@/services/todos";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateToDoPosition = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e: AxiosError) => {
    },
) => {
    const client = useQueryClient();
    const updateToDoPosition = useMutation(todosApi.updateTodoPosition, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
        onMutate: () => {

        }
    });
    return { updateToDoPosition }
};
