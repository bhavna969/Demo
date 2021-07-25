import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  location: 'location not available',
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  // console.log(state);
  switch (action.type) {
    case types.SHOW_LOCATION_START:
      return {
        ...state,
        ...state,
        loading: true,
      };
    case types.SHOW_LOCATION_SUCCESS:
      console.log(
        'reducer===>',
        typeof action.payload.place_name,
        typeof INITIAL_STATE.location,
      );
      return {
        ...state,
        ...state,
        location: action.payload.place_name,
      };
    case types.SHOW_LOCATION_FAIL:
      return {
        ...state,
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
