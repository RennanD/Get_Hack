import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
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
import {singInRequest} from '~/store/modules/auth/actions';

export default function SingIn({navigation}) {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secury, setSecury] = useState(true);

  function handleSubmit() {
    dispatch(singInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            valeu={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon={secury ? 'lock-outline' : 'lock-open'}
            secureTextEntry={secury}
            placeholder="Digite sua senha"
            valeu={password}
            onChangeText={setPassword}
          />

          <ShowPassord onPress={() => setSecury(!secury)}>
            <LinkText>{secury ? 'Mostrar senha' : 'Esconder senha'}</LinkText>
          </ShowPassord>

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>

          <LinkButton onPress={() => navigate('SingUp')}>
            <LinkText> Criar conta </LinkText>
          </LinkButton>
        </Form>
      </Container>
    </Background>
  );
}
