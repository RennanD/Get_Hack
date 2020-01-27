import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';

import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';

export default function DateInput() {
  return (
    <Container>
      <DateButton>
        <Icon name="event" size={24} color="#fefefe" />
        <DateText />
      </DateButton>
    </Container>
  );
}
