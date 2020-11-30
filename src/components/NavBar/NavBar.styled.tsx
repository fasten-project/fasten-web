import metrics from "../../theme/metrics";
import colours from "../../theme/colours";
import styled from "@emotion/styled";

export const StyledContainer = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  minHeight: "70px",
  zIndex: 10,
  backgroundColor: colours.primary,
  color: colours.white,
  padding: "15px 0",
});

export const StyledNavTitle = styled.div({
  marginLeft: metrics.margin.lg,
  marginRight: metrics.margin.md,
  width: "15%",
});

export const StyledNavLeft = styled.div({
  display: "flex",
  alignItems: "center",
  alignContent: "flex-start",
});

export const StyledNavRight = styled.div({
  display: "flex",
  alignItems: "center",
  alignContent: "flex-end",
});

export const StyledNavItem = styled.div({
  display: "flex",
  alignItems: "flex-start",
  height: "100%",
});

export const StyledNavLink = styled.a({
  fontSize: metrics.fontSize.xl,

  paddingLeft: metrics.padding.none,
  paddingRight: metrics.padding.xl,
  paddingTop: metrics.padding.tiny,
  paddingBottom: metrics.padding.tiny,

  color: colours.white,
  transition: "0.4s ease",

  alignSelf: "center",

  ":hover": {
    color: colours.platinum,
    transform: "scale(1.1)",
  },
});
