import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
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
  /** The package name retrieved passed through URL route param. */
  pkgParam: string;
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
  /** The index of this tab. */
  index: number;

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
          index: 0,
          label: "Modules",
          body: () => (
            <PackageTable
              kind={"MODULES"}
              pkg={this.state.pkg[0].package_name}
              pkgVersion={this.state.pkg[0].version}
            />
          ),
        },
        {
          index: 1,
          label: "Callables",
          body: () => (
            <PackageTable
              kind={"CALLABLES"}
              pkg={this.state.pkg[0].package_name}
              pkgVersion={this.state.pkg[0].version}
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

    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
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
            {pkg[0].project_name} {pkg[0].version}
            {pkg[0].repository && (
              <StyleRepoLink href={pkg[0].repository}>
                <GoRepo />
              </StyleRepoLink>
            )}
          </StyledTitle>
          {pkg[0].created_at && (
            <StyledDateCreated>
              Created {pkg[0].created_at.toLocaleDateString()}
            </StyledDateCreated>
          )}
          <StyledTabMenu>
            {this.state.tabs.map((tab: Tab) => (
              <this.TabMenuItem
                key={tab.index}
                index={tab.index}
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
