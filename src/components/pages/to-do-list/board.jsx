import { IEdge, IEdges, IEdgesListData } from "@/entities/edges";
import { INode, ITodosListMutated } from "@/entities/todo";
import useGetTodos from "@/hooks/useGetToDos.hook";
import React, { useCallback, useEffect, useState } from "react";
import { QueryClient, dehydrate } from "react-query";
import ReactFlow, {
    Controls, Background, addEdge, applyEdgeChanges,
    applyNodeChanges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { nodeTypes } from "./nodeTypes";
import useGetEdges from "@/hooks/useGetEdges.hook";
import { useUpdateToDoPosition } from "@/hooks/useUpdateToDoPosition.hook";
import { notification } from "antd";
import { useCreateEdge } from "@/hooks/useCreateEdge.hook";
import BoardHeader from "./header";
import Loading from "@/components/molecules/loading/loading";




const Board = (): JSX.Element => {


    const initialEdges: IEdges = [];
    const [api, contextHolder] = notification.useNotification();
    const [nodes, setNodes] = useState<ITodosListMutated>([]);
    const [edges, setEdges] = useState<IEdges>(initialEdges);

    const { todos, isLoading } = useGetTodos();
    const { edgesList } = useGetEdges();

    const { updateToDoPosition } = useUpdateToDoPosition(
        () => {
            api.success({
                message: "Success",
                placement: "topRight",
            });
        }, () => {
            api.error({
                message: "Error",
                description: "Something went wront",
                placement: "topRight",
            });
        });

    const { createEdge } = useCreateEdge(
        () => {
            api.success({
                message: "Success",
                placement: "topRight",
            });
        }, () => {
            api.error({
                message: "Error",
                description: "Something went wront",
                placement: "topRight",
            });
        }
    );

    useEffect(() => {
        todos && setNodes(todos?.data);
        edgesList && setEdges(edgesList);
    }, [todos, edgesList]);

    //@ts-ignore
    const onNodeChanges = useCallback(changes => {
        setNodes(nds => applyNodeChanges(changes, nds));
    }, []);

    //@ts-ignore
    const onEdgesChange = useCallback(changes => {
        setEdges(eds => applyEdgeChanges(changes, eds));
    }, []);

    //@ts-ignore
    const onConnect = useCallback((params: IEdge) => {
        createEdge.mutate(params);
        setEdges((eds) => addEdge(params, eds))
    }, []);


    const onNodeDrag = (event: Event, node: INode) => {
        if (node?.dragging) {
            console.log(node)
            if (node?.data?.id) {
                updateToDoPosition.mutate({
                    id: node.id,
                    x_position: node?.position?.x,
                    y_position: node?.position?.y,
                });
            }
        }
    };


    return (
        <>
            <BoardHeader setNodes={setNodes} nodes={nodes} />
            <div className="board">
                {contextHolder}
                {isLoading ? <Loading /> : (
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onConnect={onConnect}
                        onNodesChange={onNodeChanges}
                        onEdgesChange={onEdgesChange}
                        nodeTypes={nodeTypes}
                        onNodeDragStop={onNodeDrag}
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                )}
            </div>
        </>
    )
}

export default Board;
