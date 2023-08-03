
import {TbBrandGithub, TbBrandGithubFilled} from 'react-icons/tb';
import {SlSocialYoutube} from 'react-icons/sl';
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from 'react-icons/sl';

import React from 'react'

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <a href="">
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub />
            </span>
        </a>
        <a href="">
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub />
            </span>
        </a>
        <a href="">
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub />
            </span>
        </a>
        <a href="">
            <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                <TbBrandGithub />
            </span>
        </a>
    </div>
  )
}

export default Footer