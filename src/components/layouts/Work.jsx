import Flex from '../common/Flex'
import Images from '../common/Images'
import work from '/images/work.jpg'
export default function Work() {
  return (
    <section className=" max-w-container mx-auto px-28">
      <Flex className=" w-full justify-between items-center">
       <div className=' w-[45%]'>
        <h2 className=' font-inter text-5xl font-bold'>Work together, wherever you work</h2>
      <p className='text-[#696688] text-lg w-96 mt-5'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
      <button className='mt-6 text-blue underline'>Learn more →</button>
       </div>
       <div className=''>
        <Images src={work} alt={work}/>
       </div>
      </Flex>
    </section>
  )
}
