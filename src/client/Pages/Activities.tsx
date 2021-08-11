import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import ActivityCard from '../components/ActivityCard'
import PageFooter from '../components/PageFooter';

const Hub: React.FC<IActivity> = () => {
    const [activities, setActivities] = useState<ActivityState[]>([]);
    
    const getActivities = async () => {
        let r = await fetch('/api/activities');
        let activities = await r.json();
        setActivities(activities);
    }

    const [footer, setPageFooter] = useState([
        "Home",
        "Features",
        "Prices",
        "FAQs",
        "About",
      ]);
    
    useEffect(() => {getActivities();}, [])
    
    return (
        <div>
            <Navbar></Navbar>

            <div id="main-area" className="row d-flex justify-content-center">
                <div id="timeline" className="col-md-8">
                    {activities.map(activity => <ActivityCard activity={activity} key={`activity-${activity.id}`} />)}
                </div>
            </div>

            <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav footer-nav justify-content-center  pb-3 mb-3">
              {footer.map((footer, index) => (
                <PageFooter footer={footer} key={index} />
              ))}
            </ul>
            <p className="text-center">© 2021 iNDie Connect, Inc</p>
          </footer>
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