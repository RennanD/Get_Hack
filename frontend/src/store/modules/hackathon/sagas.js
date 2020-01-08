import { all, call, takeLatest, put } from 'redux-saga/effects';

import { hackDetailSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* showDetails({ payload }) {
    const { id } = payload;

    const response = yield call(api.get, `/hackathons/${id}/details`);

    yield put(hackDetailSuccess(response.data));

    history.push('/hackathons/details');
}

export default all([takeLatest('@hackathon/DETAIL_REQUEST', showDetails)]);
