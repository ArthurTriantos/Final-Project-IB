import React, { useState } from "react";
import InterestCheck from "../components/InterestCheck";
import PageFooter from "../components/PageFooter";
import Navbar from "../components/Navbar";

const ProfileEdit = () => {
  const [interests, setInterests] = useState([
    "Plants",
    "Gardening",
    "Concerts",
    "Music",
    "Cooking",
    "Baking",
    "Reading",
    "Movies",
    "Board Games",
    "Video Games",
    "Cycling",
    "Running",
    "Exercising",
    "Sports",
    "Animals",
    "Hiking",
    "Art",
    "Dancing",
    "Singing",
    "Crafts",
    "Camping",
    "Traveling",
    "Foodie",
    "Theater",
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
    <Navbar></Navbar>
      <main className="main-edit-container d-flex justify-content-center">
        <div className="main-edit-div col-10 mt-5">
          {/* Jumbotron */}

          <div className="edit-jumbotron mb-5 jumbotron-fluid">
            <div className="container">
              <h1 className="display-4 text-center">Create/Edit Profile</h1>
              <p className="lead text-center">
                Please enter your information here. <br></br> You may return to
                this page at any time to edit any information you would like.
              </p>
            </div>
          </div>

          {/* picture and picture upload */}

          <div className="picture-card mt-5 h-25 w-25">
            <img
              className="card-img-top edit-picture"
              src="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                />
                <label
                  className="custom-file-label text-center"
                  htmlFor="inputGroupFile02"
                  aria-describedby="inputGroupFileAddon02"
                >
                  Upload Image Here
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text" id="inputGroupFileAddon02">
                  Upload
                </span>
              </div>
            </div>
          </div>

          {/* beginning of form */}

          <div className="form-container">
            <form>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault01">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefault02">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    placeholder="Last name"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="validationDefaultUsername">
                    Username/Display name
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroupPrepend2"
                      >
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      placeholder="Username/Display name"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault03">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="State"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault05">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    placeholder="Zip"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="validationDefault04">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                  />
                </div>
                <div className="col">
                  <label htmlFor="validationDefault04">Height</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Height"
                  />
                </div>
                <div className="col">
                  <label htmlFor="validationDefault04">Work</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Work"
                  />
                </div>
                <div className="col">
                  <label htmlFor="validationDefault04">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Education"
                  />
                </div>
                <div className="col">
                  <label htmlFor="validationDefault04">Religion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Religion"
                  />
                </div>
              </div>

              {/* drop-down multi select */}

              <div className="menu-group row mt-3 d-flex justify-content-between edit-selectors">
                <div>
                  <select className="edit-select custom-select col-12">
                    <option>Select Your Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Trans-man</option>
                    <option value="4">Trans-woman</option>
                    <option value="5">Non-binary</option>
                    <option value="6">Intersex</option>
                    <option value="7">Questioning</option>
                    <option value="8">Prefer Not To Say</option>
                    <option value="9">Other</option>
                  </select>
                </div>
                <div>
                  <select className="edit-select custom-select col-12">
                    <option>Select Your Sexual Orientation</option>
                    <option value="1">Straight</option>
                    <option value="2">Gay</option>
                    <option value="3">Lesbian</option>
                    <option value="4">Bisexual</option>
                    <option value="5">Pansexual</option>
                    <option value="6">Asexual</option>
                    <option value="6">Queer</option>
                    <option value="7">Questioning</option>
                    <option value="8">Prefer Not To Say</option>
                    <option value="9">Other</option>
                  </select>
                </div>
                <div>
                  <select className="edit-select custom-select col-12">
                    <option>Seeking Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Trans-man</option>
                    <option value="4">Trans-woman</option>
                    <option value="5">Non-binary</option>
                    <option value="6">Intersex</option>
                    <option value="7">Questioning</option>
                    <option value="8">Prefer Not To Say</option>
                    <option value="9">Other</option>
                  </select>
                </div>
                <div>
                  <select className="edit-select custom-select col-12">
                    <option>Seeking Sexual Orientation</option>
                    <option value="1">Straight</option>
                    <option value="2">Gay</option>
                    <option value="3">Lesbian</option>
                    <option value="4">Bisexual</option>
                    <option value="5">Pansexual</option>
                    <option value="6">Asexual</option>
                    <option value="6">Queer</option>
                    <option value="7">Questioning</option>
                    <option value="8">Prefer Not To Say</option>
                    <option value="9">Other</option>
                  </select>
                </div>
                <div>
                  <select className="edit-select custom-select col-12">
                    <option>Seeking Relationship Type</option>
                    <option value="1">Friendship</option>
                    <option value="2">Relationship</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>

              {/* multi-select checkboxes */}

              <h5 className="interests mt-3">
                Interests (select all that apply)
              </h5>
              <div className="checkbox-container row">
                {interests.map((interest, index) => (
                  <InterestCheck interest={interest} key={index} />
                ))}
              </div>

              {/* text boxes (about me and Neurodiverse info) */}

              <div className="text-area mt-3">
                <div className="form-group mb-1">
                  <label htmlFor="exampleFormControlTextarea1">
                    About me: (Tell us a little about yourself!)
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                  ></textarea>
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Neurodiversity Information: (Tell us a little about your
                    Neurodiversity!)
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
                  <ul className="nav footer-nav justify-content-center  pb-3 mb-3">
                    {footer.map((footer, index) => (
                      <PageFooter footer={footer} key={index} />
                    ))}
                  </ul>
                  <p className="text-center">© 2021 iNDie Connect, Inc</p>
                </footer>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileEdit;
