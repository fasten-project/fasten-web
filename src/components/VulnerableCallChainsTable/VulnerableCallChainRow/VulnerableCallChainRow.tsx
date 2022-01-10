import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { VulnerableCallChain } from "../../../requests/payloads/vulnerable-call-chains-payload";
import * as React from "react";
import { StyledVersionRow } from "../VulnerableCallChainsTable.styled";
import { FastenUri } from "../../../requests/payloads/fasten-uri-payload";
import { BsArrowRight } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import config from "../../../config";

/**
 * The props of the table component.
 */
export interface VulnerableCallChainRowProps extends RouteComponentProps {
  /** The data of the row to render. */
  row: VulnerableCallChain;

  /** The event key to uniquely identify the row. */
  eventKey: string;
}

/**
 * The state of the table component.
 */
export interface VulnerableCallChainRowState {
  /** Is row expanded in the accordion? */
  isExpanded: boolean;
}

class InternalVulnerableCallChainRowTable extends React.Component<
  VulnerableCallChainRowProps,
  VulnerableCallChainRowState
> {
  constructor(
    props: VulnerableCallChainRowProps,
    state: VulnerableCallChainRowState
  ) {
    super(props, state);

    this.state = {
      isExpanded: false,
    };
  }

  /**
   * Returns title of the Vulnerable Call Chain row in the accordion.
   */
  renderTitle = (): React.ReactNode => {
    const { vulnerabilities } = this.props.row;
    return (
      <h3>
        {vulnerabilities[0].id}
        {
          // Show how many other vulnerabilities are there in the same path.
          // TODO: we want to somehow to elaborate on exact IDs as well; not to just show how many of them.
          vulnerabilities.length > 1 && " + " + (vulnerabilities.length - 1)
        }
      </h3>
    );
  };

  /**
   * Returns body of the Vulnerable Call Chain row in the accordion.
   */
  renderBody = (): React.ReactNode => {
    const { row } = this.props;
    return (
      <StyledVersionRow key={`vulnerability_${row.vulnerabilities[0].id}`}>
        {row.chain.map((step: FastenUri, index: number) => {
          return (
            <>
              {index > 0 && <br />}
              {index > 0 && (
                <span style={{ marginLeft: 50 }}>
                  <BsArrowRight />{" "}
                </span>
              )}
              <Link to={`/packages/${step.rawProduct}/${step.rawVersion}`}>
                {step.className}.{step.functionOrAttributeName}
              </Link>
              ({" "}
              {step.args.map((uri, i) => (
                <>
                  {this.renderArgOrReturnType(
                    step.rawProduct || "",
                    step.rawVersion || "",
                    step.rawNamespace,
                    uri
                  )}
                  {i + 1 != step.args.length && ", "}
                </>
              ))}{" "}
              ){" : "}
              {this.renderArgOrReturnType(
                step.rawProduct || "",
                step.rawVersion || "",
                step.rawNamespace,
                step.returnType
              )}
            </>
          );
        })}
      </StyledVersionRow>
    );
  };

  /**
   * Returns a rendered argument or return type to be displayed.
   * It is a link that leads to the corresponding module.
   * @param pkg - the corresponding package of the type.
   * @param pkgVersion - the corresponding package version of the type.
   * @param rawNamespace - the corresponding namespace of the type.
   * @param type - the data of the type.
   */
  renderArgOrReturnType(
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

  render() {
    return (
      <Accordion.Item eventKey={this.props.eventKey}>
        <Accordion.Header>{this.renderTitle()}</Accordion.Header>
        <Accordion.Body>{this.renderBody()}</Accordion.Body>
      </Accordion.Item>
    );
  }
}

export const VulnerableCallChainRow = withRouter(
  InternalVulnerableCallChainRowTable
);
