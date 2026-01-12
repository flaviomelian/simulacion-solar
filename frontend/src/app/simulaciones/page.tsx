'use client'
import React, { useState } from 'react'
import InstallationSim from '../component/InstallationSim'
import SolarSim from '../component/SolarSim'

const Page = () => {
  const [activePanels, setActivePanels] = useState<number>(1)

  return (
    <div className="flex flex-row justify bg-gray-950 text-white p-10 rounded-2xl">
      <SolarSim panels={activePanels} />
      <div className="w-px h-189 bg-gray-400 mx-15" />
      <InstallationSim
        setActivePanels={setActivePanels}
      />
    </div>
  )
}

export default Page
