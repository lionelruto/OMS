// import external modules
import React, { Component } from "react";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {
   Home,
   Mail,
   MessageSquare,
   ChevronRight,
   Aperture,
   Box,
   Edit,
   Grid,
   Layers,
   Sliders,
   Map,
   BarChart2,
   Calendar,
   Copy,
   Book,
   CheckSquare,
   LifeBuoy,
   Users

} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";
import {
   ADD_PATIENT_ROUTE,
   LOGIN_VIEW_ROUTE,
   MAIN_INFIRMIERE_ROUTE,
   LIST_PATIENT_ROUTE,
   ADD_CARTE_ROUTE,
   MAIN_VIEW_ROUTE,
   LIST_CARTE_ROUTE,
   LIST_USER_ROUTE,
   DASHBOARD,
   LIST_FILE_ROUTE
 } from '../../../../constants/app_utils';
 
class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuMultiItems
               name="Dashboard"
               Icon={<EqualizerIcon style={{fontSize:18}} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to={DASHBOARD} exact className="item" activeclassname="active">
             
                  <span className="menu-item-text">Statistiques</span>
               </NavLink>
               
               
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuSingleItem>
               <NavLink to={LIST_USER_ROUTE} >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Users</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to={LIST_PATIENT_ROUTE} >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Patients</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            {/* <SideMenu.MenuSingleItem>
               <NavLink to="/2" >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Rechercher un patient</span>
               </NavLink>
            </SideMenu.MenuSingleItem> */}
           
            <SideMenu.MenuSingleItem>
               <NavLink to={LIST_CARTE_ROUTE} >
                  <i className="menu-icon">
                     <CreditCardIcon style={{fontSize:18}} />
                  </i>
                  <span className="menu-item-text">Cartes</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem >
               <NavLink to={LIST_FILE_ROUTE} >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Consultaion</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         
         </SideMenu>
      );
   }
}

export default SideMenuContent;
