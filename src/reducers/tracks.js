import { ADD_TRACK } from './../actions/addTrack';
import { REMOVE_TRACK } from './../actions/removeTrack';

const initialState = ['One', 'Smells like teen spirit'];

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.payload];
    case REMOVE_TRACK:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}
