const defaultState = {
  filters: ['materials', 'technique', 'size','color'],
  products: []
}

export default (state = { ...defaultState }, action) => {
  switch (action.type) {

    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...action.products]
      };

    default:
      return state;
  };
}