import { LOGIN_ACTION_CREATOR } from '../actions';

const initialState = {
  name: '',
  email: '',
  score: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case LOGIN_ACTION_CREATOR:
    return { ...state, ...payload };

  default:
    return state;
  }
};
