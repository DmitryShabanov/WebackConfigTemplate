export const ADD_TRACK = 'ADD_TRACK';

export function addTrack(trackName) {
  return {
    type: ADD_TRACK,
    payload: trackName,
  };
}
