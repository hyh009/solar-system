export const PLANET = {
  SUN: {
    NAME: "Sun",
    DESC: "The Sun is a star which is located at the center of our solar system. It is a yellow dwarf star that gives off different types of energy such as infra-red energy (heat), ultraviolet light, radio waves and light.",
    MODEL: "sphere.obj",
    TEXTURE: "sun.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.001,
    ROTATE_X: 0,
  },
  MERCURY: {
    NAME: "Mercury",
    DESC: "Mercury is the smallest planet in the Solar System.  It makes one trip around the Sun once every 87.969 days which is the shortest of all planets in the Solar System. Even though Mercury is the closest planet to the Sun, it is not the warmest.",
    MODEL: "sphere.obj",
    TEXTURE: "mercury.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.0004,
    CIRCLE_SPEED: 0.001,
    START_ANGLE: 30,
    DISTANCE_SCALE_X: 90,
    DISTANCE_SCALE_Z: 70,
    ROTATE_X: 0,
  },
  VENUS: {
    NAME: "Venus",
    DESC: "Venus is the second planet from the Sun. The year length of Venus is 225 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets. It does not have any natural satellites. The pressure on Venus' surface is 92 times that of Earth.",
    MODEL: "sphere.obj",
    TEXTURE: "venus.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.0001,
    CIRCLE_SPEED: 0.00066,
    START_ANGLE: 50,
    DISTANCE_SCALE_X: 110,
    DISTANCE_SCALE_Z: 90,
    ROTATE_X: 0,
  },
  EARTH: {
    NAME: "Earth",
    DESC: "Earth is the planet we live on and is the third planet from the Sun. Earth is the only planet in our solar system that has a large amount of liquid water. Because of this, people sometimes call it blue planet.",
    MODEL: "sphere.obj",
    TEXTURE: "earth.png",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.025,
    CIRCLE_SPEED: 0.0005,
    START_ANGLE: 70,
    DISTANCE_SCALE_X: 130,
    DISTANCE_SCALE_Z: 110,
    ROTATE_X: 0,
  },
  MARS: {
    NAME: "Mars",
    DESC: "Mars is the second-smallest planet in the Solar System after Mercury. It has the largest volcano in the Solar System. The temperatures on Mars are colder than on Earth, because it is farther away from the Sun and has less air to keep heat in.",
    MODEL: "sphere.obj",
    TEXTURE: "mars.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.03,
    CIRCLE_SPEED: 0.00026,
    START_ANGLE: 90,
    DISTANCE_SCALE_X: 150,
    DISTANCE_SCALE_Z: 130,
    ROTATE_X: 0,
  },
  JUPITER: {
    NAME: "Jupiter",
    DESC: "Jupiter is the fifth planet from the Sun and is the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter can be seen even without the use of telescope.",
    MODEL: "sphere.obj",
    TEXTURE: "jupiter.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.06,
    CIRCLE_SPEED: 0.0000054,
    START_ANGLE: 110,
    DISTANCE_SCALE_X: 170,
    DISTANCE_SCALE_Z: 150,
    ROTATE_X: 0,
  },
  SATURN: {
    NAME: "Saturn",
    DESC: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. There is also a very large system of rings around Saturn. These rings are made of ice with smaller amounts of rocks and dust. Saturn takes 29.6 Earth years to revolve around the Sun.",
    MODEL: "Saturn.obj",
    TEXTURE: "saturn.jpg",
    SCALE: [2, 2, 2],
    ROTATE_SPEED: 0.056,
    CIRCLE_SPEED: 0.000002,
    START_ANGLE: 130,
    DISTANCE_SCALE_X: 190,
    DISTANCE_SCALE_Z: 170,
    ROTATE_X: 30,
  },
  URANUS: {
    NAME: "Uranus",
    DESC: "Uranus is the seventh planet from the Sun. The temperature on Uranus is −197 degrees C. Uranus completes its orbit around the Sun in 84 earth years. It completes a spin around itself in 17 hours and 14 minutes. The planet is tilted on its axis so much that it is sideways.",
    MODEL: "sphere.obj",
    TEXTURE: "uranus.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.035,
    CIRCLE_SPEED: 0.0000005,
    START_ANGLE: 150,
    DISTANCE_SCALE_X: 210,
    DISTANCE_SCALE_Z: 190,
    ROTATE_X: 0,
  },
  NEPTUNE: {
    NAME: "Neptune",
    DESC: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter. It also contains small amounts of methane which makes the planet appear blue.",
    MODEL: "sphere.obj",
    TEXTURE: "neptune.jpg",
    SCALE: [1, 1, 1],
    ROTATE_SPEED: 0.037,
    CIRCLE_SPEED: 0.00000025,
    START_ANGLE: 170,
    DISTANCE_SCALE_X: 230,
    DISTANCE_SCALE_Z: 210,
    ROTATE_X: 0,
  },
};

export const OVERALL = {
  ROTATE_SPEED: 0.025,
};

export const PLANET_ORDER = [
  "SUN",
  "MERCURY",
  "VENUS",
  "EARTH",
  "MARS",
  "JUPITER",
  "SATURN",
  "URANUS",
  "NEPTUNE",
];