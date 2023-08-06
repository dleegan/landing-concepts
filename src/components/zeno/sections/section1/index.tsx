import Image from 'next/image'
import React from 'react'
import { AwardType } from '../../types'
import { AwardsList } from '../../mocks'
import Award from '../../components/Award'

export default function Section1() {
  return (
    <div className="flex flex-col w-full text-black px-4 md:px-14 mb-[90px]">
      <button className="bg-yellow-700/10 border border-yellow-700 text-yellow-700 rounded-full py-2 px-6 text-sm md:text-xl self-center md:self-start">
        Marvelous Ceramic Works
      </button>

      <div className="my-6 grid md:grid-cols-4 gap-12 md:gap-4">
        <div className="md:col-span-3">
          <h1 className="text-center md:text-left text-6xl md:text-7xl">
            From Clay to
            <span className="text-yellow-700 font-mono tracking-tighter">
              {' Masterpiece'}
            </span>
            <br />
            Unveiling the Artistry <br />
            of Ceramics
          </h1>
        </div>

        <div className="flex md:flex-col justify-between overflow-scroll -mx-5 md:mx-0">
          {React.Children.toArray(
            AwardsList.map((it: AwardType) => <Award data={it} />)
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 h-[379px]">
        <div className="bg-gray-500 rounded-xl md:col-span-3">
          <div className="absolute">
            <p className="font-light text-4xl m-6">
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
