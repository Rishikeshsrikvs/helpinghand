import React from "react";
import tgall1 from "../Donate/Donateimage/don1.png";
import tgall2 from "../Donate/Donateimage/don2.png";
import tgall3 from "../Donate/Donateimage/don3.png";
import tgall4 from "../Donate/Donateimage/don4.png";
import tgall5 from "../Donate/Donateimage/don5.png";
import "./Donate.css";
import CardGrid from "./CardGrid.jsx";

const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-container">
        <div className="top-gallery">
          <div className="tgall">
            <img src={tgall1} alt="" />
          </div>
          <div className="tgall tgall1">
            <img src={tgall2} alt="" />
          </div>
          <div className="tgall">
            <img src={tgall3} alt="" />
          </div>
          <div className="tgall">
            <img src={tgall4} alt="" />
          </div>
          <div className="tgall ">
            <img src={tgall5} alt="" />
          </div>
        </div>
        <div className="donate-text">
          <h2>Support the Journey of Those in Need</h2>
          <p>
            Your donation will provide essential support for handicapped
            individuals, homeless people, children, and those affected by
            disaster situations. Your generosity will help ensure their access
            to basic needs, such as shelter, healthcare, and nutrition, leading
            them towards a life of dignity and hope for a brighter future.
          </p>
          <button className="donate-btn">donate now</button>
        </div>
        <div className="cardgrid">
            <CardGrid/>
        </div>
      </div>
    </div>
  );
};

export default Donate;
