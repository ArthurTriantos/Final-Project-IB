import React, { useState } from "react";
import PageFooter from "../components/PageFooter";

const HomePage = () => {
  const [footer, setPageFooter] = useState([
    "Home",
    "Features",
    "Prices",
    "FAQs",
    "About",
  ]);

  return (
    <>
      <div className="main-home-container">
        <section className="d-flex">
          {/* Jumbotron */}

          <div className="jumbotron col-12 d-flex justify-content-around">
            <div className="text-container">
              <h1 className="display-4">iNDie Connect</h1>
              <p className="lead">
                At iNDie Connect we help YOU create long lasting connections
                with like-minded individuals.<br></br>iNDie is the kinship site
                for independent Neurodiverse people.
              </p>
            </div>

            {/* Login and sign up buttons */}

            <div className="d-flex align-items-center buttons-container">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg m-3"
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg m-3"
                >
                  Sign Up!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards and site info */}

        <main className="card-container d-flex flex-wrap mt-5 justify-content-around row-3">
          <div className="card d-flex col-3 border shadow-lg p-3 mb-5 bg-white rounded">
            <img
              className="card-img-top mt-2"
              src="https://media.istockphoto.com/photos/gay-men-couple-at-home-picture-id1174871767?k=6&m=1174871767&s=612x612&w=0&h=FmTQwXedQo8VrcGHu3aR8x0iLn70dUqyLjLqRVZTCj4="
              alt="Card image cap"
            />
            <div className="card-body text-center d-flex flex-wrap justify-content-evenly ">
              <h5 className="title">About iNDie</h5>
              <p className="card-text d-flex align-items-center">
                iNDie Connect was designed to help make the process of building
                meaningful connections easier for Neurodiverse people. Discover
                the joy that new friendships and/or romantic relationships can
                bring you!
              </p>
            </div>
          </div>
          <div className="card d-flex col-3 border shadow-lg p-3 mb-5 bg-white rounded">
            <img
              className="card-img-top mt-2"
              src="https://www.business.com/images/content/5dc/b51ec5a215e357b8b4572/1500-0-"
              alt="Card image cap"
            />
            <div className="card-body text-center d-flex flex-wrap justify-content-evenly ">
              <h5 className="title">How It Works</h5>
              <p className="card-text d-flex align-items-center">
                Simply create your new profile and watch the magic unfold! Each
                user can fill out an in-depth bio so that you can find your
                perfect match whether you're just looking for a new friend or a
                partner. After you discover that perfect match, you can chat it
                up in your private messaging rooms or link up for some fun
                actiivites/ resturants suggested by us that are ND friendly!
              </p>
            </div>
          </div>
          <div className="card d-flex col-3 border shadow-lg p-3 mb-5 bg-white rounded">
            <img
              className="card-img-top mt-2"
              src="https://thumbs.dreamstime.com/b/happy-friendly-people-keeping-hands-near-heart-collage-positive-young-casual-clothes-smiling-expressing-love-211447642.jpg"
              alt="Card image cap"
            />
            <div className="card-body text-center d-flex flex-wrap justify-content-evenly ">
              <h5 className="title">Not Just A Dating Site</h5>
              <p className="card-text d-flex align-items-center">
                iNDie isnt just another dating site, its a kinship site! Kinship
                is defined as a sharing of characteristics or orgins, which is
                exactly what we aim to help you find! We connect you with new
                friends and/or romantic partnerships with people just like YOU!
              </p>
            </div>
          </div>
        </main>

        {/* Page footer */}

        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              {footer.map((footer) => (
                <PageFooter footer={footer} />
              ))}
            </ul>
            <p className="text-center
            ">© 2021 iNDie Connect, Inc</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
