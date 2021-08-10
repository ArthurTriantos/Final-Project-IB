import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import ActivityCard from '../components/ActivityCard'

const Hub: React.FC<IActivity> = () => {
    const [activities, setActivities] = useState<ActivityState[]>([]);
    
    const getActivities = async () => {
        let r = await fetch('/api/activities');
        let activities = await r.json();
        setActivities(activities);
    }
    
    useEffect(() => {getActivities();}, [])
    
    return (
        <div>
            <Navbar></Navbar>

            <div className="row d-flex justify-content-center">
                <div id="timeline" className="col-md-8">
                    {activities.map(activity => <ActivityCard activity={activity} key={`activity-${activity.id}`} />)}
                </div>
            </div>

        </div>
    );
};

interface IActivity {}

export interface ActivityState {
    id: string, 
    name: string, 
    about: string,
    address: string,
    link: string,
    picture: string,
    hours: string,
    cost: string,
    _created: string
}

export default Hub;