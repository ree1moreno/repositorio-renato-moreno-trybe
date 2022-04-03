import { UPDATE_SCORE } from '../actions';

const initialState = {
  updateScore: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case UPDATE_SCORE:
    return { ...state,
      updateScore: payload,
    };

  default:
    return state;
  }
};
