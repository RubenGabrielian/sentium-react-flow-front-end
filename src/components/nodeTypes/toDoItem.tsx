import {Button, notification, Popconfirm} from "antd";
import React, {useState} from "react";
import Flex from "../molecules/flex/flex";
import {ITodo} from "@/entities/todo";
import {DeleteOutlined} from "@ant-design/icons";
import {useDeleteToDo} from "@/hooks/useDeleteTodo.hook";
import useGetTodos from "@/hooks/useGetToDos.hook";
import Loading from "../molecules/loading/loading";
import EditTodo from "./editToDo";
import {useCompleteToDo} from "@/hooks/useCompleteTodo.hook";

interface IProps {
    data: ITodo
}


const ToDoItem = ({data}: IProps): JSX.Element => {
    const [api, contextHolder] = notification.useNotification();
    const [editable, setEditable] = useState<boolean>(false);
    const {refetch} = useGetTodos();

    const {deleteTodo} = useDeleteToDo(
        () => {
            refetch().then(() => {
                api.success({
                    message: "Success",
                    placement: "topRight",
                });
            });

        }, () => {
            api.error({
                message: "Error",
                description: "Something went wront",
                placement: "topRight",
            });
        }
    );

    const {completedTodo} = useCompleteToDo(
        () => {
            refetch().then(() => {
                api.success({
                    message: "Success",
                    placement: "topRight",
                });
            });

        }, () => {
            api.error({
                message: "Error",
                description: "Something went wront",
                placement: "topRight",
            });
        }
    );

    const handleDeleteTodo = (id: number) => {
        deleteTodo.mutate({id});
    }

    const hadnleComplete = () => {
        completedTodo.mutate({id: data?.id})
    }

    return (
        !editable ? (
            <div className={'todo'}>
                {contextHolder}
                {deleteTodo?.isLoading && <Loading/>}
                {completedTodo?.isLoading && <Loading/>}
                <h3>{data?.title}</h3>
                <p>{data?.description}</p>
                <Flex justifyContent={'space-between'}>
                    <Button type={data?.completed ? "default" : "primary"}
                            onClick={hadnleComplete}>{data?.completed ? "Mark as Uncompleted" : "Mark as completed"}</Button>
                    <Button onClick={() => setEditable(true)}>Edit</Button>
                </Flex>
                <Popconfirm
                    title={'Are you sure?'}
                    onConfirm={() => {
                        handleDeleteTodo(data.id)
                    }}
                >
                    <button className={'delete-todo'}>
                        <DeleteOutlined/>
                    </button>
                </Popconfirm>
            </div>
        ) : <EditTodo data={data} setEditable={setEditable}/>
    )
}

export default ToDoItem;