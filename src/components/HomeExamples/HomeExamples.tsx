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
          pkgName={"Junit"}
          pkgDesc={
            "The programmer-friendly testing framework for Java and the JVM."
          }
          pkgUrl={"/#/packages/junit:junit"}
        />
        <HomeExampleBlock
          pkgName={"JBossMQ Client"}
          pkgDesc={
            "Implementation of the Java Message Service API part of the J2EE specification."
          }
          pkgUrl={"/#/packages/jboss:jbossmq-client/3.2.3"}
        />
        <HomeExampleBlock
          pkgName={"Mockito Core"}
          pkgDesc={"Tasty mocking framework for unit tests in Java."}
          pkgUrl={"/#/packages/org.mockito:mockito-core/1.10.18"}
        />
        <HomeExampleBlock
          pkgName={"SLF4J API"}
          pkgDesc={"The Simple Logging Facade for Java."}
          pkgUrl={"/#/packages/org.slf4j:slf4j-api/1.1.0"}
        />
        <HomeExampleBlock
          pkgName={"Scala Library"}
          pkgDesc={"Standard library for the Scala Programming Language."}
          pkgUrl={"/#/packages/org.scala-lang:scala-library/2.10.0"}
        />
        <HomeExampleBlock
          pkgName={"Jackson Databind"}
          pkgDesc={"General data-binding functionality for Jackson."}
          pkgUrl={"/#/packages/com.fasterxml.jackson.core:jackson-databind"}
        />
      </StyledHomeExamplesContainer>
    );
  }
}
