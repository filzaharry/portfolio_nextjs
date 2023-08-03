import React from 'react'
import {motion} from 'framer-motion'
import {TiArrowForward} from 'react-icons/ti'

const ReactDB = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Ipsum <span className='text-textGreen tracking-wide'>@Google</span></h3>
        <p className='text-sm mt-1 font-medium '>Jan 2023 - Present</p>
        <ul className='mt-6 flex flex-col gap-3 '>
            <li className='text-base flex gap-2 '>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Write modern, performance, maintable code for a diverse array of client and internal projects
            </li>
            <li className='text-base flex gap-2 '>
                <span className='text-textGreen mt-1'><TiArrowForward/></span>
                Write modern, performance, maintable code for a diverse array of client and internal projects
            </li>
        </ul>
    </motion.div>
  )
}

export default ReactDB