import Built from "../components/layouts/Built";
import BuiltFor from "../components/layouts/BuiltFor";
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
    <Built/>
    <BuiltFor/>
    <Loved/>
  <Footer/>
    </div>
  )
}
