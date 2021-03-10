import styled from "@emotion/styled";

/**
 * The styled component for the container that holds the example blocks on the homepage.
 */
export const StyledHomeExamplesContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  margin: "5% 0",

  "& h4": {
    margin: "0 0 10px",
  },
});

/**
 * The styled component for the container of the example block itself on the homepage.
 */
export const StyledExampleBlockContainer = styled.div({
  display: "inline-block",
  width: "15%",
  height: "150px",
  margin: "0 20px",
  padding: "20px",

  lineHeight: "1.5",
  textAlign: "left",
  overflow: "scroll",

  border: "1px solid rgba(200, 200, 200, .7)",
  boxShadow: "5px 5px 10px grey",
  borderRadius: 10,
});
