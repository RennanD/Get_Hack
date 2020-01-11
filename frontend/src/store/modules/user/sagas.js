import { all, put, call, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileFailure, updateProfileSuccess } from './action';

export function* updateProfile({ payload }) {
    const { name, email, avatar_id, ...rest } = payload.data;

    try {
        const profile = Object.assign(
            {
                name,
                email,
                avatar_id,
            },
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, '/users', profile);

        toast.success('Successfully changed data');

        yield put(updateProfileSuccess(response.data));
    } catch ({ response }) {
        toast.error(response.data.error);

        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
