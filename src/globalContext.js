import React, { createContext, useContext, useReducer } from 'react';
import actionType from './actionType';

const GlobalContext = createContext();

const initialState = {
  appShowNavLogo: false,
  globalVariable2: 'initialValue2',
  // Add more global variables here
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case actionType.APP_SHOW_NAV_LOGO:
      return { ...state, appShowNavLogo: action.payload };
    case 'UPDATE_GLOBAL_VARIABLE_2':
      return { ...state, globalVariable2: action.payload };
    // Add more cases for other global variables
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);