import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, List, Empty, EmptyText} from './styles';

import api from '~/services/api';

import Background from '~/components/Background';
import Card from '~/components/Card';
import DateInput from '~/components/DateInput/';

export default function Available() {
  const [date, setDate] = useState(new Date());
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    async function loadHackathons() {
      setLoading(true);
      const response = await api.get('/hackathons/avaliable', {
        params: {
          date,
        },
      });

      if (!response.data.length) setEmpty(true);

      setHackathons(response.data);
      setLoading(false);
    }
    loadHackathons();
  }, [date]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        {loading && (
          <ActivityIndicator size={24} color="#fefefe" style={{margin: 50}} />
        )}

        {empty ? (
          <Empty>
            <EmptyText>Nenhum Hackathon foi encontrado.</EmptyText>
            <Icon name="event-busy" size={28} color="rgba(255,255,255,0.2)" />
          </Empty>
        ) : (
          <List
            data={hackathons}
            keyExtractor={hackathon => String(hackathon.id)}
            renderItem={({item}) => <Card data={item} />}
          />
        )}
      </Container>
    </Background>
  );
}

Available.navigationOptions = ({navigation}) => ({
  title: 'Hacakthons disponíveis',
  tabBarIcon: ({tintColor}) => <Icon name="code" size={28} color={tintColor} />,
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={24} color="#fefefe" />
    </TouchableOpacity>
  ),
});
