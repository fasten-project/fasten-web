import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { StyledContainer } from "./VulnerableCallChainsTable.styled";
import { VulnerableCallChain } from "../../requests/payloads/vulnerable-call-chains-payload";
import { VulnerableCallChainRow } from "./VulnerableCallChainRow/VulnerableCallChainRow";
import { Accordion } from "react-bootstrap";

/**
 * The props of the table component.
 */
export interface VulnerableCallChainsTableProps extends RouteComponentProps {
  /** Request function that retrieves entities for a given level (package, module or callable level). */
  retrieveEntitiesRequest: () => Promise<VulnerableCallChain[]>;
}

/**
 * The state of the table component.
 */
export interface VulnerableCallChainsTableState {
  /** Indicator of the current state; whether or not the page is loading. */
  isLoading: boolean;

  /** The list of entities included in the table. */
  data: VulnerableCallChain[];
}

class InternalVulnerableCallChainsTable extends React.Component<
  VulnerableCallChainsTableProps,
  VulnerableCallChainsTableState
> {
  constructor(
    props: VulnerableCallChainsTableProps,
    state: VulnerableCallChainsTableState
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
      const { retrieveEntitiesRequest } = this.props;
      const chains = await retrieveEntitiesRequest();

      this.setState({
        isLoading: false,
        data: chains,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <></>;
    }

    return (
      <StyledContainer>
        <h3>Vulnerable Call Chains</h3>
        <hr />
        {this.state.data?.length == 0 && (
          <h2>No vulnerable call chains found for this package!</h2>
        )}
        <Accordion>
          {this.state.data?.map((chain: VulnerableCallChain, index: number) => (
            <VulnerableCallChainRow
              key={"vulnerable_call_chain_row_" + index}
              eventKey={index.toString()}
              row={chain}
            />
          ))}
        </Accordion>
      </StyledContainer>
    );
  }
}

export const VulnerableCallChainsTable = withRouter(
  InternalVulnerableCallChainsTable
);
