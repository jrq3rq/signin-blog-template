// setup data layer
import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE THE DATA LAYER
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
