import { List } from 'immutable';

import { ADD_TRACK } from './../actions/addTrack';
import { REMOVE_TRACK } from './../actions/removeTrack';

const initialState = List(['One', 'Smells like teen spirit']);

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      if (state.includes(action.payload)) {
        return state;
      }
      return state.push(action.payload);
    case REMOVE_TRACK:
      if (!state.includes(action.payload)) {
        return state;
      }
      return state.delete(state.indexOf(action.payload));
    default:
      return state;
  }
}
