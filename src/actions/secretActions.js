import { FETCH_SECRETS_BEGIN, GET_FETCH_SECRETS_SUCCESS, GET_FETCH_SECRETS_FAILURE } from '../constants/ActionTypes';
import URL from '../constants/api';

export function fetchSecrets() {
  return dispatch => {
    dispatch(fetchSecretsBegin());
    return fetch(URL)
      .then(response => response.json())
      .then(secretData => {
        dispatch(getFetchSecretsSuccess(secretData));
      })
      .catch(error => dispatch(getFetchSecretsFailure(error)));
  }
};

export const fetchSecretsBegin = () => ({
  type: FETCH_SECRETS_BEGIN
});

export const getFetchSecretsSuccess = secretData => ({
  type: GET_FETCH_SECRETS_SUCCESS,
  payload: secretData
});

export const getFetchSecretsFailure = error => ({
  type: GET_FETCH_SECRETS_FAILURE,
  payload: error
});