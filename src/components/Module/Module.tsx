import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Tab, TabMenu } from "../TabMenu";
import { PackageTable } from "../PackageTable";
import { getModuleCallables } from "../../requests/services/package";

export interface ModuleProps extends RouteComponentProps {
  /** The package name that needs to be taken. */
  pkg: string;

  /** The package version that needs to be considered. */
  pkgVer: string;

  /** The namespace of the module in focus. */
  namespace: string;
}

export interface ModuleState {}

/**
 * The component that renders the content related to the Module level of abstraction.
 */
class InternalModule extends React.Component<ModuleProps, ModuleState> {
  render() {
    const { pkg, pkgVer, namespace } = this.props;
    const tabs: Tab[] = [
      {
        label: "Callables",
        body: () => {
          return (
            <PackageTable
              kind={"CALLABLES"}
              pkg={pkg}
              pkgVersion={pkgVer}
              namespace={namespace}
              fetchEntities={() => getModuleCallables(pkg, pkgVer, namespace)}
            />
          );
        },
      },
    ];

    return <TabMenu tabs={tabs} />;
  }
}

export const Module = withRouter(InternalModule);
