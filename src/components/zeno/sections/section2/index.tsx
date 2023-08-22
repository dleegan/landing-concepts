import { useMediaQuery } from '@/components/zeno/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'

export default function Section2() {
  return (
    <div className="md:grid grid-cols-3 gap-10 w-full bg-yellow-700 py-[40px] md:py-[90px] px-4 md:px-14">
      <div>
        <button
          className="text-base text-white rounded-full py-[8px] px-[24px]"
          style={{ background: 'rgba(255, 255, 255, 0.15)' }}
        >
          About Us
        </button>
      </div>

      <div className="md:col-span-2 justify-between">
        <h3
          className="text-5xl md:text-[56px] text-white"
          style={{ fontWeight: 500, letterSpacing: -4.48 }}
        >
          Where passion and creativity come to life through the art of ceramics
        </h3>

        <div className="md:grid grid-flow-row grid-cols-2 mt-6 md:mt-10 ">
          <div
            className="w-full md:w-[408px] h-[372px] rounded-xl"
            style={{ background: '#BD832F' }}
          >
            <Image
              className="flex "
              src="/.svg"
              alt="Next.js Logo"
              width={72}
              height={25}
              priority
            />
          </div>
          <p
            className="mt-4 md:mt-0 text-white text-base md:text-2xl"
            style={{
              fontWeight: '400',
              lineHeight: 'normal',
              letterSpacing: '-1.92px',
            }}
          >
            Based in Sleman, we are a vibrant and inclusive community of
            artists, enthusiasts, and learners, dedicated to exploring the
            endless possibilities of clay.
          </p>
        </div>
      </div>
    </div>
  )
}
