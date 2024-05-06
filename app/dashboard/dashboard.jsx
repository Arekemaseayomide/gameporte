import React from 'react'
import Layout from '@/components/layout'
import CardSlider from '@/components/slider'
import Image from "next/image";
import Footer from '@/components/footer'
const Dashboard = () => {
  return (
    
    <Layout>
      <Image src="/banner.svg" alt="Banner" width={139} height={300} className="w-full h-full mx-auto" />
      <div className="py-2 mx-4">
      <h1 className='text-[28px] py-8'>Welcome Back!</h1>
      <CardSlider />
      <h1 className='text-[28px] mt-10'>Cheers to the Weekend</h1>
      <CardSlider />
      </div>
      <div className="block md:hidden">
        <Footer/>
      </div>
    </Layout>
  )
}

export default Dashboard