import Flex from '../common/Flex'
import Images from '../common/Images'
import banner from '/images/banner.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import short1 from '/images/short1.png'
import short2 from '/images/short2.png'
import short3 from '/images/short3.png'
import Heading from '../common/Heading'
export default function Ideas() {
  return (
    // 2nd part of project
    <section className=" max-w-container mx-auto mt-16 font-inter ">
      <Flex className=" justify-between">
        <div className=' flex flex-col  w-[450px] '>
          <Heading text='Take ideas from better to best' />
          <p className=" text-xl my-3">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
          <input className=' border rounded-full w-full px-10 py-3 hover:bg-blue duration-500 hover:placeholder:text-white outline-none ' type="text" placeholder="Enter your work email" />
          <button className=" bg-blue text-white border rounded-full w-full px-10 py-3 hover:bg-transparent duration-500 hover:text-black my-3">Sign up free →</button>
          <p className=' text-[#9b99af]'>Collaborate with your team within minutes</p>
          <Flex className=" gap-x-8 mt-4 py-3 px-3  bg-[#f5f5f7] rounded-md">
            <div>
              <Flex className=" text-[#FF9D48] text-2xl gap-x-3">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarHalf />
              </Flex>
              <p className=' font-medium'>Based on 5149+ reviews:</p>
            </div>
            <Flex className=' gap-x-5 items-center '>
              <Images src={short1} alt={short1} />
              <Images src={short2} alt={short2} />
              <Images src={short3} alt={short3} />
            </Flex>
          </Flex>
        </div>
        <div>
          <Images src={banner} alt={banner} className='w-[550px]  ' />
        </div>
      </Flex>
    </section>
  )
}
