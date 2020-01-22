import React, {useState} from 'react';
import {Image} from 'react-native';

import {
  Container,
  Form,
  FormInput,
  LinkButton,
  LinkText,
  SubmitButton,
  ShowPassord,
} from './styles';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

export default function SingUp({navigation}) {
  const {navigate} = navigation;
  const [secury, setSecury] = useState(true);

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput icon="person-outline" placeholder="Digite seu nome" />
          <FormInput icon="mail-outline" placeholder="Digite seu email" />
          <FormInput
            icon={secury ? 'lock-outline' : 'lock-open'}
            secureTextEntry={secury}
            placeholder="Digite sua senha"
          />

          <ShowPassord onPress={() => setSecury(!secury)}>
            <LinkText>{secury ? 'Mostrar senha' : 'Esconder senha'}</LinkText>
          </ShowPassord>

          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
          <LinkButton onPress={() => navigate('SingIn')}>
            <LinkText> Já tenho login </LinkText>
          </LinkButton>
        </Form>
      </Container>
    </Background>
  );
}
