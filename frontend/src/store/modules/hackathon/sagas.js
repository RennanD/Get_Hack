import { all, call, takeLatest, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { hackDetailSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* addHackathon({ payload }) {
    const { data } = payload;

    try {
        yield call(api.post, '/hackathons', data);

        toast.success('Hackathon cadastrado com sucesso.');

        history.push('/dashboard');
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export function* showDetails({ payload }) {
    const { id: hackId } = payload;

    const response = yield call(api.get, `/hackathons/${hackId}/details`);

    yield put(hackDetailSuccess(response.data));

    history.push('/hackathons/details');
}

export function* updateHackathon({ payload }) {
    const { data } = payload;

    try {
        yield call(api.put, `/hackathons/${data.id}`, data);

        const response = yield call(api.get, `/hackathons/${data.id}/details`);

        yield put(hackDetailSuccess(response.data));

        toast.success('Dados alterado com sucesso');

        history.push('/hackathons/details');
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export function* cancelHackathon({ payload }) {
    try {
        const { id } = payload;

        const response = yield call(api.delete, `/hackathons/${id}`);

        toast.success(response.data.msg);

        history.push('/dashboard');
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export default all([
    takeLatest('@hackathon/ADD_REQUEST', addHackathon),
    takeLatest('@hackathon/DETAIL_REQUEST', showDetails),
    takeLatest('@hackathon/UPDATE_REQUEST', updateHackathon),
    takeLatest('@hackathon/CANCEL', cancelHackathon),
]);
