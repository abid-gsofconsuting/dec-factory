import React from "react";
import { Switch,Route } from "react-router-dom";
import ProtectedRoute from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Login from "../pages/auth/login";
import Landing from "../pages/landing";
import Dashboard from "../pages/dashboard";


function Routes() {
  return (
      <Switch>
        <ProtectedRoute exact  path="/dashboard" component={Dashboard} />
        <PublicRoutes exact  path="/login" component={Login} />
        <Route exact  path="/" component={Landing} />
      </Switch>
  );
}

export default Routes;