import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import hackathon from './hackathon/sagas';

export default function* rootSaga() {
    return yield all([auth, hackathon]);
}
