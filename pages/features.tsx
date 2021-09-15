import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Features() {
  return <div className="text-offWhite bg-warmGray-800">
    <div className="flex flex-col relative justify-center items-center h-screen">
      <h1 className="md:text-4xl text-2xl font-thin text-center">a journalling system designed to manage our mental wellbeings</h1>
      <FontAwesomeIcon className="absolute mx-auto bottom-0" size="3x" icon={faCaretDown}  />

      </div>
  </div>
}
