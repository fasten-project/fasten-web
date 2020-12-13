import * as React from "react";
import {
  Link,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import {
  StyledContainer,
  StyledDateCreated,
  StyledTitle,
} from "./Package.styled";
import {
  defaultPackage,
  Package as PackageModel,
} from "../../requests/payloads/package-payload";
import { getPackage } from "../../requests/services/package";
import { Package as PackagePage } from "../../components/Package";
import { Module } from "../../components/Module";
import { Callable } from "../../components/Callable";
import { defaultCallable } from "../../requests/payloads/package-callable-payload";

/**
 * Props for the Package route.
 */
export interface PackageProps {
  /** The package name passed through URL route param. */
  pkgParam: string;

  /** The version of the package passed through URL route param. */
  verParam: string;

  /** The module name of the package passed through URL route param. */
  moduleParam: string;

  /** The callable (FASTEN URI) of the package passed through URL route param. */
  callableParam: string;
}

/**
 * State for the Package route.
 */
export interface PackageState {
  /** Indicator of the current state; whether or not the page is loading. */
  isLoading: boolean;

  /** The loaded Package instance from API. */
  pkg: PackageModel;
}

/**
 * The package overview page.
 * Displays overview of versions, dependencies, modules, callables and vulnerabilities.
 */
class InternalPackage extends React.Component<
  RouteComponentProps<PackageProps>,
  PackageState
> {
  constructor(props: RouteComponentProps<PackageProps>, state: PackageState) {
    super(props, state);

    this.state = {
      isLoading: true,
      pkg: defaultPackage,
    };
  }

  componentDidMount(): void {
    void this.retrievePackage();
  }

  /**
   * Method to retrieve and initialize the package from API.
   */
  async retrievePackage() {
    this.setState({
      isLoading: true,
    });

    const { pkgParam } = this.props.match.params;

    try {
      const pkga: PackageModel = await getPackage(pkgParam);

      this.setState({
        isLoading: false,
        pkg: pkga,
      });
    } catch (error) {
      // TODO: display error?
      console.log(error.toString());
      this.setState({
        isLoading: false,
      });
    }
  }

  renderAbstractionContent() {
    const { moduleParam, callableParam } = this.props.match.params;
    if (callableParam) {
      return <Callable callable={defaultCallable} />;
    } else if (moduleParam) {
      return <Module pkg={this.state.pkg} namespace={moduleParam} />;
    } else {
      return <PackagePage pkg={this.state.pkg} />;
    }
  }

  render() {
    const { pkg } = this.state;
    const { verParam, moduleParam, callableParam } = this.props.match.params;

    // Display placeholder while Package instance is loading from API.
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    if (pkg.id == 0) {
      return <Redirect to={"/"} />;
    }

    // Redirect to the latest version by default.
    if (verParam == undefined) {
      return <Redirect to={`/packages/${pkg.package_name}/${pkg.version}`} />;
    }

    return (
      <>
        <NavBar />
        <StyledContainer>
          <StyledTitle>
            <Link to={`/packages/${pkg.package_name}/${pkg.version}`}>
              {pkg.project_name} {pkg.version}
            </Link>
            {moduleParam && ` / ${moduleParam}`}
            {callableParam && ` / ${callableParam}`}
          </StyledTitle>
          {pkg.created_at && (
            <StyledDateCreated>
              Created {pkg.created_at.toLocaleDateString()}
            </StyledDateCreated>
          )}
          {/*{pkg.repository && (*/}
          {/*  <StyleRepoLink href={pkg.repository}>*/}
          {/*    <GoRepo />*/}
          {/*  </StyleRepoLink>*/}
          {/*)}*/}
          {this.renderAbstractionContent()}
        </StyledContainer>
      </>
    );
  }
}

export const Package = withRouter(InternalPackage);
