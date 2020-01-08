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
