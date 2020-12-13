import { String } from "typescript-string-operations";
import config from "../../config";
import { sendRequest } from "../utils";
import { isValidPackageResponsePayload } from "../payloads/package-payload";
import { isValidModulesResponsePayload } from "../payloads/package-module-payload";
import { isValidCallablesResponsePayload } from "../payloads/package-callable-payload";

/**
 * GET Endpoint for retrieving the package entity.
 * Requires additional parameters: `/mvn/packages/{name}`.
 */
export const PACKAGE_ENDPOINT = "/mvn/packages/{0}";

/**
 * GET Endpoint for retrieving the package modules.
 * Requires additional parameters: `/mvn/packages/{name}/{version}/modules`.
 */
export const PACKAGE_MODULES_ENDPOINT = "/mvn/packages/{0}/{1}/modules";

/**
 * POST Endpoint for retrieving the package callables.
 * Requires additional parameters: `/mvn/packages/{name}/{version}/modules/callables`.
 */
export const PACKAGE_CALLABLES_ENDPOINT =
  "/mvn/packages/{0}/{1}/modules/callables";

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
    {},
    {
      namespace: namespace,
    }
  );
}
