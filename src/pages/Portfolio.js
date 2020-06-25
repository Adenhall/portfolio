import React from "react";
import photo1 from "./img/photo1.PNG";
import photo2 from "./img/photo2.PNG";
import photo3 from "./img/photo3.PNG";
import NavMenu from "../components/NavMenu.js";

export default function Portfolio() {
  return (
    <div>
      <NavMenu navBg="danger" />
      <div className="portfolio">
        <h1>My Projects</h1>
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={photo1} alt="Alien Twitter" />
                <h3>Alien Twitter</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  This is my group project. We built a copy of Twitter imported
                  in some of our own ideas.
                </p>
                <a href="https://alien-twitter.netlify.app/">View it</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={photo2} alt="Monster Game"/>
                <h3>Monster Game</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  The first game I ever created using Canvas. Not bad for a
                  rookie eh?
                </p>
                <a href="https://nguyen-quan-monster-frenzy.netlify.app/">
                  View it
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={photo3} alt="Movie Database" />
                <h3>Movie DB</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>This is for my API fetching training. Ignore the porns...</p>
                <a href="https://movieeeee.netlify.app/">View it</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
