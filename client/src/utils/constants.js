// celestial bodies rotation speed
// negative -> clockwise
// positive -> counter clockwise
export const kSunRotationSpeed = 0.0001;
export const kVenusRotationSpeed = -0.008;
export const kMercuryRotationSpeed = 0.005;
export const kEarthRotationSpeed = 0.0015;
export const kMarsRotationSpeed = 0.0015;
export const kJupiterRotationSpeed = 0.0006;
export const kSaturnRotationSpeed = 0.00066;
export const kUranusRotationSpeed = -0.001;
export const kNeptuneRotationSpeed = 0.001;

// celestial bodies radius
export const kSunRadius = 3;
export const kVenusRadius = 0.9;
export const kMercuryRadius = 0.4;
export const kEarthRadius = 1;
export const kMarsRadius = 1;
export const kJupiterRadius = 2.5;
export const kSaturnRadius = 2.3;
export const kUranusRadius = 2;
export const kNeptuneRadius = 1.95;

// celestial bodies textures urls
export const kSunSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/sun-surface.jpeg`;
export const kMercurySurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/mercury-surface.jpg`;
export const kMercuryBumpMapTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/mercury-bump-map.jpg`;
export const kVenusSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/venus-surface.jpeg`;
export const kEarthSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/earth-surface.jpeg`;
export const kEarthBumpMapTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/earth-bump-map.jpeg`;
export const kEarthCloudsTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/earth-clouds.png`;
export const kMarsSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/mars-surface.jpeg`;
export const kMarsBumpMapTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/mars-bump-map.png`;
export const kJupiterSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/jupiter-surface.jpeg`;
export const kSaturnSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/saturn-surface.jpeg`;
export const kSaturnRingTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/saturn-ring.png`;
export const kUranusSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/uranus-surface.jpeg`;
export const kUranusRingTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/uranus-ring.jpg`;
export const kUranusRingTransTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/uranus-ring-trans-map.gif`;
export const kNeptuneSurfaceTexture = `${process.env.REACT_APP_API_ENDPOINT}/resources/textures/neptune-surface.jpeg`;

// compilation of props for each celestial body
export const kSunProps = {
  radius: kSunRadius,
  rotation: kSunRotationSpeed,
  surfaceTexture: kSunSurfaceTexture,
};

export const kMercuryProps = {
  radius: kMercuryRadius,
  rotation: kMercuryRotationSpeed,
  surfaceTexture: kMercurySurfaceTexture,
  bumpMapTexture: kMercuryBumpMapTexture,
};

export const kVenusProps = {
  radius: kVenusRadius,
  rotation: kVenusRotationSpeed,
  surfaceTexture: kVenusSurfaceTexture,
};

export const kEarthProps = {
  radius: kEarthRadius,
  rotation: kEarthRotationSpeed,
  surfaceTexture: kEarthSurfaceTexture,
  bumpMapTexture: kEarthBumpMapTexture,
  cloudsTexture: kEarthCloudsTexture,
};

export const kMarsProps = {
  radius: kMarsRadius,
  rotation: kMarsRotationSpeed,
  surfaceTexture: kMarsSurfaceTexture,
  bumpMapTexture: kMarsBumpMapTexture,
};

export const kJupiterProps = {
  radius: kJupiterRadius,
  rotation: kJupiterRotationSpeed,
  surfaceTexture: kJupiterSurfaceTexture,
};

export const kSaturnProps = {
  radius: kSaturnRadius,
  rotation: kSaturnRotationSpeed,
  surfaceTexture: kSaturnSurfaceTexture,
  ringTexture: kSaturnRingTexture,
};

export const kUranusProps = {
  radius: kUranusRadius,
  rotation: kUranusRotationSpeed,
  surfaceTexture: kUranusSurfaceTexture,
  ringTexture: kUranusRingTexture,
  ringTransTexture: kUranusRingTransTexture,
};

export const kNeptuneProps = {
  radius: kNeptuneRadius,
  rotation: kNeptuneRotationSpeed,
  surfaceTexture: kNeptuneSurfaceTexture,
};

// all in one celestial bodies props
export const kCelestialBodies = {
  Sun: kSunProps,
  Mercury: kMercuryProps,
  Venus: kVenusProps,
  Earth: kEarthProps,
  Mars: kMarsProps,
  Jupiter: kJupiterProps,
  Saturn: kSaturnProps,
  Uranus: kUranusProps,
  Neptune: kNeptuneProps,
};
