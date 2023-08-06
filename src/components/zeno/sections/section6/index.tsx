import Image from 'next/image'
import React from 'react'

const CapsuleItem = () => {
  return (
    <div className="grid md:grid-cols-2 gap h-auto bg-black rounded-xl mt-5">
      <div
        className="flex w-full h-full"
        style={{ background: 'rgba(255, 255, 255, 0.20)' }}
      />
      <div className="bg-yellow-700 p-20">
        <h4 className="text-white text-xl">Exploring the World of Ceramics</h4>
        <p className="text-white pt-2">
          Delve into the calming world of ceramics, where mindful creation
          breathes serenity into each piece.
        </p>
      </div>
    </div>
  )
}

export default function Section6() {
  return (
    <div className="flex-col w-full py-[90px] px-[50px]">
      <div className="mt-16">
        <CapsuleItem />
        <CapsuleItem />
      </div>

      <div
        className="w-[1332px] h-[475px] rounded-xl bg-slate-500 mt-20"
        style={{ background: 'rgba(0, 0, 0, 0.20)' }}
      />
    </div>
  )
}
