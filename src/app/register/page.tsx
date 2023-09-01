"use client";
import { Col, Row } from "antd";
import RegisterForm from "@/components/pages/register/form";

export default function Register() {
  return (
    <Row justify={"center"}>
      <Col lg={10}>
        <RegisterForm />
      </Col>
    </Row>
  );
}
