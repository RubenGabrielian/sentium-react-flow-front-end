import {todosApi} from "@/services/todos";
import {AxiosResponse} from "axios";
import {useMutation, useQueryClient} from "react-query";

export const useUpdateToDoPosition = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e: AxiosResponse) => {
    },
) => {
    const client = useQueryClient();
    const updateToDoPosition = useMutation(todosApi.updateTodoPosition, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e: AxiosResponse) => {
            onError(e);
        }
    });
    return {updateToDoPosition}
};
