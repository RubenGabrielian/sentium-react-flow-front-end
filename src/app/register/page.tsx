"use client";
import React from "react";
import {Col, Row} from "antd";
import RegisterForm from "@/components/pages/register/form";


const Register = (): JSX.Element => {
    return (
        <Row justify={"center"}>
            <Col lg={10}>
                <RegisterForm/>
            </Col>
        </Row>
    );
}

export default Register;