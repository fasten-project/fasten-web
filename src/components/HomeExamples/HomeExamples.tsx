import * as React from "react";
import { HomeExampleBlock } from "./HomeExampleBlock";
import { StyledHomeExamplesContainer } from "./HomeExamples.styled";

export interface HomeExamplesProps {}

export interface HomeExamplesState {}

/**
 * The component that renders the horizontal list of example packages at the Home Page.
 */
export class HomeExamples extends React.Component<
  HomeExamplesProps,
  HomeExamplesState
> {
  render() {
    return (
      <StyledHomeExamplesContainer>
        <HomeExampleBlock
          pkgName={"Mockito Core"}
          pkgDesc={"Tasty mocking framework for unit tests in Java."}
          pkgUrl={"/#/packages/org.mockito:mockito-core/1.10.18"}
        />
        <HomeExampleBlock
          pkgName={"Lagom"}
          pkgDesc={"The opinionated microservices framework."}
          pkgUrl={
            "/#/packages/com.lightbend.lagom:lagom-scaladsl-cluster_2.11/1.4.1"
          }
        />
        <HomeExampleBlock
          pkgName={"SLF4J API"}
          pkgDesc={"The Simple Logging Facade for Java."}
          pkgUrl={"/#/packages/org.slf4j:slf4j-api/1.1.0"}
        />
        <HomeExampleBlock
          pkgName={"Finagle"}
          pkgDesc={"A network stack for distributed systems.."}
          pkgUrl={"/#/packages/com.twitter:finagle-tunable_2.13/20.10.0"}
        />
        <HomeExampleBlock
          pkgName={"Dirigible"}
          pkgDesc={
            "High-Productivity Application that provides development tools and a runtime environment."
          }
          pkgUrl={
            "/#/packages/org.eclipse.dirigible:dirigible-core-messaging/5.2.0"
          }
        />
        <HomeExampleBlock
          pkgName={"Codegen Lite"}
          pkgDesc={
            "Holds the classes and templates required to generate the source files for the core SDK."
          }
          pkgUrl={"/#/packages/software.amazon.awssdk:codegen-lite/2.14.12"}
        />
      </StyledHomeExamplesContainer>
    );
  }
}
