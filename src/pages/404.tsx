import { SEO } from '../components/SEO';
import { Container } from '../styles/pages/_404';

export default function PageNotFound() {
  return (
    <Container>
      <SEO title="SR8 Saúde Brasil" shouldIndexPage={false} />

      <strong>404</strong>
      <strong>Página não encontrada</strong>
    </Container>
  );
}
