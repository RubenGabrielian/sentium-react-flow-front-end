import { ITodo } from "@/entities/todo";
import { todosApi } from "@/services/todos";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";


export default function useGetTodos() {

    const { data: session } = useSession();

    const userId = session?.user?.user?.id;

    const { data: todos, refetch } = useQuery(["todos", userId], () => todosApi.fetchTodos(userId), {
        staleTime: Infinity,
        enabled: !!userId,
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
