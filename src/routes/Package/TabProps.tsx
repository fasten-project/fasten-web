import * as React from "react";

/**
 * Props interface for the Styled Tab component.
 */
export interface TabProps extends React.ComponentPropsWithoutRef<"button"> {
  /** {boolean} selectedIndex - whether or not the tab is currently selected. */
  selected: boolean;
}
