import * as yup from "yup";
import { FASTEN_URI_SCHEMA } from "./fasten-uri-payload";

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
 * Validation schema for {@link VulnerableCallChains}.
 */
export const VULNERABLE_CALL_CHAINS_SCHEMA = yup.array().of(
  yup.object().shape({
    vulnerabilities: yup.array().of(VULNERABILITY_SCHEMA),
    chains: yup.array().of(FASTEN_URI_SCHEMA),
  })
);

/**
 * The type of the Vulnerable Call Chains instance generated from yup schema {@link PACKAGE_VULNERABILITY_SCHEMA}.
 */
export type VulnerableCallChains = yup.InferType<
  typeof VULNERABLE_CALL_CHAINS_SCHEMA
>;

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link VulnerableCallChains}.
 */
export function isValidPackageVulnerableCallChainsResponsePayload(
  payload: any
): payload is VulnerableCallChains {
  return VULNERABLE_CALL_CHAINS_SCHEMA.isValidSync(payload);
}
