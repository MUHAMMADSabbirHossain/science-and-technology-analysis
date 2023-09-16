import React from 'react';
import "./Home.css";
import vision from "../Images/vision.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <div className='md:flex flex-row-reverse'>
                <div className=''>
                    <img src={vision} alt="vision product" width="" />
                </div>
                <div className='px-2 md:basis-4/5'>
                    <h2 className='text-3xl font-bold'><span className='md:text-7xl xl:text-8xl'>Your Next <span className=' text-gray-700 '>Apple Vision Pro</span> </span><span className='md:text-3xl xl:text-5xl'>will be Your best Vision</span></h2>
                    <p className='font-semibold my-10'>Apple Vision Pro: Elevating Apple device camera capabilities through AI-driven enhancements, low-light performance, AR integration, and real-time object recognition.</p>
                    <Link to="..." className='text-white text-2xl font-bold bg-gray-700 p-4 rounded'>Live demo</Link>
                </div>

                <div>

                </div>
            </div>
        </section>
    );
};

export default Home;