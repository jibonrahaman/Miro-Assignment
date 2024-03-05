import CollaborateSvg from "../common/CollaborateSvg";
import Flex from '../common/Flex'
import Heading from '../common/Heading'

export default function Collaborate() {
  return (
         // 4nd part of project
   <section className=" max-w-container mx-auto  pt-24">
      <div className=" flex text-center  justify-center relative" >
     <Heading className='w-2/4'  text='Collaborate without constraints'/>
      <CollaborateSvg className=" absolute top-[-71px] right-64 "/>
      </div>
       <Flex className=" justify-between pt-10">
        <div className=" w-80">
     <h3 className=" font-bold text-2xl font-inter">Free forever</h3>
      <p className=" text-lg text-[#696688] mt-4">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our </p>
<p className="text-lg text-[#696688]"><span className=" text-blue">pricing plans</span> for more features.</p>
     </div>
     <div className=" w-80">
     <h3 className=" font-bold text-2xl font-inter">Easy integrations</h3>
      <p className=" text-lg text-[#696688] mt-4 ">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <span className=" text-blue">Marketplace</span> . </p>
     </div>
     <div className=" w-80">
     <h3 className=" font-bold text-2xl font-inter">Security first</h3>
      <p className=" text-lg text-[#696688] mt-4  ">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
at our  <span className=" text-blue">Trust Center</span> . </p>
     </div>
          </Flex>
        <div className=" flex justify-center  my-8 "> 
             <button className=" px-8 py-3 bg-blue rounded-full border hover:bg-transparent hover:text-black duration-500  font-medium  text-white">Sign up free →</button>
        </div>
   </section>
  )
}
