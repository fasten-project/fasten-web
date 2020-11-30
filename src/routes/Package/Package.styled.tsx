import styled from "@emotion/styled";
import metrics from "../../theme/metrics";
import colours from "../../theme/colours";
import { TabProps } from "./TabProps";

export const StyledContainer = styled.div({
  width: "50%",
  margin: "5% auto",
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

export const StyledTabMenu = styled.div({
  marginTop: 25,
});

export const StyledTabMenuItem = styled.button<TabProps>((props) => ({
  padding: "5px 10px",
  border: "none",
  outline: "none",
  transition: "ease 0.15s",
  backgroundColor: props.selected ? colours.primary : "revert",
  color: props.selected ? colours.white : "revert",

  ":hover": {
    backgroundColor: colours.primary,
    transform: "scale(1.05)",
    color: colours.white,
    cursor: "pointer",
  },
}));
