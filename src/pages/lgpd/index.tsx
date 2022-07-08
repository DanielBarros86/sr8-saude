import { Banner } from '../../components/Banner';
import { SEO } from '../../components/SEO';

import { Container, Description, MorePolicies } from './styles';

export default function LGDP() {
  return (
    <Container>
      <SEO
        title="LGPD"
        description="Política de Privacidade"
        image="/images/banner-lgpd.png"
      />

      <Banner
        title="Política de Privacidade"
        subtitle="LGPD"
        imageUrl="/images/banner-lgpd.png"
        imageUrlMobile="/images/banner-lgpd-mobile.png"
      />

      <main>
        <Description>
          <img
            src="/images/cloud-security.png"
            alt="Nuvem com cadeado representando a segurança na nuvem"
          />

          <div>
            <strong>Lei Geral de Proteção de Dados Pessoais</strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim.
            </p>
          </div>
        </Description>

        <MorePolicies>
          <ul>
            <li>
              <img src="/icons/plus.svg" alt="Ver mais" />
              Mais políticas
            </li>

            <li>
              <img src="/icons/plus.svg" alt="Ver mais" />
              Mais políticas
            </li>

            <li>
              <img src="/icons/plus.svg" alt="Ver mais" />
              Mais políticas
            </li>
          </ul>

          <ul>
            <li>
              <img src="/icons/plus.svg" alt="Ver mais" />
              Mais políticas
            </li>

            <li>
              <img src="/icons/plus.svg" alt="Ver mais" />
              Mais políticas
            </li>

            <li>
              <img src="/icons/plus.svg" alt="Ver mais" />
              Mais políticas
            </li>
          </ul>
        </MorePolicies>
      </main>
    </Container>
  );
}
