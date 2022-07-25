import { ReactNode } from 'react';
import { Container } from './styles';

type BannerProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageUrlMobile?: string;
  imagePosition?:
    | 'initial'
    | 'revert'
    | 'unset'
    | 'top'
    | 'center'
    | 'bottom'
    | 'left'
    | 'right';
  height?: string;
  children?: ReactNode;
};

export function Banner({
  title,
  subtitle,
  imageUrl,
  imageUrlMobile,
  imagePosition = 'top',
  height = '30rem',
  children,
}: BannerProps) {
  return (
    <Container
      imageUrl={imageUrl}
      imageUrlMobile={imageUrlMobile}
      imagePosition={imagePosition}
      height={height}
    >
      <strong>{title}</strong>
      <span>{subtitle}</span>
      {children}
    </Container>
  );
}
