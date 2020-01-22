import {all, call, put, takeLatest} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';
import {singInSucess} from './actions';

export function* singIn({payload}) {
  const {email, password} = payload;

  try {
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const {user, token} = response.data;

    yield put(singInSucess(user, token));
  } catch ({response}) {
    Alert.alert('Error', response.data.error);
  }
}

export function* singUp({payload}) {
  const {name, email, password} = payload;

  try {
    yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    Alert.alert('Success', 'Successfully registered user');
  } catch ({response}) {
    Alert.alert('Error', response.data.error);
  }
}

export default all([
  takeLatest('@auth/SING_IN_REQUEST', singIn),
  takeLatest('@auth/SING_UP_REQUEST', singUp),
]);
