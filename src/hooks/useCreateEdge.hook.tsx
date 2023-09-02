import { IEdge } from "@/entities/edges";
import { edgesApi } from "@/services/edges";
import { useMutation, useQueryClient } from "react-query";

export const useCreateEdge = (
    onSuccess = (data: IEdge) => { },
    onError = (e) => { },
) => {
    const client = useQueryClient();
    const createEdge = useMutation(edgesApi.createEdge, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (e) => {
            onError(e);
        },
    });

    return { createEdge }
};
