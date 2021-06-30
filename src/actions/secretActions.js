import { BEGIN_FETCH, GET_SECRETS_SUCCESS, GET_SECRETS_FAILURE, POST_SECRET_SUCCESS, POST_SECRET_FAILURE } from '../constants/ActionTypes';
import URL from '../constants/api';

export function fetchSecrets() {
  return dispatch => {
    dispatch(beginFetch());
    return fetch(URL)
      .then(response => response.json())
      .then(secretData => {
        dispatch(getSecretsSuccess(secretData));
      })
      .catch(error => dispatch(getSecretsFailure(error)));
  }
};

export function postSecret(newSecret) {
  return dispatch => {
    dispatch(beginFetch());
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(newSecret)
    }
    return fetch(URL, configObj)
      .then(response => response.json())
      .then(secretData => {
        dispatch(postSecretSuccess(secretData));
      })
      .catch(error => dispatch(postSecretFailure(error)));
  }
};

export const beginFetch = () => ({
  type: BEGIN_FETCH
});

export const getSecretsSuccess = secretData => ({
  type: GET_SECRETS_SUCCESS,
  payload: secretData
});

export const getSecretsFailure = error => ({
  type: GET_SECRETS_FAILURE,
  payload: error
});

export const postSecretSuccess = secretData => ({
  type: POST_SECRET_SUCCESS,
  payload: secretData
});

export const postSecretFailure = error => ({
  type: POST_SECRET_FAILURE,
  payload: error
});