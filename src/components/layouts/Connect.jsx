import Flex from '../common/Flex'
import Images from '../common/Images'
import connect from '/images/connect.jpg'
export default function Connect() {
  return (
    <section className=" max-w-container mx-auto px-28">
       <Flex>
          <Images src={connect} alt={connect} />
         </Flex>
    </section>
  )
}
