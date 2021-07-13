import { BEGIN_FETCH, GET_SECRETS_SUCCESS, GET_SECRETS_FAILURE, POST_SECRET_SUCCESS, POST_SECRET_FAILURE } from '../constants/ActionTypes';

const initialState = {
  byId: {},
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
      return {
        byId: action.payload.data.reduce((acc, cv) => ({...acc, [cv.id]: cv.attributes}), {}),
        allIds: sIds,
        isLoading: false
      };
    case GET_SECRETS_FAILURE:
      return action.payload;
    case POST_SECRET_SUCCESS:
      let sId = parseInt(action.payload.data.id, 10);
      return {
        byId: {
          ...state.byId,
          sId: action.payload.data.attributes
        },
        allIds: state.allIds.concat(sId),
        isLoading: false
      };
    case POST_SECRET_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export default secretReducer;