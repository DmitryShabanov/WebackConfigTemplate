export const REMOVE_TRACK = 'REMOVE_TRACK';

export function removeTrack(trackName) {
  return {
    type: REMOVE_TRACK,
    payload: trackName,
  };
}
