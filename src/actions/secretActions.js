import { FETCH_SECRETS_BEGIN, FETCH_SECRETS_SUCCESS, FETCH_SECRETS_FAILURE } from '../constants/ActionTypes';

export function fetchSecrets() {
  return dispatch => {
    dispatch(fetchSecretsBegin());
    return fetch(`http://localhost:3001/api/recipients`)
      .then(response => response.json())
      .then(secretData => {
        dispatch(fetchSecretsSuccess(secretData));
      })
      .catch(error => dispatch(fetchSecretsFailure(error)));
  }
};

export const fetchSecretsBegin = () => ({
  type: FETCH_SECRETS_BEGIN
});

export const fetchSecretsSuccess = secretData => ({
  type: FETCH_SECRETS_SUCCESS,
  payload: secretData
});

export const fetchSecretsFailure = error => ({
  type: FETCH_SECRETS_FAILURE,
  payload: error
});