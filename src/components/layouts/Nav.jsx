import Images from "../common/Images";
import Flex from "../common/Flex";
import miroLogo from '/images/miroLogo.png'
import { FaAngleDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Nav() {
  return (
    <nav className="max-w-container mx-auto pt-5 font-inter font-normal"> 
      <Flex className='items-center justify-between'>
        <Flex className="gap-x-6 items-center">
        <Images src={miroLogo} alt={miroLogo} />
          <Flex className="gap-x-5 mt-2">
            <ul className="flex gap-x-5">
              <Flex className="items-center gap-x-1">
                <li>Product</li>
                <FaAngleDown />
              </Flex>
              <Flex className="items-center gap-x-1">
                <li>Solutions</li>
                <FaAngleDown />
              </Flex>
              <Flex className="items-center gap-x-1">
                <li>Resources</li>
                <FaAngleDown />
              </Flex>
              <li>Enterprise</li>
              <li>Pricing</li>
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
          <button className="px-5 py-1 text-center bg-blue text-white rounded-2xl border hover:bg-transparent hover:text-blue duration-300">Sign up free →</button>
        </Flex>
      </Flex>
    </nav>
  );
}
