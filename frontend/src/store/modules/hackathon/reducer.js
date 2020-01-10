import { produce } from 'immer';

const INITIAL_STATE = {
    details: null,
    loading: false,
};

export default function hackathon(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@hackathon/DETAIL_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@hackathon/DETAIL_SUCCESS': {
                draft.details = action.payload.data;
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
