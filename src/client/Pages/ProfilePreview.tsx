import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Navbar from '../components/Navbar'
import Profile from '../components/PreviewCard'

const ProfilePreview: React.FC<IProfilePreview> = () => {
    const { id }: { id: string } = useParams()
    const [profile, setProfile] = useState<ProfileState[]>([]);
    const [hobbies, setHobbies] = useState<HobbiesState[]>([]);

    const getProfile = async () => {
        let r = await fetch(`/api/profileinfo/${id}`);
        let profile = await r.json();
        setProfile(profile);
    }

    const getHobbies = async () => {
        let r = await fetch(`/api/hobbies/${id}`);
        let hobbies = await r.json();
        setHobbies(hobbies)
    }

    useEffect(() => { getProfile(); getHobbies(); }, [])
    
    return (
        <div>
            <Navbar></Navbar>
            <div id="main-area" className="row d-flex justify-content-center">
                <Profile profile={profile} hobbies={hobbies} />
            </div>

        </div>
    );
};

interface IProfilePreview {}

export interface ProfileState {
    id: string, 
    firstname: string,
    image: string, 
    bio: string,
    spectrum: string,
    relationship: string,
    age: string,
    gender: string,
    orientation: string,
    ethnicity: string,
    height: string,
    city: string,
    state: string,
}

export interface HobbiesState {
    sports: boolean,
    foodie: boolean,
    running: boolean,
    travel: boolean,
    movies: boolean,
    reading: boolean,
    fashion: boolean,
    videogames: boolean,
    dancing: boolean,
    cycling: boolean,
    music: boolean,
    swimming: boolean,
    hiking: boolean,
    excercising: boolean,
    concerts: boolean,
    art: boolean,
    cooking: boolean,
    singing: boolean,
    baking: boolean,
    animals: boolean,
    camping: boolean,
    boardgames: boolean,
    crafts: boolean
}

export default ProfilePreview;