const defaultState = {
  number: 1
}

export default (state = { ...defaultState }, action) => {
  switch (action.type) {

    case 'ADD_ONE':
      return {
        ...state,
        number: state.number + 1
      }

    case 'SUBTRACT_ONE':
      return {
        ...state,
        number: state.number - 1
      }

    default:
      return state;
  }
}