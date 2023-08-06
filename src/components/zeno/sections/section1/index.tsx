import Image from 'next/image'
import React from 'react'
import { AwardType } from '../../types'
import { AwardsList } from '../../mocks'
import Award from '../../components/Award'

export default function Section1() {
  return (
    <div className="flex-col w-full text-black px-5 md:px-10 mb-[90px]">
      <button className="text-xl bg-yellow-700/10 border border-yellow-700 text-yellow-700 rounded-full py-[8px] px-[24px]   content-center justify-self-center">
        Marvelous Ceramic Works
      </button>

      <div className="md:flex bg-red-100 my-[24px] justify-between ">
        <h1 className="md:text-7xl w-2/3">
          From Clay to
          <span className="font-bold text-yellow-700"> Masterpiece </span>
          Unveiling the Artistry of Ceramics
        </h1>

        <div className="flex md:flex-col justify-between overflow-scroll">
          {React.Children.toArray(
            AwardsList.map((it: AwardType) => <Award data={it} />)
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 h-60 bg-black">
        <div className="bg-gray-500 rounded-xl col-span-3">
          <Image
            className="flex"
            src="/.svg"
            alt="Next.js Logo"
            width={72}
            height={25}
            priority
          />
          <div className="absolute">
            <p className="font-light text-2xl m-6">
              See what we Zeno can do for you
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.395 7.60506C12.395 8.35173 12.995 8.9384 13.7283 8.9384H21.1817L6.66167 23.4584C6.14167 23.9784 6.14167 24.8184 6.66167 25.3384C7.18167 25.8584 8.02167 25.8584 8.54167 25.3384L23.0617 10.8184V18.2717C23.0617 19.0051 23.6617 19.6051 24.395 19.6051C25.1283 19.6051 25.7283 19.0051 25.7283 18.2717V7.60506C25.7283 6.87173 25.1283 6.27173 24.395 6.27173H13.7283C12.995 6.27173 12.395 6.87173 12.395 7.60506Z"
                    fill="white"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className=" bg-gray-500 rounded-xl">
          <Image
            className="  bg-gray-500"
            src="/.svg"
            alt="Next.js Logo"
            width={72}
            height={25}
            priority
          />
        </div>
      </div>
    </div>
  )
}
