import {IEdge} from "@/entities/edges";
import {edgesApi} from "@/services/edges";
import {AxiosResponse} from "axios";
import {useMutation, useQueryClient} from "react-query";

export const useCreateEdge = (
    onSuccess = (data: IEdge) => {
    },
    onError = (e: AxiosResponse) => {
    },
) => {
    const client = useQueryClient();
    const createEdge = useMutation(edgesApi.createEdge, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e: AxiosResponse) => {
            onError(e);
        },
    });

    return {createEdge}
};
