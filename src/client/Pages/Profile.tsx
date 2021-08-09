import React, { useState } from "react";
import BasicInfo from "../components/BasicInfo";
import PageFooter from "../components/PageFooter";

const Profile = () => {
  const [basicInfo, setBasicInfo] = useState([
    "Lives In:",
    "Age:",
    "Gender:",
    "Height:",
    "Sexual Orientation:",
    "Work:",
    "Education:",
    "Religion:",
  ]);

  const [footer, setPageFooter] = useState([
    "Home",
    "Features",
    "Prices",
    "FAQs",
    "About",
  ]);

  return (
    <>
      <main className="main-profile-container">
        <div className="main-profile-div">
          {/* profile picture */}

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">(DISPLAY NAME)</h3>
                  <h5>About Me:</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>

          {/* beginning of form */}

          <div className="form-container">
            <form>
              <div className="form-row">
                {basicInfo.map((basicInfo, index) => (
                  <BasicInfo basicInfo={basicInfo} key = {index} />
                ))}
              </div>

              {/* multi-select checkboxes */}

              <h5 className="interests mt-3">Interests:</h5>

              {/* text boxes (about me and Neurodiverse info) */}

              <div className="text-area mt-3">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Neurodiversity Information:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                  ></textarea>
                </div>
              </div>

              {/* page footer */}

              <div className="container">
                <footer className="py-3 my-4">
                  <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    {footer.map((footer, index) => (
                      <PageFooter footer={footer} key = {index} />
                    ))}
                  </ul>
                  <p className="text-center text-muted">
                    © 2021 iNDie Connect, Inc
                  </p>
                </footer>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
