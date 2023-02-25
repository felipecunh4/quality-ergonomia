import Image from 'next/image';

import Cards from './components/Cards/Cards';

import scss from './QuemSomos.module.scss';

import ergonomiaImg from './images/ergonomia.jpg';
import logoImg from './images/logo.png';

function QuemSomos() {
  return (
    <section id="empresa" className={scss.container}>
      <div className={scss.content}>
        <div className={scss.main}>
          <div className={scss.descriptionContainer}>
            <h2 className={scss.aboutTitle}>Quem somos</h2>
            <h3 className={scss.title}>Pensando sempre no seu bem-estar</h3>
            <p className={scss.description}>
              A Quality Ergonomia nasceu com o propósito de proporcionar saúde, conforto e segurança
              no trabalho diminuindo riscos de acidentes e índices de absentismo laboral, mediante a
              análise da postura, dos movimentos corporais, dos equipamentos usados e dos fatores
              físicos do ambiente de trabalho. Buscamos promover a perfeita integração entre as
              capacidades e limitações do trabalhador, suas condições de trabalho e eficiência do
              sistema produtivo.
            </p>
            <p className={scss.description}>
              À frente desta organização está seu diretor e profissional referência, Victor Cunha
              formado em fisioterapia com especialização em saúde coletiva pela Secretaria de Saúde
              do Estado de São Paulo, onde teve oportunidade de conhecer e entender sobre a saúde do
              trabalhador através da Política Nacional de Saúde do Trabalhador e da Trabalhadora e
              conhecer a Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST). Concluiu
              formação técnica em Ergonomia e atua há mais de 8 anos dentro do mercado nacional
              proporcionando saúde e qualidade de vida no ambiente corporativo por meio de suas
              habilidades técnicas.
            </p>
          </div>
          <div className={scss.imgContainer}>
            <div className={scss.imgWrapper}>
              <Image
                fill
                src={ergonomiaImg}
                className={scss.img}
                alt="Imagem de uma criança fazendo o uso correto da ergonomia"
              />
            </div>
            <div className={scss.logoContainer}>
              <div className={scss.logoWrapper}>
                <Image fill src={logoImg} className={scss.logo} alt="Logo da Quality Ergonomia" />
              </div>
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </section>
  );
}

export default QuemSomos;
