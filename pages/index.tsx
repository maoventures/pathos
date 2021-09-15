import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home(){
  return (
    <div className="bg-warmGray-800 text-offWhite min-h-screen">
      <Head>
        <title>pathos, a hybrid mindfulness experience</title>
        <meta name="description" content="pathos is an upcoming digital-hybrid journalling experience for mindfulness and mental wellness." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://pathos.asia"
          key="canonical"
        />
      </Head>
      <main className="flex flex-col justify-center items-center">
        <section className="min-h-screen container relative w-10/12 flex flex-col space-y-4 justify-center items-center">
        <h1 className="md:text-7xl text-5xl text-left w-full tracking-widest">
          pathos
        </h1>

        <p className="md:text-3xl text-xl tracking-widest">
          while this moment was preordained, your choices will define your path ahead.
          </p>
        <FontAwesomeIcon className="absolute text-center bottom-8" size="3x" icon={faCaretDown}  />
        </section>
        <section className="h-screen relative flex flex-col w-11/12 justify-center items-center space-y-4 max-w-screen-md">
          <h2 className="md:text-5xl text-3xl tracking-widest w-full text-left">wait, wtf?</h2>
          <p className="md:text-2xl text-base tracking-widest">pathos is phase one of a long-term, mental health initiative. the heart of our mission lies in rooting out the rot that is the toxic mindset now endemic in the soul of the startup community, both locally and globally.<br /><br />

            from our collective personal experiences, historical data, and trends extracted from market research, we conclude that much of the current systemic issues are propagated, normalised, and instilled by this very mindset to the detriment of the entire community of creators, tinkerers and founders alike.<br /><br />
            our initial product lineup is currently in late-stage development and we are excited to announce the pending end-september launch.</p>
                  <FontAwesomeIcon className="absolute text-center bottom-0" size="3x" icon={faCaretDown}  />

        </section>
        <section className="h-screen flex flex-col justify-center items-center space-y-6">
          <h2 className="md:text-5xl text-3xl tracking-widest">select your path</h2>
          <div className="flex justify-center items-center space-x-4 text-base md:text-2xl">
            <Link href="features">
              <a className="px-4 py-2 border shadow-inner rounded-lg hover:bg-offWhite hover:text-warmGray-800 transition duration-500 border-offWhite">features</a>
            </Link>
            <Link href="roadmap">
              <a className="px-4 py-2 border shadow-inner rounded-lg hover:bg-offWhite hover:text-warmGray-800 transition duration-500 border-offWhite">roadmap</a>
            </Link>
            <Link href="about">
              <a className="px-4 py-2 border shadow-inner rounded-lg hover:bg-offWhite hover:text-warmGray-800 transition duration-500 border-offWhite">but... why?</a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
