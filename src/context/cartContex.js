import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return {
        cart: [...state.cart, payload],
      };
    case 'DELETE_FROM_CART':
      return {
        cart: state.cart.filter((item) => item !== payload),
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
