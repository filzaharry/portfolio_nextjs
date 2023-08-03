import React from 'react'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <section id="home" className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
        <motion.h3 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='text-lg font-titleFont tracking-wide text-textGreen'>Hello World
        </motion.h3>
        <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        
        >Brave Dragon <span className='text-hoverText mt-2 lgl:mt-4'>I build things for the web</span>
        </motion.h1>
        <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-base md:max-w-[650px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit cumque debitis, consequatur ratione repellat. Facere natus corporis esse, assumenda architecto corrupti officia libero voluptate perspiciatis adipisci ea omnis ex voluptas maxime et! Dolor repellat sapiente iure, provident quod voluptatem tenetur nam vero molestias velit facere ad, adipisci nobis accusamus ex, distinctio quasi animi minima eum! Nihil beatae at soluta possimus dolore accusamus labore fuga quas commodi in iure, vel consequuntur facere voluptates quo expedita eveniet harum, voluptatibus neque rerum hic voluptatem ut dolores libero. Ipsam dolor optio earum inventore, sunt deleniti exercitationem, a eveniet repudiandae iste temporibus quibusdam quis?
        <a href="">
            <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                Learn More 
                <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1-translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
            </span>
        </a>
        </motion.p>
        <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check out my project</motion.button>
    </section>
  )
}

export default Banner