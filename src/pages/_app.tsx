import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/assets/font/basier/stylesheet.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
