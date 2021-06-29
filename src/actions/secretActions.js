import { FETCH_SECRETS_BEGIN, FETCH_SECRETS_SUCCESS, FETCH_SECRETS_FAILURE } from '../constants/ActionTypes';
import URL from '../constants/api';

export function fetchSecrets() {
  return dispatch => {
    dispatch(fetchSecretsBegin());
    return fetch(URL)
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