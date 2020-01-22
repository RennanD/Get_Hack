export function singInRequest(email, password) {
  return {
    type: '@auth/SING_IN_REQUEST',
    payload: {email, password},
  };
}

export function singInSucess(user, token) {
  return {
    type: '@auth/SING_IN_REQUEST',
    payload: {user, token},
  };
}

export function singFailure() {
  return {
    type: '@auth/SING_FAILURE',
  };
}
