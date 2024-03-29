import * as React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { StyledContainer, StyledVersionRow } from "./PackageTable.styled";
import { Module } from "../../requests/payloads/package-module-payload";
import { Callable } from "../../requests/payloads/package-callable-payload";
import { PackageVersion } from "../../requests/payloads/package-versions-payload";
import config from "../../config";

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
    const moduleName = entity.name.split("/");
    return (
      <StyledVersionRow key={`module_${entity.id}`}>
        <Link
          to={`/packages/${pkg}/${pkgVersion}/${encodeURIComponent(
            entity.name || "..."
          )}`}
        >
          {moduleName[2]}
        </Link>
      </StyledVersionRow>
    );
  };

  /**
   * Renders the package callable entity.
   * @param entity is {@link FastenUri} to render.
   */
  renderCallableRow = (entity: Callable): React.ReactNode => {
    const { pkg, pkgVersion } = this.props;

    const encodedNamespace = encodeURIComponent(
      entity.fasten_uri.className || "..."
    );
    const encodedMethodName = encodeURIComponent(
      entity.fasten_uri.functionOrAttributeName || "..."
    );

    return (
      <StyledVersionRow key={`callable_${entity.id}`}>
        <Link
          // TODO: will need to do something with callable path; it won't work this way.
          to={`/packages/${pkg}/${pkgVersion}/${encodedNamespace}/${encodedMethodName}`}
        >
          {entity.fasten_uri.functionOrAttributeName}
        </Link>
        ({" "}
        {entity.fasten_uri.args.map((uri, i) => (
          <>
            {this.renderType(
              pkg,
              pkgVersion,
              entity.fasten_uri.rawNamespace,
              uri
            )}
            {i + 1 != entity.fasten_uri.args.length && ", "}
          </>
        ))}{" "}
        ){" : "}
        {this.renderType(
          pkg,
          pkgVersion,
          entity.fasten_uri.rawNamespace,
          entity.fasten_uri.returnType
        )}
      </StyledVersionRow>
    );
  };

  renderType(
    pkg: string,
    pkgVersion: string,
    rawNamespace?: string,
    type?: any
  ): React.ReactNode {
    if (config.ignoreNamespaceLinkage.includes(type.rawNamespace)) {
      return <>{type.className}</>;
    } else {
      return (
        <a
          key={type.rawEntity}
          href={
            `#/packages/${pkg}/${pkgVersion}/` +
            encodeURIComponent(
              `/${type.rawNamespace || rawNamespace}/${type.className}`
            )
          }
        >
          {type.className}
        </a>
      );
    }
  }

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
