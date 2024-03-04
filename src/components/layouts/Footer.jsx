import Flex from '../common/Flex'
import { FaTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
  return ( 
   <section className=' bg-[#02033b]'>
  <div className=' py-10 max-w-container mx-auto'> 
  <Flex>
    <div className=' text-white'>
    <h3 className=' text-2xl font-extrabold font-inter'>Scan. Detect. Remove.</h3>
    <Flex className=' py-8 justify-between'>
    <FaTwitter />
    <FaSquareFacebook />
    <IoLogoYoutube />
    </Flex>
    <Flex className=' text-[11px] justify-between'>
        <h6 className=' underline'>Privacy Policy</h6>
        <h6 className=' underline'>Terms of Service</h6>
    </Flex>
    <h6 >Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</h6>
    <h6>Designed & developed by <span className=' underline'>Bigger Picture</span></h6>
    </div>
    <div>
   <h2 className=' font-extrabold text-3xl text-white font-inter relative after:absolute after:content-[""] after:w-28 after:bottom-[-15px] after:left-0 after:h-[3px] after:bg-slate-600'>Miro.</h2>
   <p>iPhone</p>
    </div>
    </Flex>
  </div>
   </section>
  )
}
