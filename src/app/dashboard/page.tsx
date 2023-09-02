"use client";
import Flex from "@/components/molecules/flex/flex";
import Container from "@/components/molecules/container/container";
import { Col, Row } from "antd";
import NuclearChart from "@/components/pages/dashboard/nuclearChart";
import ExchangeChart from "@/components/pages/dashboard/exchangeChart";
import TemperatureChart from "@/components/pages/dashboard/temperatureChart";

export default function Dashboard() {
  return (
    <Container>
      <Row gutter={36}>
        <Col lg={12} md={24} xs={24}>
          <NuclearChart />
        </Col>
        <Col lg={12} md={24} xs={24}>
          <ExchangeChart />
        </Col>
        <Col lg={24} md={24} xs={24}>
          <TemperatureChart />
        </Col>
      </Row>
    </Container>
  );
}
