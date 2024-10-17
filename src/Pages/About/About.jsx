import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import ImageSlider from "../../Components/imageSlider/ImageSlider";
import { SliderData } from "../../Components/imageSlider/SliderData";

const About = () => {
  return (
    <div className="about">
      <ImageSlider slides={SliderData} />
      <div className="about-info">
        <h1 className="about-title">About Me</h1>
        <p>
          My Name is Helma and I have lived in Enumclaw, Wa for over 25 years, I
          have a passion for detail with an exceptional talent with fine
          brushwork
        </p>
        <p>
          I was Born in Berlin and grew up in postwar Germany. Painting has
          alwats been my escape
        </p>
        <p>
          Self Taught, I have perfected my skill with years of practice, Now I
          spend my time trying to share my talent with my student that I teach
          at{" "}
          <span>
            <Link to="https://www.plateauartsalive.org/">
              Enumclaw Arts Alive Studio
            </Link>
          </span>
        </p>
        <p>
          Most of my Collection of paintings come from my love of nature, my
          European roots, and ofcoarse my love for beer and wine! Each Painting
          is done with oil or arcrylic and lovingly created with exceptional
          detail and realism.
        </p>
        <p>
          I hope you enjoy these paintings as much as I have enjoyed creating
          them. Prost! And A thankyou to my Grandson Alex Who has helped make
          this website happen.
        </p>
      </div>
    </div>
  );
};

export default About;
