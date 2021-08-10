import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div id="header-container" className="row">
                <div className="col-md-4"></div>
                <h1 id="header-title" className="col-md-4">
                    iNDie Connect
                </h1>
                <div className="col-md-4"></div>
            <div id="link-container" className="row d-flex justify-content-center">
                <Link to={'/'} id="hub-button" className="btn col-md-4 m-2">Main Hub</Link>
                <Link to={'/edit/:id'} id="edit-button" className="btn col-md-4 m-2">Edit</Link>
                <Link to={'/activities'} id="activities-button" className="btn col-md-4 m-2">Activities</Link>
            </div>
            </div>
        </>
    )
};

export default Header;