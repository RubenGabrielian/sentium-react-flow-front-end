import { ITodo } from "@/entities/todo";
import { todosApi } from "@/services/todos";
import { useQuery } from "react-query";

export default function useGetTodos() {
    const { data: todos, refetch } = useQuery(["todos"], () => todosApi.fetchTodos(), {
        staleTime: Infinity,
        select: ({ data }) => {
            const newData = data?.map((item: ITodo) => ({
                id: item?.id.toString(),
                data: { title: item?.title, description: item?.description, id: item?.id, completed: item?.completed },
                position: { x: item?.x_position, y: item?.y_position },
                type: "toDoCreator",
                completed: item?.completed,
            }));
            return {
                data: newData,
            };
        },
    });
    return { todos, refetch };
}
