const defaultState = {
  filters: ['materials', 'technique', 'size','color'],
  products: [],
  isOverShown: false
}

export default (state = { ...defaultState }, action) => {
  switch (action.type) {

    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...action.products]
      };

    case 'TOGGLE_IS_OVER_SHOWN':
      return {
        ...state,
        isOverShown: !state.isOverShown
      }

    default:
      return state;
  };
}