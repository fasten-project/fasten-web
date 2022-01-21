import * as yup from "yup";
import { FASTEN_URI_SCHEMA } from "./fasten-uri-payload";
import { array } from "yup";

/**
 * Helper validation schema for a Vulnerability object.
 * TODO: might be refactored later into a separate payload/schema for convenience.
 */
export const VULNERABILITY_SCHEMA = yup
  .object()
  .shape({
    id: yup.string().required(),
    // purls, first_patched_purls, references, etc.
  })
  .required();

/**
 * Validation schema for {@link VulnerableCallChain}.
 */
export const VULNERABLE_CALL_CHAIN_SCHEMA = yup
  .object()
  .shape({
    vulnerabilities: yup.array().of(VULNERABILITY_SCHEMA).min(1).required(),
    chain: yup.array().of(FASTEN_URI_SCHEMA).min(1).required(),
  })
  .required();

/**
 * Validation schema for {@link VulnerableCallChain[]}
 */
export const VULNERABLE_CALL_CHAINS_PAYLOAD_RESPONSE = array().of(
  VULNERABLE_CALL_CHAIN_SCHEMA
);

/**
 * The type of the Vulnerable Call Chain Link instance generated from yup schema {@link VULNERABLE_CALL_CHAIN_SCHEMA}.
 */
export type VulnerableCallChain = yup.InferType<
  typeof VULNERABLE_CALL_CHAIN_SCHEMA
>;

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link VulnerableCallChain[]}.
 */
export function isValidPackageVulnerableCallChainsResponsePayload(
  payload: any
): payload is VulnerableCallChain[] {
  return VULNERABLE_CALL_CHAINS_PAYLOAD_RESPONSE.isValidSync(payload);
}
