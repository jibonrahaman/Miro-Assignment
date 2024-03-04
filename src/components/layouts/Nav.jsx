import Images from "../common/Images";
import Flex from "../common/Flex";
import miroLogo from '/images/miroLogo.png'
import { FaAngleDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Nav() {
  return (
     // 1nd part of project
    <section>
      <nav className="px-28 mx-auto pt-5 font-inter font-normal"> 
      <Flex className='items-center justify-between'>
        <Flex className="gap-x-6 items-center">
        <Images src={miroLogo} alt={miroLogo} />
          <Flex className="gap-x-5 mt-2">
            <ul className="flex gap-x-5">
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
        <Flex className='items-center gap-x-4 mt-2'>
          <Flex className='items-center gap-x-1'>
            <TbWorld />
            <h4>EN</h4>
          </Flex>
          <h4>Contact Sales</h4>
          <button>Login</button>
          <button className="px-5 py-2 text-center bg-blue text-white rounded-full border hover:bg-transparent hover:text-blue duration-300">Sign up free →</button>
        </Flex>
      </Flex>
    </nav>
    <div className=" border mt-8"></div>
    </section>
  );
}
