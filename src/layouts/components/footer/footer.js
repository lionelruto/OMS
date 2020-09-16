import React from "react";
import { ShoppingCart } from "react-feather";

import templateConfig from "../../../templateConfig";

const Footer = props => (
   <footer>
  
      
      <div className="container-fluid">
         <p className="text-center">
            © 2020{" "}
            <a
               href="https://pixinvent.com/demo/apex-react-redux-bootstrap-admin-dashboard-template/landing-page/"
               rel="noopener noreferrer"
               target="_blank"
            >
               Yamiseuh{" "}
            </a>
            Crafted by <i className="ft-heart font-small-3" />            
            {/* <a href="https://pixinvent.com/" rel="noopener noreferrer" target="_blank"> */}
               {" "}
              Yamiseuh
            {/* </a> */}
         </p>
      </div>
   </footer>
);

export default Footer;
