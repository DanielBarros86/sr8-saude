import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  as?: any;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonType = 'primary', as, children, ...props }, ref) => (
    <Container as={as} buttonType={buttonType} ref={ref} {...props}>
      {children}
    </Container>
  ),
);

Button.displayName = 'Button';
