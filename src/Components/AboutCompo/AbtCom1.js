import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import "./AbtCss/AbtCom1.css";

// Column 1 Image
import AbtImg1 from "../../Images/About/Product-Nero.png";

const AbtCom1 = () => {
  return (
    <>
      <div className="container-fluid abt-s1-container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-lg-6 order-2 order-lg-1 abt-s1-img-container">

            {/* Pulse Animation Container */}
            <div className="SonarCont">
              <div className="SonarSect">
                <div className="SonarWave Sonar1"></div>
                <div className="SonarWave Sonar2"></div>
                <div className="SonarWave Sonar3"></div>
              </div>
            </div>

            {/* Image */}
            <img className="abt-s1-img" src={AbtImg1} alt="Product-Nero.png" />
          </div>

          {/* Column 2 */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 abt-s1-txt-container">
            <h3 className="abt-s1-heading1">Water from Air:</h3>
            <h2 className="abt-s1-heading2">A Sustainable Solution</h2>
            <p className="abt-s1-para1">
              At Aeronero, we believe that everyone deserves access to clean
              drinking water. Our mission is to make this a reality by providing
              innovative solutions that extract water from the atmosphere,
              ensuring a sustainable future for generations to come.
            </p>
            <p className="abt-s1-para2">Experience the future of water, now!</p>

            {/* Button */}
            <div className="d-none d-md-block abt-s1-btn-container">
              <NavLink className="abt-s1-btn" to="/Contact">
                contact sales
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbtCom1;
