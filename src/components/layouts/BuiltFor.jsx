import Heading from '../common/Heading'
import Flex from '../common/Flex'
import Images from '../common/Images'
import builtFor from '/images/builtFor.jpg'
import { MdCheck } from 'react-icons/md';
import d from '/images/d.png'
import x from '/images/x.png'
import f from '/images/f.png'
import n from '/images/n.png'

export default function BuiltFor() {
  return (
    <section className=" max-w-container mx-auto  pt-24">
    <Heading text='Built for all kinds of teams'/>
    <Flex className=' justify-between pt-8'>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>UX & Design</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Marketing</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Product Management</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Engineering</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Consultants</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Agile Coaches</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Sales</button>
    </Flex>

      <Flex className='justify-between pt-5'>
         <div className=' pt-10'>
         <Flex className=' items-center  pb-4 gap-x-2'>
            <MdCheck/>
         <p className=' text-lg text-[#504d74] '>Build low-fi wireframes</p>
         </Flex>
         <Flex className=' items-center  pb-4 gap-x-2'>
            <MdCheck/>
         <p className=' text-lg text-[#504d74] '>Involve stakeholders in the design process</p>
         </Flex>
          <Flex className=' items-center  pb-4 gap-x-2'>
            <MdCheck/>
         <p className=' text-lg text-[#504d74] '>Run engaging design workshops</p>
         </Flex>
          <button className=' text-blue font-medium pb-8'>Learn more →</button>
          <h5 className='text-[#504d74] '>Integrate your favorite tools</h5>
          <Flex className='gap-x-4 pt-5'>
           <Images src={d} alt={d}/>
           <Images src={x} alt={x}/>
           <Images src={f} alt={f}/>
           <Images src={n} alt={n}/>
          
          </Flex>
         </div>
         <Images src={builtFor} alt={builtFor} className='w-3/5'/>
      </Flex>
    </section>
  )
}
