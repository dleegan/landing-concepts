import Image from 'next/image'
import React from 'react'

type AwardProps = {
  title: String
  content: String
}

const Award = ({ data }: any) => {
  return (
    <div className="flex items-center justify-end w-full">
      <div className="pr-[16px] text-end w-auto">
        <h3 className="text-sm text-neutral-500">{data.title}</h3>
        <h2 className="text-lg font-medium text-yellow-700">{data.content}</h2>
      </div>
      <svg
        width="22"
        height="28"
        viewBox="0 0 22 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.55998 14.5907L11 13.4973L12.4266 14.5773C12.9466 14.964 13.6533 14.4707 13.4666 13.844L12.9066 12.0307L14.5066 10.764C15 10.3907 14.72 9.59066 14.08 9.59066H12.2133L11.64 7.80399C11.44 7.19066 10.5733 7.19066 10.3733 7.80399L9.78665 9.59066H7.90665C7.27998 9.59066 6.99998 10.3907 7.49331 10.7773L9.07998 12.044L8.51998 13.8573C8.33331 14.484 9.03998 14.9773 9.55998 14.5907ZM2.99998 26.404C2.99998 27.3107 3.89331 27.9507 4.75998 27.6707L11 25.5907L17.24 27.6707C18.1066 27.964 19 27.324 19 26.404V17.964C20.6533 16.084 21.6666 13.6307 21.6666 10.924C21.6666 5.03066 16.8933 0.257324 11 0.257324C5.10665 0.257324 0.333313 5.03066 0.333313 10.924C0.333313 13.6307 1.34665 16.084 2.99998 17.964V26.404ZM11 2.92399C15.4133 2.92399 19 6.51066 19 10.924C19 15.3373 15.4133 18.924 11 18.924C6.58665 18.924 2.99998 15.3373 2.99998 10.924C2.99998 6.51066 6.58665 2.92399 11 2.92399Z"
          fill="#171717"
        />
      </svg>
    </div>
  )
}

const awardList: AwardProps[] = [
  {
    title: 'Clay Alchemist Award 2020',
    content: 'Best Sculptural Piece',
  },
  {
    title: 'The Heritage Preservation 2021',
    content: 'Surface Design Excellence',
  },
  {
    title: 'Good Design Japan 2023',
    content: 'Lifetime Achievement',
  },
  {
    title: 'Innovator Award',
    content: 'Master of Glazes Award',
  },
]

export default function Section1() {
  return (
    <div className="flex-col w-full text-black px-5 md:px-10">
      <button className="text-xl bg-yellow-700/10 border border-yellow-700 text-yellow-700 rounded-full py-[8px] px-[24px]   content-center justify-self-center">
        Marvelous Ceramic Works
      </button>

      <div className="md:flex bg-red-100 mt-[24px] justify-between ">
        <h1 className="md:text-7xl w-2/3">
          From Clay to
          <span className="font-bold text-yellow-700"> Masterpiece </span>
          Unveiling the Artistry of Ceramics
        </h1>

        <div className="flex md:flex-col justify-between overflow-scroll">
          {React.Children.toArray(
            awardList.map((it: AwardProps) => <Award data={it} />)
          )}
        </div>
      </div>

      <div className="md:flex justify-between pt-[112px]">
        <div className="flex bg-gray-500 w-3/4 h-80 rounded-xl">
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
        <div className="flex bg-gray-500 w-fit md:ml-6 h-80 rounded-xl">
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
