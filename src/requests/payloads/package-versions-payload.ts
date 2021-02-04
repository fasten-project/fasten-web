import * as yup from "yup";
import { array } from "yup";

/**
 * Validation schema for {@link PackageVersion}.
 */
export const PACKAGE_VERSION_SCHEMA = yup
  .object()
  .shape({
    /** Unique identifier of the package. */
    id: yup.number().integer().positive().required(),

    /** Unique package id; foreign key. */
    package_id: yup.number().integer().positive().required(),

    /**  */
    cg_generator: yup.string().required(),

    /** Package's version identifier. */
    version: yup.string().required(),

    /**  */
    architecture: yup.string().nullable(),

    /** The date when the package was published. */
    created_at: yup.date().max(new Date(Date.now())).nullable(),

    /** Additional metadata available for the callable. */
    metadata: yup.object().nullable(),
  })
  .required();

/**
 * Validation schema for {@link PackageVersion[]}.
 */
export const PACKAGE_VERSION_ARRAY_SCHEMA = array().of(PACKAGE_VERSION_SCHEMA);

/**
 * The type of the Package Version instance generated from yup schema {@link PACKAGE_VERSION_SCHEMA}.
 */
export type PackageVersion = yup.InferType<typeof PACKAGE_VERSION_SCHEMA>;

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link PackageVersion}.
 */
export function isValidPackageVersionResponsePayload(
  payload: any
): payload is PackageVersion {
  return PACKAGE_VERSION_SCHEMA.isValidSync(payload);
}

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link PackageVersion[]}.
 */
export function isValidPackageVersionsArrayResponsePayload(
  payload: any
): payload is PackageVersion[] {
  return PACKAGE_VERSION_ARRAY_SCHEMA.isValidSync(payload);
}
