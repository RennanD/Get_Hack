export function hackDetailRequest(id) {
    return {
        type: '@hackathon/DETAIL_REQUEST',
        payload: { id },
    };
}

export function hackDetailSuccess(data) {
    return {
        type: '@hackathon/DETAIL_SUCCESS',
        payload: { data },
    };
}

export function hackUpdateRequest(data) {
    return {
        type: '@hackathon/UPDADE_REQUEST',
        payload: { data },
    };
}

export function hackUpdateSuccess(info) {
    return {
        type: '@hackathon/UPDADE_SUCCESS',
        payload: { info },
    };
}

export function hackCancel(id) {
    return {
        type: '@hackathon/CANCEL',
        payload: { id },
    };
}
