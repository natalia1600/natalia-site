import type { AppProps } from 'next/app'
import { Montserrat, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
    return <main className={inter.className}>
        <Component {...pageProps} />
    </main>
}