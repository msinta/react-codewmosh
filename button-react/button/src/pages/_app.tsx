import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
  <Component {...pageProps} />
  <button type="button" className="btn btn-primary">Primary</button>

  </div>
  )
}
