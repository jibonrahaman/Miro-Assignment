import Flex from '../common/Flex'
import { FaTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";

export default function Footer() {
  return ( 
   <section className=' bg-[#02033b]'>
  <div className=' py-10 max-w-container mx-auto'> 
  <Flex className=' justify-between w-full'>
    <div className=' text-white'>
    <h3 className=' text-2xl font-extrabold font-inter'>Scan. Detect. Remove.</h3>
    <Flex className=' py-4 gap-x-12 text-3xl'>
    <FaTwitter />
    <FaSquareFacebook />
    <IoLogoYoutube />
    </Flex>
    <Flex className=' text-[11px]  gap-x-8 py-4'>
        <h6 className=' underline'>Privacy Policy</h6>
        <h6 className=' underline'>Terms of Service</h6>
    </Flex>
    <h6 className=' w-96 pb-3'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</h6>
    <h6>Designed & developed by <span className=' underline'>Bigger Picture</span></h6>
    </div>

    <div>
   <h2 className=' font-extrabold text-3xl text-white font-inter relative after:absolute after:content-[""] after:w-40 after:bottom-[-15px] after:left-0 after:h-[2px] after:bg-slate-600'>Miro.</h2>
     <div className=' text-[#ffc247] pt-10 pl-10 font-extrabold  font-inter'>
     <p className=' relative after:absolute after:content-[" "] after:top-3 after:left-[-40px] after:w-6 after:h-[2px] after:bg-[#ffc247]'>iPhone</p> 
     <p className=' relative after:absolute after:content-[" "] after:top-3 after:left-[-40px] after:w-6 after:h-[2px] after:bg-[#ffc247] py-2'>Android</p> 
       <p className=' relative after:absolute after:content-[" "] after:top-3 after:left-[-40px] after:w-6 after:h-[2px] after:bg-[#ffc247]'>Help</p>
         <p className=' relative after:absolute after:content-[" "] py-2 after:top-3 after:left-[-40px] after:w-6 after:h-[2px] after:bg-[#ffc247]'>About</p> 
          <p className=' relative after:absolute after:content-[" "] after:top-3 after:left-[-40px] after:w-6 after:h-[2px] after:bg-[#ffc247]'>Insights</p>  
     </div>
    </div>

    <div className=' bg-[#ffc247] w-[30%] p-8 rounded-3xl'>
      <h3 className=' font-extrabold text-2xl font-inter'>Sign up to our newsletter</h3>
      <p className=' font-inter text-sm py-4'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
      <Flex>
        <input type="text" placeholder='Email address' className='px-3 py-1 rounded-s-full outline-none' />
        <button className='px-3 py-2 rounded-e-full text-white bg-[#02033b]'>submit</button>
      </Flex>
    </div>
    </Flex>
    <p className=' font-inter  text-gray-300 w-4/6 pt-10'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
  </div>
   </section>
  )
}
