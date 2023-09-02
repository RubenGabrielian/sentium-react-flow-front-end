"use client";
import React from "react";
import { Col, Row } from "antd";
import LoginForm from "@/components/pages/login/form";

const Login = () : JSX.Element => {
  return (
    <Row justify={"center"}>
      <Col lg={10}>
        <LoginForm />
      </Col>
    </Row>
  );
}

export default Login;

