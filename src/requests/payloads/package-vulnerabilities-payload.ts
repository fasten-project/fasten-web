import * as yup from "yup";
import { array } from "yup";

/**
 * Validation schema for {@link Vulnerability}.
 */
export const PACKAGE_VULNERABILITY_SCHEMA = yup
  .object()
  .shape({
    // vulnerability: yup.string().required(),
    path: array().of(
      yup
        .object()
        .shape({
          id: yup.number().positive().required(),
          package_name: yup.string().required(),
          version: yup.string().required(),
          class_name: yup.string().required(),
          method_name: yup.string().required(),
        })
        .required()
    ),
  })
  .required();

/**
 * Validation schema for {@link VulnerabilitiesResponsePayload}
 */
export const PACKAGE_VULNERABILITIES_PAYLOAD_RESPONSE = PACKAGE_VULNERABILITY_SCHEMA;

/**
 * The type of the Package Vulnerability instance generated from yup schema {@link PACKAGE_VULNERABILITY_SCHEMA}.
 */
export type Vulnerability = yup.InferType<typeof PACKAGE_VULNERABILITY_SCHEMA>;

/**
 * Package Vulnerabilities response payload
 */
export type VulnerabilitiesResponsePayload = Vulnerability;

/**
 * Default object for {@link Vulnerability}
 */
export const defaultVulnerability: Vulnerability = {
  // vulnerability: "https://demo.fasten-project.eu/",
  path: [
    {
      id: 0,
      package_name: "",
      version: "",
      class_name: "",
      method_name: "",
    },
  ],
};

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link Vulnerability}.
 */
export function isValidPackageVulnerabilitiesResponsePayload(
  payload: any
): payload is VulnerabilitiesResponsePayload {
  return PACKAGE_VULNERABILITIES_PAYLOAD_RESPONSE.isValidSync(payload);
}
