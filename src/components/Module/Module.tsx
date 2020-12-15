import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Tab, TabMenu } from "../TabMenu";
import { PackageTable } from "../PackageTable";
import { Package as PackageModel } from "../../requests/payloads/package-payload";
import { getModuleCallables } from "../../requests/services/package";

export interface ModuleProps extends RouteComponentProps {
  /** The package that needs to be taken. */
  pkg: PackageModel;

  /** The namespace of the module in focus. */
  namespace: string;
}

export interface ModuleState {}

/**
 * The component that renders the content related to the Module level of abstraction.
 * TODO: allow other versions of the package to be chosen (not only default as now).
 */
class InternalModule extends React.Component<ModuleProps, ModuleState> {
  render() {
    const tabs: Tab[] = [
      {
        label: "Callables",
        body: () => {
          return (
            <PackageTable
              kind={"CALLABLES"}
              pkg={this.props.pkg.package_name}
              pkgVersion={this.props.pkg.version}
              namespace={this.props.namespace}
              fetchEntities={() =>
                getModuleCallables(
                  this.props.pkg.package_name,
                  this.props.pkg.version,
                  this.props.namespace
                )
              }
            />
          );
        },
      },
    ];

    return <TabMenu tabs={tabs} />;
  }
}

export const Module = withRouter(InternalModule);
