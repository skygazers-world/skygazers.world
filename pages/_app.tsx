import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/shared/Layout'
import Script from 'next/script';



export default function App({ Component, pageProps }: AppProps) {


  console.log("joo");
  
  return (
    <>
      <Script
        strategy='afterInteractive'
        src="https://www.googletagmanager.com/gtag/js?id=G-1DC6VV2B8E"
      />
      <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1DC6VV2B8E');
          `}
      </Script>
          
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
    )
}
