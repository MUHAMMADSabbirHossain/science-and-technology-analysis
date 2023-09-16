import React from 'react';

const Review = (props) => {
    const { month, investment, revenue, sell } = props.review;
    return (
        <div className=' bg-slate-200 text-lg p-10 my-4  font-semibold border rounded-xl'>
            <h5>Investment: ${investment}</h5>
            <p>Sells on month: {sell}/<small>{month}</small> </p>
            <h5>Revenue: <span className=' text-2xl text-amber-500'>${revenue}</span></h5>

        </div>
    );
};

export default Review;