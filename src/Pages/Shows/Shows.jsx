import React from "react";
import "./Shows.css";
import show_data from "../../Components/Assets/Show_data";
import ShowItem from "./ShowItem";

const Shows = (props) => {
  return (
    <div className="shows">
      <div className="show-title">
        <h1>Upcoming Shows</h1>
      </div>
      <div className="shows-products">
        {show_data.map((item, i) => {
          return (
            <ShowItem
              id={item.id}
              key={i}
              date={item.date}
              image={item.image}
              time={item.time}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shows;
