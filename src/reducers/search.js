const defaultState = {
  searchValue: 'Search default text',
  filters: ['materials', 'technique', 'size', 'color'],
  products: [],
  detailedProduct: {
    author_id: 1,
    category: 'category',
    created_at: '2018-11-15T15:39:04.000Z',
    id: 6,
    img: 'http://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_c2_i6_w640.jpeg',
    price: 24.01,
    product_desc: 'description',
    product_id: 6,
    title: 'Lamp'
  },
  cart: [],
  logged: false,
  user: null,
  isOverShown: false
}

export default (state = (localStorage['redux-store'] ?
            JSON.parse(localStorage['redux-store']) :
            state
 ), action) => {
  switch (action.type) {

    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue
      };

    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...action.products]
      };

    case 'ADD_DETAILED_PRODUCT':
      return {
        ...state,
        detailedProduct: action.product
      };

    case 'TOGGLE_IS_OVER_SHOWN':
      return {
        ...state,
        isOverShown: !state.isOverShown
      };

    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          action.product
        ]
      };

      case 'CART_CHANGE_QTY':
      return {
        ...state,
        cart: state.cart.map((prod)=>{
          if(prod.id === action.productID){
            return {...prod, current_order_qty: (prod.current_order_qty + 1)}
          }else{
            return prod;
          }
        })
      };

      case 'USER_LOGIN':
      return {
        ...state,
        logged: true,
        user: action.user
      }

    default:
      return state;
  };
}