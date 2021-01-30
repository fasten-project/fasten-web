import * as React from "react";
import { NavBar } from "../../components/NavBar";
import { StyledContainer } from "./NotFound.styled";
import { RouteComponentProps, withRouter } from "react-router-dom";

/**
 * Props for the NotFound route.
 */
export interface NotFoundProps {}

/**
 * State for the NotFound route.
 */
export interface NotFoundState {}

/**
 * The NotFound (404) page of the application.
 */
class InternalNotFound extends React.Component<
  RouteComponentProps<NotFoundProps>,
  NotFoundState
> {
  render() {
    return (
      <>
        <NavBar />
        <StyledContainer>
          <h1>Page Not Found (404)</h1>
          <p>
            Looks like you have followed a broken link or entered a URL that
            does not exist on the site.
          </p>
          <a href={"/"}>&larr; Back to home page</a>
        </StyledContainer>
      </>
    );
  }
}

export const NotFound = withRouter(InternalNotFound);
