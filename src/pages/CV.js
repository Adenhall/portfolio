import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  OverlayTrigger,
  Tooltip,
  Accordion,
  Card
} from "react-bootstrap";
import NavMenu from "../components/NavMenu.js";

const html = (
  <FontAwesomeIcon icon={faHtml5} size="6x" style={{ color: "blue" }} />
);
const css = (
  <FontAwesomeIcon icon={faCss3Alt} size="6x" style={{ color: "orange" }} />
);
const js = (
  <FontAwesomeIcon icon={faJs} size="6x" style={{ color: "#fdcb6e" }} />
);
const react = (
  <FontAwesomeIcon icon={faReact} size="6x" style={{ color: "cyan" }} />
);
const nodeJs = (
  <FontAwesomeIcon icon={faNodeJs} size="6x" style={{ color: "#00b894" }} />
);
const database = (
  <FontAwesomeIcon icon={faDatabase} size="6x" style={{ color: "#55efc4" }} />
);

export default function CV() {
  return (
    <div className="cv">
      <NavMenu navBg="success" />
      <Accordion className="cv-sections" defaultActiveKey="0">
        <ScrollAnimation animateIn="animate__slideInLeft">
          <Card className="cv-cards">
            <Accordion.Toggle
              as={Card.Header}
              variant="text"
              eventKey="0"
              style={{ cursor: "pointer" }}
            >
              <h1>PROFILE</h1>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Enthusiastic Full-stack Web Developer from three months of
                highly intense programming boot-camp with many individual and
                group projects. Adept at making and designing websites and web
                applications using HTML, CSS, JavaScript, React, NodeJs and
                MongoDB. A calm and focused individual, with the ability to
                multitask and work well under pressure. Extremely compatible
                working in teams and dedicated to improving own abilities and
                standards.{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInLeft">
          <Card className="cv-cards">
            <Accordion.Toggle
              as={Card.Header}
              variant="text"
              eventKey="1"
              style={{ cursor: "pointer" }}
            >
              <h1>EDUCATION</h1>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h5>Fullstack Web Developer, Coder School, Ho Chi Minh</h5>
                <p>April 2020 - July 2020</p>
                <ul>
                  <li>Intense course to improve one's knowledge in coding</li>
                  <li>Frequently building individual and group projects</li>
                  <li>Practice Agile methodology</li>
                  <li>
                    Get disciplined and familiar with IT working environment
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInLeft">
          <Card className="cv-cards">
            <Accordion.Toggle
              as={Card.Header}
              variant="text"
              eventKey="2"
              style={{ cursor: "pointer" }}
            >
              <h1>EMPLOYMENT HISTORY</h1>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <h5>Teaching Assistant, Apollo English, Ho Chi Minh</h5>
                <p>June 2019 - March 2020</p>
                <ul>
                  <li>
                    Excellent environment to learn and improve the 4'Cs:
                    Critical Thinking, Creativity, Collaboration, Communication
                  </li>
                  <li>
                    Able to greatly improve one's capability in foreign
                    languages
                  </li>
                  <li>
                    Brought forth an exceptional work ethic and commitment to
                    company values.
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__slideInLeft">
          <Card className="cv-cards">
            <Accordion.Toggle
              as={Card.Header}
              variant="text"
              eventKey="3"
              style={{ cursor: "pointer" }}
            >
              <h1>PROGRAMING SKILLS</h1>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div className="d-flex flex-row justify-content-around">
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>HTML5</strong>.
                      </Tooltip>
                    }
                  >
                    <h2>{html}</h2>
                  </OverlayTrigger>{" "}
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>CSS3</strong>.
                      </Tooltip>
                    }
                  >
                    <h2>{css}</h2>
                  </OverlayTrigger>{" "}
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>JavaScript</strong>.
                      </Tooltip>
                    }
                  >
                    <h2>{js}</h2>
                  </OverlayTrigger>{" "}
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>React.Js</strong>.
                      </Tooltip>
                    }
                  >
                    <h2>{react}</h2>
                  </OverlayTrigger>{" "}
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>Node.Js</strong>.
                      </Tooltip>
                    }
                  >
                    <h2>{nodeJs}</h2>
                  </OverlayTrigger>{" "}
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={
                      <Tooltip id={`tooltip-bottom`}>
                        <strong>MongoDB</strong>.
                      </Tooltip>
                    }
                  >
                    <h2>{database}</h2>
                  </OverlayTrigger>{" "}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </ScrollAnimation>
      </Accordion>
    </div>
  );
}
