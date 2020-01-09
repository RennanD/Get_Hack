import { all, call, takeLatest, put } from 'redux-saga/effects';
import { parseISO } from 'date-fns';

import { toast } from 'react-toastify';

import { hackDetailSuccess, hackUpdateSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* addHackathon({ payload }) {
    const { data } = payload;

    try {
        const hackathon = Object.assign({
            ...data,
            banner_id: 9,
        });

        console.tron.log(hackathon);

        yield call(api.post, '/hackathons', hackathon);

        toast.success('Hackathon cadastrado com sucesso.');

        history.push('/dashboard');
    } catch ({ response }) {
        toast.error(response.data.error);
    }
}

export function* showDetails({ payload }) {
    const { id } = payload;

    const response = yield call(api.get, `/hackathons/${id}/details`);

    const details = Object.assign({
        ...response.data,
        dateFormatted: parseISO(response.data.date),
    });

    yield put(hackDetailSuccess(details));

    history.push('/hackathons/details');
}

export function* updateHackathon({ payload }) {
    const { data } = payload;

    try {
        const response = yield call(api.put, `/hackathons/${data.id}`, data);

        toast.success('Dados alterado com sucesso');

        yield put(hackUpdateSuccess(response.data));
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
