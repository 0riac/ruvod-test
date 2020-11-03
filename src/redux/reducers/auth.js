import { LOADING, AUTH_SUCCESS, AUTH_ERROR, FORGET_CLIENT } from '../actions/auth';

const reducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: action.payload, error: false };
    }
    case AUTH_SUCCESS: {
      return { ...state, client: action.payload, loading: false, error: false };
    }
    case AUTH_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case FORGET_CLIENT: {
      return { ...state, client: undefined };
    }
    default: return state;
  }
};

export default reducer;
