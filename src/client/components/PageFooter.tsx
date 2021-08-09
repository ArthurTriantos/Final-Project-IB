import React from "react";

const PageFooter = (props: { footer: string }) => {
  return (
    
        <li className="nav-item">
          <a href="#" className="nav-link px-2">
            {props.footer}
          </a>
        </li>
   
  );
};

export default PageFooter;
