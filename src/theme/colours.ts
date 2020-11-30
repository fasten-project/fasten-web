// https://coolors.co/f34b67-415a77-778da9-e0e1dd-2f2e41

const baseColours = {
  transparent: "transparent",
  white: "#fff",

  primary: "#00A6D6",

  /** Greys */
  black: "#2f2e41",
  grey: "#9d9d9d",
  silver: "#a5b1c2",
  platinum: "#e0e1dd",
  platinumWhite: "#f8f9f9",

  highBlue: "#45aaf2",
  boyzoneBlue: "#2d98da",
  ntscBlue: "#4b7bec",
  royalBlue: "#3867d6",

  fusionRed: "#fc5c65",
  desireRed: "#eb3b5a",

  hibiscusOrange: "#fd9644",
  bronzeOrange: "#fa8231",

  flirtatiousYellow: "#fed330",
  taxiYellow: "#f7b731",

  reptileGreen: "#26de81",
  algalGreen: "#20bf6b",

  overlay: "rgba(80, 80, 80, 0.7)",
  transparentGrey: "#9d9d9daa",
};

const colours = {
  ...baseColours,

  /** Action colours */
  informative: baseColours.boyzoneBlue,
  positive: baseColours.algalGreen,
  negative: baseColours.desireRed,
  warning: baseColours.taxiYellow,
};

export default colours;
