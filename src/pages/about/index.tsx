import { Banner } from '../../components/Banner';
import { SEO } from '../../components/SEO';

import { Contact, Container, Description, Values } from './styles';

export default function About() {
  return (
    <Container>
      <SEO
        title="Sobre nós"
        description="Tudo sobre nossa empresa"
        image="/images/banner-about.png"
      />

      <Banner
        title="SR8 Saúde Brasil"
        subtitle="Tudo sobre nossa empresa"
        imageUrl="/images/banner-about.png"
        imageUrlMobile="/images/banner-about-mobile.png"
      />

      <main>
        <Description>
          <img
            src="/images/women-wearing-company-shirt.png"
            alt="Mulher vestindo a camida da SR8 Saúde Brasil"
          />

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim.
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.{' '}
              </span>
            </li>

            <li>
              <div>
                <img src="/icons/check.svg" alt="Check" />
              </div>

              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.{' '}
              </span>
            </li>

            <li>
              <div>
                <img src="/icons/check.svg" alt="Check" />
              </div>

              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim.{' '}
              </span>
            </li>
          </ul>
        </Values>

        <Contact>
          <img src="/images/attendants.png" alt="Atendentes" />

          <div>
            <strong>Formas de contato</strong>

            <div>
              <span>(34) 99999-9999</span>
              <span>email@email.com.br</span>
              <span>Rua Endereço Endereço - SP</span>
            </div>
          </div>
        </Contact>
      </main>
    </Container>
  );
}
