import constants from "../util/constants";

export default (state, action) => {
  switch (action.type) {
    case constants.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
