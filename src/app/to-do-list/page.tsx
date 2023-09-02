"use client";
import Container from "@/components/molecules/container/container";
import Board from "@/components/pages/to-do-list/board";
import React from "react";

const ToDoList = (): JSX.Element => {
    return (
        <Container>
            <Board/>
        </Container>
    )
}

export default ToDoList;