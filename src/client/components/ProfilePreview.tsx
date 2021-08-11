import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ profile, hobbies }: { profile: any, hobbies: any }) => {

    let array = [hobbies.sports, hobbies.foodie, hobbies.running, hobbies.travel, hobbies.movies, hobbies.reading,
                hobbies.fashion, hobbies.videogames, hobbies.cycling, hobbies.music, hobbies.swimming, hobbies.hiking,
                hobbies.excercising, hobbies.concerts, hobbies.art, hobbies.cooking, hobbies.singing, hobbies.baking,
                hobbies.animals, hobbies.camping, hobbies.boardgames, hobbies.crafts];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            array[i] = "No"
        } else if (array[i] == 1) {
            array[i] = "Yes"
        }
    }

    return (
        <>
            <div className="profile col-md-10">
                <div className="row d-flex justify-content-center align-items-center">
                    <div id="pic-container" className="col-4">
                        <img src={`${profile.image}`}
                            alt="avatar" width="225rem" height="225rem" />
                    </div>
                    <div id="profilecard-content" className="col-8">
                    <h1 className="activity-header">{profile.firstname}</h1>
                        <hr></hr>
                        <h2>{profile.bio}</h2>
                        <hr></hr>
                        <h2>Spectrum: {profile.spectrum}</h2>
                        <hr></hr>
                        <div className="h6 activity-header">
                            <h6>Age: {profile.age}</h6>
                            <h6>Height: {profile.height}</h6>
                            <h6>Ethnicity: {profile.ethnicity}</h6>
                            <hr></hr>
                            <h6>Gender: {profile.gender}</h6>
                            <h6>Orientation: {profile.orientation}</h6>
                            <h6>Seeking: {profile.relationship}</h6>
                            <hr></hr>
                            <h6>From: {profile.city}, {profile.state}</h6>
                        </div>
                    </div>
                    <div className="hobby container">
                        <h6>Sports: {array[0]}</h6>
                        <h6>Foodie: {array[1]}</h6>
                        <h6>Running: {array[2]}</h6>
                        <h6>Travel: {array[3]}</h6>
                        <h6>Movies: {array[4]}</h6>
                        <h6>Reading: {array[5]}</h6>
                        <h6>Fashion: {array[6]}</h6>
                        <h6>Video Games: {array[7]}</h6>
                        <h6>Dancing: {array[8]}</h6>
                        <h6>Cycling: {array[9]}</h6>
                        <h6>Music: {array[10]}</h6>
                        <h6>Swimming: {array[11]}</h6>
                        <h6>Hiking: {array[12]}</h6>
                        <h6>Excercising: {array[13]}</h6>
                        <h6>Concerts: {array[14]}</h6>
                        <h6>Art: {array[15]}</h6>
                        <h6>Cooking: {array[16]}</h6>
                        <h6>Baking: {array[17]}</h6>
                        <h6>Animals: {array[18]}</h6>
                        <h6>Camping: {array[19]}</h6>
                        <h6>Board Games: {array[20]}</h6>
                        <h6>Crafts: {array[21]}</h6>
                    </div>
                    <br />
                    <Link to={`/edit/${profile.id}`} id="edit-button" className="btn btn-secondary col-10">Edit Profile</Link>
                </div>
            </div>
        </>
    );
};

export default Profile;