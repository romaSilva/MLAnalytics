import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import Reducer from "./Reducer";
import MLAnalyticsAPI from "../services/MLAnalyticsAPI";
import constants from "../util/constants";

const Store = (props) => {
  const initialState = { items: [] };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleItemsDateChange = async (date) => {
    const response = await MLAnalyticsAPI.post("dated-items", {
      date: new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
      ),
    });

    const items = response.data.items.map((item) => {
      return {
        ...item,
        price: parseFloat(item.price),
        available: parseFloat(item.available),
        sold: parseFloat(item.sold),
      };
    });

    dispatch({
      type: constants.SET_ITEMS,
      payload: items,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ items: state.items, handleItemsDateChange }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
