export const CHANGE_INPUT = 'CHANGE_INPUT';

export function changeInput(inputValue) {
  return {
    type: CHANGE_INPUT,
    payload: inputValue,
  };
}
