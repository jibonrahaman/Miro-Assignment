import Heading from '../common/Heading'
import Flex from '../common/Flex'
import Images from '../common/Images'
import built from '/images/built.png'
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
         <div className=' pt-7'>
         <Flex>
         <p className=' text-lg text-[#504d74] pt-5 pb-8 '>Build low-fi wireframes</p>
         </Flex>
          <button className=' text-blue font-medium'>Learn more →</button>
         </div>
         <Images src={built} alt={built} />
      </Flex>
    </section>
  )
}
