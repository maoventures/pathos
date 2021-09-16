import Link from 'next/link'

export default function Menu(props) {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen space-y-6 bg-warmGray-800 text-offWhite">
        <h2 className="text-3xl tracking-widest md:text-5xl">select your path</h2>
          <div className="flex items-center justify-center space-x-4 text-base md:text-2xl">
            <Link href="/">
              <a className="px-4 py-2 transition duration-500 border rounded-lg shadow-inner hover:bg-offWhite hover:text-warmGray-800 border-offWhite">home</a>
            </Link>
            <Link href="/about">
              <a className="px-4 py-2 transition duration-500 border rounded-lg shadow-inner hover:bg-offWhite hover:text-warmGray-800 border-offWhite">about</a>
            </Link>
            <Link href="/features">
              <a className="px-4 py-2 transition duration-500 border rounded-lg shadow-inner hover:bg-offWhite hover:text-warmGray-800 border-offWhite">features</a>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4 text-base md:text-2xl">
            <Link href="/roadmap">
              <a className="px-4 py-2 transition duration-500 border rounded-lg shadow-inner hover:bg-offWhite hover:text-warmGray-800 border-offWhite">roadmap</a>
            </Link>
            <Link href="/blog">
              <a className="px-4 py-2 transition duration-500 border rounded-lg shadow-inner hover:bg-offWhite hover:text-warmGray-800 border-offWhite">blog</a>
            </Link>
            <Link href="/contact">
              <a className="px-4 py-2 transition duration-500 border rounded-lg shadow-inner hover:bg-offWhite hover:text-warmGray-800 border-offWhite">contact?</a>
            </Link>
      </div>
    </section>
  );
}
