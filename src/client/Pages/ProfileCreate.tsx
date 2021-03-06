import React, { useState } from "react";
import { useParams, useHistory } from "react-router";

import Navbar from "../components/Navbar";
import PageFooter from "../components/PageFooter";

const ProfileCreate: React.FC<IProfileCreate> = () => {
  const history = useHistory();
  const [footer, setPageFooter] = useState([
    "Home",
    "Features",
    "FAQs",
    "About",
  ]);
  // Profile States
  const { id }: { id: string } = useParams();
  const [firstname, setFirstname] = useState("");
  const [bio, setBio] = useState("");
  const [spectrum, setSpectrum] = useState("");
  const [relationship, setRelationship] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [orientation, setOrientation] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [height, setHeight] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [sports, setSports] = useState(false);
  const [foodie, setFoodie] = useState(false);
  const [running, setRunning] = useState(false);
  const [travel, setTravel] = useState(false);
  const [movies, setMovies] = useState(false);
  const [reading, setReading] = useState(false);
  const [fashion, setFashion] = useState(false);
  const [videogames, setVideogames] = useState(false);
  const [dancing, setDancing] = useState(false);
  const [cycling, setCycling] = useState(false);
  const [music, setMusic] = useState(false);
  const [swimming, setSwimming] = useState(false);
  const [hiking, setHiking] = useState(false);
  const [excercising, setExcercising] = useState(false);
  const [concerts, setConcerts] = useState(false);
  const [art, setArt] = useState(false);
  const [cooking, setCooking] = useState(false);
  const [singing, setSinging] = useState(false);
  const [baking, setBaking] = useState(false);
  const [animals, setAnimals] = useState(false);
  const [camping, setCamping] = useState(false);
  const [boardgames, setBoardgames] = useState(false);
  const [crafts, setCrafts] = useState(false);

  function submit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let newProfile: profile = {
      userid: id,
      firstname: firstname,
      image:
        "https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg",
      bio: bio,
      spectrum: spectrum,
      relationship: relationship,
      age: age,
      gender: gender,
      orientation: orientation,
      ethnicity: ethnicity,
      height: height,
      city: city,
      state: state,
      sports: sports,
      foodie: foodie,
      running: running,
      travel: travel,
      movies: movies,
      reading: reading,
      fashion: fashion,
      videogames: videogames,
      dancing: dancing,
      cycling: cycling,
      music: music,
      swimming: swimming,
      hiking: hiking,
      excercising: excercising,
      concerts: concerts,
      art: art,
      cooking: cooking,
      singing: singing,
      baking: baking,
      animals: animals,
      camping: camping,
      boardgames: boardgames,
      crafts: crafts,
      hypersight: false,
      hypersound: false,
      hypersmell: false,
      hypertaste: false,
      hypertouch: false,
      hyposight: false,
      hyposound: false,
      hyposmell: false,
      hypotaste: false,
      hypotouch: false,
      balance: false,
      bodyawareness: false,
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/profileinfo", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(newProfile));

    history.push("/hub");
  }

  return (
    <>
      <Navbar></Navbar>
      <main className="main-edit-container row d-flex justify-content-center">
        <div className="main-edit-div col-12 mt-5">
          {/* Jumbotron */}

          <div className="edit-jumbotron mb-5 jumbotron-fluid">
            <div className="container">
              <h1 className="display-4 text-centern jumbo-header">Create Profile</h1>
              <p className="lead text-center">
                Please enter your information here. <br></br>
              </p>
            </div>
          </div>

          {/* beginning of form */}

          <div className="form-container edit-form container">
            {/* picture and picture upload */}
            <div className="row d-flex justify-content-start mb-2 ml-2">
              <div className="picture-card mt-1 h-25 w-25 col-4 mb-4">
                <img
                  className="card-img-top edit-picture "
                  src="https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg"
                  alt="Card image cap"
                />
              </div>
              {/* <div className="card-body"> */}
              <div className="input-group profile-upload">
                {/* <div className="custom-file"> */}
                <input
                  type="file"
                  className="custom-file-input w-50"
                  id="inputGroupFile02"
                  size={20}
                />
                <label
                  className="custom-file-label text-center"
                  htmlFor="inputGroupFile02"
                  aria-describedby="inputGroupFileAddon02"
                >
                  sad.jpg
                </label>
                {/* <span className="input-group-text" id="inputGroupFileAddon02">
                    Upload
                  </span> */}
                {/* </div> */}
                {/* <div className="input-group-append"> */}
                {/* </div> */}
              </div>
              {/* </div> */}
            </div>

            <h4 className="create-form-title-BI mt-5 mb-4 justify-content-start">
              Basic Information
            </h4>
            <form>
              <div className="form-row row mb-2">
                <div className="col-md-4">
                  <label htmlFor="validationDefault01">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    placeholder="First name"
                    required
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault03">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault03"
                    placeholder="City"
                    required
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault04">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault04"
                    placeholder="State"
                    required
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault04">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault04">Height</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Height"
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* drop-down multi select */}

              <div className="menu-group row mt-4 mb-5 d-flex edit-selectors">
                <div>
                  <select
                    className="edit-select custom-select m-0"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option>Select Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Trans Man">Trans-man</option>
                    <option value="Trans Woman">Trans-woman</option>
                    <option value="Non-Binary">Non-binary</option>
                    <option value="Intersex">Intersex</option>
                    <option value="Questioning">Questioning</option>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <select
                    className="edit-select custom-select m-0"
                    onChange={(e) => {
                      setOrientation(e.target.value);
                    }}
                  >
                    <option>Select Your Sexual Orientation</option>
                    <option value="Straight">Straight</option>
                    <option value="Gay">Gay</option>
                    <option value="Lesbian">Lesbian</option>
                    <option value="Bisexual">Bisexual</option>
                    <option value="Pansexual">Pansexual</option>
                    <option value="Asexual">Asexual</option>
                    <option value="Queer">Queer</option>
                    <option value="Questioning">Questioning</option>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <select
                    className="edit-select custom-select m-0"
                    onChange={(e) => {
                      setEthnicity(e.target.value);
                    }}
                  >
                    <option>Select Your Ethnicity</option>
                    <option value="Asian">Asian</option>
                    <option value="Black">Black</option>
                    <option value="Hispanic/Latino">Hispanic/Latino</option>
                    <option value="South Asian">South Asian</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="White">White</option>
                    <option value="Native American">Native American</option>
                    <option value="Multi-Racial">Multi-Racial</option>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <select
                    className="edit-select custom-select m-0"
                    onChange={(e) => {
                      setRelationship(e.target.value);
                    }}
                  >
                    <option>Seeking Relationship Type</option>
                    <option value="Friendship">Friendship</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* multi-select checkboxes */}

              <h4 className="interests mt-5 mb-4">
                Interests (select all that apply)
              </h4>
              <div className="container d-flex justify-content-start flex-wrap">
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setSports(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Sports
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setFoodie(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Foodie
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setRunning(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Running
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setTravel(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Travel
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setMovies(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Movies
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setReading(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Reading
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setFashion(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Fashion
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setVideogames(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Video Games
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setDancing(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Dancing
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setCycling(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Cycling
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setMusic(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Music
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setSwimming(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Swimming
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setHiking(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Hiking
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setExcercising(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Excercising
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setConcerts(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Concerts
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setArt(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Art
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setCooking(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Cooking
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setSinging(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Singing
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setBaking(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Baking
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setAnimals(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Animals
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setCamping(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Camping
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setBoardgames(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Board Games
                    </label>
                  </div>
                </div>
                <div className="checkbox-container col-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      onChange={(e) => {
                        setCrafts(e.target.checked);
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Crafts
                    </label>
                  </div>
                </div>
              </div>
              {/* text boxes (about me and Neurodiverse info) */}

              <div className="text-area mt-5">
                <h4 className="bio-boxes mb-4">Bio Details</h4>
                <div className="form-group mb-1">
                  <label htmlFor="exampleFormControlTextarea1">
                    About me: (Tell us a little about yourself!)
                  </label>
                  <textarea
                    className="form-control aboutme-box"
                    id="exampleFormControlTextarea1"
                    onChange={(e) => {
                      setBio(e.target.value);
                    }}
                  ></textarea>
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Neurodiversity Information: (Tell us a little about your
                    Neurodiversity!)
                  </label>
                  <textarea
                    className="form-control diversity-box"
                    id="exampleFormControlTextarea1"
                    onChange={(e) => {
                      setSpectrum(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <div className="submit-btn-container mt-5">
                <span id="submit-span">
                  <button
                    id="submit-button"
                    className="btn btn-outline-secondary col-md-2 m-2"
                    onClick={submit}
                  >
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
          <footer className="footer mt-5">
            <div className="container">
              <ul className="nav footer-nav justify-content-center align-items-center  pb-3 mb-3">
                {footer.map((footer, index) => (
                  <PageFooter footer={footer} key={index} />
                ))}
              </ul>
              <p className="text-center">?? 2021 iNDie Connect, Inc</p>
            </div>
          </footer>
        </div>
        {/* page footer */}
      </main>
    </>
  );
};

interface IProfileCreate {}

interface profile {
  userid: string;
  firstname: string;
  image: string;
  bio: string;
  spectrum: string;
  relationship: string;
  age: string;
  gender: string;
  orientation: string;
  ethnicity: string;
  height: string;
  city: string;
  state: string;
  sports: boolean;
  foodie: boolean;
  running: boolean;
  travel: boolean;
  movies: boolean;
  reading: boolean;
  fashion: boolean;
  videogames: boolean;
  dancing: boolean;
  cycling: boolean;
  music: boolean;
  swimming: boolean;
  hiking: boolean;
  excercising: boolean;
  concerts: boolean;
  art: boolean;
  cooking: boolean;
  singing: boolean;
  baking: boolean;
  animals: boolean;
  camping: boolean;
  boardgames: boolean;
  crafts: boolean;
  hypersight: boolean;
  hypersound: boolean;
  hypersmell: boolean;
  hypertaste: boolean;
  hypertouch: boolean;
  hyposight: boolean;
  hyposound: boolean;
  hyposmell: boolean;
  hypotaste: boolean;
  hypotouch: boolean;
  balance: boolean;
  bodyawareness: boolean;
}

export default ProfileCreate;
