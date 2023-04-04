import { GetStaticProps } from 'next';

import { Banner } from '../components/Banner';
import { SEO } from '../components/SEO';

import {
  Accordion,
  Container,
  Description,
  MorePolicies,
} from '../styles/pages/lgpd';

export default function LGDP() {
  return (
    <Container>
      <SEO
        title="LGPD"
        description="Política de Privacidade"
        image="/images/banner-lgpd.webp"
      />

      <Banner
        title="Política de Privacidade"
        subtitle="LGPD"
        imageUrl="/images/banner-lgpd.webp"
        imageUrlMobile="/images/banner-lgpd-mobile.webp"
      />

      <main>
        <Description>
          <img
            src="/images/cloud-security.webp"
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
          <div>
            <Accordion>
              <input type="checkbox" id="policy1" />
              <label htmlFor="policy1">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>

            <Accordion>
              <input type="checkbox" id="policy2" />
              <label htmlFor="policy2">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>

            <Accordion>
              <input type="checkbox" id="policy3" />
              <label htmlFor="policy3">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>

            <Accordion>
              <input type="checkbox" id="policy4" />
              <label htmlFor="policy4">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>
          </div>

          <div>
            <Accordion>
              <input type="checkbox" id="policy5" />
              <label htmlFor="policy5">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>

            <Accordion>
              <input type="checkbox" id="policy6" />
              <label htmlFor="policy6">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>

            <Accordion>
              <input type="checkbox" id="policy7" />
              <label htmlFor="policy7">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>

            <Accordion>
              <input type="checkbox" id="policy8" />
              <label htmlFor="policy8">
                <img src="/icons/plus.svg" alt="Ver mais" />
                Mais Políticas
              </label>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id gravida urna. Nunc ut feugiat enim. Donec ligula
                nibh, tincidunt eleifend posuere a, semper ac magna. Nam
                tincidunt tristique lacus sit amet fringilla. Sed scelerisque
                tristique enim sed facilisis. Proin lacinia odio eu turpis
                sodales pretium. Cras a nulla ac felis porta scelerisque egestas
                in velit. Etiam pretium vitae neque ac feugiat. Nulla sed
                pulvinar ipsum, eu varius augue. Etiam sodales, nibh vehicula
                vehicula suscipit, quam ipsum tempor nulla, non gravida ante
                ligula eget diam. Aliquam et sem nisl.
              </p>
            </Accordion>
          </div>
        </MorePolicies>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
  notFound: true,
});
