import Built from "../components/layouts/Built.jsx";
import BuiltFor from "../components/layouts/BuiltFor.jsx";
import Collaborate from "../components/layouts/Collaborate.jsx";
import Connect from "../components/layouts/Connect.jsx";
import Ideas from "../components/layouts/Ideas.jsx";
import Just_Icon from "../components/layouts/Just_Icon.jsx";
import Loved from "../components/layouts/Loved.jsx";
import Nav from "../components/layouts/Nav.jsx";
import Ways from "../components/layouts/Ways.jsx";
import Work from "../components/layouts/Work.jsx";
import Footer from "../components/layouts/Footer.jsx";


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
