"use client";
import React from "react";
import { StyledContainer } from "../../../components/molecules/container/container.styled";

interface TContainer {
  children: React.ReactNode;
}

export default function Container({ children }: TContainer) {
  return <StyledContainer>{children}</StyledContainer>;
}