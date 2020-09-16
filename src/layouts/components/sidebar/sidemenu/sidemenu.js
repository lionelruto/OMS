// import external modules
import React, { Component } from "react";

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
   LIST_CARTE_ROUTE
 } from '../../../../constants/app_utils';
 
class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
            <SideMenu.MenuMultiItems
               name="Dashboard"
               Icon={<Home size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/0" exact className="item" activeclassname="active">
             
                  <span className="menu-item-text">Dossier Medical</span>
               </NavLink>
               
            </SideMenu.MenuMultiItems>
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
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Cartes</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem >
               <NavLink to="/asd" >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Fille D'attente</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         
         </SideMenu>
      );
   }
}

export default SideMenuContent;
