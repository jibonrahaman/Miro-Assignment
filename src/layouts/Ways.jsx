import ways from '/images/ways.png'
import Images from '../common/Images'
export default function Ways() {
  return (
    <section className=" md:px-28  pt-14">
     <div className=' flex items-end justify-end relative'>
     <Images src={ways} alt={ways} className=' '/>
     <div  className=' absolute top-10 md:top-[40%] right-[-30px] md:right-10 text-center'>
     <h3 className=' md:text-3xl font-bold font-inter'>The Ways We Work</h3>
     <p className=' md:font-medium text-[8px] md:text-base w-64 md:w-full my-2'>How has our relationship with work changed?</p>
     <button className=' px-4 py-2  border border-gray-400  bg-blue text-white hover:bg-transparent duration-300  hover:text-black rounded-full'>View the report →</button>
     </div>
     </div>
    </section>
  )
}
