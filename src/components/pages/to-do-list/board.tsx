import { IEdge, IEdges, IEdgesListData } from "@/entities/edges";
import { INode, ITodosListMutated } from "@/entities/todo";
import useGetTodos from "@/hooks/useGetToDos.hook";
import React, { useCallback, useEffect, useState } from "react";
import { QueryClient, dehydrate } from "react-query";
import ReactFlow, {
    Controls, Background, addEdge, applyEdgeChanges,
    applyNodeChanges,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
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


    const [api, contextHolder] = notification.useNotification();
    const [nodes, setNodes] = useState<ITodosListMutated>([]);
    const [edges, setEdges] = useState<IEdges>([]);

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

    // const onNodeChanges = useCallback(changes => {
    //     setNodes(nds => applyNodeChanges(changes, nds));
    // }, []);

    const onNodeChanges: OnNodesChange = useCallback(
        (changes) => setNodes((nds): any => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    // const onEdgesChange = useCallback(changes => {
    //     setEdges(eds => applyEdgeChanges(changes, eds));
    // }, []);

    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => {
            //@ts-ignore
            setEdges((eds): any => applyEdgeChanges(changes, eds))
        },
        [setEdges]
    );

    // const onConnect = useCallback((params: IEdge) => {
    //     createEdge.mutate(params);
    //     setEdges((eds) => addEdge(params, eds))
    // }, []);

    const onConnect: OnConnect = useCallback(
        (params: any) => {
            createEdge.mutate(params)
            //@ts-ignore
            setEdges((eds): any => addEdge(params, eds))
        },
        [createEdge, setEdges]
    );


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
