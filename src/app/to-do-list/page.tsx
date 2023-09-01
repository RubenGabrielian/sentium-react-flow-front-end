"use client";
import { useSession } from "next-auth/react";

export default function ToDoList() {
  const { data: session } = useSession();

  return <div>To Do List</div>;
}
