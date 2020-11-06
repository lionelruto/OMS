// import external modules
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Spinner from './components/spinner/spinner';
import MainInfirmiereView from './containers/infirmieres/main';
import PatientsListPatientsView from './containers/patients/manage_patient';
import PatientsListCartesView from './containers/cartes/manage_cartes';
import UsersListCartesView from './containers/users/manage_user';
import LoginRouteView from './containers/auth/login_view'
import DashboardView from './containers/dashboards/index'
import CartesListView from './containers/cartes/manage_cartes'
import FilesListView from './containers/file_attente/manager_file'
import ConsultationView from './containers/consultation/manage_consultation'
import Users_DMP from './containers/DMP/Manage_DMP.js'



import FullPageLayout from "./layouts/fullpageLayout";
import { FullPageOverlayLayout } from "./layouts/fullpageLayout";
import NoAuthRoute from './layouts/routes/unProtectedRoute';
import SimpleRoute from './layouts/routes/simpleRoute';

// import internal(own) modules
// import ProtectedRoute from "./layouts/routes/protectedRoute";

import MainLayout from './layouts/mainLayout';

import {
  EDIT_FILE_ROUTE,
  ADD_FILE_ROUTE,
  LIST_FILE_ROUTE,
  ADD_PATIENT_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_PATIENT_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  LIST_USER_ROUTE,
  ADD_USER_ROUTE,
  DASHBOARD,
  USER_DMP,
  LIST_CONSULTATION_ROUTE,
  ADD_CONSULTATION_ROUTE,
  DELETE_CONSULTATION_ROUTE,
  EDIT_CONSULTATION_ROUTE,
  HYPOTHSE_CONSULTATION_ROUTE,
  ENQUETE_CONSULTATION_ROUTE,
  ANALYSE_CONSULTATION_ROUTE,
  EXAMEN_PHYSIQUE_CONSULTATION_ROUTE,
  ADD_INDEX_CONSULTATION_ROUTE
} from './constants/app_utils';



class ApplicationRouter extends Component {
  render() {
    return (
      // Set the directory path if you are deplying in sub-folder
      <BrowserRouter basename="/">
        <Switch>
        {/* <SimpleRoute
            exact
            path={LOGIN_VIEW_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <LoginRouteView {...matchprops} />{' '}
              </MainLayout>
            )}
          /> */}
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
            path={DASHBOARD}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <DashboardView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
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
            path={USER_DMP}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <Users_DMP {...matchprops} />{' '}
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
                <CartesListView {...matchprops} />{' '}
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
                <CartesListView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
                  <SimpleRoute
            exact
            path={LIST_FILE_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <FilesListView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
                <SimpleRoute
            exact
            path={EDIT_FILE_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <FilesListView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
          

<SimpleRoute
            exact
            path={ADD_FILE_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <FilesListView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
          <SimpleRoute
            exact
            path={ADD_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={LIST_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={EDIT_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={HYPOTHSE_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={ENQUETE_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={ANALYSE_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
           <SimpleRoute
            exact
            path={EXAMEN_PHYSIQUE_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
              <SimpleRoute
            exact
            path={ADD_INDEX_CONSULTATION_ROUTE}
            render={(matchprops) => (
              <MainLayout>
                {' '}
                <ConsultationView {...matchprops} />{' '}
              </MainLayout>
            )}
          />
          

          

          <NoAuthRoute
            exact
            path={LOGIN_VIEW_ROUTE}
            render={matchprops => (
              <FullPageOverlayLayout>
                {" "}
                <LoginRouteView {...matchprops} />{" "}
              </FullPageOverlayLayout>
            )}
          />
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
