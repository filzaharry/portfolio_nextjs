import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textLight'>
        <a href="">
            <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>reactbd.proton.me</p>
        </a>
        <span className='w-[2px] h-32 bg-hoverColor inline-flex'></span>
    </div>
  )
}

export default RightSide