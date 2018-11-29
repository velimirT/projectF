const defaultState = {
  searchValue: 'Search default text',
  active_category: null,
  active_filter: null,
  categories:[
    { 
      name: 'drawings',
      filters:['materials']
    }
  ],
  filters: [
    
  ],
  cart: [],
  products: [],
  orders: [],
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
  logged: false,
  user: null,
  userInfo: null,
  isOverShown: false
}

export default (state = (localStorage['redux-store'] ?
  JSON.parse(localStorage['redux-store']) :
  defaultState
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

    case 'ADD_ORDERS':
      return {
        ...state,
        orders: [...action.orders]
      };

    case 'ADD_USER_INFO':
      return {
        ...state,
        userInfo: { ...action.userInfo }
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

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.productID)
      };

    case 'CART_CHANGE_QTY':
      return {
        ...state,
        cart: state.cart.map((prod) => {
          if (prod.id === action.productID) {
            return { ...prod, current_order_qty: (prod.current_order_qty + 1) }
          } else {
            return prod;
          }
        })
      };

    case 'SUBTRUCT_FROM_QTY':
      return {
        ...state,
        cart: state.cart.map((prod) => {
          if (prod.id === action.productID) {
            return { ...prod, current_order_qty: (prod.current_order_qty - 1) }
          } else {
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

    case 'USER_LOGOUT':
      return {
        ...state,
        logged: false,
        user: null
      }

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }

    case 'SET_FILTER':
      return{
        ...state,
        filters: state.filters.map((filter) => {
          if(filter.name === action.name){
            return {name: filter.name,  value: action.value}
          }else{
            return filter;
          }
        })
      }

      case 'CHOOSE_CATEGORY':
      return{
        ...state,
        active_category: action.id,
        filters: state.categories[action.id].filters.map((filter)=>{
          return {name: filter, value: null}
        })
      }

      case 'CHOOSE_FILTER':
      return{
        ...state,
        active_filter: action.name
      }

    default:
      return state;
  };
}