import { kSaturnProps } from "../../utils/constants";
import { Planet } from "./Planet";
import * as THREE from "three";

export const Saturn = ({ viewWidth, viewHeight }) => {
  const sceneOptions = {
    orbitalControls: {
      enable: true,
      maxDistance: 10,
      minDistance: 2,
    },
  };

  const sphereOptions = {
    mapURL: kSaturnProps.surfaceTexture,
  };

  let innerRadius = 1.01;
  let outerRadius = innerRadius + 2;
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
      map: new THREE.TextureLoader().load(kSaturnProps.ringTexture),
      transparent: true,
      side: THREE.DoubleSide,
    })
  );

  ring.rotation.x = 1.3;

  // mock a sphere
  // by default what should be passed to the Planet component should be
  // an instance of Sphere, but we created a native THREE.Mesh instance
  // hence, there are additional method and property that are not available.
  // since everything in js is an object, we can just create an object with the
  // missing property and method, hence, we mock a Sphere instance.
  let mockSphere = {
    mesh: ring,
    animateNextFrame: () => {},
  };

  const animation = (mesh) => {
    mesh.rotation.y += kSaturnProps.rotation;
  };

  return (
    <Planet
      viewWidth={viewWidth}
      viewHeight={viewHeight}
      sceneOptions={sceneOptions}
      sphereOptions={sphereOptions}
      animation={animation}
      layers={[mockSphere]}
    />
  );
};
