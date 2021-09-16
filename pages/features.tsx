import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Features(props) {
  return <div className="text-offWhite bg-warmGray-800">
    <section className="relative flex flex-col items-center justify-center h-screen px-4 space-y-2">
      <h1 className="font-serif text-2xl text-center md:text-4xl">explore your psyche, regain sovereignity</h1>
      <p className="text-lg font-thin text-center md:text-2xl">intentional products for objective introspection</p>
      <FontAwesomeIcon className="absolute bottom-0 mx-auto" size="3x" icon={faCaretDown}  />
      </section>
      
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl">compassionately designed for flexibility and structure</h2>
      <p className="text-lg font-thin md:text-2xl">the veritas journal is a modular, semi-customizable journal that includes an instructional booklet, guided prompts and reusable templates that covers themes of mindfulness, introspection, personal development and productivity.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl">a hybrid solution, fit for the modern age</h2>
      <p className="text-lg font-thin md:text-2xl">archive key pages through our companion app, inscription. reflect on key learnings through spaced-repetition and expand your library through expanded templates, ebooks, and video courses.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl">functional luxury, made accessible</h2>
      <p className="text-lg font-thin md:text-2xl">our journals also come bundled as the process toolkit, made suitable for a variety of budgets. purchase one for yourself or share it with someone special.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl">join the umbra collective</h2>
      <p className="text-lg font-thin md:text-2xl">unlock downloadable access to the template library, beta features and updates, exclusive content, private community servers, events and more.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl">pathos: a compendium of duality</h2>
      <p className="text-lg font-thin md:text-2xl">the essential guide, covering recommended resources, how to set up your journal, guidelines for the schematics, processes, and a recommended flow.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl"> the archives: module one</h2>
      <p className="text-lg font-thin md:text-2xl">at present, the archive totals to about 150+ templates with varying themes. while you could theoretically purchase the entire archive, we have also curated three different collections as alternative options.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto space-y-4 h-72 md:h-96">
      <h2 className="w-full font-serif text-2xl text-left md:text-4xl">sovereign of the self</h2>
      <p className="text-lg font-thin md:text-2xl">a series of essays describing the overall theory, various ideologies and philosophies that have influenced the creation of the pathos method.</p>
    </section>
    <section className="relative flex flex-col items-center justify-center h-screen max-w-screen-lg px-4 mx-auto">
      <h2 className="mb-2 font-serif text-3xl md:text-4xl">pre-book your copy</h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="apikey" value="9c1fa46e-ce14-468b-b9c2-7c8d5e600b30"/>
        <input type="hidden" name="ccemail" value="hannah@pathos.asia"/>
        <input type="hidden" name="subject" value="New Submission from Web3Forms" />
        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
        <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
        <input type="checkbox" name="botcheck" id="" className="hidden" />
        <label htmlFor="name">Name<br />
        <input className="w-full p-2 hover:drop-shadow filter active:ring-4 active:drop-shadow-xl active:ring-pathBlueker" placeholder="John Doe" type="text" name="name" /></label><br />
        <label htmlFor="email">Email <br />
          <input className="w-full p-2 hover:drop-shadow filter active:ring-4 active:drop-shadow-xl active:ring-pathBlueker" placeholder="john@email.com" type="email" name="email" /></label><br />
        <fieldset className="space-y-2">
          <legend>Which products are you interested in?</legend>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="veritas-journal"/><label htmlFor="veritas-journal">veritas journal</label></div>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="inscription-app"/><label htmlFor="inscription-app">inscription app</label></div>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="process-toolkit"/><label htmlFor="process-toolkit">process toolkit</label></div>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="umbra-collective"/><label htmlFor="umbra-collective">umbra collective</label></div>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="pathos-compendium"/><label htmlFor="pathos-compendium">pathos: a compendium of duality</label></div>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="archive-one"/><label htmlFor="archive-one">the archives: module one</label></div>
          <div><input className="mb-2 mr-2" type="checkbox" name="product" value="sovereign"/><label htmlFor="sovereign">sovereign of the self</label></div>
        </fieldset>
        <label htmlFor="message">Anything else you&apos;d like to share? <br />
          <input className="w-full p-2 hover:drop-shadow filter active:ring-4 active:drop-shadow-xl active:ring-pathBlueker" type="textarea" placeholder="I'd like a cookie" name="message" /></label><br />
        <button className="w-full transition duration-500 btn bg-gradient-to-br from-pathBlue to-pathBlueker hover:from-pathBlueker hover:to-pathBluekest" type="submit">Submit</button>
      </form>
    </section>
  </div>
}
