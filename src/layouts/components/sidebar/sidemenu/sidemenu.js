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
             
                  <span className="menu-item-text">Mon Dossier Medical</span>
               </NavLink>
               
            </SideMenu.MenuMultiItems>
            <SideMenu.MenuSingleItem>
               <NavLink to="/1" >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Enregistrer un patient</span>
               </NavLink>
            </SideMenu.MenuSingleItem>
            <SideMenu.MenuSingleItem>
               <NavLink to="/2" >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Rechercher un patient</span>
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
            <SideMenu.MenuSingleItem>
               <NavLink to="/2" >
                  <i className="menu-icon">
                     <Users size={18} />
                  </i>
                  <span className="menu-item-text">Paramettres </span>
               </NavLink>
            </SideMenu.MenuSingleItem>
         
         </SideMenu>
      );
   }
}

export default SideMenuContent;
