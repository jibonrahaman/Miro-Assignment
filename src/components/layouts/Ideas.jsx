import Flex from '../common/Flex'
import Images from '../common/Images'
import banner from '/images/banner.jpg'
export default function Ideas() {
  return (
    <section className=" max-w-container mx-auto mt-16 font-inter px-28">
   <Flex className=" justify-between">
       <div className=' flex flex-col gap-y-5 w-[450px] '>
       <h2 className="text-4xl font-bold">Take ideas from better to best</h2>
        <p className=" text-xl ">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
        <input className=' border rounded-full w-full' type="text" placeholder="Enter your work email" />
        <button className=" bg-blue ">Sign up free →</button>
        <p>Collaborate with your team within minutes</p>
       </div>
      <div>
        <Images src={banner} alt={banner} className='w-[500px]  '/>
      </div>
   </Flex>
    </section>
  )
}
