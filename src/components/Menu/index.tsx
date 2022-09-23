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
      if (window.innerWidth > 1220 && isSidebarOpen) {
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
    <Container isSidebarOpen={isSidebarOpen}>
      <nav>
        <Link href="/">
          <a>
            <img src="/images/logo.webp" alt="SR8 Saúde Brasil" />
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
              <Link href="/quotation">
                <a>Cotação</a>
              </Link>
            </li>

            <li>
              <Link href="/lgpd">
                <a>LGPD</a>
              </Link>
            </li>
          </ul>

          <ContactUs
            href="https://api.whatsapp.com/send/?phone=5511910166743"
            target="_blank"
            rel="noopener noreferrer"
          >
            {!isSidebarOpen && <img src="/icons/whatsapp.svg" alt="WhatsApp" />}
            Fale Conosco
          </ContactUs>
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
