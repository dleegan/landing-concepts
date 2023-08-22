import Image from 'next/image'
import React from 'react'

const CarouselItem = () => {
  return (
    <div>
      <div className="bg-black/30 w-80 h-96 rounded-xl" />
      <div className="flex flex-row">
        <p>01:&nbsp;</p>
        <p>
          Kitchenware <br />
          <span className="text-neutral-500">Enchanting Earth Mug</span>
        </p>
      </div>
    </div>
  )
}

export default function Section3() {
  return (
    <div className="w-full py-[40px] md:py-[90px] px-4 md:px-14">
      <div className="md:grid grid-cols-3 gap-10">
        <div>
          <button
            className="text-yellow-700 text-xl rounded-full"
            style={{
              padding: '8px 24px',
              background: 'rgba(161, 98, 7, 0.15)',
            }}
          >
            Our Services
          </button>
        </div>
        <div className="col-span-2">
          <h1 className="text-yellow-700 text-5xl">Browse Categories</h1>
        </div>
      </div>

      <div className="md:grid grid-cols-3 gap-10 mt-4">
        <p className=" text-neutral-600 text-2xl font-normal">
          Embark on a Journey of Inspiration: Explore the Rich Tapestry of
          Ceramic Craftsmanship
        </p>
        <div className="col-span-2 grid grid-cols-3 gap-4 overflow-scroll">
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </div>
    </div>
  )
}
