 import React from "react"
 import "./navbar.css";
 import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
 export default function Navbar(){
 return(
 <>
 <section id="navbar">
    <div className="Navbar">
       <div className="logo">
    <a href="#home" className=" font-bold text-5xl mx-4 text-white pt-6 ">NEWS HUB </a> 
    </div>
    
    <div className="navbar-social">
        <a href="https://facebook.com">
          
          <AiFillFacebook />
        </a> 
        <a href="https://www.instagram.com/_news_website_/">
          
          <AiFillInstagram />
        </a>
        <a href="mailto:kanojiapriyanshi15@gmail.com">
          
          <MdEmail />
        </a>
        {/* <a href="https://github.com/Priyanshi-Kanojia-15">
          
          <BsGithub />{" "}
        </a> */}
        <a href="https://www.linkedin.com/in/priyanshi-kanojia-91709a205/">
          
          <AiFillLinkedin />
        </a>
      </div>
      </div>
</section>



</>


   );
 }


