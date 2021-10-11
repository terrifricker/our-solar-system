import { useEffect, useRef, useState } from "react";
import { useWebGL } from "../../hooks/useWebGL";
import { Scene, Renderer, Sphere } from "../../utils/3D";
import { kCelestialBodies } from "../../utils/constants";
import * as THREE from "three";
import "../../css/SolarSystem3D.css";

export const SolarSystem3D = () => {
  const [loading, setLoading] = useState(false);

  // this is where the whole scene will be attached to.
  const canvasRef = useRef(null);

  const rendererRef = useRef(
    new Renderer(window.innerWidth, window.innerHeight, {
      antialias: false,
      alpha: true,
    })
  );
  const sceneRef = useRef(new Scene(rendererRef.current));
  // /**
  //  * To add intellisense
  //  * @type {MutableRefObject<Map<string, Sphere>>}
  //  */
  // const celestialBodiesRef = useRef(new Map());
  const isWebGLAvailable = useWebGL();

  const buildSun = async () => {
    let sun = new Sphere({
      mapURL: kCelestialBodies.Sun.surfaceTexture,
      radius: kCelestialBodies.Sun.radius,
      segmentsHeight: 64,
      segmentsWidth: 64,
      shinySurface: true,
      emissiveColorHex: 0xffffff,
      emissiveIntensity: 1,
      emissiveMapURL: kCelestialBodies.Sun.surfaceTexture,
    });

    sun.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Sun.rotation;
    });

    sun.mesh.position.set(-20, 0, 0);

    // celestialBodiesRef.current.set("sun", sun);

    sceneRef.current.add(sun);

    // light is added here since the sun is the only light source in the scene.
    sceneRef.current.setAmbientLight(0xffffff, 0.3);
    sceneRef.current.setPointLight(0xffffff, 1, { x: -18, y: 0, z: 0 });
  };

  const buildMercury = async () => {
    let mercury = new Sphere({
      mapURL: kCelestialBodies.Mercury.surfaceTexture,
      bumpMapURL: kCelestialBodies.Mercury.bumpMapTexture,
      bumpScale: 0.1,
      shinySurface: true,
      radius: kCelestialBodies.Mercury.radius,
    });

    mercury.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Mercury.rotation;
    });

    mercury.mesh.position.set(-15, 0, 0);

    // celestialBodiesRef.current.set("mercury", mercury);

    sceneRef.current.add(mercury);
  };

  const buildVenus = async () => {
    let venus = new Sphere({
      mapURL: kCelestialBodies.Venus.surfaceTexture,
      radius: kCelestialBodies.Venus.radius,
      shinySurface: true,
    });

    venus.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Venus.rotation;
    });

    venus.mesh.position.set(-12, 0, 0);

    sceneRef.current.add(venus);
  };

  const buildEarth = async () => {
    let earth = new Sphere({
      mapURL: kCelestialBodies.Earth.surfaceTexture,
      bumpMapURL: kCelestialBodies.Earth.bumpMapTexture,
      bumpScale: 0.1,
      shinySurface: true,
      radius: kCelestialBodies.Earth.radius,
    });

    let clouds = new Sphere({
      mapURL: kCelestialBodies.Earth.cloudsTexture,
      radius: kCelestialBodies.Earth.radius + 0.03,
      transparent: true,
    });

    earth.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Earth.rotation;
    });

    clouds.setAnimation((mesh) => {
      // rotate 10% slower than the Earth
      mesh.rotation.y += kCelestialBodies.Earth.rotation * 0.9;
    });

    earth.mesh.position.set(-8.5, 0, 0);
    clouds.mesh.position.set(-8.5, 0, 0);

    sceneRef.current.add(earth, clouds);
  };

  const buildMars = async () => {
    let mars = new Sphere({
      mapURL: kCelestialBodies.Mars.surfaceTexture,
      bumpMapURL: kCelestialBodies.Mars.bumpMapTexture,
      bumpScale: 0.1,
      shinySurface: true,
      radius: kCelestialBodies.Mars.radius,
    });

    mars.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Mars.rotation;
    });

    mars.mesh.position.set(-5, 0, 0);

    sceneRef.current.add(mars);
  };

  const buildJupiter = async () => {
    let jupiter = new Sphere({
      mapURL: kCelestialBodies.Jupiter.surfaceTexture,
      radius: kCelestialBodies.Jupiter.radius,
    });

    jupiter.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Jupiter.rotation;
    });

    sceneRef.current.add(jupiter);
  };

  const buildSaturn = async () => {
    let saturn = new Sphere({
      mapURL: kCelestialBodies.Saturn.surfaceTexture,
      radius: kCelestialBodies.Saturn.radius,
    });

    saturn.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Saturn.rotation;
    });

    let innerRadius = kCelestialBodies.Saturn.radius + 0.01;
    let outerRadius = kCelestialBodies.Saturn.radius + 3;

    let ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 64);
    let pos = ringGeometry.attributes.position;
    let v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      ringGeometry.attributes.uv.setXY(
        i,
        v3.length() < (innerRadius + outerRadius) / 2 ? 0 : 1,
        1
      );
    }
    let ring = new THREE.Mesh(
      ringGeometry,
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          kCelestialBodies.Saturn.ringTexture
        ),
        transparent: true,
        side: THREE.DoubleSide,
      })
    );

    ring.rotation.x = 1.3;
    ring.rotation.y = 1;

    saturn.mesh.position.set(6, 0, 0);
    ring.position.set(6, 0, 0);

    sceneRef.current.add(saturn);
    // adding it this way because the ring is not a sphere instance hence
    // it does not have the animateNextFrame method defined by me(canttell).
    sceneRef.current._scene.add(ring);
  };

  const buildUranus = async () => {
    let uranus = new Sphere({
      mapURL: kCelestialBodies.Uranus.surfaceTexture,
      radius: kCelestialBodies.Uranus.radius,
    });

    uranus.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Uranus.rotation;
    });

    let innerRadius = kCelestialBodies.Uranus.radius + 1;
    let outerRadius = kCelestialBodies.Uranus.radius + 1.05;

    let ring = new THREE.Mesh(
      new THREE.RingGeometry(innerRadius, outerRadius, 128),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
      })
    );

    ring.rotation.x = 1;

    uranus.mesh.position.set(12, 0, 0);
    ring.position.set(12, 0, 0);

    sceneRef.current.add(uranus);

    // this ring 3d object is not an instance of Sphere
    // so to added to the scene is the only way.
    sceneRef.current._scene.add(ring);
  };

  const buildNeptune = async () => {
    let neptune = new Sphere({
      mapURL: kCelestialBodies.Neptune.surfaceTexture,
      radius: kCelestialBodies.Neptune.radius,
    });

    neptune.setAnimation((mesh) => {
      mesh.rotation.y += kCelestialBodies.Neptune.rotation;
    });

    neptune.mesh.position.set(19, 0, 0);

    sceneRef.current.add(neptune);
  };

  const buildSolarSystem = () => {
    let promises = [
      buildSun(),
      buildMercury(),
      buildVenus(),
      buildEarth(),
      buildMars(),
      buildJupiter(),
      buildSaturn(),
      buildUranus(),
      buildNeptune(),
    ];
    return Promise.all(promises);
  };

  // this function will run when the component is mounted
  useEffect(() => {
    // toggle loading screen/animation
    setLoading(true);

    /**
     * Although the availability of webGL is checked
     * in the parent component, SolarSystem, this is just to
     * ensure when this component is used alone in other components
     * will work as expected.
     */
    if (isWebGLAvailable) {
      // create all celestial bodies
      // start with the sun
      buildSolarSystem()
        .then(() => {
          setLoading(false);
          // transparent background
          rendererRef.current._renderer.setClearColor(0xffffff, 0);
          rendererRef.current.attachTo(canvasRef.current);

          sceneRef.current.positionCamera(0, 0, 20);

          sceneRef.current.animate();
        })
        .catch(console.error);
    } else {
      console.error("WebGL is not available.");
      setLoading(false);
    }
  }, [isWebGLAvailable]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="solar-system-3d">
      <h1 className="title">
        <span>Our Solar System</span>
        <img
          src={require("../../images/fallback-icons/orbit.png").default}
          alt="Orbit"
        />
      </h1>
      <div id="threeModel" ref={canvasRef}>
        {/**
         * here is where the solar system scene will be rendered.
         */}
      </div>
    </section>
  );
};
