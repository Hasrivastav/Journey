import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

import '../styles/footer.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          
          alt="Founder"
        />

        <h2>Harsh Srivastav</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
         
          <a href="linkedin.com/in/harsh-srivastav-45ab87214" target={"blank"}>
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