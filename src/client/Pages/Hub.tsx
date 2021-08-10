import React, { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'

const Hub: React.FC<IHub> = () => {
    const [profiles, setProfiles] = useState<ProfileState[]>([]);
    
    const getChirps = async () => {
        let r = await fetch('/api/profileinfo');
        let profile = await r.json();
        setProfiles(profile);
    }
    
    useEffect(() => {getChirps();}, [])
    
    return (
        <div>
            <Navbar></Navbar>

            <div className="row d-flex justify-content-center">
                <div id="timeline" className="col-md-8">
                    {profiles.map(profile => <ProfileCard profile={profile} key={`profile-${profile.id}`} />)}
                </div>
            </div>

        </div>
    );
};

interface IHub {}

export interface ProfileState {
    id: string, 
    firstname: string, 
    spectrum: string,
    relationship: string,
    age: string,
    gender: string,
    orientation: string,
    city: string,
    state: string
}

export default Hub;