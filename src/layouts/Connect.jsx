import Flex from '../common/Flex'
import Images from '../common/Images'
import connect from '/images/connect.png'
export default function Connect() {
  return (
    <section className=" max-w-container mx-auto pt-12 md:pt-0">
       <Flex className=' justify-between flex-col md:flex-row gap-y-5 items-center'>
          <Images src={connect} alt={connect} className='md:w-[45%]' />
          <div className=' md:w-[45%]'>
            <h2 className='md:w-[75%] leading-tight text-2xl md:text-5xl font-bold font-inter flex flex-col'>Connect  <span>your tools, close your tabs</span></h2>
            <p className='mt-4 text-[#696688] text-lg  md:w-[85%]'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
            <button className='mt-6 text-blue underline'>Learn more →</button>
          </div>
         </Flex>
    </section>
  )
}
