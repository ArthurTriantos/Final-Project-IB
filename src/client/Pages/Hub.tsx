import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import PageFooter from "../components/PageFooter";

const Hub: React.FC<IHub> = () => {
  const [profiles, setProfiles] = useState<ProfileState[]>([]);

  const getProfiles = async () => {
    let r = await fetch("/api/profileinfo");
    let profile = await r.json();
    setProfiles(profile);
  };

  const [footer, setPageFooter] = useState([
    "Home",
    "Features",
    "Prices",
    "FAQs",
    "About",
  ]);

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div id="main-area" className="row d-flex justify-content-center">
        {profiles.map((profile) => (
          <ProfileCard profile={profile} key={`profile-${profile.id}`} />
        ))}
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
    </div>
  );
};

interface IHub {}

export interface ProfileState {
    id: string, 
    firstname: string,
    image: string, 
    spectrum: string,
    relationship: string,
    age: string,
    gender: string,
    orientation: string,
    city: string,
    state: string
}

export default Hub;