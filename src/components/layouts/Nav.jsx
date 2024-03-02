import Images from "../common/Images";
import Flex from "../common/Flex";
import miroLogo from '/images/miroLogo.png'
import { FaAngleDown } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Nav() {
  return (
    <section className="max-w-container mx-auto pt-5">
      <Flex className='items-center justify-between'>

        <Flex className=" gap-x-6 items-center">
          <Images src={miroLogo} alt={miroLogo} />
          <Flex className=" gap-x-5">

            <Flex className='items-center'>
              <h4>Product</h4>
              <FaAngleDown />
            </Flex>

            <Flex className='items-center'>
              <h4>Solutions</h4>
              <FaAngleDown />
            </Flex>
            
            <Flex className='items-center'>
              <h4>Resources</h4>
              <FaAngleDown />
            </Flex>
            <h4>Enterprise</h4>
            <h4>Pricing</h4>
          </Flex>

        </Flex>
        <Flex className='items-center gap-x-4'>
          <Flex className='items-center gap-x-1'>
            <TbWorld />
            <h4>EN</h4>
          </Flex>
          <h4>Contact Sales</h4>
          <button>Login</button>
          <button className=" px-5 py-1 text-center bg-blue text-white rounded-2xl">Sign up free →</button>
        </Flex>
      </Flex>
    </section>
  )
}

