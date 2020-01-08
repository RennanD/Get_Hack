import { combineReducers } from 'redux';

import auth from './auth/reducer';
import hackathon from './hackathon/reducer';

export default combineReducers({
    auth,
    hackathon,
});
