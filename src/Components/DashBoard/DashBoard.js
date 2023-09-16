import React from 'react';
import "./DashBoard.css";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useDataJson from '../Hooks/useDataJson';

const DashBoard = () => {

    const [dataJson, setDataJson] = useDataJson();
    console.log(dataJson);

    return (
        <section className='p-10 lg:grid lg:grid-cols-2 2xl:grid-cols-4'>
            <div className=''>
                <h2 className="text-2xl text-gray-600 font-semibold p-6">Month Wise Sell</h2>
                <LineChart width={400} height={300} data={dataJson}>
                    <Line type="monotone" dataKey="sell" stroke='#8884d8'></Line>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="sell"></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>

            <div>
                <h2 className="text-2xl text-gray-600 font-semibold p-6">Investment VS Revenue</h2>
                <BarChart width={400} height={300} data={dataJson}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey=""></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="investment" fill="#8884d8"></Bar>
                    <Bar dataKey="revenue" fill="#82ca9d"></Bar>
                </BarChart>
            </div>

            <div className="text-2xl text-gray-600 font-semibold p-6">
                <ComposedChart width={400} height={300} data={dataJson}>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="revenue"></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid stroke='#f5f5f5'></CartesianGrid>
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8"></Area>
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </ComposedChart>
            </div>

            <div>
                <h2 className="text-2xl text-gray-600 font-semibold p-6">Investment VS Revenue</h2>
                <PieChart width={400} height={300}>
                    <Pie data={dataJson} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" ></Pie>
                    <Pie data={dataJson} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label></Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>

            <div className="text-2xl text-gray-600 font-semibold p-6">
                <ResponsiveContainer width={700} height="80%">
                    <AreaChart data={dataJson}
                        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <ReferenceLine x="May" stroke="green" label="Min PAGE" />
                        <ReferenceLine y={40000} label="Max" stroke="red" strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </section>
    );
};

export default DashBoard;