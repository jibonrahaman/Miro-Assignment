import Flex from '../common/Flex'
import Images from '../common/Images'
import work from '/images/work.jpg'
import Heading from '../common/Heading'
export default function Work() {
  return (
    <section className=" max-w-container px-3 md:px-0 mx-auto ">
      <Flex className=" w-full justify-between items-center">
       <div className=' md:w-[45%]'>
        <Heading  text='Work together, wherever you work'/>
      <p className='text-[#696688] text-lg md:text-lg md:w-5/6 mt-5'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
      <button className='mt-6 text-blue underline '>Learn more →</button>
       </div>
       <div className=' hidden md:block'>
        <Images src={work} alt={work}/>
       </div>
      </Flex>
    </section>
  )
}
