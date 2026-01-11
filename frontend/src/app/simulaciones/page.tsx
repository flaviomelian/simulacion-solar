'use client'
import React from 'react'
import InstallationSim from '../component/InstallationSim'
import SolarSim from '../component/SolarSim'

const page = () => {
  return (
    <div className='flex flex-row justify bg-gray-950 text-white p-10'>
      <SolarSim />
      <div className="w-px h-189 bg-gray-400 mx-4" />
      <InstallationSim />
    </div>
  )
}

export default page
