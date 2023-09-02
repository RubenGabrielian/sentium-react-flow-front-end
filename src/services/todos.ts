import { ITodo, ITodoCreate, ITodoId, ITodoPositionChange, ITodosList } from "@/entities/todo";
import $axios from "../lib/AxiosInstance";
import { AxiosResponse } from "axios";

export const todosApi = {
    async createTodo(data: ITodoCreate) {
        return await $axios.post<AxiosResponse>("/api/create-todo", data);
    },
    async fetchTodos(id: number) {
        const response = await $axios.get<ITodosList>(`/api/todos?id=${id}`);
        return response.data;
    },
    async updateTodoPosition(data: ITodoPositionChange) {
        return await $axios.put<AxiosResponse>("/api/update-todo", data);
    },
    async deleteTodo(data: ITodoId) {
        return await $axios.post<AxiosResponse>('/api/delete-todo', data);
    },
    async updateTodoContent(data: ITodo) {
        return await $axios.put<AxiosResponse>('/api/update-todo-content', data);
    },
    async completeTodo(data: ITodoId) {
        return await $axios.post<AxiosResponse>('/api/complete', data)
    }
};
