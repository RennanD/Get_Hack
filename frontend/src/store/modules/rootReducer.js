import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import hackathon from './hackathon/reducer';

export default combineReducers({
    auth,
    user,
    hackathon,
});
