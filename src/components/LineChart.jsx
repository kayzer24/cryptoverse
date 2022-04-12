import React from 'react';
import {Col, Row, Typography} from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i=0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <>
            <Row className="chart-header">
                <Typography.Title level={2} className="chart-title">{coinName} Price Chart</Typography.Title>
                <Col className="price-container">
                    <Typography.Title className="price-change" level={5}>
                        {coinHistory?.data?.change}%
                    </Typography.Title>
                    <Typography.Title className="current-price" level={5}>
                        Current {coinName} Price: $ {currentPrice}
                    </Typography.Title>
                </Col>
            </Row>
            <Line options={options} data={data} />
        </>
    );
};

export default LineChart;