'use client';

import React, { useEffect } from 'react'
import Company from './Company/Company'
import CustomerSupport from './CustomerSupport/CustomerSupport'
import Features from './Features/Features'
import Hero from './Hero/Hero'
import Price from './Price/Price'
import SupportTeam from './SupportTeam/SupportTeam'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:"top-bottom",
    });
  },[]);
  
  return (
    <div>
      <Hero />
      <Features />
      <CustomerSupport />
      <Price />
      <SupportTeam />
      <Company />
    </div>
  )
}

export default Home