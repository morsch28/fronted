import { useState } from "react";
import TypeWriter from "./TypeWriter";
import { useNavigate } from "react-router-dom";
import welcomeScreenImage from "../images/challenges_logo.jpg";

function WelcomeScreen() {
  const [singIn, setSignIn] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex  align-items-center  vh-100 vw-100 bg-light position-fixed top-0 start-0  text-center gap-2 welcome-screen">
        <div className="d-flex flex-column justify-content-center align-items-center w-50 gap-4">
          <img
            className="mt-1"
            src={welcomeScreenImage}
            alt=""
            style={{ width: "350px", height: "350px", borderRadius: "30%" }}
          />
          <TypeWriter
            text={`Welcome to my website - your gateway to a healthier and more balanced life.\nDiscover personalized challenges to improve your fitness, nutrition, sleep quality,\n and embed healthy habits into your daily routine.\n Join our community and start your journey toward meaningful change today.`}
          />
        </div>
        <div className="d-flex flex-column w-50 align-items-center gap-4 border-start border-3">
          <h1 className=" h1-welcomeScreen">Mor(e) Wellness & LifeStyle</h1>
          <div className="bg-dark-subtle w-50 d-flex align-items-center justify-content-center p-2 gap-2">
            <button
              className={`border-0 p-2 w-50 rounded-2 fs-4 ${
                singIn ? "bg-white" : "bg-dark-subtle"
              }`}
              onClick={() => {
                setSignIn(true);
              }}
            >
              Sign-In
            </button>
            <button
              className={`border-0 p-2 w-50 rounded-2 fs-4 ${
                !singIn ? "bg-white" : "bg-dark-subtle"
              }`}
              onClick={() => {
                setSignIn(false);
              }}
            >
              Get Started
            </button>
          </div>
          {singIn ? (
            <div className="d-flex flex-column align-items-center gap-2 justify-content-center text-center">
              <h2 className="fs-1">Welcome Back!</h2>
              <p className="fs-4">
                sign-in to continue your challenges journey
              </p>
              <button className="border-2 border-light w-50 p-2 rounded-2 bg-success  text-light fs-5 d-flex text-center gap-3">
                <span>Click here to sign in</span>
                <i className="bi bi-arrow-right fs-5"></i>
              </button>
            </div>
          ) : !singIn ? (
            <div className="d-flex flex-column align-items-center gap-2 justify-content-center text-center">
              <h2 className="fs-1">Start your journey</h2>
              <p className="fs-4">
                create your account and begin transforming your life
              </p>
              <button
                className="border-2 border-light w-50 p-2 rounded-2 bg-success  text-light fs-5 d-flex text-center gap-3"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                <span>Create your account here</span>
                <i className="bi bi-arrow-right fs-5"></i>
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      ) : (<div></div>
    </>
  );
}

export default WelcomeScreen;
