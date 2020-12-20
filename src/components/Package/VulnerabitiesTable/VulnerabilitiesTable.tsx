import * as React from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import {
  StyledContainer,
  StyledVersionRow,
} from "./VulnerabilitiesTable.styled";

/**
 * The props of the table component.
 */
export interface VulnerabilitiesTableProps extends RouteComponentProps {}

/**
 * The state of the table component.
 */
export interface VulnerabilitiesTableState {
  /** Indicator of the current state; whether or not the page is loading. */
  isLoading: boolean;

  /** The list of entities included in the table. */
  data: any;
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
      data: [
        {
          path: [
            {
              id: 0,
              fasten_uri: "test_uri",
              className: "ClassA",
              methodName: "MethodA()",
            },
            {
              id: 1,
              fasten_uri: "test_uri1",
              className: "ClassB",
              methodName: "MethodB()",
            },
            {
              id: 2,
              fasten_uri: "test_uri2",
              className: "ClassC",
              methodName: "MethodC()",
            },
          ],
        },
        {
          path: [
            {
              id: 0,
              fasten_uri: "test_uri",
              className: "ClassJ",
              methodName: "MethodA()",
            },
            {
              id: 1,
              fasten_uri: "test_uri1",
              className: "ClassC",
              methodName: "MethodZ()",
            },
          ],
        },
      ],
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
      // TODO: fetch data.

      this.setState({
        isLoading: false,
      });
    } catch (error) {
      // 404?
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
