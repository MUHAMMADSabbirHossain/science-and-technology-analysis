import React from 'react';
import "./DashBoard.css";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useDataJson from '../Hooks/useDataJson';

const DashBoard = () => {

    const [dataJson, setDataJson] = useDataJson();
    console.log(dataJson);

    return (
        <section className='p-10 lg:grid lg:grid-cols-2 2xl:grid-cols-4'>
            <div className=''>
                <LineChart width={400} height={300} data={dataJson}>
                    <Line type="monotone" dataKey="revenue" stroke='#8884d8'></Line>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="revenue"></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>

            <div>
                <BarChart width={400} height={300} data={dataJson}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey=""></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="investment" fill="#8884d8"></Bar>
                    <Bar dataKey="revenue" fill="#82ca9d"></Bar>
                </BarChart>
            </div>

            <div>

            </div>
        </section>
    );
};

export default DashBoard;