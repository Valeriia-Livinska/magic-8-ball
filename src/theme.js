export const breakpoints = {
  mob: "320",
  tab: "768",
  desk: "1280",
};

export const theme = {
  colors: {
    black: "#000",
    white: "#fff",

    darkBlue: "#0A1828",
    darkBlueLite: "#081623",

    turquoise: "#178582",
    turquoiseLite: "#2db2a9",

    gold: "#BFA181",
    goldLite: "#e2c798",

    text: "#fff",
    textColorized: "#E0144C",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
    // import url("https://fonts.googleapis.com/css2?family=Marck+Script&display=swap");
  },

  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    ml: "24px",
    l: "32px",
    xl: "64px",
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: "none",
    normal: "1px solid",
    medium: "2px solid",
    large: "3px solid",
  },

  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
  },

  breakpoints: ["320px", "768px", "1280px"],

  //mediaQueries
  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tab - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mob}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tab
    }px) and (max-width: ${breakpoints.desk - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tab}px)`,
    notDesktop: `@media screen and (max-width: ${breakpoints.desk - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desk}px)`,
  },

  transitions: {
    durations: {
      default: "250ms",
    },
    functions: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};
