import addToList from "../actions/addToList";

const INITIAL_STATE = {
  list: [],
}

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case addToList:
      return {
        ...state,
        list: [...state.list, action.state],
      }
      default:
        return state;
  }
}

export default listReducer;
