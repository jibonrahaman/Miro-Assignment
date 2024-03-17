import Builts from "../layouts/Builts";
import BuilstFor from "../layouts/BuilstFor";
import Collaborate from "../layouts/Collaborate";
import Connect from "../layouts/Connect";
import Ideas from "../layouts/Ideas";
import Just_Icon from "../layouts/Just_Icon";
import Loved from "../layouts/Loved";
import Nav from "../layouts/Nav";
import Ways from "../layouts/Ways";
import Work from "../layouts/Work";
import Footer from "../layouts/Footer";


export default function Home() {
  return (
    <div className=" px-3 md:px-0">
    <Nav/>
    <Ideas />
    <Just_Icon />
    <Collaborate />
    <Work/>
    <Connect/>
    <Ways/>
    <Builts/>
    <BuilstFor/>
    <Loved/>
  <Footer/>
    </div>
  )
}
