import React from "react";

const PageFooter = (props: { footer: string }) => {
  return (
    
        <li className="nav-item">
          <a href="#" className="nav footer-nav">
            {props.footer}
          </a>
        </li>
 
  );
};

export default PageFooter;
