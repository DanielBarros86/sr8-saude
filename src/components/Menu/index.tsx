import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Container, Items, Burger, ContactUs } from './styles';

export function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    function handleScreenResize() {
      if (window.innerWidth > 1300 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener('resize', handleScreenResize);

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [isSidebarOpen]);

  function toggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <nav>
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="SR8 Saúde Brasil" />
          </a>
        </Link>

        <Items isSidebarOpen={isSidebarOpen}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/services">
                <a>Serviços</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>Sobre Nós</a>
              </Link>
            </li>

            <li>
              <Link href="/cotation">
                <a>Cotação</a>
              </Link>
            </li>

            <li>
              <Link href="/lgpd">
                <a>LGDP</a>
              </Link>
            </li>
          </ul>

          <Link href="/contact-us" passHref>
            <ContactUs>
              {!isSidebarOpen && (
                <img src="/icons/whatsapp.svg" alt="WhatsApp" />
              )}
              Fale Conosco
            </ContactUs>
          </Link>
        </Items>

        {isSidebarOpen && (
          <img src="/images/doctor-care.svg" alt="Doctor Care" />
        )}

        <Burger isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
          <div />
          <div />
          <div />
        </Burger>
      </nav>
    </Container>
  );
}
