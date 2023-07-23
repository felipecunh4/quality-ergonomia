import Head from 'next/head';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Servicos from './components/Servicos/Servicos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quality Ergonomia</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Consultoria em Ergonomia Corporativa. Análise Ergonômica do Trabalho. Análise Ergonômica Preliminar. Ginástica Laboral. Projetos de inclusão de PCD. Sistema de Gestão de Risco. Treinamentos de Ergonomia."
        />
        <meta
          content="consultoria em ergonomia, saude ocupacional, laudo ergonômico, AET, NR17, eSocial, ginástica laboral, GL, qualidade de vida, NR36, ergonomia, segurança do trabalho"
          name="keywords"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <QuemSomos />
        <Servicos />
      </main>
      <Footer />
    </>
  );
}
