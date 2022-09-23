import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonType = 'primary', children, ...props }, ref) => (
    <Container buttonType={buttonType} ref={ref} {...props}>
      {children}
    </Container>
  ),
);

Button.displayName = 'Button';
