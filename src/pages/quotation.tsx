import { GetStaticProps } from 'next';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Input';
import { InputMask } from '../components/InputMask';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { phoneNumberRegex } from '../utils/regexes';

import { Container } from '../styles/pages/quotation';

type Quotation = {
  name: string;
  email: string;
  phoneNumber: string;
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  phoneNumber: yup
    .string()
    .required('Telefone é obrigatório')
    .test('invalid-number', 'Telefone inválido', (value) => {
      if (!value) {
        return true;
      }

      return new RegExp(phoneNumberRegex).test(value.replace(/[^\d]/g, ''));
    }),
});

export default function Quotation() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Quotation>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const phoneNumber = watch('phoneNumber');

  function handleSendQuotation(data: Quotation) {
    const quotationMessage = encodeURIComponent(
      'Olá! Gostaria se solicitar uma cotação, segue abaixo os dados:\n\n' +
        `*Nome*: ${data.name}\n` +
        `*Telefone*: ${data.phoneNumber}\n` +
        `*E-mail*: ${data.email}`,
    );

    window.open(
      `https://api.whatsapp.com/send/?phone=5511910166743&text=${quotationMessage}`,
      '_blank',
    );
  }

  return (
    <Container>
      <SEO
        title="Cotação"
        description="Solicite a sua cotação"
        image="/images/banner-home.webp"
      />

      <header>
        <h1>Iniciar Cotação</h1>
        <span>
          Preencha os dados e nossa equipe de atendentes entrará em contato com
          você para melhores explicações.
        </span>
      </header>

      <form onSubmit={handleSubmit(handleSendQuotation)}>
        <Input
          placeholder="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          placeholder="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <InputMask
              name={field.name}
              placeholder="Número do Telefone"
              mask={
                !phoneNumber || phoneNumber.length <= 14
                  ? '(99) 9999-9999?'
                  : '(99) 99999-9999'
              }
              formatChars={{ '9': '[0-9]', '?': '[0-9]' }}
              maskChar=""
              ref={field.ref}
              defaultValue=""
              error={errors.phoneNumber?.message}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />

        <Button type="submit">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
          Enviar cotação
        </Button>
      </form>

      <img src="/images/brazil-map.webp" alt="Mapa do Brasil" loading="lazy" />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});
