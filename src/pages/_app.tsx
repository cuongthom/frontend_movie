import type { AppProps } from 'next/app'
import Updater from '@/hooks/Updater'
import './globals.css'
import '../style/HeaderStyle.css'
import '../style/HomePageStyle.css'

export default function MyApp({ Component, pageProps }: any) {
    const getLayout = Component.getLayout || ((page: any) => page)
    return (
        <Updater>
            {getLayout(<Component {...pageProps} />)}
        </Updater>
    )
}