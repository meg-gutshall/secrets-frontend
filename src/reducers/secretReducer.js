import { FETCH_SECRETS_BEGIN, FETCH_SECRETS_SUCCESS, FETCH_SECRETS_FAILURE } from '../constants/ActionTypes';

const initialState = {
  byId: new Map(),
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
      debugger
      // ! MANIPULATE DATA HERE
      let sIds = action.payload.data.map(secret => parseInt(secret.id, 10))
      let sData = action.payload.data.map(secret => secret.attributes)
      let map = new Map();
      for (let i = 0; i < sIds.length; i++) {
        map.set(sIds[i], sData[i]);
      }
      return {
        ...state,
        byId: map,
        allIds: sIds
      };
    case FETCH_SECRETS_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export default secretReducer;