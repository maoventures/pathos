import Layout from '../components/layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

library.add(fas, fab)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout/>
      <Component {...pageProps} />
      </>
  )
}
