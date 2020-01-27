import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Footer,
  Info,
  InfoText,
  SubmitButton,
} from './styles';

export default function Card({data}) {
  return (
    <Container>
      <Banner
        source={{
          uri: data.banner.url,
        }}
      />
      <Footer>
        <Info>
          <Icon name="content-paste" size={16} color="#fefefe" />
          <InfoText>{data.title}</InfoText>
        </Info>
        <Info>
          <Icon name="local-atm" size={16} color="#fefefe" />
          <InfoText>{data.awards}</InfoText>
        </Info>
        <SubmitButton>Detalhes</SubmitButton>
      </Footer>
    </Container>
  );
}
