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
    <div className="flex-col w-full py-[90px]">
      <div className="">
        <button>Our Services</button>
        <h1 className="text-yellow-700 text-5xl">Browse Categories</h1>
        <p className=" text-neutral-600 text-2xl font-normal">
          Embark on a Journey of Inspiration: Explore the Rich Tapestry of
          Ceramic Craftsmanship
        </p>

        <div className="grid grid-cols-4 gap-4">
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </div>
    </div>
  )
}
