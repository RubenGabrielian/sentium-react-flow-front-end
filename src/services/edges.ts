import { IEdge, IEdgesListData } from "@/entities/edges";
import $axios from "../lib/AxiosInstance";

export const edgesApi = {
    async createEdge(data: IEdge) {
        const response = await $axios.post<IEdge>("/api/add-edge", data);
        return response?.data;
    },
    async fetchEdges() {
        const response = await $axios.get<IEdgesListData>("/api/edges");
        return response?.data?.data;
    },
};

