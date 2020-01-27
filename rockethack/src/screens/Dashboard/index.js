import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Dashboard() {
  return <View />;
}

Dashboard.navigationOptions = {
  title: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="label-outline" size={28} color={tintColor} />
  ),
};
