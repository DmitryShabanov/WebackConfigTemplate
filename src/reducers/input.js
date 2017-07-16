import { CHANGE_INPUT } from './../actions/changeInput';

const initialState = '';

export default function input(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.payload;
    default:
      return state;
  }
}
