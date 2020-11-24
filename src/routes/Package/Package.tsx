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
  /** Tndicator of the current state; whether or not the page is loading. */
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
  body: React.ComponentClass;
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
      tabs: [],
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

    this.setState({
      isLoading: false,
    });

    try {
      const pkga: PackageModel = await getPackage(pkgParam);

      this.setState({
        pkg: pkga,
      });
    } catch (error) {
      // 404?
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
          </StyledTitle>
          {pkg.created_at && (
            <StyledDateCreated>
              Created {pkg.created_at.toLocaleDateString()}
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
