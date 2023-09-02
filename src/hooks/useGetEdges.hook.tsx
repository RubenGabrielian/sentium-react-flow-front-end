import { ITodo } from "@/entities/todo";
import { edgesApi } from "@/services/edges";
import { todosApi } from "@/services/todos";
import { useQuery } from "react-query";

export default function useGetEdges() {
    const { data: edgesList, refetch } = useQuery(["edges"], () => edgesApi.fetchEdges(), {
        staleTime: Infinity,
    });
    return { edgesList, refetch };
}
