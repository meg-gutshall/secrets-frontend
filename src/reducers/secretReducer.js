import { FETCH_SECRETS_BEGIN, FETCH_SECRETS_SUCCESS, FETCH_SECRETS_FAILURE } from '../constants/ActionTypes';

const initialState = {
  list: [],
  allIds: []
}

const secretReducer = function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_SECRETS_BEGIN:
      return state;
    case FETCH_SECRETS_SUCCESS:
      let sIds = action.payload.data.map(secret => parseInt(secret.id, 10));
      let sData = action.payload.data.map(secret => secret.attributes);
      return {
        ...state,
        list: sData,
        allIds: sIds
      };
    case FETCH_SECRETS_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export default secretReducer;