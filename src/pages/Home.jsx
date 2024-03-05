import Builts from "../components/layouts/Builts";
import BuilstFor from "../components/layouts/BuilstFor";
import Collaborate from "../components/layouts/Collaborate";
import Connect from "../components/layouts/Connect";
import Ideas from "../components/layouts/Ideas";
import Just_Icon from "../components/layouts/Just_Icon";
import Loved from "../components/layouts/Loved";
import Nav from "../components/layouts/Nav";
import Ways from "../components/layouts/Ways";
import Work from "../components/layouts/Work";
import Footer from "../components/layouts/Footer";


export default function Home() {
  return (
    <div>
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
