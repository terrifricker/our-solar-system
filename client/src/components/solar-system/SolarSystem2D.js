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
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/sun.png`}
          alt="Sun"
        />
        <span>sun</span>
      </div>
      <div className="celestial-body mercury">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/mercury.png`}
          alt="Mercury"
        />
        <span>mercury</span>
      </div>
      <div className="celestial-body venus">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/venus.png`}
          alt="Venus"
        />
        <span>venus</span>
      </div>
      <div className="celestial-body earth">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/venus.png`}
          alt="Earth"
        />
        <span>earth</span>
      </div>
      <div className="celestial-body mars">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/mars.png`}
          alt="Mars"
        />
        <span>mars</span>
      </div>
      <div className="celestial-body jupiter">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/jupiter.png`}
          alt="Jupiter"
        />
        <span>jupiter</span>
      </div>
      <div className="celestial-body saturn">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/saturn.png`}
          alt="Saturn"
        />
        <span>saturn</span>
      </div>
      <div className="celestial-body uranus">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/uranus.png`}
          alt="Uranus"
        />
        <span>uranus</span>
      </div>
      <div className="celestial-body neptune">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/fallback-icons/neptune.png`}
          alt="Neptune"
        />
        <span>neptune</span>
      </div>
    </section>
  );
};
