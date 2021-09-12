import { Link } from "react-router-dom";

import "../../css/SolarSystem2D.css";

export const SolarSystem2D = () => {
  return (
    <section id="solarSystem">
      <h1 className="title">
        <span>Our Solar System</span>
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/orbit.png`}
          alt="Orbit"
        />
      </h1>
      <div className="celestial-body sun">
        <Link to="/info-page?star=sun">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/sun.png`}
            alt="Sun"
          />
          <span>sun</span>
        </Link>
      </div>
      <div className="celestial-body mercury">
        <Link to="/info-page?planet=mercury">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/mercury.png`}
            alt="Mercury"
          />
          <span>mercury</span>
        </Link>
      </div>
      <div className="celestial-body venus">
        <Link to="/info-page?planet=venus">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/venus.png`}
            alt="Venus"
          />
          <span>venus</span>
        </Link>
      </div>
      <div className="celestial-body earth">
        <Link to="/info-page?planet=earth">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/earth.png`}
            alt="Earth"
          />
          <span>earth</span>
        </Link>
      </div>
      <div className="celestial-body mars">
        <Link to="/info-page?planet=mars">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/mars.png`}
            alt="Mars"
          />
          <span>mars</span>
        </Link>
      </div>
      <div className="celestial-body jupiter">
        <Link to="/info-page?planet=jupiter">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/jupiter.png`}
            alt="Jupiter"
          />
          <span>jupiter</span>
        </Link>
      </div>
      <div className="celestial-body saturn">
        <Link to="/info-page?planet=saturn">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/saturn.png`}
            alt="Saturn"
          />
          <span>saturn</span>
        </Link>
      </div>
      <div className="celestial-body uranus">
        <Link to="/info-page?planet=uranus">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/uranus.png`}
            alt="Uranus"
          />
          <span>uranus</span>
        </Link>
      </div>
      <div className="celestial-body neptune">
        <Link to="/info-page?planet=neptune">
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/neptune.png`}
            alt="Neptune"
          />
          <span>neptune</span>
        </Link>
      </div>
    </section>
  );
};
