import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

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

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(singInSuccess(token, user));

        history.push('/dashboard');
    } catch ({ response }) {
        toast.error(response.data.error);
        yield put(singInFailure());
    }
}

export function singOut() {
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SING_IN_REQUEST', singIn),
    takeLatest('@auth/SING_UP_REQUEST', singUp),
    takeLatest('@auth/SING_OUT', singOut),
]);
