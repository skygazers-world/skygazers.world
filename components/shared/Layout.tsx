import { ReactNode } from "react";
import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children
}: {
    children: ReactNode;
  }) {
    return (
        <div className="w-full relative">
        <Head>
          <title>SkyGazers</title>
          <meta
            name="description"
            content="skygazers"
          />
        </Head>
        <Header />
        <main>
        {children}
      </main>
      <Footer />
    </div>

  )
}