import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function About(){
  return <div className="flex relative flex-col h-screen text-offWhite bg-warmGray-800 justify-center items-center">
    <div>
      <h1 className="md:text-4xl text-xl text-center">About Pathos</h1>
      <FontAwesomeIcon className="absolute text-center bottom-0" size="3x" icon={faCaretDown}  />
      </div>
  </div>
}
