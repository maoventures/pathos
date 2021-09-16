import Image from 'next/image'
import Link from 'next/link'


function Layout({children}) {
  return (
    <>
      <div className="fixed flex z-50 justify-center items-center filter drop-shadow-md bg-warmGray-800 opacity-80 text-offWhite text-base space-x-0.2 top-0 right-0 left-0 py-2">
        <Link href="/about"><a className="mx-2 opacity-100">About</a></Link>
        <Link href="/features"><a className="mx-2 opacity-100">Features</a></Link>
        <Link href="/"><a className="opacity-100">
        <Image src="/icons/pathos-wordmark.webp" className="-mx-8 lg:scale-150" width="112" height="57" alt="Pathos, a process-driven methodology for sustaining creativity"/>
        </a></Link>
        <Link href="/roadmap"><a className="mx-2 opacity-100">Roadmap</a></Link>
        <Link href="/contact"><a className="mx-2 opacity-100">Contact</a></Link>
      </div>
      <main>
      {children}
      </main>
    </>
  );
}

export default Layout;
