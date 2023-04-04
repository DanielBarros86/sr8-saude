import { ReactNode } from 'react';
import Link from 'next/link';

import { Menu } from '../Menu';
import { Container, Footer } from './styles';
import { Button } from '../Button';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Menu />
      <main>{children}</main>

      <Footer>
        <div>
          <img src="/images/logo2.webp" alt="SR8 Saúde Brasil" loading="lazy" />

          <section>
            <strong>Serviços</strong>
            <ul>
              <li>Plano de saúde</li>
              <li>Seguro de vida</li>
              <li>Seguro de automóvel</li>
              <li>Seguro Residencial</li>
              <li>Consórcio</li>
            </ul>
          </section>

          <section>
            <Link href="/about">
              <a>Sobre nós</a>
            </Link>

            {/* <Link href="/lgpd">
              <a>LGPD</a>
            </Link> */}

            <Link href="/contact">
              <a>Contato</a>
            </Link>

            <Button
              as="a"
              href="https://api.whatsapp.com/send/?phone=5511910166743"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" />
              Fale Conosco
            </Button>
          </section>
        </div>

        <div>
          <span>©2022 - SR8</span>
          <span>Todos os direitos reservados</span>
          <span>Developer xcoders</span>
        </div>
      </Footer>
    </Container>
  );
}
