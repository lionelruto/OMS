import React from "react";
import templateConfig from "../templateConfig";
import classnames from "classnames";
import bgImage from "../assets/img/image-login.png"
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,   
   CardBody,
   CardFooter
} from "reactstrap";

const FullPageLayout = ({ children,  ...rest }) => {
   return (
      <div
         className={classnames("login-layout wrapper ", {
            "layout-dark": templateConfig.layoutDark
         })}
      >
         <main className="main text-muted">{children}</main>
      </div>
   );
};

export const FullPageOverlayLayout = ({ children, imgUrl, ...rest }) => {
   return (
 <div>


 <div
         className={classnames("login-layout wrapper background-container radient-purple-bliss", {
            "layout-dark": templateConfig.layoutDark
         })}
         style={{overflow:'hidden'}}
      >
        
    
         <div className="background-container" style={{overflow:'hidden'}}></div>
         <main className="main text-muted child-overlay">{children}</main>
      </div>
     
      </div>
  
   );
};

export default FullPageLayout;
