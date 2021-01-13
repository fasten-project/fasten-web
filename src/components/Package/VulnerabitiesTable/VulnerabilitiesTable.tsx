import * as React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import {
  StyledContainer,
  StyledVersionRow,
} from "./VulnerabilitiesTable.styled";
import { getVulnerabilities } from "../../../requests/services/package";
import { Vulnerability } from "../../../requests/payloads/package-vulnerabilities-payload";

/**
 * The props of the table component.
 */
export interface VulnerabilitiesTableProps extends RouteComponentProps {
  /** The package name for which table is rendered. */
  pkg: string;

  /** The package version for which table is rendered. */
  pkgVersion: string;
}

/**
 * The state of the table component.
 */
export interface VulnerabilitiesTableState {
  /** Indicator of the current state; whether or not the page is loading. */
  isLoading: boolean;

  /** The list of entities included in the table. */
  data: Vulnerability[];
}

class InternalVulnerabilitiesTable extends React.Component<
  VulnerabilitiesTableProps,
  VulnerabilitiesTableState
> {
  constructor(
    props: VulnerabilitiesTableProps,
    state: VulnerabilitiesTableState
  ) {
    super(props, state);

    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount(): void {
    void this.retrieveEntities();
  }

  /**
   * The method to retrieve the table entities by API.
   */
  async retrieveEntities() {
    this.setState({
      isLoading: true,
    });

    try {
      const { pkg, pkgVersion } = this.props;
      const vulners = await getVulnerabilities(pkg, pkgVersion);

      this.setState({
        isLoading: false,
        data: vulners,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  }

  /**
   * The method that renders table's individual rows.
   * @param entity to render.
   */
  renderRow = (entity: any): React.ReactNode => {
    return (
      <StyledVersionRow key={`vulnerability_${entity.id}`}>
        {entity.path.map((step: any, index: number) => {
          return (
            <>
              <Link to={step.id}>
                {step.className}.{step.methodName}
              </Link>
              {index + 1 < entity.path.length && <span> -&gt; </span>}
            </>
          );
        })}
      </StyledVersionRow>
    );
  };

  render() {
    if (this.state.isLoading) {
      return <></>;
    }

    return (
      <StyledContainer>
        <h3>Vulnerabilities</h3>
        <hr />
        {this.state.data?.map(this.renderRow)}
      </StyledContainer>
    );
  }
}

export const VulnerabilitiesTable = withRouter(InternalVulnerabilitiesTable);
