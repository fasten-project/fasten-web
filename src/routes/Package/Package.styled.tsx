import styled from "@emotion/styled";
import metrics from "../../theme/metrics";
import colours from "../../theme/colours";

export const StyledContainer = styled.div({
  width: "50%",
  margin: "5% auto",
});

export const StyledLoaderContainer = styled.div({
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%)",
  textAlign: "center",
});

export const StyledTitle = styled.h1({
  margin: 0,
  marginBottom: 15,
});

export const StyleRepoLink = styled.a({
  marginLeft: metrics.margin.sm,
  fontSize: metrics.fontSize.xl,
  color: colours.primary,
  textDecoration: "none",
  ":hover": {
    filter: "brightness(80%)",
  },
});

export const StyledDateCreated = styled.h3({
  display: "inline-block",
  color: colours.grey,
  margin: 0,
});
