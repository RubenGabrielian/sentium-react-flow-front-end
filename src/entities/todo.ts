export interface ITodo {
    id: number;
    user_id: number;
    title: string;
    description: string;
    unique_id: string;
    y_position: number;
    x_position: number;
    created_at: string;
    updated_at: string;
    completed: number;
}

export interface ITodoData {
    title: string;
    description: string;
    id: number;
}

interface IUser {
    name?: string | null;
    email?: string | null;
    id?: string | null;
    image? : string | null;
}

export interface ITodoCreate {
    title: string;
    description: string;
    user: IUser | undefined;
    y_position: number;
    x_position: number;
}

export interface IToDoPosition {
    x: number;
    y: number;
}

export interface ITodoMutated {
    id: string;
    data: ITodoData;
    position: IToDoPosition;
    type: string;
    completed?: number;
}

export interface ITodosList {
    data: ITodo[] | [];
}

export type ITodosListMutated = ITodoMutated[];


export interface INode {
    width: number;
    height: number;
    id: number;
    data: ITodoData;
    position: IToDoPosition;
    type: string;
    selected: boolean;
    positionAbsolute: IToDoPosition;
    dragging: boolean;
}

export interface ITodoPositionChange {
    id: number,
    x_position: number,
    y_position: number,
}

export interface ITodoId {
    id: number;
}