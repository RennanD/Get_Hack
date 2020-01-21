import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 46px;
  background: #2193f6;
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fefefe;
`;
