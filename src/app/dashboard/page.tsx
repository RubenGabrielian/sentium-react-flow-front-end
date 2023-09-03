"use client";
import React from "react";
import Container from "@/components/molecules/container/container";
import {Col, Row} from "antd";
import NuclearChart from "@/components/pages/dashboard/nuclearChart";
import SimpleChart from "@/components/pages/dashboard/simpleChart";
import SalesChart from "@/components/pages/dashboard/salesChart";

const Dashboard = (): JSX.Element => {
    return (
        <Container>
            <Row gutter={36}>
                <Col lg={12} md={24} xs={24}>
                    <NuclearChart/>
                </Col>
                <Col lg={12} md={24} xs={24}>
                    <SimpleChart/>
                </Col>
                <Col lg={24} md={24} xs={24}>
                    <SalesChart/>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;