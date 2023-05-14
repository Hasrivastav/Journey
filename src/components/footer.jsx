import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import image from "../assets/profile.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={image} alt="Founder" />

        <h2>Harsh Srivastav</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/harsh-srivastav2024/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Hasrivastav" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
