import Flex from '../../../src/components/common/Flex'
import Images from '../../../src/components/common/Images'
import connect from '/images/connect.png'
export default function Connect() {
  return (
    <section className=" max-w-container mx-auto ">
       <Flex className=' justify-between items-center'>
          <Images src={connect} alt={connect} className='w-[45%]' />
          <div className=' w-[45%]'>
            <h2 className='w-[75%] leading-tight text-5xl font-bold font-inter flex flex-col'>Connect  <span>your tools, close your tabs</span></h2>
            <p className='mt-4 text-[#696688] text-lg w-[85%]'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
            <button className='mt-6 text-blue underline'>Learn more →</button>
          </div>
         </Flex>
    </section>
  )
}
