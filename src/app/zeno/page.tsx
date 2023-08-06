import Image from 'next/image'
import Section1 from '@/components/zeno/sections/section1'
import Section2 from '@/components/zeno/sections/section2'
import Section3 from '@/components/zeno/sections/section3'
import Section4 from '@/components/zeno/sections/section4'
import Section5 from '@/components/zeno/sections/section5'
import Section6 from '@/components/zeno/sections/section6'
import Footer from '@/components/zeno/sections/footer'

export default function Zeno() {
  return (
    <main className="flex flex-col bg-white text-black">
      <div className="flex w-full justify-between items-center pb-[107px] px-5 md:px-10 mt-10">
        <button className="p-[10px] border border-yellow-700 rounded-full">
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
        <Image
          className=""
          src="/zeno/zeno-logo.svg"
          alt="Next.js Logo"
          width={72}
          height={25}
          priority
        />
        <button className=" text-white bg-yellow-700 py-[12px] px-[32px] rounded-full">
          <h2>Contact Us</h2>
        </button>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </main>
  )
}
