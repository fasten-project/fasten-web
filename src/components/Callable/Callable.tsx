import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Callable as CallableModel } from "../../requests/payloads/package-callable-payload";
// import { Tab, TabMenu } from "../TabMenu";

export interface CallableProps extends RouteComponentProps {
  callable: CallableModel;
}

export interface CallableState {}

/**
 * The component that renders the content related to the Callable level of abstraction.
 */
class InternalCallable extends React.Component<CallableProps, CallableState> {
  render() {
    // const tabs: Tab[] = [
    //   {
    //     label: "Vulnerabilities",
    //     body: () => {
    //       return <h1>WIP</h1>;
    //     },
    //   },
    // ];
    //
    // return <TabMenu tabs={tabs} />;
    return <h1>hello</h1>;
  }
}

export const Callable = withRouter(InternalCallable);
