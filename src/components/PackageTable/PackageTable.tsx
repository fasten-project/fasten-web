import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { StyledContainer, StyledVersionRow } from "./PackageTable.styled";
import { Module } from "../../requests/payloads/package-module-payload";
import { getModules } from "../../requests/services/package";

/**
 * The type model of the table entity.
 */
export type TableEntity = Module;

/**
 * The props of the package table component.
 */
export interface PackageTableProps extends RouteComponentProps {
  kind: "MODULES";
  pkg: string;
  pkgVersion: string;
}

/**
 * The state of the package table component.
 */
export interface PackageTableState {
  isLoading: boolean;
  entities: TableEntity[];
}

class InternalPackageTable extends React.Component<
  PackageTableProps,
  PackageTableState
> {
  constructor(props: PackageTableProps, state: PackageTableState) {
    super(props, state);

    this.state = {
      isLoading: true,
      entities: [],
    };
  }

  componentDidMount(): void {
    switch (this.props.kind) {
      case "MODULES":
        void this.retrieveModules();
      default:
        return;
    }
  }

  async retrieveModules() {
    this.setState({
      isLoading: true,
    });

    const { pkg, pkgVersion } = this.props;

    try {
      const ents: Module[] = await getModules(pkg, pkgVersion);

      this.setState({
        isLoading: false,
        entities: ents,
      });
    } catch (error) {
      // 404?
      this.setState({
        isLoading: false,
      });
    }
  }

  /**
   * Returns the title of the table depending on kind.
   */
  getTitle(): string {
    switch (this.props.kind) {
      case "MODULES":
        return "Modules";
      default:
        return "Unknown";
    }
  }

  /**
   * Renders the package version entity.
   * @param entity is {@link PackageVersion} to render.
   */
  renderRow(entity: TableEntity): React.ReactNode {
    return (
      <StyledVersionRow key={entity.id}>
        {/* TODO: replace with proper router. */}
        <a href={""}>{entity.namespace}</a>
      </StyledVersionRow>
    );
  }

  render() {
    return (
      <StyledContainer>
        <h3>{this.getTitle()}</h3>
        <hr />
        {this.state.entities.map(this.renderRow)}
      </StyledContainer>
    );
  }
}

export const PackageTable = withRouter(InternalPackageTable);
