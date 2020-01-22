import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '~/services/api';

export function* singIn({payload}) {
  const {email, password} = payload;

  const response = yield call(api.post, '/sessions', {
    email,
    password,
  });

  console.tron.log(response.data);
}

export default all([takeLatest('@auth/SING_IN_REQUEST', singIn)]);
