import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import NavMenu from '../components/NavMenu.js';

export default function CV() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavMenu navBg="success"/>
      <h1 style={{ fontSize: "80px", padding: "20px" }}>
        <ScrollAnimation animateIn="animate__slideInLeft">
          About Nguyen Minh Quan
        </ScrollAnimation>
      </h1>

      <div className="shadow-lg p-3 mb-5 bg-white rounded cv">
        <h1 style={{ color: "lightcoral" }}>
          <ScrollAnimation animateIn="animate__fadeInUp">
            Education
          </ScrollAnimation>
        </h1>
        <div className="d-flex justify-content-between flex-wrap">
          <h5 className="d-flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_H%E1%BB%8Dc_T%C3%A0i_Ch%C3%ADnh_Marketing.png"
              style={{ width: "100px" }}
            />
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              University of Finance - Marketing
              <br />
              2017 - Now <br />
              Foreign Trade
            </ScrollAnimation>
          </h5>
          <h5 className="d-flex">
            <img
              src="https://cdn.itviec.com/employers/coderschool/logo/social/8p67H9qvrjNV5FNxB5ZEuPoM/Logo-full@2x-1024x800.png"
              style={{ width: "100px" }}
            />
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              Coder School
              <br />
              05/2020 - Now <br />
              Fullstack Web Developer
            </ScrollAnimation>
          </h5>
        </div>
        <div style={{ borderTop: "1px solid black" }}></div>
        <h1 style={{ color: "lightcoral" }}>
          <ScrollAnimation animateIn="animate__fadeInUp">
            Work history
          </ScrollAnimation>
        </h1>
        <div className="d-flex justify-content-between flex-wrap">
          <h5 className="d-flex flex-column">
            <img
              src="https://dichthuattanviet.com/wp-content/uploads/2019/09/tanvietlogo-1.png"
              style={{ width: "300px" }}
            />
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              Tan Viet translation
              <br />
              2017 - 2018 <br />
              Translator
            </ScrollAnimation>
          </h5>
          <h5 className="d-flex">
            <img
              src="https://apollo.edu.vn/img/logo.png"
              style={{ width: "150px" }}
            />
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              Apollo English
              <br />
              06/2019 - 3/2020 <br />
              Teaching Assistant
            </ScrollAnimation>
          </h5>
        </div>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          <ScrollAnimation
            animateIn="animate__backInDown"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            My programming languages
          </ScrollAnimation>
        </h1>
        <div className="d-flex align-self-center">
          <ScrollAnimation
            animateIn="animate__backInDown"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">HTML5</Tooltip>}
            >
              <img
              src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
              style={{ width: "80px" }}
            />
            </OverlayTrigger>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__backInDown"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}
            >
              <img
              src="https://w7.pngwing.com/pngs/509/571/png-transparent-cascading-style-sheets-logo-css3-html-web-development-world-wide-web-blue-angle-web-design.png"
              style={{ width: "80px" }}
            />
            </OverlayTrigger>
            
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__backInDown"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}
            >
              <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              style={{ width: "80px" }}
            />
            </OverlayTrigger>
            
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__backInDown"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">React</Tooltip>}
            >
              <img
              src="https://cdn.worldvectorlogo.com/logos/react.svg"
              style={{ width: "80px" }}
            />
            </OverlayTrigger>
            
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__backInDown"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">NodeJs</Tooltip>}
            >
              <img
              src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              style={{ width: "80px" }}
            />
            </OverlayTrigger>
            
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
