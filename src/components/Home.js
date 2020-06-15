import React from "react";
import { Jumbotron} from "react-bootstrap";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Jumbotron className="home-page">
      <img className="profile-pic" src="https://cdn1.vectorstock.com/i/1000x1000/50/30/user-icon-male-person-symbol-profile-avatar-vector-20715030.jpg" alt="Avatar"></img>
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
