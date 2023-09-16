import React from 'react';
import "./Home.css";
import vision from "../Images/vision.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import useDataJson from '../Hooks/useDataJson';




const Home = () => {

    // const [dataJson, setDataJson] = useState([]);
    // useEffect(() => {
    //     fetch("data.json")
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, []);

    const [dataJson, setDataJson] = useDataJson();
    return (
        <section>
            <div className='md:flex flex-row-reverse'>
                <div className='flex mt-auto'>
                    <img src={vision} alt="vision product" width="" />
                </div>
                <div className='px-2 md:basis-4/5'>
                    <h2 className='text-3xl font-bold'><span className='md:text-7xl xl:text-8xl'>Your Next <span className=' text-gray-700 '>Apple Vision Pro</span> </span><span className='md:text-3xl xl:text-5xl'>will be Your best Vision</span></h2>
                    <p className='font-semibold my-10'>Apple Vision Pro: Elevating Apple device camera capabilities through AI-driven enhancements, low-light performance, AR integration, and real-time object recognition.</p>
                    <Link to="..." className='text-white text-2xl font-bold bg-gray-600 p-4 rounded-lg hover:bg-gray-950'>Live demo</Link>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl font-semibold'>Customer Reviews({dataJson.length})</h2>
                <div className=''>
                    <div>

                    </div>

                    <Link className='bg-gray-600 text-white text-xl font-bold px-8 py-2 rounded-lg hover:bg-gray-950' to='/reviews'>See All Reviews</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;