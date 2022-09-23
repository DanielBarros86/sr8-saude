import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { SEO } from '../components/SEO';

import { Contact, Container, Description, Values } from '../styles/pages/about';

export default function About() {
  return (
    <Container>
      <SEO
        title="Sobre nós"
        description="Tudo sobre nossa empresa"
        image="/images/banner-about.webp"
      />

      <Banner
        title="SR8 Saúde Brasil"
        subtitle="Tudo sobre nossa empresa"
        imageUrl="/images/banner-about.webp"
        imageUrlMobile="/images/banner-about-mobile.webp"
      />

      <main>
        <Description>
          <img
            src="/images/women-wearing-company-shirt.webp"
            alt="Mulher vestindo a camida da SR8 Saúde Brasil"
          />

          <p>
            A SR8 Brasil começou suas atividades em 2020, na cidade de São Paulo
            (SP). Antes de se tornar um negócio, era um sonho. Com apenas dois
            funcionários, muita dedicação e muita vontade de fazer dar certo,
            fizeram com que nossos sonhos saíssem do papel.
          </p>
        </Description>

        <Values>
          <strong>Valores da SR8</strong>

          <ul>
            <li>
              <div>
                <img src="/icons/check.svg" alt="Check" />
              </div>

              <span>
                <b>Missão</b>: Oferecer transparência, honestidade e excelência
                de qualidade na prestação de serviços de seguros, com base em
                conhecimentos adquiridos e responsabilidade social, como maneira
                de contribuir com as prioridades de cada cliente.
              </span>
            </li>

            <li>
              <div>
                <img src="/icons/check.svg" alt="Check" />
              </div>

              <span>
                <b>Visão</b>: Ser líder e inovar na prestação de serviços de
                seguros, referência na gestão do conhecimento e reconhecida pelo
                comprometimento e excelência profissional. Valores: Organização,
                verdade, integridade, ética e transparência.
              </span>
            </li>

            <li>
              <div>
                <img src="/icons/check.svg" alt="Check" />
              </div>

              <span>
                <b>Valores</b>: Organização, verdade, integridade, ética e
                transparência.
              </span>
            </li>
          </ul>
        </Values>

        <Contact>
          <img src="/images/attendants.webp" alt="Atendentes" loading="lazy" />

          <div>
            <strong>Formas de contato</strong>

            <div>
              <span>(11) 91016-6743</span>
              <span>email@email.com.br</span>
              <span>Rua Endereço Endereço - SP</span>
            </div>
          </div>
        </Contact>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
