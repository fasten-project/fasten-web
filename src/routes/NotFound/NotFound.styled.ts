import styled from "@emotion/styled";
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
