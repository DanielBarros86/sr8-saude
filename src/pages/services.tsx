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
        image="/images/banner-services.webp"
      />

      <Banner
        title="Seguros e Planos para você e sua família"
        subtitle="Planos diversos"
        imageUrl="/images/banner-services.webp"
        imageUrlMobile="/images/banner-services-mobile.webp"
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

          <img
            src="/images/medical-equipment.webp"
            alt="Equipamento médico"
            loading="lazy"
          />
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

          <img
            src="/images/condominium-large.webp"
            alt="Condominio"
            loading="lazy"
          />
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

          <img
            src="/images/family-large.webp"
            alt="Família se abraçando"
            loading="lazy"
          />
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

          <img
            src="/images/car-large.webp"
            alt="Carro azul na rodovia"
            loading="lazy"
          />
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

          <img
            src="/images/consortium-large.webp"
            alt="Carro azul na rodovia"
            loading="lazy"
          />
        </Section>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
