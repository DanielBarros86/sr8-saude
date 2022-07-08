import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

import {
  Container,
  Opportunities,
  Location,
  Highlighted,
  PartnerCompanies,
} from '../styles/home';

export default function Home() {
  return (
    <Container>
      <SEO
        title="SR8 Saúde Brasil"
        shouldExcludeTitleSuffix
        description="Sua casa e sua família mais protegidos"
        image="/logo.png"
      />

      <Banner
        title="Sua casa e sua família mais protegidas"
        subtitle="Planos de Saúde"
        imageUrl="/images/banner-home.png"
        imageUrlMobile="/images/banner-home-mobile.png"
        imagePosition="initial"
        height="45rem">
        <Link href="/cotation" passHref>
          <Button as="a" buttonType="tertiary">
            Iniciar cotação
          </Button>
        </Link>
      </Banner>

      <Opportunities>
        <h2>Mais oportunidades para você!</h2>

        <div>
          <img src="/images/condominium-small.png" alt="Condomínio" />
          <img src="/images/family-small.png" alt="Família se abraçando" />
          <img src="/images/car-small.png" alt="Carro azul na rodovia" />
          <img
            src="/images/consortium-small.png"
            alt="Colocando moeda no porquinho"
          />
        </div>
      </Opportunities>

      <Location>
        <img src="/images/brazil-map.png" alt="Map do Brasil" />

        <div>
          <h2>SR8 Saúde Brasil</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </Location>

      <Highlighted>
        <strong>Destaquee!</strong>
      </Highlighted>

      <PartnerCompanies>
        <h2>Empresas que somos parceiros</h2>

        <div>
          <img src="/images/mapfre-seguros.png" alt="Mapfre Seguros" />
          <img src="/images/porto-seguro.png" alt="Porto Seguro" />
          <img src="/images/hdi-seguros.png" alt="HDI Seguros" />
          <img src="/images/sul-america.png" alt="Sul América" />
          <img src="/images/allianz.png" alt="Allianz" />
          <img src="/images/bradesco-seguros.png" alt="Bradesco Seguros" />
          <img src="/images/zurich-seguros.png" alt="Zurich Seguros" />
          <img src="/images/azul-seguros.png" alt="Azul Seguros" />
          <img src="/images/liberty-seguros.png" alt="Liberty Seguros" />
          <img
            src="/images/tokio-marine-seguradora.png"
            alt="Tokio Marine Seguradora"
          />
          <img src="/images/sompo-seguros.png" alt="Sompo Seguros" />
          <img src="/images/aliro-seguro.png" alt="Aliro Seguro" />
        </div>
      </PartnerCompanies>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
