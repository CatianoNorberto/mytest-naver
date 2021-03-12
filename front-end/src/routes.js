import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import FormEdit from "./pages/FormEdit";
import FormAdd from "./pages/FormAdd";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Information from "./components/Information";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/form" exact component={FormEdit} />
      <Route path="/forms" exact component={FormAdd} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/information/:id" component={Information} />
    </BrowserRouter>
  );
}
