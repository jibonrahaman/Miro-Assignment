 import Heading from '../common/Heading'
 import Flex from '../common/Flex'
export default function Built() {
  return (
    <section className=" max-w-container mx-auto  pt-24">
    <Heading text='Built for the way you work'/>
    <Flex className=' justify-between pt-8'>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Brainstorming</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Diagramming</button>
    <button className=' px-3 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Meetings & Workshops</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Scrum Events</button>
    <button className=' px-4 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Mapping</button>
    <button className=' px-3 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Research & Design</button>
    <button className=' px-3 py-2 rounded-full bg-transparent hover:bg-gray-300 duration-700 border '>Strategic Planning</button>
    </Flex>
    </section>
  )
}
