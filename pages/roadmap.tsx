import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Roadmap() {
  return <div className="bg-warmGray-800 text-offWhite">
    <section className="flex flex-col relative justify-center items-center h-screen">
      <h1 className="text-4xl text-left w-full">our way from here</h1>
      <FontAwesomeIcon className="absolute text-center bottom-0" size="3x" icon={faCaretDown}  />
      </section>
  </div>
}
