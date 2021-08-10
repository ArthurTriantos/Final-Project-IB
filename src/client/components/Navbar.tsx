import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div id="header-container" className="row">
                {/* <div className="col-md-4"></div> */}
                <h1 id="header-title" className="col-md-4">
                    iNDie Connect
                </h1>
                {/* <div className="col-md-4"></div> */}
            <div id="link-container" className="col-md-8 d-flex justify-content-end">
                <Link to={'/hub'} id="hub-button" className="btn col-md-2 m-2">Main Hub</Link>
                <Link to={'/edit'} id="edit-button" className="btn col-md-2 m-2">Edit</Link>
                <Link to={'/activities'} id="activities-button" className="btn col-md-2 m-2">Activities</Link>
                <Link to={'/chat'} id="chat-button" className="btn col-md-2 m-2">Chat</Link>
            </div>
            </div>
        </>
    )
};

export default Navbar;