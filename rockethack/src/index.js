import React from 'react';
import {StatusBar} from 'react-native';

// import { Container } from './styles';

import Routes from './routes';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#292a2e" />
      <Routes />
    </>
  );
}
