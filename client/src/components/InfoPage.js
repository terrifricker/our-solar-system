import { useEffect, useState } from "react";
import { isWebGLAvailable } from "../utils/3D";
import { getPlanet } from "./planets";
import { useQuery } from "../hooks/useQuery";
import { Sun } from "./Sun";

import "../css/InfoPage.css";

export const InfoPage = () => {
  const [celestialBody, setCelestialBody] = useState(null);
  const query = useQuery();

  useEffect(() => {
    if (isWebGLAvailable()) {
      setCelestialBody(() => {
        let querystring = query.get("planet"); // try to get a planet query

        // if no planet query then try to get query for a star. i.e: sun
        if (!querystring && (querystring = query.get("star"))) {
          // when this block is run, then the query is for a star, the sun
          return <Sun viewWidth={500} viewHeight={500} />;
        }

        // default component to earth
        let PlanetComponent = getPlanet(querystring ?? "earth");
        return <PlanetComponent viewWidth={500} viewHeight={500} />;
      });
    }
  }, []);

  return (
    <main>
      {celestialBody ?? (
        <img
          className="left-side"
          src={`${process.env.REACT_APP_API_ENDPOINT}/resources/planet-photos/mercury.jpg`}
          alt="Mercury against the 
        black of space.  It is a medium gray with light-colored lines running primarily
        north and south, but with white spots with those light-colored lines runnning
        out away from the circle like the rays of the sun.  These lines transverse the 
        north/south lines."
        />
      )}

      {/** information here can be dynamically fetched from an API */}
      <section className="right-side">
        <h1>Mercury</h1>
        <article className="planet-facts planet-name" id="planet-name-facts">
          <h2>Planet Facts</h2>
          <div className="facts-container">
            <ul>
              <li>Distance from sun:</li>
              <li>Diameter:</li>
              <li>Length of year:</li>
              <li>Length of day:</li>
              <li>Average temperature:</li>
              <li>Gravitational pull at surface:</li>
            </ul>
          </div>
        </article>
        <article className="planet-details plant-name" id="planet-name-details">
          <h2>Planet Details</h2>
          <div className="details-container">
            <p>
              Here are a few paragraphs about Mercury. Peace understanding
              knowledge love smile happy puppy kitty action achievement
              agreeable amazing adventure bountiful brave brilliant bubbles
              bright color calm clean cheery certain constant creative
              delightful energetic enthusiastic encouraging easy engaging
              familiar fabulous fantastic friendly funny fresh genius giving
              generous good glowing great green orange yellow blue purple pink
              peach teal turquoise graceful.
            </p>
            <p>
              Jolly joy kind laugh light lucky legendary marvelous meaningful
              miraculous nice nurturing open optimistic pleasant progress
              powerful plentiful productive successful protected endearing
              protective quiet music quality refreshing rejoice reliable reward
              remarkable skilled smiling sunny sparkling special superb secure
              safe stupendous support terrific thriving thrilling tranquil
              upbeat valued vibrant victory victorious welcome worthy yes yummy
              zealous.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};
