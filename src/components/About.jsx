import React from "react";
import "../styles/About.scss";
import {  FaGithub, FaLinkedin } from 'react-icons/fa';



const About = () => {
  return (
    <div id="about" className="about">


     
        <h1  style={{color:'hsl(var(--hue), var(--sat), 0%)',marginBottom:'3px'}}>My Introduction</h1>
       <p   className="home__description intro" >
As a Pre-Final Year Computer Science Engineering student, I am passionate about emerging technologies, particularly in the fields of Web Development and IoT.
</p>
    <div className="card_container">

     
      <div className="card">
        <div className="content">
          <div className="img"><img src="data:image/jpeg;base64,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" alt="Profile" /></div>
          <div className="cardContent">
            <h3>SKILLS</h3>
          
            
          </div>
        </div>
        <ul className="sci">
        
          <li style={{ '--i': 2 }}>
            <a href="https://github.com/Hasrivastav"><FaGithub   style={{ color: 'black', fontStyle: 'none' }} /></a>
          </li>
          <li style={{ '--i': 3 }}>
            <a href="https://www.linkedin.com/in/harsh-srivastav2024/"><FaLinkedin  style={{ color: 'black', fontStyle: 'none' }} /></a>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="content">
          <div className="img"><img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX////hehe8YRWIRg7gdQC5WADivaHzzqzsr37+/PrMiVa7XQiCOQDSuqiFPgDXw7OXXzSGQwOmdlK4YxODQw7BZxO/YxXdeBfVchbLaxakVRLAZxOJRw7YdBfMbBXfeBe3kXPr4Nekd1X88ebxwZjutobGbyHLeC/33cX66tvifA2TTA/33sfegi7DYwmsWBPEdjbcrovx3s/nyLDg0cSLSQCdaD+vhWXpoGDljTqgVBD21rrRlmzRlGbu2Mdz8ooZAAAD+ElEQVR4nO3deVeqQBjHcRKt1CwpBQ3R3DKlfVVb3v/LurhkIjoOMOPweH/f/7nD5zwDlfecUdMQQgghhBBCCCGEEEIIoWg1X88KUTt7bau+/a1lr95O4vR2lXBj8/1Ej9dJMdHEbOs0JlDXT1tZ1QxGhbgTnE6xoJrB6CP+CL0hfqhmMHo3BAiNd9UMRkUhwqJqBiMIIYRQfT6hccqfQVFoFAtnvBX8F6pmMFq+0VozxIXNGj2hcR7qynMDwmQE4eYgTEoQbg7CpATh5iBMSv+DsPSb0Qp1ZWvpyp0I20ed7nH4rsvz7HK5F+rKXvmv6wgrdzufYT4rvxkO0pE6WG5HV/79E8Mb3vkNVxakUjo97PMAb+9o+ial7245gAd0gR7xYOsU2yPKQI842vbCOaYN9IjHbGB/oPoOYzdg79Mu9RF6Q+yygNmR6vsT0Ij1f8h9+iP0hsjapjd7IWT9avO5F8JPhvBoL4RHEFIPQvpBSD8I6Qch/SCkH4T0g5B+ENIPQvpBSD8I6Qch/SCkH4T0g5B+ENIPQvpBSD8I6Qch/SCkH4T0g5B+ENIPQvpBSD8I6Qch/SCkH4T0g5B+ENIPQvpBSD8I5WZV6hVH8hoKhZY9dmt6zR3blsxlmEKpp0bU3dL8zLmSW5e4DvPUCJlnm9hLxz3rui1vIebZJm1526eu+5M4ReZJUUNZQ3TcFaEr64WTHrKA8l41F6UVYelC0krMF428Y5Ss1RF6Q5TzRKSZhyhp0t6mq0+hvCdxwHqTTpNz2pe9ukm9bSrldco+6UsiMfAYSnoQt51HN6sj4VS6HQkHHR7g5PRL4UvvRshz8uWs3H3FaQhdW76w4VTuc7zAbC6fSplmuVr1/hCwLBFWWcKG5TiVerVaNs1UKp/j/ca2qXCRObHWK541BlWw0INVPJjnMpfuNKpw2TodaxSrEOHcNRvYmuILA1b+LRxD2LAsh+WSI/Rbp2Nl/w4WXmgtNiL3vcgR+qibtzCvcNtGVCkMWJ1lK1voeyNGb2dCv3U61g3C8BuRmQLhIvMyANT1S0GwRSqFqbVC0YtACGGs9l/4sEb4IHoRpcJULQCsCV9DrXDNZ23C11ArDG5T4ZtUsTAwRPEjVC1cIUoAKhf6iDKA6oWpy98Xak34j8Jp6oXe+2bsuu5Y/DtmVhKEk4+1RP2tFCwRQqlBCGHygxDC5AchhMkPQgiTH4QQJj9+ofZFU5j54gVqTxnVNxupzCG38JnmDE2ub3Se9U1xiJlvfqDWL9ObYt4O8+Xq2o9NjZi3f8IAPeIjrY2aeQwJ1LT2Uy9Dp95TqC06L/v8ckijl2fuH/UIIYQQQgghhBBCCCGE9rd/ZT0AdQiylhgAAAAASUVORK5CYII=" alt="Profile" /></div>
          <div className="cardContent">
            <h3>Projects Done<br /><span>+20</span></h3>
          </div>
        </div>
        <ul className="sci">
          <li style={{ '--i': 1 }}>
            <a href="https://www.linkedin.com/in/harsh-srivastav2024/"><i className="fa fa-Linkedin" aria-hidden="true"></i></a>
          </li>
          
          <li style={{ '--i': 3 }}>
            <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
      
    </div>
    
    


   
    </div>
    


  );
};

export default About;


