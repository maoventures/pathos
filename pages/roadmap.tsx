import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Roadmap(props) {
  return <div className="bg-warmGray-800 text-offWhite">
    <section className="relative flex flex-col items-center justify-center h-screen p-4 mx-auto space-y-4 lg:max-w-screen-lg">
      <h1 className="w-full text-4xl text-left md:text-5xl">our way from here</h1>
      <p className="text-lg md:text-xl">taking inspiration from philosophy, the latest research on mental models and current practices encouraged by cognitive behaviour therapy - pathos itself is the first part of establishing that path to self-discovery, acceptance and alignment.</p>
      <div className="absolute bottom-0 flex flex-col items-center justify-center py-2"><p className="text-base text-center text-blueGray-300">Continue below to see our current roadmap</p>
      <FontAwesomeIcon className="text-center text-blueGray-300" size="3x" icon={faCaretDown}  /></div>
      </section>
      <section className="relative flex flex-col items-center justify-center p-4 space-y-4">
        <h2 className="text-3xl">our road so far</h2>
        <div className="flex flex-col space-y-4 md:justify-center md:items-center lg:flex-row">
          <div className="px-2 py-3 mx-4 border w-80 border-offWhite">
          <h3 className="mb-2 text-3xl text-center">To Do</h3>
          <hr />
            <ul className="space-y-3">
              <li>
                Designing the digital prototype
            </li>
            <hr />
              <li>
                Sourcing materials for the product<br/><sub>Hannah is trying not to kill herself</sub>
            </li>
            <hr />
              <li>
                Creating the community space.
              </li>
              </ul>
          </div>
          <div className="px-2 py-3 mx-4 border w-80 border-offWhite">
          <h3 className="mb-2 text-3xl text-center">In Progress</h3>
          <hr />
            <ul className="space-y-3">
              <li>
                Designing the digital templates for pre-launch (50% done)
            </li>
            <hr />
              <li>
                Figuring out how to deploy a Headless CMS (Theo cries)
            </li>
            <hr />
              <li>
                Preparing our pitch deck<br />(cos we're hungry)
              </li>
              </ul>
          </div>
          <div className="px-2 py-3 mx-4 border w-80 border-offWhite">
          <h3 className="mb-2 text-3xl text-center">Done</h3>
          <hr />
            <ul className="space-y-3">
              <li>
                Well, we have a website
            </li>
            <hr />
              <li>
                Our socials are sparkling ✨
            </li>
            <hr />
              <li>
                Survived bootstrapping for 2 years
              </li>
              </ul>
          </div>
        </div>

      </section>
  </div>
}
