import * as React from "react";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import {
  StyledContainer,
  StyledDateCreated,
  StyledTabMenu,
  StyledTabMenuItem,
  StyledTitle,
  StyleRepoLink,
} from "./Package.styled";
import { GoRepo } from "react-icons/go";
import {
  defaultPackage,
  Package as PackageModel,
} from "../../requests/payloads/package-payload";
import { getPackage } from "../../requests/services/package";
import { PackageTable } from "../../components/PackageTable";

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

  /** Index of the currently selected tab. */
  tabIndex: number;

  /** The list of available tabs on the page. */
  tabs: Array<Tab>;
}

/**
 * The data interface for the Tab element.
 */
interface Tab {
  /** The label to display for this tab. */
  label: string;

  /** The content component of this tab. */
  body: React.FunctionComponent;
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
      tabIndex: 0,
      tabs: [
        {
          label: "Modules",
          body: () => {
            return (
              <PackageTable
                kind={"MODULES"}
                pkg={this.state.pkg.package_name}
                pkgVersion={this.state.pkg.version}
              />
            );
          },
        },
        {
          label: "Callables",
          body: () => (
            <PackageTable
              kind={"CALLABLES"}
              pkg={this.state.pkg.package_name}
              pkgVersion={this.state.pkg.version}
            />
          ),
        },
      ],
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
      // 404?
      console.log("Bad error");
      this.setState({
        isLoading: false,
      });
    }
  }

  /**
   * The component builder for the tab menu element.
   * @param props - the tab properties defined by {number} index and {string} label.
   */
  TabMenuItem: React.FunctionComponent<{ index: number; label: string }> = (
    props
  ) => (
    <StyledTabMenuItem
      selected={this.state.tabIndex == props.index}
      onClick={() =>
        this.setState({
          tabIndex: props.index,
        })
      }
    >
      {props.label}
    </StyledTabMenuItem>
  );

  render() {
    const { pkg } = this.state;
    const { verParam, moduleParam, callableParam } = this.props.match.params;

    // Display placeholder while Package instance is loading from API.
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    // Redirect to the latest version by default.
    if (verParam == undefined) {
      return <Redirect to={`/packages/${pkg.package_name}/${pkg.version}`} />;
    }

    // The body of the page is defined by currently active tab.
    const TabBody =
      this.state.tabs.length > this.state.tabIndex
        ? this.state.tabs[this.state.tabIndex].body
        : null;

    return (
      <>
        <NavBar />
        <StyledContainer>
          <StyledTitle>
            {pkg.project_name} {pkg.version}
            {pkg.repository && (
              <StyleRepoLink href={pkg.repository}>
                <GoRepo />
              </StyleRepoLink>
            )}
            {moduleParam && ` / ${moduleParam}`}
            {callableParam && ` / ${callableParam}`}
          </StyledTitle>
          {pkg.created_at && (
            <StyledDateCreated>
              Created {pkg.created_at.toLocaleDateString()}
            </StyledDateCreated>
          )}
          <StyledTabMenu>
            {this.state.tabs.map((tab: Tab, index: number) => (
              <this.TabMenuItem
                key={`tab_${index}`}
                index={index}
                label={tab.label}
              />
            ))}
          </StyledTabMenu>
          {TabBody && <TabBody />}
        </StyledContainer>
      </>
    );
  }
}

export const Package = withRouter(InternalPackage);
