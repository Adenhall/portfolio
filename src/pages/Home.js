import React from "react";
import { Jumbotron} from "react-bootstrap";
import Typewriter from "typewriter-effect";
import profile from "./img/profile.jpg"
import NavMenu from '../components/NavMenu.js'


export default function Home() {
  return (
    <Jumbotron className="home-page">
      <NavMenu navBg="dark"/>
      <div className="profile-pic">
        <img src={profile} alt="Avatar"></img>
      </div>
      
      <Typewriter
      options={{
        delay: 60,
        autoStart: true,
      }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("My name is Quan")
            .pauseFor(1000)
            .deleteChars(15)
            .typeString("Also known as Adenhall!<br/>")
            .pauseFor(1000)
            .typeString("Just call me Quan ¯|_(ツ)_/¯")
            .pauseFor(1000)
            .typeString("<br/>I'm a Fullstack Web Developer")
            .start();
        }}
      />
    </Jumbotron>
  );
}
