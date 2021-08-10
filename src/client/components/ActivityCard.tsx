import React from 'react';
import { Link } from 'react-router-dom';


const Activity = ({ activity }: {activity: any}) => {

    let dollar: string = "";

    if (activity.cost == 0) {
        dollar = "Free"
    } else if (activity.cost == 1) {
        dollar = "$"
    } else if (activity.cost == 2) {
        dollar = "$$"
    } else if (activity.cost == 3) {
        dollar = "$$$"
    }


    return (
        <>
            <div className="activity">
                <img src={activity.picture}
                    alt="logo" width="75px" height="75px"/>
                <h3>{activity.name}</h3>
                <h4>About: {activity.about}</h4>
                <h6>Address: {activity.address}</h6>
                <h6>Hours: {activity.hours}</h6>
                <h6>Cost: {dollar}</h6>
                <br />
                <a href={activity.link} className="btn btn-secondary">More Info</a>
            </div>
        </>
    );
};

export default Activity;