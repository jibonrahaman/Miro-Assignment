import Collaborate from "../components/layouts/Collaborate";
import Ideas from "../components/layouts/Ideas";
import Just_Icon from "../components/layouts/Just_Icon";
import Nav from "../components/layouts/Nav";
import Work from "../components/layouts/Work";

export default function Home() {
  return (
    <div>
    <Nav/>
    <Ideas />
    <Just_Icon />
    <Collaborate />
    <Work/>
    </div>
  )
}
