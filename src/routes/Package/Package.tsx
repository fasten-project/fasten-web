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
    const { verParam, moduleParam, callableParam } = this.props.match.params;
    const namespace = moduleParam ? decodeURIComponent(moduleParam) : null;

    if (callableParam) {
      return <Callable callable={defaultCallable} />;
    } else if (namespace) {
      return (
        <Module
          pkg={this.state.pkg.package_name}
          pkgVer={verParam}
          namespace={namespace}
        />
      );
    } else {
      return (
        <PackagePage pkg={this.state.pkg.package_name} pkgVer={verParam} />
      );
    }
  }

  render() {
    const { pkg } = this.state;
    const { verParam, moduleParam, callableParam } = this.props.match.params;

    let namespace = moduleParam ? decodeURIComponent(moduleParam) : null;
    let fasten_uri = callableParam ? decodeURIComponent(callableParam) : null;

    // Remove leading slash for better look in breadcrumbs.
    if (namespace && namespace.charAt(0) == "/") {
      namespace = namespace.substring(1);
    }
    if (fasten_uri && fasten_uri.charAt(0) == "/") {
      fasten_uri = fasten_uri.substring(1);
    }

    // Display placeholder while Package instance is loading from API.
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    // Return to homepage if package wasn't found.
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
            <Link to={`/packages/${pkg.package_name}/${verParam}`}>
              {pkg.project_name} {verParam}
            </Link>
            {namespace && (
              <>
                <span> / </span>
                <Link
                  to={`/packages/${pkg.package_name}/${verParam}/${moduleParam}`}
                >
                  {namespace}
                </Link>
              </>
            )}
            {fasten_uri && (
              <>
                <span> / </span>
                <Link
                  to={`/packages/${pkg.package_name}/${verParam}/${moduleParam}/${callableParam}`}
                >
                  {fasten_uri}
                </Link>
              </>
            )}
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
