import { String } from "typescript-string-operations";
import config from "../../config";
import { sendRequest } from "../utils";
import { isValidPackageVulnerableCallChainsResponsePayload } from "../payloads/vulnerable-call-chains-payload";

/**
 * POST Endpoint for retrieving the package level vulnerable call chains entity.
 * Requires additional parameters: `/api/mvn/packages/{name}/{version}/vulnerable-call-chains`.
 */
export const VULNERABLE_CALL_CHAINS_FOR_PACKAGE_ENDPOINT =
  config.apiSuffix + "/mvn/packages/{0}/{1}/vulnerable-call-chains";

/**
 * POST Endpoint for retrieving the module level vulnerable call chains entity.
 * Requires additional parameters: `/api/mvn/packages/{name}/{version}/vulnerable-call-chains/module`.
 * Requires request body: raw path as raw text.
 */
export const VULNERABLE_CALL_CHAINS_FOR_MODULE_ENDPOINT =
  VULNERABLE_CALL_CHAINS_FOR_PACKAGE_ENDPOINT + "/module";

/**
 * POST Endpoint for retrieving the callable level vulnerable call chains entity.
 * Requires additional parameters: `/api/mvn/packages/{name}/{version}/vulnerable-call-chains/callable`.
 * Requires request body: raw path as raw text.
 */
export const VULNERABLE_CALL_CHAINS_FOR_CALLABLE_ENDPOINT =
  VULNERABLE_CALL_CHAINS_FOR_PACKAGE_ENDPOINT + "/callable";

/**
 * The request for retrieving the package level vulnerable call chains entity.
 * @param {string} pkg - the name of the wanted package.
 * @param {string} ver - the version of the package.
 */
export function getChainsForPackage(pkg: string, ver: string) {
  return sendRequest(
    "post",
    String.Format(VULNERABLE_CALL_CHAINS_FOR_PACKAGE_ENDPOINT, pkg, ver),
    config.api,
    isValidPackageVulnerableCallChainsResponsePayload,
    {}
  );
}

/**
 * The request for retrieving the module level vulnerable call chains entity.
 * @param {string} pkg - the name of the wanted package.
 * @param {string} ver - the version of the package.
 * @param {string} rawPath - the module's raw path component of Fasten URI.
 */
export function getChainsForModule(pkg: string, ver: string, rawPath: string) {
  return sendRequest(
    "post",
    String.Format(VULNERABLE_CALL_CHAINS_FOR_MODULE_ENDPOINT, pkg, ver),
    config.api,
    isValidPackageVulnerableCallChainsResponsePayload,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
    rawPath
  );
}

/**
 * The request for retrieving the callable level vulnerable call chains entity.
 * @param {string} pkg - the name of the package.
 * @param {string} ver - the version of the package.
 * @param {string} rawPath - the callable's raw path component of Fasten URI.
 */
export function getChainsForCallable(
  pkg: string,
  ver: string,
  rawPath: string
) {
  return sendRequest(
    "post",
    String.Format(VULNERABLE_CALL_CHAINS_FOR_CALLABLE_ENDPOINT, pkg, ver),
    config.api,
    isValidPackageVulnerableCallChainsResponsePayload,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
    rawPath
  );
}
