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
} from '../styles/pages/home';

export default function Home() {
  return (
    <Container>
      <SEO
        title="SR8 Saúde Brasil"
        shouldExcludeTitleSuffix
        description="Sua casa e sua família mais protegidos"
        image="/logo.webp"
      />

      <Banner
        title="Sua casa e sua família mais protegidas"
        imageUrl="/images/banner-home.webp"
        imageUrlMobile="/images/banner-home-mobile.webp"
        imagePosition="initial"
        height="45rem"
      >
        <Link href="/cotation" passHref>
          <Button as="a" buttonType="tertiary">
            Iniciar cotação
          </Button>
        </Link>
      </Banner>

      <Opportunities>
        <h2>Mais oportunidades para você!</h2>

        <div>
          <img src="/images/house-small.webp" alt="Casa" loading="lazy" />
          <img
            src="/images/family-small.webp"
            alt="Família se abraçando"
            loading="lazy"
          />
          <img
            src="/images/car-small.webp"
            alt="Carro azul na rodovia"
            loading="lazy"
          />
          <img
            src="/images/consortium-small.webp"
            alt="Colocando moeda no porquinho"
          />
        </div>
      </Opportunities>

      <Location>
        <img src="/images/brazil-map.webp" alt="Map do Brasil" />

        <div>
          <h2>SR8 Saúde Brasil</h2>
          <p>
            Atualmente Oferecemos seguros e serviços em diferentes segmentos do
            setor, entre eles: Vida, Saúde, Automóvel, Residencial, consórcio,
            entre outros. Trabalhamos com agilidade e eficiência procurando
            promover a satisfação sempre. O nosso trabalho é levar até você os
            melhores planos e serviços do mercado.
          </p>
        </div>
      </Location>

      <Highlighted>
        <strong>Destaque!</strong>
      </Highlighted>

      <PartnerCompanies>
        <h2>Empresas parceiras</h2>

        <div>
          <img
            src="/images/mapfre-seguros.webp"
            alt="Mapfre Seguros"
            loading="lazy"
          />
          <img
            src="/images/porto-seguro.webp"
            alt="Porto Seguro"
            loading="lazy"
          />
          <img
            src="/images/hdi-seguros.webp"
            alt="HDI Seguros"
            loading="lazy"
          />
          <img
            src="/images/sul-america.webp"
            alt="Sul América"
            loading="lazy"
          />
          <img src="/images/allianz.webp" alt="Allianz" loading="lazy" />
          <img
            src="/images/bradesco-seguros.webp"
            alt="Bradesco Seguros"
            loading="lazy"
          />
          <img
            src="/images/zurich-seguros.webp"
            alt="Zurich Seguros"
            loading="lazy"
          />
          <img
            src="/images/azul-seguros.webp"
            alt="Azul Seguros"
            loading="lazy"
          />
          <img
            src="/images/liberty-seguros.webp"
            alt="Liberty Seguros"
            loading="lazy"
          />
          <img
            src="/images/tokio-marine-seguradora.webp"
            alt="Tokio Marine Seguradora"
            loading="lazy"
          />
          <img
            src="/images/sompo-seguros.webp"
            alt="Sompo Seguros"
            loading="lazy"
          />
          <img
            src="/images/aliro-seguro.webp"
            alt="Aliro Seguro"
            loading="lazy"
          />
        </div>
      </PartnerCompanies>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
