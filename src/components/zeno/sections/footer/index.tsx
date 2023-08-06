import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex-col w-full bg-black text-white px-5 md:px-10 mb-[90px]">
      <div className="my-[24px] justify-between grid md:grid-cols-3 gap-14 md:gap-0">
        <div>
          <Image
            className=""
            src="/zeno/zeno-logo-white.svg"
            alt="Next.js Logo"
            width={72}
            height={25}
            priority
          />
          <p>
            Harmony in Clay:
            <br /> A Haven of Calm Creativity
          </p>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <h3>About Us</h3>
            <a>Our Story</a>
            <a>Company</a>
            <a>Career Growth</a>
            <a>Awarded</a>
          </div>
          <div className="flex flex-col">
            <h3>Product</h3>
            <a>Clay Art</a>
            <a>Handcraft</a>
            <a>Limited</a>
            <a>Home Decor</a>
          </div>
          <div className="flex flex-col">
            <h3>Contact Us</h3>
            <a> Facebook</a>
            <a> Twitter</a>
            <a> LinkedIn</a>
            <a> Website</a>
          </div>
        </div>

        <div>
          <Image
            className=""
            src="/zeno/zeno-logo-white.svg"
            alt="Next.js Logo"
            width={72}
            height={25}
            priority
          />
          <p>
            Harmony in Clay:
            <br /> A Haven of Calm Creativity
          </p>
        </div>
      </div>
    </div>
  )
}
