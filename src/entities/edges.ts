export interface IEdge {
    id?: number;
    source: string;
    sourceHandle: string;
    targetHandle: string;
    target?: string;
    created_at?: string;
    updated_at?: string;
}

export type IEdges = IEdge[];
export interface IEdgesListData {
    data: IEdge[];
}