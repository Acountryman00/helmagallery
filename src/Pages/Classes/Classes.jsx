import React from "react";
import Arts_Alive from "../../Components/Assets/Arts-Alive.jpeg";
import "./Classes.css";
import ChatLogo from "../../Components/Assets/ChatLogo.svg";
import { Link } from "react-router-dom";
import { faMessage } from "react-icons/fa";

const Classes = () => {
  return (
    <div className="classes-horn">
      <div className="classes-info">
        <div className="classes-intro">
          <p>
            Join Me In an Art class Where we create a beautiful painting, and
            enjoy a fun time with other learning students. All Classes Take
            Place at Arts Alive Studio in Enumclaw. Message Me me If are
            interested here.
          </p>
          <Link to="/Contact">
            <img src={ChatLogo} />
          </Link>
        </div>
        <h2 className="classes-title">My Classes Schedule</h2>
        <div className="classes-box">
          <div className="thursdayMorning">
            <h2>Thursday: 10-12</h2>
            <p>Full</p>
          </div>
          <div className="thursdayMorning">
            <h2>Thursday: 4-6</h2>
            <p>Full</p>
          </div>
          <div className="thursdayMorning">
            <h2>Wednesday: 4-6</h2>
            <p>2 Places Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
