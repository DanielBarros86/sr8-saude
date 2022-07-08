import { ReactNode } from 'react';
import { Container } from './styles';

type BannerProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageUrlMobile?: string;
  height?: string;
  children?: ReactNode;
};

export function Banner({
  title,
  subtitle,
  imageUrl,
  imageUrlMobile,
  height = '30rem',
  children,
}: BannerProps) {
  return (
    <Container
      imageUrl={imageUrl}
      imageUrlMobile={imageUrlMobile}
      height={height}>
      <strong>{title}</strong>
      <span>{subtitle}</span>
      {children}
    </Container>
  );
}
