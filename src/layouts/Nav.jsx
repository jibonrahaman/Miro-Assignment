import Images from '../common/Images'
import Flex from '../common/Flex'
import miroLogo from '/images/miroLogo.png'
import { FaAngleDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

export default function Nav() {
  const [show,setShow]=useState(false);
  const handleBars = ()=>{
    setShow(true)
  }
  return (
     // 1nd part of project
    <section>
      <nav className="md:px-28 mx-auto pt-3 relative  md:pt-5 font-inter font-normal"> 
      <Flex className='items-center justify-between'>
        <Flex className="md:gap-x-6 gap-x-2 items-center">
        <Images src={miroLogo} alt={miroLogo} className=' w-16 md:w-full' />
          <Flex className="gap-x-2 mt-2">
            <ul className="flex md:gap-x-5 gap-x-2  text-[8px] md:text-base">
              <Flex className="items-center gap-x-1">
              <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-[50%] hover:after:left-0 hover:after:right-0 after:w-0 after:h-1 after:rounded-md after:bg-black/70 duration-700 after:duration-700 hover:after:w-full">Product</li>
                <FaAngleDown />
              </Flex>
              <Flex className="items-center gap-x-1">
                <li  className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-[50%] hover:after:left-0 hover:after:right-0 after:w-0 after:h-1 after:rounded-md after:bg-black/70 duration-700 after:duration-700 hover:after:w-full" >Solutions</li>
                <FaAngleDown />
              </Flex>
              <Flex className="items-center gap-x-1">
                <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-[50%] hover:after:left-0 hover:after:right-0 after:w-0 after:h-1 after:rounded-md after:bg-black/70 duration-700 after:duration-700 hover:after:w-full">Resources</li>
                <FaAngleDown />
              </Flex>
              <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-[50%] hover:after:left-0 hover:after:right-0 after:w-0 after:h-1 after:rounded-md after:bg-black/70 duration-700 after:duration-700 hover:after:w-full">Enterprise</li>
                <li className="relative after:absolute after:content-[''] after:bottom-[-5px] after:left-[50%] hover:after:left-0 hover:after:right-0 after:w-0 after:h-1 after:rounded-md after:bg-black/70 duration-700 after:duration-700 hover:after:w-full">Pricing</li>
            </ul>
          </Flex>
        </Flex>
        
        <div className=' hidden md:block'>
        <Flex className='items-center gap-x-2 mt-2'>
          <Flex className='items-center gap-x-1 '>
            <TbWorld />
            <h4>EN</h4>
          </Flex>
          <h4>Contact Sales</h4>
          <button>Login</button>
          <button className="px-5 py-2 text-center bg-blue text-white rounded-full border hover:bg-transparent hover:text-blue duration-300">Sign up free →</button>
        </Flex>
        </div>
        {/* mobile device */}
         <div className=' md:hidden  block mt-3  text-xl'>
        <button onClick={handleBars}><FaBars/></button>
       {
        
        <div className={` absolute  top-0 ${show ? "rotate-x-0" : "rotate-x-90"}  duration-500  right-0 flex flex-col justify-center items-center bg-gray-600 mt-2 text-white h-[40vh] w-full text-center  `}>
        <button onClick={()=>setShow(false)} className=' absolute top-1 text-2xl text-red-600 right-1'><RxCross1 /></button>
          <Flex className='items-center   gap-x-1 '>
            <TbWorld />
            <h4>EN</h4>
          </Flex>
          <h4 className=' py-4'>Contact Sales</h4>
          <button>Login</button>
          <button className="my-4 px-3 w-56 py-2 text-center bg-blue text-white rounded-full border hover:bg-transparent hover:text-blue duration-300">Sign up free →</button>
        </div>
       }
         </div>
      </Flex>
    </nav>
    <div className=" border mt-8"></div>
    </section>
  );
}
