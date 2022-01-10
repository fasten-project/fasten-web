import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Tab, TabMenu } from "../TabMenu";
import { PackageTable } from "../PackageTable";
import {
  getModules,
  getPackageVersions,
} from "../../requests/services/package";
import { VulnerableCallChainsTable } from "../VulnerableCallChainsTable";
import { getChainsForPackage } from "../../requests/services/vulnerable-call-chains";

export interface PackageProps extends RouteComponentProps {
  /** The package name that needs to be taken. */
  pkg: string;

  /** The package version that needs to be considered. */
  pkgVer: string;
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
              pkg={this.props.pkg}
              pkgVersion={this.props.pkgVer}
              fetchEntities={() =>
                getModules(this.props.pkg, this.props.pkgVer)
              }
            />
          );
        },
      },
      {
        label: "Vulnerable Call Chains",
        body: () => {
          return (
            <VulnerableCallChainsTable
              retrieveEntitiesRequest={() =>
                getChainsForPackage(this.props.pkg, this.props.pkgVer)
              }
            />
          );
        },
      },
      {
        label: "Versions",
        body: () => {
          return (
            <PackageTable
              kind={"VERSIONS"}
              pkg={this.props.pkg}
              pkgVersion={this.props.pkgVer}
              fetchEntities={() => getPackageVersions(this.props.pkg)}
            />
          );
        },
      },
    ];

    return <TabMenu tabs={tabs} />;
  }
}

export const Package = withRouter(InternalPackage);
