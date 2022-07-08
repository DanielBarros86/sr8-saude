import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Container, Items, Burger, ContactUs } from './styles';

export function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  function toggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (isSidebarOpen) {
      router.events.on('routeChangeComplete', toggleSidebar);
    }

    function handleScreenResize() {
      if (window.innerWidth > 1300 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
      router.events.off('routeChangeComplete', toggleSidebar);
    };
  }, [isSidebarOpen]);

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
                <a>LGPD</a>
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
