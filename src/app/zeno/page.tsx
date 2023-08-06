import Image from 'next/image'
import Section1 from '@/components/zeno/sections/section1'
import Section2 from '@/components/zeno/sections/section2'
import Section3 from '@/components/zeno/sections/section3'
import Section4 from '@/components/zeno/sections/section4'
import Section5 from '@/components/zeno/sections/section5'
import Section6 from '@/components/zeno/sections/section6'
import Footer from '@/components/zeno/sections/footer'
import Header from '@/components/zeno/sections/header'

export default function Zeno() {
  return (
    <main>
      <div className="bg-white text-black py-10">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </main>
  )
}
