import {produce} from 'immer';

const INIT_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INIT_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SING_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SING_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case '@auth/SING_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
