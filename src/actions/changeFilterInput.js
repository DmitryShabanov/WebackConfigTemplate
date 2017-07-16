export const CHANGE_FILTER_INPUT = 'CHANGE_FILTER_INPUT';

export function changeFilterInput(filter) {
  return {
    type: CHANGE_FILTER_INPUT,
    payload: filter,
  };
}
