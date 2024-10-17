import React from "react";
import "./ShowItem.css";
import { Link } from "react-router-dom";
import clock_img from "../../Components/Assets/clock-logo.png";
import Calendar_img from "../../Components/Assets/calendar-logo.png";
import Location_img from "../../Components/Assets/location.png";

const ShowItem = (props) => {
  return (
    <div className="show-item">
      <img onClick={window.scrollTo(200, 0)} src={props.image} alt="" />

      <div className="show-details">
        <div className="show-info">
          <img src={Calendar_img} alt="clock" />
          <p>{props.date}</p>
        </div>

        <div className="show-info">
          <img src={clock_img} alt="clock" />
          <p>{props.time}</p>
        </div>

        <div className="show-info">
          <img src={Location_img} alt="clock" />
          <Link
            style={{ textDecoration: "none" }}
            to="https://www.google.com/maps/place/Plateau+Wine+and+Beer/@47.2033853,-121.9897226,16z/data=!3m1!4b1!4m6!3m5!1s0x5490f204200dde61:0x7c534cde79952556!8m2!3d47.2033853!4d-121.9897226!16s%2Fg%2F11btrr5ksm?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
          >
            <p className="location">Enumclaw plateau wine and beer</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
