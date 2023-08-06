import Image from 'next/image'
import React from 'react'

const CarouselItem = () => {
  return (
    <div>
      <div
        className="flex h-[502px] rounded-xl p-3"
        style={{ background: '#D7D1BB' }}
      >
        <span className="bg-yellow-700 text-white text-lg px-4 py-2 rounded-lg self-end">
          $25.99
        </span>
      </div>
      <div className="flex flex-row">
        <p className="p-3">
          Kitchenware <br />
          <span className="text-neutral-500">Enchanting Earth Mug</span>
        </p>
      </div>
    </div>
  )
}

export default function Section5() {
  return (
    <div className="flex-col w-full py-[90px] px-[50px] bg-amber-50">
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        <button
          className="bg-white rounded-full px-8 py-3 text-yellow-700 text-base mt-11"
          style={{ background: 'rgba(161, 98, 7, 0.15)' }}
        >
          Top Product
        </button>

        <h1 className="text-yellow-700 text-5xl">
          Discovering Serenity through Ceramics
        </h1>

        <button className="w-auto bg-yellow-700  rounded-full px-8 py-3 text-white text-base mt-11">
          View Curated Product
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
    </div>
  )
}
