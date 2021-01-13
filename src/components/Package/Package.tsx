import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Tab, TabMenu } from "../TabMenu";
import { PackageTable } from "../PackageTable";
import { Package as PackageModel } from "../../requests/payloads/package-payload";
import { getModules } from "../../requests/services/package";
import { VulnerabilitiesTable } from "./VulnerabitiesTable";

export interface PackageProps extends RouteComponentProps {
  /** The package that needs to be taken. */
  pkg: PackageModel;
}

export interface PackageState {}

/**
 * The component that renders the content related to the Package level of abstraction.
 */
class InternalPackage extends React.Component<PackageProps, PackageState> {
  render() {
    const tabs: Tab[] = [
      {
        label: "Modules",
        body: () => {
          return (
            <PackageTable
              kind={"MODULES"}
              pkg={this.props.pkg.package_name}
              // TODO: allow different versions.
              pkgVersion={this.props.pkg.version}
              fetchEntities={() =>
                getModules(this.props.pkg.package_name, this.props.pkg.version)
              }
            />
          );
        },
      },
      {
        label: "Vulnerabilities",
        body: () => {
          return (
            <VulnerabilitiesTable
              pkg={this.props.pkg.package_name}
              pkgVersion={this.props.pkg.version}
            />
          );
        },
      },
    ];

    return <TabMenu tabs={tabs} />;
  }
}

export const Package = withRouter(InternalPackage);
