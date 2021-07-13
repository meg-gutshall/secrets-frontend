import { BEGIN_FETCH, GET_TAGS_SUCCESS, GET_TAGS_FAILURE, POST_TAG_SUCCESS, POST_TAG_FAILURE, GET_SECRETS_SUCCESS, GET_SECRETS_FAILURE, POST_SECRET_SUCCESS, POST_SECRET_FAILURE } from '../constants/ActionTypes';
import URL from '../constants/api';

export function fetchSecrets() {
  return dispatch => {
    dispatch(beginFetch());
    return fetch(URL)
      .then(response => response.json())
      .then(secretData => {
        dispatch(getSecretsSuccess(secretData));
        dispatch(getTagsSuccess(secretData));
      })
      .catch(error => {
        dispatch(getSecretsFailure(error));
        dispatch(getTagsFailure(error));
      });
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
        dispatch(postTagSuccess(secretData));
      })
      .catch(error => {
        dispatch(postSecretFailure(error));
        dispatch(postTagFailure(error));
      });
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

export const getTagsSuccess = secretData => ({
  type: GET_TAGS_SUCCESS,
  payload: secretData
});

export const getTagsFailure = error => ({
  type: GET_TAGS_FAILURE,
  payload: error
});

export const postTagSuccess = secretData => ({
  type: POST_TAG_SUCCESS,
  payload: secretData
});

export const postTagFailure = error => ({
  type: POST_TAG_FAILURE,
  payload: error
});
