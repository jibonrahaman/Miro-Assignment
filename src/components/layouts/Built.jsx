 import Flex from '../../../src/components/common/Flex'
 import Heading from '../../../src/components/common/Heading'
 import Images from '../../../src/components/common/Images'
 import built from '/images/built.png'
export default function Built() {
  return (
    <section className=" max-w-container mx-auto  pt-24">
    <Heading text='Built for the way you work'/>
    <Flex className=' justify-between pt-8'>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Brainstorming</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Diagramming</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Meetings & Workshops</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Scrum Events</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Mapping</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Research & Design</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Strategic Planning</button>
    </Flex>
      <Flex className='justify-between pt-5'>
         <div className=' pt-7'>
          <h4 className=' text-lg font-medium'>Brainstorming</h4>
          <p className=' text-lg text-[#504d74] pt-5 pb-8 w-72'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
          <button className=' text-blue font-medium'>Learn more →</button>
         </div>
         <Images src={built} alt={built} />
      </Flex>
    </section>
  )
}
