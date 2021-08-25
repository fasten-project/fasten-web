import { String } from "typescript-string-operations";
import config from "../../config";
import { sendRequest } from "../utils";
import { isValidPackageResponsePayload } from "../payloads/package-payload";
import { isValidModulesResponsePayload } from "../payloads/package-module-payload";
import { isValidCallablesResponsePayload } from "../payloads/package-callable-payload";
import { isValidPackageVersionsArrayResponsePayload } from "../payloads/package-versions-payload";
import { isValidPackageVulnerabilitiesResponsePayload } from "../payloads/package-vulnerabilities-payload";

/**
 * GET Endpoint for retrieving the package entity.
 * Requires additional parameters: `/api/mvn/packages/{name}`.
 */
export const PACKAGE_ENDPOINT = config.apiSuffix + "/mvn/packages/{0}";

/**
 * GET Endpoint for retrieving the package versions.
 * Requires additional parameters: `/api/mvn/packages/{name}/versions`.
 */
export const PACKAGE_VERSIONS_ENDPOINT =
  config.apiSuffix + "/mvn/packages/{0}/versions";

/**
 * GET Endpoint for retrieving the package modules.
 * Requires additional parameters: `/api/mvn/packages/{name}/{version}/modules`.
 */
export const PACKAGE_MODULES_ENDPOINT =
  config.apiSuffix + "/mvn/packages/{0}/{1}/modules";

/**
 * POST Endpoint for retrieving the package callables.
 * Requires additional parameters: `/api/mvn/packages/{name}/{version}/modules/callables`.
 */
export const PACKAGE_CALLABLES_ENDPOINT =
  config.apiSuffix + "/mvn/packages/{0}/{1}/modules/callables";

/**
 * GET Endpoint for retrieving the package's transitive vulnerabilities.
 * Requires additional parameters: `/api/__INTERNAL__/packages/{pkg}/{pkg_ver}/vulnerabilities`.
 */
export const PACKAGE_VULNERABILITIES_ENDPOINT =
  config.apiSuffix + "/__INTERNAL__/packages/{0}/{1}/vulnerabilities";

/**
 * The request for retrieving the package entity.
 * @param {string} pkg - the name of the wanted package.
 */
export function getPackage(pkg: string) {
  return sendRequest(
    "get",
    String.Format(PACKAGE_ENDPOINT, pkg),
    config.api,
    isValidPackageResponsePayload,
    {}
  );
}

/**
 * The request for retrieving the package versions.
 * @param {string} pkg - the name of the wanted package.
 */
export function getPackageVersions(pkg: string) {
  return sendRequest(
    "get",
    String.Format(PACKAGE_VERSIONS_ENDPOINT, pkg),
    config.api,
    isValidPackageVersionsArrayResponsePayload,
    {}
  );
}

/**
 * The request for retrieving the package modules.
 * @param {string} pkg - the name of the package.
 * @param {string} ver - the version of the package.
 */
export function getModules(pkg: string, ver: string) {
  return sendRequest(
    "get",
    String.Format(PACKAGE_MODULES_ENDPOINT, pkg, ver),
    config.api,
    isValidModulesResponsePayload,
    {}
  );
}

/**
 * The request for retrieving callables for the specific module in the package.
 * @param {string} pkg - the name of the package.
 * @param {string} ver - the version of the package.
 * @param {string} namespace - the module's namespace in the package.
 */
export function getModuleCallables(
  pkg: string,
  ver: string,
  namespace: string
) {
  return sendRequest(
    "post",
    String.Format(PACKAGE_CALLABLES_ENDPOINT, pkg, ver),
    config.api,
    isValidCallablesResponsePayload,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
    namespace
  );
}

/**
 * The request for retrieving the package's transitive vulnerabilities.
 * @param {string} pkg - the name of the package.
 * @param {string} ver - the version of the package.
 */
export function getVulnerabilities(pkg: string, ver: string) {
  return sendRequest(
    "get",
    String.Format(PACKAGE_VULNERABILITIES_ENDPOINT, pkg, ver),
    config.api,
    isValidPackageVulnerabilitiesResponsePayload,
    {}
  );
}
