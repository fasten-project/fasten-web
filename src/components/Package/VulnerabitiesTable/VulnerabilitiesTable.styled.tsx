import styled from "@emotion/styled";
import metrics from "../../../theme/metrics";
import colours from "../../../theme/colours";

export const StyledContainer = styled.div({
  margin: "8% auto",
});

export const StyledVersionRow = styled.p({
  fontSize: metrics.fontSize.xl,
  marginTop: metrics.margin.lg,
  a: {
    textDecoration: "none",
    "&:last-child": {
      color: colours.fusionRed,
    },
  },
});
