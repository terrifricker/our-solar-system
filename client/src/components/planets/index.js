import { Mercury } from "./Mercury";
import { Venus } from "./Venus";
import { Earth } from "./Earth";
import { Mars } from "./Mars";
import { Jupiter } from "./Jupiter";
import { Saturn } from "./Saturn";
import { Uranus } from "./Uranus";
import { Neptune } from "./Neptune";

export const Planets = {
  mercury: Mercury,
  venus: Venus,
  earth: Earth,
  mars: Mars,
  jupiter: Jupiter,
  saturn: Saturn,
  uranus: Uranus,
  neptune: Neptune,
};

/**
 *
 * @param {string} name
 */
export function getPlanet(name) {
  return Planets[name.toLowerCase()];
}

export { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune };
