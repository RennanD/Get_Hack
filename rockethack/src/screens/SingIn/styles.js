import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const LinkButton = styled.TouchableOpacity`
  height: 46px;
  justify-content: center;
  align-items: center;
`;

export const LinkText = styled.Text`
  color: #2193f6;
  font-size: 14px;
  font-weight: bold;
`;

export const ShowPassord = styled.TouchableOpacity`
  height: 46px;
  justify-content: center;
  margin-top: 5px;
  padding: 0 5px;
`;
