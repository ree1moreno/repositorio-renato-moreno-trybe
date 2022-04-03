import { REQUEST_QUESTIONS } from '../actions';

const initialState = {
  questions: [],
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_QUESTIONS:
    return { ...state,
      questions: payload,
      isLoading: !state.isLoading,
    };

  default:
    return state;
  }
};
