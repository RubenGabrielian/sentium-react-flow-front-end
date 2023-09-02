import Flex from "@/components/molecules/flex/flex";
import {ITodoMutated, ITodosListMutated} from "@/entities/todo";
import {PlusOutlined} from "@ant-design/icons";
import {Button} from "antd";
import React from "react";
import uuid from "react-uuid";


interface IProps {
    setNodes: (data: ITodosListMutated) => void;
    nodes: ITodosListMutated
}


const BoardHeader = ({setNodes, nodes}: IProps): JSX.Element => {
    const handleCreateToDo = () => {
        const newTodoForm: ITodoMutated = {
            id: uuid(),
            data: {title: "", description: "", id: 0},
            position: {x: 150, y: 150},
            type: "toDoCreator",
            completed: 0,
        };
        setNodes([...nodes, newTodoForm]);
    };

    return (
        <Flex justifyContent="space-between" className="board-header" alignItems="center">
            <h2>Enjoy your board</h2>
            <Button type="primary" onClick={handleCreateToDo}>Add New <PlusOutlined/></Button>
        </Flex>
    )
}

export default BoardHeader;
