import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #222;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  height: 150px;
  background: #999;
`;

export const Footer = styled.View`
  padding: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #fefefe;
  margin-left: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;
