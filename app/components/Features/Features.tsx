import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from '@/public/icon1.png'
import Icon2 from '@/public/icon2.png'
import Icon3 from '@/public/icon3.png'
import Icon4 from '@/public/icon4.png'
import Icon5 from '@/public/icon5.png'


const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] '>
      {/* sectionHeading */}
      <SectionHeading headingMini="Ideal solution for you" 
      headingPrimary="Explore Ultimate features"/>
      <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Email Subscription" image={Icon1.src}/>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-dely='200' 
        data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={Icon2.src}/>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-dely='400' 
        data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={Icon3.src}/>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-dely='600' 
        data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={Icon4.src}/>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-dely='800' 
        data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={Icon5.src}/>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-dely='1000' 
        data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={Icon2.src}/>
        </div>

      </div>
    </div>
  )
}

export default Features