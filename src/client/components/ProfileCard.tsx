import React from 'react';
import { Link } from 'react-router-dom';


const Profile = ({ profile }) => {
    return (
        <>
            <div className="profile">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt="avatar" width="75px" height="75px"/>
                <h3>{profile.firstname}</h3>
                <h6>Age: {profile.age}</h6>
                <h6>Gender: {profile.gender}</h6>
                <h6>Orientation: {profile.orientation}</h6>
                <h6>Seeking: {profile.relationship}</h6>
                <h6>From: {profile.city}, {profile.state}</h6>
                <br />
                <Link to={`/profile/${profile.id}`} id="profile-button" className="btn btn-secondary">More Info</Link>
            </div>
        </>
    );
};

export default Profile;