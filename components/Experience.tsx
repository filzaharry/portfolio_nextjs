import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactDB from './works/ReactDB'
import Google from './works/Google'
import Amazon from './works/Amazon'
import Splash from './works/Splash'

const Experience = () => {
    const [workReactdb, setWorkReactdb] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);
    const [workSplash, setWorkSplash] = useState(false);


    const handleReactdb = () => {
        setWorkReactdb(true);
        setWorkGoogle(false);
        setWorkAmazon(false);
        setWorkSplash(false);
    }
    const handleAmazon = () => {
        setWorkReactdb(false);
        setWorkGoogle(false);
        setWorkAmazon(true);
        setWorkSplash(false);
    }
    const handleGoogle = () => {
        setWorkReactdb(false);
        setWorkGoogle(true);
        setWorkAmazon(false);
        setWorkSplash(false);
    }
    const handleSplash = () => {
        setWorkReactdb(false);
        setWorkGoogle(false);
        setWorkAmazon(false);
        setWorkSplash(true);
    }



    return (
        <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle title='Where I have Worked' titleNo='02' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-32 flex flex-col'>
                    <li onClick={handleReactdb} className={`${workReactdb ? "border-l-textGreen text-textGreen" : "border-l-textLight" } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>ReactBD</li>
                    <li onClick={handleGoogle} className={`${workGoogle ? "border-l-textGreen text-textGreen" : "border-l-textLight" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Google</li>
                    <li onClick={handleAmazon} className={`${workAmazon ? "border-l-textGreen text-textGreen" : "border-l-textLight" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Amazon</li>
                    <li onClick={handleSplash} className={`${workSplash ? "border-l-textGreen text-textGreen" : "border-l-textLight" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>Splash</li>
                </ul>
                {workReactdb && <ReactDB />}
                {workGoogle && <Google />}
                {workAmazon && <Amazon />}
                {workSplash && <Splash />}
                
            </div>
        </section>
    )
}

export default Experience