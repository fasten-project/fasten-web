import styled from "@emotion/styled";
import metrics from "../../theme/metrics";
import colours from "../../theme/colours";

export const StyledContainer = styled.div({
  marginTop: "12%",
  width: "100%",
  "& a": {
    color: colours.primary,
    textDecoration: "none",
    ":hover": {
      filter: "brightness(85%)",
    },
  },
});

export const StyledTitle = styled.p({
  width: "45%",
  margin: "auto",
  fontSize: metrics.fontSize.xl,
  textAlign: "center",
});

export const StyledSubtitle = styled.p({
  textAlign: "center",
});

/**
 * Text Field element
 */
export const StyledSeachBarInput = styled.div({
  position: "relative",
  width: "60%",
  zIndex: 1,
  margin: "50px auto",
  marginBottom: metrics.margin.sm,

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

export const StyledDisclaimer = styled.div({
  position: "fixed",
  bottom: 20,
  left: "20%",
  margin: "0 auto",
  textAlign: "center",
  width: "60%",
});
