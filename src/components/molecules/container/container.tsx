"use client";
import React from "react";

interface IProps {
    children: React.ReactNode;
}

export default function Container({children}: IProps) {
    return <div className="container">{children}</div>;
}