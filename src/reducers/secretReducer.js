import { BEGIN_FETCH, GET_SECRETS_SUCCESS, GET_SECRETS_FAILURE, POST_SECRET_SUCCESS, POST_SECRET_FAILURE } from '../constants/ActionTypes';

const initialState = {
  list: [],
  allIds: [],
  isLoading: true
}

const secretReducer = function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case BEGIN_FETCH:
      return {
        ...state,
        isLoading: true
      };
    case GET_SECRETS_SUCCESS:
      let sIds = action.payload.data.map(secret => parseInt(secret.id, 10));
      let sData = action.payload.data.map(secret => secret.attributes);
      return {
        list: [...state.list, ...sData],
        allIds: [...state.allIds, ...sIds],
        isLoading: false
      };
    case GET_SECRETS_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export default secretReducer;