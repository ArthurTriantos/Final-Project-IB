import React from 'react';

const Profile = ({ profile, hobbies }: { profile: any, hobbies: any }) => {

    let array = [hobbies.sports, hobbies.foodie, hobbies.running, hobbies.travel, hobbies.movies, hobbies.reading,
                hobbies.fashion, hobbies.videogames, hobbies.dancing, hobbies.cycling, hobbies.music, hobbies.swimming, hobbies.hiking,
                hobbies.excercising, hobbies.concerts, hobbies.art, hobbies.cooking, hobbies.singing, hobbies.baking,
                hobbies.animals, hobbies.camping, hobbies.boardgames, hobbies.crafts];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            array[i] = "x"
        } else if (array[i] == 1) {
            array[i] = "✓"
        }
    }

    return (
        <>
            <div className="profile col-md-10">
                <div className="row d-flex justify-content-center align-items-center">
                    <div id="pic-container" className="col-6 d-flex justify-content-center align-items-center">
                        <img src={`${profile.image}`}
                            alt="avatar" width="450rem" height="450rem" />
                    </div>
                    <div id="profilecard-content" className="col-6">
                    <h1 className="activity-header">{profile.firstname}</h1>
                        <hr></hr>
                        <h2 className="activity-header">{profile.bio}</h2>
                        <hr></hr>
                        <h2 className="activity-header">Spectrum: {profile.spectrum}</h2>
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
                    <div id="hobbies-title row"><h2>Hobbies</h2></div>
                    <div className="hobbies-container container d-flex justify-content-start flex-wrap m-2">
                        <h6 className="col-2">Sports: {array[0]}</h6>
                        <h6 className="col-2">Foodie: {array[1]}</h6>
                        <h6 className="col-2">Running: {array[2]}</h6>
                        <h6 className="col-2">Travel: {array[3]}</h6>
                        <h6 className="col-2">Movies: {array[4]}</h6>
                        <h6 className="col-2">Reading: {array[5]}</h6>
                        <h6 className="col-2">Fashion: {array[6]}</h6>
                        <h6 className="col-2">Video Games: {array[7]}</h6>
                        <h6 className="col-2">Dancing: {array[8]}</h6>
                        <h6 className="col-2">Cycling: {array[9]}</h6>
                        <h6 className="col-2">Music: {array[10]}</h6>
                        <h6 className="col-2">Swimming: {array[11]}</h6>
                        <h6 className="col-2">Hiking: {array[12]}</h6>
                        <h6 className="col-2">Excercising: {array[13]}</h6>
                        <h6 className="col-2">Concerts: {array[14]}</h6>
                        <h6 className="col-2">Art: {array[15]}</h6>
                        <h6 className="col-2">Cooking: {array[16]}</h6>
                        <h6 className="col-2">Singing: {array[17]}</h6>
                        <h6 className="col-2">Baking: {array[18]}</h6>
                        <h6 className="col-2">Animals: {array[19]}</h6>
                        <h6 className="col-2">Camping: {array[20]}</h6>
                        <h6 className="col-2">Board Games: {array[21]}</h6>
                        <h6 className="col-2">Crafts: {array[22]}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;