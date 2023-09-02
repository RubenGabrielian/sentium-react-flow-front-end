import {ITodo} from "@/entities/todo";
import {useUpdateToDoContent} from "@/hooks/useUpdateToDoContent.hook";
import {Button, Form, Input, notification} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Loading from "../molecules/loading/loading";
import useGetTodos from "@/hooks/useGetToDos.hook";

interface IProps {
    data: ITodo,
    setEditable: (type: boolean) => void;
}

const EditTodo = ({data, setEditable}: IProps): JSX.Element => {

    const [api, contextHolder] = notification.useNotification();
    const {refetch} = useGetTodos();
    const {updateToDoContent} = useUpdateToDoContent(
        () => {
            refetch().then(() => {
                api.success({
                    message: "Success",
                    placement: "topRight",
                });
            }).finally(() => setEditable(false));
        }, () => {
            api.error({
                message: "Error",
                description: "Something went wront",
                placement: "topRight",
            });
        });

    const handleFinish = (values: ITodo) => {
        values.id = data.id;
        updateToDoContent.mutate(values);
    }
    
    return (
        <Form layout={"vertical"} initialValues={{title: data?.title, description: data?.description}}
              onFinish={handleFinish}>
            {contextHolder}
            {updateToDoContent?.isLoading && <Loading/>}
            <Form.Item label={"Title"} name={"title"}>
                <Input/>
            </Form.Item>
            <Form.Item label={"Description"} name={"description"}>
                <TextArea/>
            </Form.Item>
            <Form.Item>
                <Button type={"primary"} htmlType={"submit"} block>Update</Button>
            </Form.Item>
        </Form>
    )
}

export default EditTodo;

