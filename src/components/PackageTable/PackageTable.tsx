import * as React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { StyledContainer, StyledVersionRow } from "./PackageTable.styled";
import { Module } from "../../requests/payloads/package-module-payload";
import { Callable } from "../../requests/payloads/package-callable-payload";
import { PackageVersion } from "../../requests/payloads/package-versions-payload";

type VersionsTableData = {
  kind: "VERSIONS";
  entities: PackageVersion[];
};

type ModulesTableData = {
  kind: "MODULES";
  entities: Module[];
};

type CallablesTableData = {
  kind: "CALLABLES";
  entities: Callable[];
};

/**
 * The type model of the table entity.
 * Discriminated union of {@link PackageVersion}, {@link Module} and {@link Callable}.
 */
type TableData =
  | VersionsTableData
  | ModulesTableData
  | CallablesTableData
  | undefined;

/**
 * The props of the package table component.
 */
export interface PackageTableProps extends RouteComponentProps {
  /** The type of entities included in the table. */
  kind: "VERSIONS" | "MODULES" | "CALLABLES";

  /** The package name for which table is rendered. */
  pkg: string;

  /** The package version for which table is rendered. */
  pkgVersion: string;

  /** The module's namespace if present (optional). */
  namespace?: string;

  /** The method that fetches the table's entities from API. */
  fetchEntities: any;
}

/**
 * The state of the package table component.
 */
export interface PackageTableState {
  /** Indicator of the current state; whether or not the page is loading. */
  isLoading: boolean;

  /** The list of entities included in the table. */
  data: TableData;
}

class InternalPackageTable extends React.Component<
  PackageTableProps,
  PackageTableState
> {
  constructor(props: PackageTableProps, state: PackageTableState) {
    super(props, state);

    this.state = {
      isLoading: true,
      data: undefined,
    };
  }

  componentDidMount(): void {
    void this.retrieveEntities();
  }

  /**
   * The method to retrieve the table entities by API.
   * Depends on kind of the table.
   */
  async retrieveEntities() {
    this.setState({
      isLoading: true,
    });

    try {
      const dt: TableData = {
        kind: this.props.kind,
        entities: await this.props.fetchEntities(),
      };

      this.setState({
        isLoading: false,
        data: dt,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
      this.props.history.push("/oops");
    }
  }

  /**
   * Returns the title of the table depending on kind.
   */
  getTitle(): string {
    switch (this.props.kind) {
      case "VERSIONS":
        return "Versions";
      case "MODULES":
        return "Modules";
      case "CALLABLES":
        return "Callables";
      default:
        return "Unknown";
    }
  }

  /**
   * Renders the package version entity.
   * @param entity is {@link PackageVersion} to render.
   */
  renderVersionRow = (entity: PackageVersion): React.ReactNode => {
    const { pkg } = this.props;
    return (
      <StyledVersionRow key={`version_${entity.id}`}>
        <Link to={`/packages/${pkg}/${entity.version}`}>{entity.version}</Link>
      </StyledVersionRow>
    );
  };

  /**
   * Renders the package module entity.
   * @param entity is {@link Module} to render.
   */
  renderModuleRow = (entity: Module): React.ReactNode => {
    const { pkg, pkgVersion } = this.props;
    return (
      <StyledVersionRow key={`module_${entity.id}`}>
        <Link
          to={`/packages/${pkg}/${pkgVersion}/${encodeURIComponent(
            entity.namespace || "..."
          )}`}
        >
          {entity.namespace}
        </Link>
      </StyledVersionRow>
    );
  };

  /**
   * Renders the package callable entity.
   * @param entity is {@link Callable} to render.
   */
  renderCallableRow = (entity: Callable): React.ReactNode => {
    const { pkg, pkgVersion, namespace } = this.props;

    const encodedNamespace = encodeURIComponent(namespace || "...");
    const encodedFastenURI = encodeURIComponent(entity.fasten_uri);

    return (
      <StyledVersionRow key={`callable_${entity.id}`}>
        <Link
          to={`/packages/${pkg}/${pkgVersion}/${encodedNamespace}/${encodedFastenURI}`}
        >
          {(entity.methodName &&
            entity.methodArgs != null &&
            `${entity.methodName}(${entity.methodArgs})`) ||
            entity.fasten_uri}
        </Link>
      </StyledVersionRow>
    );
  };

  renderRows(): React.ReactNode {
    if (this.state.data?.entities.length == 0) {
      return this.renderEmptyWarning();
    }

    switch (this.state.data?.kind) {
      case "VERSIONS":
        return this.state.data?.entities.map(this.renderVersionRow);
      case "MODULES":
        return this.state.data?.entities.map(this.renderModuleRow);
      case "CALLABLES":
        return this.state.data?.entities.map(this.renderCallableRow);
      default:
        return <h1>Unknown Type {this.state.data?.kind}</h1>;
    }
  }

  renderEmptyWarning(): React.ReactNode {
    let entityKindLabel = "";
    switch (this.state.data?.kind) {
      case "VERSIONS":
        entityKindLabel = "callables";
        break;
      case "MODULES":
        entityKindLabel = "modules";
        break;
      case "CALLABLES":
        entityKindLabel = "callables";
        break;
      default:
        entityKindLabel = "entities";
    }
    return <h2>No {entityKindLabel} available for this package.</h2>;
  }

  render() {
    if (this.state.isLoading) {
      return <></>;
    }

    return (
      <StyledContainer>
        <h3>{this.getTitle()}</h3>
        <hr />
        {this.renderRows()}
      </StyledContainer>
    );
  }
}

export const PackageTable = withRouter(InternalPackageTable);
