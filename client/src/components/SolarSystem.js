import "../css/SolarSystem.css";

export const SolarSystem = () => {
  return (
    <section id="solarSystem">
      <h1 className="title">
        <span>Our Solar System</span>
        <img
          src={require("../images/fallback-icons/orbit.png").default}
          alt="Orbit"
        />
      </h1>
      <div className="celestial-body sun">
        <img
          src={require("../images/fallback-icons/sun.png").default}
          alt="Sun"
        />
        <span>sun</span>
      </div>
      <div className="celestial-body mercury">
        <img
          src={require("../images/fallback-icons/mercury.png").default}
          alt="Mercury"
        />
        <span>mercury</span>
      </div>
      <div className="celestial-body venus">
        <img
          src={require("../images/fallback-icons/venus.png").default}
          alt="Venus"
        />
        <span>venus</span>
      </div>
      <div className="celestial-body earth">
        <img
          src={require("../images/fallback-icons/earth.png").default}
          alt="Earth"
        />
        <span>earth</span>
      </div>
      <div className="celestial-body mars">
        <img
          src={require("../images/fallback-icons/mars.png").default}
          alt="Mars"
        />
        <span>mars</span>
      </div>
      <div className="celestial-body jupiter">
        <img
          src={require("../images/fallback-icons/jupiter.png").default}
          alt="Jupiter"
        />
        <span>jupiter</span>
      </div>
      <div className="celestial-body saturn">
        <img
          src={require("../images/fallback-icons/saturn.png").default}
          alt="Saturn"
        />
        <span>saturn</span>
      </div>
      <div className="celestial-body uranus">
        <img
          src={require("../images/fallback-icons/uranus.png").default}
          alt="Uranus"
        />
        <span>uranus</span>
      </div>
      <div className="celestial-body neptune">
        <img
          src={require("../images/fallback-icons/neptune.png").default}
          alt="Neptune"
        />
        <span>neptune</span>
      </div>
    </section>
  );
};
