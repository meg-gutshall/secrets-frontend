import { BEGIN_FETCH, GET_TAGS_SUCCESS, GET_TAGS_FAILURE, POST_TAG_SUCCESS, POST_TAG_FAILURE } from '../constants/ActionTypes';

const initialState = {
  byId: {},
  allIds: [],
  isLoading: true
}

const tagReducer = function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case BEGIN_FETCH:
      return {
        ...state,
        isLoading: true
      };
    case GET_TAGS_SUCCESS:
      let tIds = action.payload.included.map(tag => parseInt(tag.id, 10));
      return {
        byId: action.payload.included.reduce((acc, cv) => ({...acc, [cv.id]: cv.attributes}), {}),
        allIds: tIds,
        isLoading: false
      };
    case GET_TAGS_FAILURE:
      return action.payload;
    case POST_TAG_SUCCESS:
      let tId = parseInt(action.payload.included.id, 10);
      return {
        byId: {
          ...state.byId,
          tId: action.payload.included.attributes
        },
        allIds: state.allIds.concat(tId),
        isLoading: false
      };
    case POST_TAG_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export default tagReducer;