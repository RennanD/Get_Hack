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
import {singUpRequest} from '~/store/modules/auth/actions';

export default function SingUp({navigation}) {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [secury, setSecury] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(singUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon={secury ? 'lock-outline' : 'lock-open'}
            secureTextEntry={secury}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
          />

          <ShowPassord onPress={() => setSecury(!secury)}>
            <LinkText>{secury ? 'Mostrar senha' : 'Esconder senha'}</LinkText>
          </ShowPassord>

          <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
          <LinkButton onPress={() => navigate('SingIn')}>
            <LinkText> Já tenho login </LinkText>
          </LinkButton>
        </Form>
      </Container>
    </Background>
  );
}
