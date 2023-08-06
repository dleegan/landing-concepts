import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-center mb-10 md:mb-24 px-4 md:px-14">
      <button className="w-fit p-2 border border-yellow-700 rounded-full order-last md:order-none justify-self-end md:justify-self-start">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
            fill="#171717"
          />
        </svg>
      </button>

      <div className="md:flex justify-center">
        <Image
          className=""
          src="/zeno/zeno-logo.svg"
          alt="Next.js Logo"
          width={72}
          height={25}
          priority
        />
      </div>

      <button className="w-fit text-white bg-yellow-700  py-3 px-8 rounded-full hidden md:block justify-self-end">
        <h2>Contact Us</h2>
      </button>
    </div>
  )
}
