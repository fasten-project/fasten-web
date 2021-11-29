import * as yup from "yup";

const short_uri_schema = yup
  .object()
  .shape({
    className: yup.string().required(),
    uri: yup.string().required(),
    rawEntity: yup.string().required(),
    rawNamespace: yup.string().optional(),
  })
  .required();

/**
 * Validation schema for {@link FastenUri}.
 */
export const FASTEN_URI_SCHEMA = yup
  .object()
  .shape({
    /** Full Fasten URI for the entity. */
    uri: yup.string().required(),

    /** User-friendly, formatted string of the class name. */
    className: yup.string().optional(),

    /** User-friendly, formatted string of the method name. */
    functionOrAttributeName: yup.string().optional(),

    /** User-friendly, formatted string of method's arguments. */
    args: yup.array().of(short_uri_schema).required(),

    /** User-friendly, formatted string of method's return type. */
    returnType: short_uri_schema,

    /** Raw string identifying forge of the entity. */
    rawForge: yup.string().optional(),

    /** Raw string identifying product of the entity. */
    rawProduct: yup.string().optional(),

    /** Raw string identifying version of the entity. */
    rawVersion: yup.string().optional(),

    /** Raw string identifying namespace of the entity. */
    rawNamespace: yup.string().optional(),

    /** Raw string identifying whole entity. */
    rawEntity: yup.string().optional(),
  })
  .required();

/**
 * The type of the Callable instance generated from yup schema {@link PACKAGE_MODULE_SCHEMA}.
 */
export type FastenUri = yup.InferType<typeof FASTEN_URI_SCHEMA>;

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link FastenUri}.
 */
export function isValidFastenUrisResponsePayload(
  payload: any
): payload is FastenUri {
  return FASTEN_URI_SCHEMA.isValidSync(payload);
}
