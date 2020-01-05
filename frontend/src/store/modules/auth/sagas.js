import { all, call, put, takeLatest } from 'redux-saga/effects';

import { singInFailure, singInSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* singUp({ payload }) {
    const { name, email, password } = payload;

    try {
        yield call(api.post, '/users', {
            name,
            email,
            password,
        });

        history.push('/');
    } catch (err) {
        yield put(singInFailure());
    }
}

export function* singIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        yield put(singInSuccess(token, user));
        history.push('/dashboard');
    } catch (err) {
        console.tron.error(err);
        yield put(singInFailure());
    }
}

export default all([
    takeLatest('@auth/SING_IN_REQUEST', singIn),
    takeLatest('@auth/SING_UP_REQUEST', singUp),
]);
