import React from 'react';
import {Image} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  LinkButton,
  LinkText,
  SubmitButton,
} from './styles';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

export default function SingIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput icon="mail-outline" placeholder="Digite seu email" />
          <FormInput icon="mail-outline" placeholder="Digite seu email" />

          <SubmitButton>Entrar</SubmitButton>
          <Link onPress={() => {}}>
            <LinkText> Criar conta </LinkText>
          </Link>
        </Form>
      </Container>
    </Background>
  );
}
