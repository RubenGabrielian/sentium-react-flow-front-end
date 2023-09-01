"use client";
import { Col, Row } from "antd";
import LoginForm from "@/components/pages/login/form";

export default function Login() {
  return (
    <Row justify={"center"}>
      <Col lg={10}>
        <LoginForm />
      </Col>
    </Row>
  );
}
