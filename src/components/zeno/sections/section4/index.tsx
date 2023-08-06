import Image from 'next/image'
import React from 'react'

export default function Section4() {
  return (
    <div className="flex-col w-full py-[90px] px-[50px] bg-neutral-900">
      <div
        className="w-full h-[475px] rounded-xl bg-slate-500"
        style={{ background: 'rgba(251, 251, 251, 0.2)' }}
      />
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <h1 className="text-white text-5xl">
          Embracing Tranquility : The Art of Ceramics
        </h1>
        <div className="">
          <p
            className=" text-neutral-600 text-xl font-normal"
            style={{ color: 'rgba(255, 255, 255, 0.60)' }}
          >
            Immerse yourself in the serene art of ceramics and discover the
            therapeutic joy of molding clay into beautiful forms. Find
            tranquility as you shape unique creations, capturing moments of
            stillness and cultivating inner peace through the tactile nature of
            clay.
          </p>
          <button className="w-full md:w-auto bg-white rounded-full px-8 py-3 text-neutral-700 text-base mt-11">
            View Curated Product
          </button>
        </div>
      </div>
    </div>
  )
}
