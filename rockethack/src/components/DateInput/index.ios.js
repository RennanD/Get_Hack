import React, {useState, useMemo} from 'react';

import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {DatePickerIOS} from 'react-native';
import {Container, DateButton, DateText, Picker} from './styles';

export default function DateInput({date, onChange}) {
  const [opened, setOpened] = useState(false);
  const dateFormated = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy ", {locale: ptBR}),
    [date],
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" size={22} color="#999" />
        <DateText>{dateFormated}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
