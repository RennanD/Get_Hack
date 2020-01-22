import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import {store, persistor} from './store';

import Routes from './routes';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#292a2e" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
