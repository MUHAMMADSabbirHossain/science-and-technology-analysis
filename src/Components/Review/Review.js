import React from 'react';

const Review = (props) => {
    const { month, investment, revenue, sell } = props.review;
    return (
        <div className=''>
            <h5>Investment: ${investment}</h5>
            <p>Sells per month: {sell}/<small>{month}</small> </p>
            <h5>Revenue: ${revenue}</h5>
        </div>
    );
};

export default Review;