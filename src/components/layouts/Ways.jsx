import ways from '/images/ways.png'
import Images from '../common/Images'
// import Flex from '../common/Flex'
export default function Ways() {
  return (
    <section className=" px-28  pt-14">
     <div className=' flex items-end justify-end relative'>
     <Images src={ways} alt={ways}/>
     <div  className=' absolute top-[40%] right-10 text-center'>
     <h3 className=' text-3xl font-bold font-inter'>The Ways We Work</h3>
     <p className=' font-medium my-2'>How has our relationship with work changed?</p>
     <button className=' px-4 py-2  border border-gray-400  bg-blue text-white hover:bg-transparent duration-300  hover:text-black rounded-full'>View the report →</button>
     </div>
     </div>
    </section>
  )
}
