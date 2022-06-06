import React from 'react';
import { Navbar } from '@emer/interfaces';
import { Col, Row } from 'antd';
import '../../css/Dashboard.css';

const Dashboard = () => {
  return (
    <>
    <Row>
      <Col xs={24}>
      <Navbar />
      </Col>
    </Row>
    </>
  );
};

export default Dashboard;