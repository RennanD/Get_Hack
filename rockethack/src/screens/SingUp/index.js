import React, {useState, useRef} from 'react';
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

  const emailRef = useRef();
  const passwordRef = useRef();
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
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu email"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon={secury ? 'lock-outline' : 'lock-open'}
            secureTextEntry={secury}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite sua senha"
            onSubmitEditing={handleSubmit}
            ref={passwordRef}
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
