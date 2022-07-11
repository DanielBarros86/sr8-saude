import { GetStaticProps } from 'next';
import { Banner } from '../components/Banner';
import { SEO } from '../components/SEO';

import { Container, Section } from '../styles/pages/services';

export default function Services() {
  return (
    <Container>
      <SEO
        title="Serviços"
        description="Seguros e planos para você e sua família"
        image="/images/banner-services.png"
      />

      <Banner
        title="Seguros e Planos para você e sua família"
        subtitle="Planos diversos"
        imageUrl="/images/banner-services.png"
        imageUrlMobile="/images/banner-services-mobile.png"
      />

      <main>
        <Section>
          <div>
            <strong>Planos de Sáude</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim.{' '}
            </p>
          </div>

          <img src="/images/medical-equipment.png" alt="Equipamento médico" />
        </Section>

        <Section>
          <div>
            <strong>Seguro Residencial</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim.{' '}
            </p>
          </div>

          <img src="/images/condominium-large.png" alt="Condominio" />
        </Section>

        <Section>
          <div>
            <strong>Seguro de Vida</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim.{' '}
            </p>
          </div>

          <img src="/images/family-large.png" alt="Família se abraçando" />
        </Section>

        <Section>
          <div>
            <strong>Seguro Automóvel</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim.{' '}
            </p>
          </div>

          <img src="/images/car-large.png" alt="Carro azul na rodovia" />
        </Section>

        <Section>
          <div>
            <strong>Consórcio</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim.{' '}
            </p>
          </div>

          <img src="/images/consortium-large.png" alt="Carro azul na rodovia" />
        </Section>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
