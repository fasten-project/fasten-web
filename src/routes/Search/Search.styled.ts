import styled from "@emotion/styled";
import metrics from "../../theme/metrics";
import colours from "../../theme/colours";

export const StyledContainer = styled.div({
  width: "60%",
  margin: "15px auto",
  "& a": {
    color: colours.primary,
    textDecoration: "none",
    ":hover": {
      filter: "brightness(85%)",
    },
  },
});

/**
 * Text Field element
 */
export const StyledSeachBarInput = styled.div({
  position: "relative",
  width: "100%",
  zIndex: 1,
  margin: "10px auto",
  marginBottom: metrics.margin.lg,

  // Input Field
  "& input": {
    boxSizing: "border-box",
    outline: "none",
    border: "none",

    fontSize: metrics.fontSize.xxl,
    color: "#666666",
    display: "block",
    width: "100%",
    backgroundColor: "#e6e6e6",
    height: 70,
    borderRadius: 35,
    padding: "0 30px 0 100px",

    // Focused input field affects icon prefix.
    ":focus + span": {
      color: colours.primary,
      paddingLeft: metrics.padding.lg,
    },
  },

  // Icon Prefix
  "& span": {
    fontSize: metrics.fontSize.xxl,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    borderRadius: 25,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    paddingLeft: metrics.padding.lg + 10,
    pointerEvents: "none",
    color: "#666666",
    transition: "all 0.4s",
  },
});

export const StyledSuggestion = styled.a({
  display: "block",
  margin: "0 20px",
  padding: "5px 15px",
  verticalAlign: "center",
  height: 50,
  lineHeight: "50px",
  ":hover": {
    backgroundColor: "rgba(82, 82, 82, .2)",
  },
});
