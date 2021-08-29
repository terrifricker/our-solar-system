# Our Solar System

### A collaboration by developers found around the world who found each other on Discord.

A website for learning about our solar system.


## How to use 3D planet components 🧐

```javascript
// component.js
// Assuming that this file is located at /client/src/components
import { Mercury } from "./components/planets";

const Component = () => {
  return (
    <div>
      <Mercury viewWidth={500} viewHeight={500} />
    </div>
  );
};
```

## How to create a custom 3D planet or sphere component 🧐

```javascript
// Assuming this file is located at /client/src/components/planets
import { Sphere, Scene, Renderer } from "../../utils/3D";
import { useRef, useEffect } from "react";

// viewWidth and viewHeight are required props.
export const PlanetOrSphere = ({ viewWidth, viewHeight }) => {
  const rendererRef = useRef(
    new Renderer(viewWidth, viewHeight, { antialias: false })
  );
  const sceneRef = useRef(new Scene(rendererRef.current));
  const sphereRef = useRef(
    new Sphere({
      mapURL: "url/to/map/texture", // this property is required. primary texture of the object.
      bumpMapURL: "url/to/bump/map", // this property is optional.
      bumpScale: 0.3, // this property is optional.
      shinySurface: true, // this property is optional. however, for objects that uses has bumpMapURL set, this must be set to true.
    })
  );

  const canvasRef = useRef(null);

  useEffect(() => {
    sphereRef.current.setAnimation(() => {
      // Sets the animation controller.
      // For each frame, this function will be invoked.
      sphereRef.current.mesh.rotation.y += 0.0015; // Rotate around the y-axis counter-clockwise.
    });

    // Multiple objects can be added to the scene.
    // The value can be a single Sphere or an array of Spheres.
    sceneRef.current.add(sphereRef.current);

    // Setting the camera position is very important.
    // By default the camera appears at position (0, 0, 0).
    // If the camera is not position right, nothing can be seen.
    sceneRef.current.positionCamera(0, 0, 3); // x, y, z

    // Lighting for the scene.
    // For now, there are only two types, ambient and point.
    // Ambient light, as the name suggest it is an ambient light.
    // Point light, is a 360 degrees light source. Much like how to sun emits light.
    sceneRef.current.setAmbientLight(0xffffff, 0.2);
    sceneRef.current.setPointLight(0xffffff, 1, { x: 5, y: 3, z: 5 });

    // The generated model have to be attached to some sort of DOM element.
    rendererRef.current.attachTo(canvasRef.current);

    // This will start the animation sequence.
    // If no animation was set, then it will just render the same frame over and over.
    sceneRef.current.animate();
  }, []);

  return <div ref={canvasRef}></div>;
};
```
