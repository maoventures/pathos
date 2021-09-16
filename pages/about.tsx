import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function About(props){
  return <div className="relative flex flex-col items-center justify-center text-offWhite bg-warmGray-800">
    <section className="relative flex flex-col items-center justify-center w-11/12 h-screen space-y-4">
      <h1 className="w-full text-4xl text-left md:text-5xl">about pathos</h1>
      <p className="md:text-3xl texl-lg">to be human is to live with a measure of inner conflict. this is as true within, as it is without.<br /><br />
        with the surrounding units of society, and the extended human family we belong to, it is quite fitting that our journey through the labyrinth of suffering must begin with the choices we make - holding ourselves accountable to a genuine intention to heal;<br /><br/></p>
      <FontAwesomeIcon className="absolute bottom-0 text-center" size="3x" icon={faCaretDown}  />
      </section>
    <section className="relative flex flex-col items-center justify-center w-11/12 h-screen space-y-4">
      <p className="md:text-3xl texl-xl">by being truly introspective, purposeful and objective about ones sense of self. knowing ones true nature allows us to name it.</p>
      <p className="w-full text-xl text-left md:text-3xl">and by naming it - we regain a sense of sovereignty over our minds and beings again.</p>
      <FontAwesomeIcon className="absolute bottom-0 text-center" size="3x" icon={faCaretDown}  />
      </section>
    <section className="relative flex flex-col items-center justify-center w-11/12 h-screen space-y-4">
      <h2 className="w-full text-xl text-left md:text-4xl">what do these have to do with pathos?</h2>
      <p className="md:text-3xl texl-xl"> in essence, you are reclaiming sovereignty of the self, and these templates are your schematics to healing.<br /><br />pathos represents the first time you set foot on the path, realizing that there is light at the end of the unknown.</p>
      <FontAwesomeIcon className="absolute bottom-0 text-center text-offWhite" size="3x" icon={faCaretDown}  />
      </section>
    <section className="relative flex flex-col items-center justify-center w-11/12 h-screen space-y-4">
      <h2 className="w-full text-xl italic text-left md:text-4xl">&ldquo;designed to be semi-customisable, from the selection of modules to the the order chosen to complete them. &rdquo;</h2>
      <p className="md:text-3xl texl-xl">pathos focuses heavily on self-compassion, ritualised habit formation, and the examination of potential ‘schemas’ <sub>(or lenses)</sub> that taint our worldview, essentially warping it</p>
      <FontAwesomeIcon className="absolute bottom-0 text-center text-offWhite" size="3x" icon={faCaretDown}  />
      </section>
    <section className="relative flex flex-col items-center justify-center w-11/12 h-screen space-y-4">
      <h2 className="w-full text-xl text-left md:text-4xl">by identifying our passions and naming our sufferings - we can form a sustainable, cohesive plan to heal.</h2>
      <div className="absolute bottom-0 flex items-center justify-center space-x-4 text-center text-offWhite">
        {/* <FontAwesomeIcon size="3x" icon={faCaretLeft} />
        <Link href="/menu"><a className="inline text-xl md:text-3xl hover:underline hover:text-blueGray-300">Return?</a></Link> */}
      </div>
      </section>
  </div>
}
