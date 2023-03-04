import Head from 'next/head';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Servicos from './components/Servicos/Servicos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quality Ergonomia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <QuemSomos />
        <Servicos />
      </main>
    </>
  );
}
