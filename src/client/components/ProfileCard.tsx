import React from 'react';
import { Link } from 'react-router-dom';


const Profile = ({ profile }: { profile: any }) => {
    return (
        <>
            <div className="profile col-md-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div id="pic-container" className="col-4">
                        <img src={`${profile.image}`}
                            alt="avatar" width="225rem" height="225rem" />
                    </div>
                    <div id="profilecard-content" className="col-8">
                        <h2 className="activity-header">{profile.firstname}</h2>
                        <div className="h6 activity-header">
                            <h6>Age: {profile.age}</h6>
                            <h6>Gender: {profile.gender}</h6>
                            <h6>Orientation: {profile.orientation}</h6>
                            <h6>Seeking: {profile.relationship}</h6>
                            <h6>From: {profile.city}, {profile.state}</h6>
                        </div>
                    </div>
                    <br />
                    <Link to={`/profile/${profile.id}`} id="profile-button" className="btn btn-secondary col-10">More Info</Link>
                </div>
            </div>
        </>
    );
};

export default Profile;