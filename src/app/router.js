// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

// Main Layout
const LazyInfirmier = lazy(() => import("../components/pages/infirmieres/index"));

import {
 
   MAIN_VIEW_ROUTE,
   LOGIN_VIEW_ROUTE,
   MAIN_INFIRMIERE_ROUTE
 } from "./../constants/app_utils";
 

// Full Layout
// const LazyForgotPassword = lazy(() => import("../views/pages/forgotPassword"));
// const LazyLogin = lazy(() => import("../views/pages/login"));
// const LazyRegister = lazy(() => import("../views/pages/register"));
// const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));
// const LazyLockScreen = lazy(() => import("../views/pages/lockScreen"));

// Error Pages
// const LazyErrorPage = lazy(() => import("../views/pages/error"));

class Router extends Component {
   render() {
      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename={MAIN_INFIRMIERE_ROUTE}>
            <Switch>
               {/* Dashboard Views */}
               <MainLayoutRoutes
                  exact
                  path={MAIN_INFIRMIERE_ROUTE}
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyInfirmier {...matchprops} />
                     </Suspense>
                  )}/>
        
        
               {/* <ErrorLayoutRoute
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               /> */}
            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
