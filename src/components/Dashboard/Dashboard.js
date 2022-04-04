
import React from 'react';
import './Dashboard.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <Container className='dashboard'>
            <Row>
                <Col sm={12} md={6}>
                    <h3 className='text-center my-5'>Month wise sell</h3>
                    <LineChart width={330} height={280} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Tooltip />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="sell" />
                        <Legend></Legend>
                    </LineChart>
                    <br />
                </Col>
                <Col sm={12} md={6}>
                    <h3 className='text-center my-5'>Investment vs Revenue</h3>
                    <BarChart width={330} height={280} data={data}>
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" ></Bar>
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        <Tooltip />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis dataKey="investment"></YAxis>
                    </BarChart>
                </Col>
            </Row>

        </Container>
    );
};

export default Dashboard;