import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex-col w-full bg-black text-white px-5 md:px-10 py-10">
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

        <div className=" ">
          <div className="flex flex-row  md:justify-end items-center">
            <p>(201) 555-0124</p>
            <div
              className="flex p-2 rounded-full ml-1"
              style={{ background: 'rgba(255, 255, 255, 0.20)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
              >
                <path
                  d="M10.4207 8.33095L9.04957 8.1744C8.72028 8.13661 8.3964 8.24997 8.16428 8.48209L7.17103 9.47534C5.64336 8.69802 4.391 7.45105 3.61367 5.91799L4.61232 4.91934C4.84444 4.68722 4.9578 4.36334 4.92001 4.03405L4.76347 2.67373C4.69869 2.12852 4.23985 1.71826 3.68924 1.71826H2.75537C2.14539 1.71826 1.63796 2.22568 1.67575 2.83567C1.96185 7.44566 5.64876 11.1272 10.2533 11.4133C10.8633 11.4511 11.3708 10.9436 11.3708 10.3336V9.39977C11.3762 8.85456 10.9659 8.39572 10.4207 8.33095Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-row  md:justify-end items-center">
            <p>info@kolonie.com</p>
            <div
              className="flex p-2 rounded-full ml-1"
              style={{ background: 'rgba(255, 255, 255, 0.20)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M10.8408 2.20361H2.20383C1.61004 2.20361 1.1296 2.68944 1.1296 3.28323L1.12421 9.76096C1.12421 10.3548 1.61004 10.8406 2.20383 10.8406H10.8408C11.4346 10.8406 11.9204 10.3548 11.9204 9.76096V3.28323C11.9204 2.68944 11.4346 2.20361 10.8408 2.20361ZM10.6249 4.49781L6.80841 6.88377C6.63568 6.99174 6.40896 6.99174 6.23622 6.88377L2.41975 4.49781C2.2848 4.41144 2.20383 4.26569 2.20383 4.10915C2.20383 3.74747 2.59789 3.53155 2.90558 3.72048L6.52232 5.98229L10.139 3.72048C10.4467 3.53155 10.8408 3.74747 10.8408 4.10915C10.8408 4.26569 10.7598 4.41144 10.6249 4.49781Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
