import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon"  onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing reprehenderit?
          necessitatibus atque blanditiis, obcaecati temporibus dolore eligendi
          a in nemo vero fugiat possimus dicta?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur nisi distinctio voluptate.
          Quasi atque, velit ea voluptatum molestiae consequatur quas labore non
          iste rem eaque odio, minus nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur at ipsum distinctio placeat
          iusto pariatur. Dolorem accusantium, sequi voluptatem aliquam vero hic
          mollitia laboriosam.
        </p>
      </div>
    </div>
  );
};

export default About;
