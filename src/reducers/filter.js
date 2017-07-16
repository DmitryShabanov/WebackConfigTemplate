import { CHANGE_FILTER_INPUT } from './../actions/changeFilterInput';

const initialState = '';

export default function filter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_INPUT:
      return action.payload;
    default:
      return state;
  }
}
