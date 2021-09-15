import Image from 'next/image'
import Link from 'next/link'


function Layout({children}) {
  return (
    <>
      <div className="fixed flex z-50 justify-center items-center bg-warmGray-800 opacity-80 text-offWhite text-base space-x-0.2 top-0 right-0 left-0 py-8">
        {/* <Link href="/about"><a className="opacity-100">About</a></Link> */}
        <Link href="/features"><a className="opacity-100">Features</a></Link>
        <Link href="/"><a className="opacity-100">
        <Image src="/icons/pathos-wordmark.webp" className="scale-75 -mx-8" width="224" height="114" alt="Pathos, a process-driven methodology for sustaining creativity"/>
        </a></Link>
        {/* <Link href="/roadmap"><a className="opacity-100">Roadmap</a></Link> */}
        <Link href="/contact"><a className="opacity-100">Contact</a></Link>
      </div>
      <main>
      {children}
      </main>
    </>
  );
}

export default Layout;
