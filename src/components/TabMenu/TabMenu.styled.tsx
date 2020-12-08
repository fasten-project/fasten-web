import colours from "../../theme/colours";
import styled from "@emotion/styled";
import { TabProps } from "./TabProps";

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
