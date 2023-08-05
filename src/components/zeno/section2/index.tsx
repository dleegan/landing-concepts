import Image from 'next/image'
import React from 'react'

export default function Section2() {
  return (
    <div className="flex-col w-full bg-yellow-700	mt-[90px]">
      <div className="md:flex bg-red-100 mt-[24px] justify-between ">
        <button className="text-xl bg-red-200 border border-red-800 rounded-full py-[8px] px-[24px]">
          About us
        </button>

        <h3 className="md:text-7xl w-2/3">
          Where passion and creativity come to life through the art of ceramics
        </h3>
      </div>

      <div className="md:flex justify-between pt-[112px]">
        <Image
          className="flex"
          src="/.svg"
          alt="Next.js Logo"
          width={72}
          height={25}
          priority
        />
        <p>
          Based in Sleman, we are a vibrant and inclusive community of artists,
          enthusiasts, and learners, dedicated to exploring the endless
          possibilities of clay.
        </p>
      </div>
    </div>
  )
}
