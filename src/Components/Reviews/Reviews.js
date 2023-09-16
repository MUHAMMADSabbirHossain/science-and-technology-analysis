import React from 'react';
import "./Reviews.css";
import useDataJson from '../Hooks/useDataJson';
import Review from '../Review/Review';

const Reviews = () => {
    const [dataJson, setDataJson] = useDataJson();
    console.log(dataJson);
    return (
        <div>
            <h1 className='text-6xl'>What our customers say!</h1>
            <div className='p-20 md:grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-6 gap-10'>
                {
                    dataJson.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;