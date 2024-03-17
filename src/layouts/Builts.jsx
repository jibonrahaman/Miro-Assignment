 import Flex from '../common/Flex'
 import Heading from '../common/Heading'
 import Images from '../common/Images'
 import built from '/images/built.png'
export default function Builts() {
  return (
    <section className=" max-w-container px-3 md:px-0 mx-auto  pt-24">
    <Heading text='Built for the way you work'/>
    <Flex className=' md:justify-between gap-x-5 justify-center gap-y-3 flex-wrap pt-8'>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Brainstorming</button>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Diagramming</button>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Meetings & Workshops</button>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Scrum Events</button>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Mapping</button>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Research & Design</button>
    <button className=' px-2 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Strategic Planning</button>
    </Flex>
      <Flex className='justify-between flex-wrap pt-5'>
         <div className=' pt-7'>
          <h4 className=' text-lg font-medium'>Brainstorming</h4>
          <p className=' text-lg text-[#504d74] py-3 md:pt-5 md:pb-8 md:w-72'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
          <button className=' text-blue font-medium'>Learn more →</button>
         </div>
         <Images src={built} alt={built} />
      </Flex>
    </section>
  )
}
