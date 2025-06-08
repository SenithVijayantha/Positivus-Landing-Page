import React from 'react'
import { speaker } from '../../assets'
import CTABtn from './CTABtn'

const Hero = () => {
  return (
    <div className='flex flex-col items-start'>
        <h1 className='leading-[3rem] text-4xl font-bold'>Navigating the <br /> digital landscape <br /> for success</h1>
        <img src={speaker} alt="illustration" className='object-contain w-96 h-96'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam inventore repellat iusto amet temporibus mollitia, quis labore, possimus omnis ex libero recusandae saepe. Velit veritatis similique ratione veniam odio.</p>
        <CTABtn></CTABtn>
    </div>
  )
}

export default Hero