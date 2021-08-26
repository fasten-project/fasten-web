import * as yup from "yup";
import { array } from "yup";

/**
 * Validation schema for {@link Module}.
 */
export const PACKAGE_MODULE_SCHEMA = yup
  .object()
  .shape({
    /** Unique identifier of the module. */
    id: yup.number().integer().positive().required(),

    /** Unique identifier of the package version for the module. */
    package_version_id: yup.number().integer().positive().required(),

    /** The module's namespace (class name). */
    namespace: yup.string(),

    /** Temporary placeholder for namespace; the latest schema doesn't have it straight away. */
    module_name_id: yup.number().integer().positive().required(),

    /** The date when the module was published. */
    created_at: yup.date().max(new Date(Date.now())).nullable(),

    /** Additional metadata available for the module. */
    metadata: yup.object().nullable(),
  })
  .required();

/**
 * Validation schema for {@link ModulesResponsePayload}
 */
export const PACKAGE_MODULES_PAYLOAD_RESPONSE = array().of(
  PACKAGE_MODULE_SCHEMA
);

/**
 * The type of the Module instance generated from yup schema {@link PACKAGE_MODULE_SCHEMA}.
 */
export type Module = yup.InferType<typeof PACKAGE_MODULE_SCHEMA>;

/**
 * Modules entity response payload
 */
export type ModulesResponsePayload = Module[];

/**
 * Default object for {@link Module}
 */
export const defaultModule: Module = {
  id: 0,
  package_version_id: 0,
  module_name_id: 0,
  namespace: "",
  created_at: null,
  metadata: null,
};

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link ModulesResponsePayload}.
 */
export function isValidModulesResponsePayload(
  payload: any
): payload is ModulesResponsePayload {
  return PACKAGE_MODULES_PAYLOAD_RESPONSE.isValidSync(payload);
}
