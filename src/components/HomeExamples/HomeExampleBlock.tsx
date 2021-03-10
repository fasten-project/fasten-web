import { RouteComponentProps, withRouter } from "react-router";
import * as React from "react";
import { StyledExampleBlockContainer } from "./HomeExamples.styled";

export interface HomeExampleBlockProps extends RouteComponentProps {
  /** Package name of the example.  **/
  pkgName: string;

  /** Package url of the example.  **/
  pkgUrl: string;

  /** Package description of the example.  **/
  pkgDesc: string;
}

export interface HomeExampleBlockState {}

/**
 * The component that renders a single example block.
 */
class InternalHomeExampleBlock extends React.Component<
  HomeExampleBlockProps,
  HomeExampleBlockState
> {
  render() {
    const { pkgName, pkgDesc, pkgUrl } = this.props;
    return (
      <StyledExampleBlockContainer>
        <a href={pkgUrl}>
          <h4>{pkgName}</h4>
        </a>
        <span>{pkgDesc}</span>
      </StyledExampleBlockContainer>
    );
  }
}

export const HomeExampleBlock = withRouter(InternalHomeExampleBlock);
