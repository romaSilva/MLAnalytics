import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Store from "./store/Store";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Store>
        <Route component={Home} exact path="/" />
      </Store>
    </BrowserRouter>
  );
};

export default Routes;