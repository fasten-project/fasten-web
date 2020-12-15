import * as React from "react";
import { StyledTabMenu, StyledTabMenuItem } from "./TabMenu.styled";
import { withRouter, RouteComponentProps } from "react-router-dom";

/**
 * The data interface for the Tab element.
 */
export interface Tab {
  /** The label to display for this tab. */
  label: string;

  /** The content component of this tab. */
  body: React.FunctionComponent;
}

export interface TabMenuProps extends RouteComponentProps {
  /** The list of available tabs on the page. */
  tabs: Array<Tab>;
}

export interface TabMenuState {
  /** Index of the currently selected tab. */
  tabIndex: number;
}

/**
 * The TabMenu component.
 * Takes an array of {@link Tab} and produces horizontal tab menu.
 * Renders chosen tab's body right under.
 */
class InternalTabMenu extends React.Component<TabMenuProps, TabMenuState> {
  constructor(props: TabMenuProps, state: TabMenuState) {
    super(props, state);

    this.state = {
      tabIndex: 0,
    };
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
    // The body of the page is defined by currently active tab.
    const TabBody =
      this.props.tabs.length > this.state.tabIndex
        ? this.props.tabs[this.state.tabIndex].body
        : null;

    return (
      <>
        <StyledTabMenu>
          {this.props.tabs.map((tab: Tab, index: number) => (
            <this.TabMenuItem
              key={`tab_${index}`}
              index={index}
              label={tab.label}
            />
          ))}
        </StyledTabMenu>
        {TabBody && <TabBody />}
      </>
    );
  }
}

export const TabMenu = withRouter(InternalTabMenu);
