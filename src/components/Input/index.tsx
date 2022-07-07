import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from '../FieldError';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, ...props }, ref) => (
    <Container hasError={!!error}>
      <input id={name} name={name} ref={ref} {...props} />

      {error && <FieldError>{error}</FieldError>}
    </Container>
  ),
);

Input.displayName = 'Input';
