import React, { useReducer } from "react";

import GlobalContext from "./GlobalContext";
import Reducer from "./Reducer";

const Store = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
};

export default Store;
