import {todosApi} from "@/services/todos";
import {AxiosResponse} from "axios";
import {useMutation, useQueryClient} from "react-query";

export const useCompleteToDo = (
    onSuccess = (data: AxiosResponse) => {
    },
    onError = (e: AxiosResponse) => {
    },
) => {
    const client = useQueryClient();
    const completedTodo = useMutation(todosApi.completeTodo, {
        onSuccess: (data: AxiosResponse) => {
            onSuccess(data);
        },
        onError: (e: AxiosResponse) => {
            onError(e);
        },
    });
    return {completedTodo}
};
