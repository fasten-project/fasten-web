import * as yup from "yup";
import { array } from "yup";
import { FASTEN_URI_SCHEMA } from "./fasten-uri-payload";

/**
 * Validation schema for {@link Callable}.
 */
export const PACKAGE_CALLABLE_SCHEMA = yup
  .object()
  .shape({
    /** Unique identifier of the callable. */
    id: yup.number().integer().positive().required(),

    /** Unique identifier of the package module for the callable. */
    module_id: yup.number().integer().positive().required(),

    /** The URI in the FASTEN system. */
    fasten_uri: FASTEN_URI_SCHEMA,

    /** Is the callable internal within the package? */
    is_internal_call: yup.boolean().required(),

    /** The start line of the callable. */
    line_start: yup.number().integer().nullable(),

    /** The end line of the callable. */
    line_end: yup.number().integer().nullable(),

    /** The date when the callable was published. */
    created_at: yup.date().max(new Date(Date.now())).nullable(),

    /** Additional metadata available for the callable. */
    metadata: yup.object().nullable(),
  })
  .required();

/**
 * Validation schema for {@link CallablesResponsePayload}
 */
export const PACKAGE_CALLABLES_PAYLOAD_RESPONSE = array().of(
  PACKAGE_CALLABLE_SCHEMA
);

/**
 * The type of the Callable instance generated from yup schema {@link PACKAGE_MODULE_SCHEMA}.
 */
export type Callable = yup.InferType<typeof PACKAGE_CALLABLE_SCHEMA>;

/**
 * Callable entities response payload
 */
export type CallablesResponsePayload = Callable[];

/**
 * Default object for {@link Callable}
 */
export const defaultCallable: Callable = {
  id: 0,
  module_id: 0,
  fasten_uri: {
    args: [],
    rawProduct: "",
    rawEntity: "",
    className: "",
    functionOrAttributeName: "",
    rawVersion: "1.0.0",
    uri: "",
    returnType: {
      rawEntity: "Logger",
      className: "Logger",
      uri: "Logger",
    },
    rawForge: "mvn",
    rawNamespace: "",
  },
  is_internal_call: true,
  line_start: 0,
  line_end: 0,
  created_at: null,
  metadata: null,
};

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link CallablesResponsePayload}.
 */
export function isValidCallablesResponsePayload(
  payload: any
): payload is CallablesResponsePayload {
  return PACKAGE_CALLABLES_PAYLOAD_RESPONSE.isValidSync(payload);
}
