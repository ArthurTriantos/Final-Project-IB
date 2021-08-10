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
            <div className="activity row d-flex justify-content-center align-items-center">
                <div className="col-3">
                    <img src={activity.picture}
                    alt="logo" width="150px" height="150px" id="activity-logo"/>
                </div>
                <div className="col-8">
                <h2 className="activity-header">{activity.name}</h2>
                <h4 className="activity-header">{activity.about}</h4>
                <h6 className="activity-header">Address: {activity.address}</h6>
                <h6 className="activity-header">Hours: {activity.hours}</h6>
                <h6 className="activity-header">Cost: {dollar}</h6>
                </div>
                <br />
                <a href={activity.link} id="activity-link" className="btn btn-secondary">More Info</a>
            </div>
        </>
    );
};

export default Activity;