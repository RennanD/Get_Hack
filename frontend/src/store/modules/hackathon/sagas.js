import { all, call, takeLatest, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { hackDetailSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* showDetails({ payload }) {
    const { id } = payload;

    const response = yield call(api.get, `/hackathons/${id}/details`);

    yield put(hackDetailSuccess(response.data));

    history.push('/hackathons/details');
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
    takeLatest('@hackathon/DETAIL_REQUEST', showDetails),
    takeLatest('@hackathon/CANCEL', cancelHackathon),
]);
