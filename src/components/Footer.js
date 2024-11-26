import "./footer.css";
import React from "react"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <footer>
      <a href="#navbar" className="logo1">
        NEWS HUB
      </a>
      <ul className="links">
        <li>
          <a href="#navbar">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Portfolio</a>
        </li>
        <li>
          <a href="#portfolio">Experience</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com">
          
          <AiFillFacebook />
        </a> 
        <a href="https://instagram.com">
          {" "}
          <AiFillInstagram />
        </a>
        <a href="mailto:kanojiapriyanshi15@gmail.com">
          {" "}
          <MdEmail />
        </a>
        {/* <a href="https://github.com/Priyanshi-Kanojia-15">
          {" "}
          <BsGithub />{" "}
        </a> */}
        <a href="https://www.linkedin.com/in/priyanshi-kanojia-91709a205/">
          {" "}
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy;News Hub . All  Copyright reserved.</small>
      </div>
    </footer>
  );
}