// import external modules
import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "./components/spinner/spinner";
import MainInfirmiereView from "./components/pages/infirmieres/index";
import NoauthRoute from "./layouts/routes/unProtectedRoute";
import SimpleRoute from  "./layouts/routes/simpleRoute";

// import internal(own) modules
// import ProtectedRoute from "./layouts/routes/protectedRoute";

import MainLayout from "./layouts/mainLayout";

import {
 
  MAIN_VIEW_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE
} from "./constants/app_utils";

class ApplicationRouter extends Component {
  render() {
    return (
      // Set the directory path if you are deplying in sub-folder
      <BrowserRouter basename='/'>
        <Switch>
            <SimpleRoute
            exact
            path={MAIN_INFIRMIERE_ROUTE}
            render={matchprops => (
              <MainLayout>
                {" "}
                <MainInfirmiereView {...matchprops} />{" "}
              </MainLayout>
            )}
           /> 
        
          {/* <NoAuthRoute
            exact
            path={LOGIN_VIEW_ROUTE}
            render={matchprops => (
              <FullPageOverlayLayout>
                {" "}
                <LoginView {...matchprops} />{" "}
              </FullPageOverlayLayout>
            )}
          /> */}
              {/* <NoAuthRoute
            exact
            path={USER_FORGOT_PASSWORD}
            render={matchprops => (
              <FullPageOverlayLayout>
                {" "}
                <ForgotUserPassView {...matchprops} />{" "}
              </FullPageOverlayLayout>
            )}
          /> */}
             {/* <NoAuthRoute
            exact
            path={USER_RESET_MAIL_PASSWORD}
            render={matchprops => (
              <FullPageOverlayLayout>
                {" "}
                <SendEmailResetPass {...matchprops} />{" "}
              </FullPageOverlayLayout>
            )}
          /> */}
             {/* <NoAuthRoute
            exact
            path={USER_ADD_PASSWORD}
            render={matchprops => (
              <FullPageOverlayLayout>
                {" "}
                <AddgotUserPassView {...matchprops} />{" "}
              </FullPageOverlayLayout>
            )}
          /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default ApplicationRouter;
