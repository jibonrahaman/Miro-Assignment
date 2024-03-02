import Images from "../common/images";
import miroLogo from '/public/images/miroLogo.png'
export default function Nav() {
  return (
    <section className="max-w-container mx-auto">
  <Images src={miroLogo} alt={miroLogo} />
    </section>
  )
}
