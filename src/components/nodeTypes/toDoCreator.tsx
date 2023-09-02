import React from "react";
import { Handle, Position } from "reactflow";
import ToDoItem from "./toDoItem";
import { ITodo, ITodoCreate } from "@/entities/todo";
import CreateToDoForm from "./createToDoForm";
import { useSession } from "next-auth/react";
import { useCreateToDo } from "@/hooks/useCreateTodo.hook";
import Loading from "../molecules/loading/loading";
import { notification } from "antd";
import useGetTodos from "@/hooks/useGetToDos.hook";

interface IProps {
    data: ITodo;
    isConnectable: boolean;
}

const ToDoCreator = ({ data, isConnectable }: IProps): JSX.Element => {
    const [api, contextHolder] = notification.useNotification();
    const { refetch } = useGetTodos();
    const { data: session } = useSession();
    
    const user = session?.user;

    const { createTodo } = useCreateToDo(
        () => {
            refetch().then(() => {
                api.success({
                    message: "Success",
                    placement: "topRight",
                });
            })
        }, () => {
            api.error({
                message: "Error",
                description: "Something went wront",
                placement: "topRight",
            });
        });

    const handleCreate = (values: ITodoCreate) => {
        values.y_position = 0;
        values.x_position = 0;
        values.user = user;

        if (!values.title || !values.description) {
            api.error({
                message: "Error",
                description: "Please fill all fields",
                placement: "topRight",
            });
        } else {
            createTodo.mutate(values);
        }

    }

    return (
        <div className="to-do-creator">
            {contextHolder}
            {createTodo?.isLoading && <Loading />}
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
            />
            <div className={'create-to-do-wrapper'}>
                {
                    data?.title ? (
                        <ToDoItem data={data} />
                    ) : <CreateToDoForm data={data} handleFinish={handleCreate} />
                }
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                isConnectable={isConnectable}
            />
        </div>
    )
}

export default ToDoCreator;