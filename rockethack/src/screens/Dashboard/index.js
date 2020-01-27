import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Subscription,
  Left,
  Info,
  Title,
  Date,
  Thumbnail,
} from './styles';

const data = [1, 2, 3, 4];

export default function Dashboard() {
  return (
    <Container>
      <List
        data={data}
        keyExctractor={item => String(item)}
        renderItem={({item}) => (
          <Subscription>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
              />
              <Info>
                <Title>Hackathon</Title>
                <Date>26 de jan de 2020</Date>
              </Info>
            </Left>
            <Icon name="chevron-right" size={20} color="#999" />
          </Subscription>
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="label-outline" size={28} color={tintColor} />
  ),
};
