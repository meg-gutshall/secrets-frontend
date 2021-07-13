import { BEGIN_FETCH, GET_TAGS_SUCCESS, GET_TAGS_FAILURE } from '../constants/ActionTypes';

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
      let tagsArray = action.payload.data;
      let tIds = tagsArray.map(tag => parseInt(tag.id, 10));
      return {
        byId: tagsArray.reduce((acc, cv) => ({...acc, [cv.id]: cv.attributes}), {}),
        allIds: tIds,
        isLoading: false
      };
    case GET_TAGS_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export default tagReducer;