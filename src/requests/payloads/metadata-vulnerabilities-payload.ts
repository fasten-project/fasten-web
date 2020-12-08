import * as yup from "yup";
import { array } from "yup";

/**
 * Validation schema for {@link Vulnerability}.
 *
 * TODO: extend the schema with full schema:
 *       https://github.com/fasten-project/fasten/wiki/Vulnerability-Analyzer#vulnerability-object-definition.
 */
export const VULNERABILITY_SCHEMA = yup
  .object()
  .shape({
    /** Unique identifier of the vulnerability. */
    id: yup.string().required(),

    /** The description of the vulnerability. */
    description: yup.string(),

    /** The severity level of the vulnerability.  */
    severity: yup.string(),

    /** Fasten URI of the vulnerable {@link Callable}. */
    vulnerable_fasten_uris: yup.array().of(yup.string()),
  })
  .required();

/**
 * Validation schema for {@link VulnerabilitiesResponsePayload}
 */
export const VULNERABILITIES_PAYLOAD_RESPONSE = array()
  .transform((_, orig) => Object.values(orig))
  .of(VULNERABILITY_SCHEMA);

/**
 * The type of the Vulnerable instance generated from yup schema {@link VULNERABILITY_SCHEMA}.
 */
export type Vulnerability = yup.InferType<typeof VULNERABILITY_SCHEMA>;

/**
 * Vulnerable entities response payload
 */
export type VulnerabilitiesResponsePayload = Vulnerability[];

/**
 * Default object for {@link Vulnerability}
 */
export const defaultVulnerability: Vulnerability = {
  id: "",
  description: "",
  severity: "SEVERE",
  vulnerable_fasten_uris: [""],
};

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link VulnerabilitiesResponsePayload}.
 */
export function isValidVulnerabilitiesResponsePayload(
  payload: any
): payload is VulnerabilitiesResponsePayload {
  return VULNERABILITIES_PAYLOAD_RESPONSE.isValidSync(payload);
}
