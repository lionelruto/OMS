// import external modules
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Spinner from './components/spinner/spinner';
import MainInfirmiereView from './containers/infirmieres/main';
import PatientsListPatientsView from './containers/patients/manage_patient';
import PatientsListCartesView from './containers/cartes/manage_cartes';
import UsersListCartesView from './containers/users/manage_user';


import NoauthRoute from './layouts/routes/unProtectedRoute';
import SimpleRoute from './layouts/routes/simpleRoute';

// import internal(own) modules
// import ProtectedRoute from "./layouts/routes/protectedRoute";

import MainLayout from './layouts/mainLayout';

import {
  ADD_PATIENT_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_PATIENT_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  LIST_USER_ROUTE,
  ADD_USER_ROUTE
} from './constants/app_utils';



class ApplicationRouter extends Component {
  render() {
    return (
      // Set the directory path if you are deplying in sub-folder
      <BrowserRouter basename="/">
        <Switch>
        <SimpleRoute
            exact
            path={LOGIN_VIEW_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <MainInfirmiereView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
          {/* <SimpleRoute
            exact
            path={MAIN_INFIRMIERE_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <MainInfirmiereView {...matchprops} />{' '}
              </MainLayout>
            )}
          /> */}
           <SimpleRoute
            exact
            path={ADD_PATIENT_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <PatientsListPatientsView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
               <SimpleRoute
            exact
            path={ADD_USER_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <UsersListCartesView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
             <SimpleRoute
            exact
            path={LIST_USER_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <UsersListCartesView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={ADD_CARTE_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <MainInfirmiereView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
         
        <SimpleRoute
            exact
            path={MAIN_VIEW_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <MainInfirmiereView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={LIST_PATIENT_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <PatientsListPatientsView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
                     <SimpleRoute
            exact
            path={LIST_CARTE_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <PatientsListCartesView {...matchprops} />{' '}
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
