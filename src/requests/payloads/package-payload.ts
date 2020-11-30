import * as yup from "yup";

// TODO: Package response payload should not be an array of Package instance.
//       It is a workaround for https://github.com/fasten-project/fasten/issues/131.
//       Revert c619a26fddfa6d29073379d62a7ede1292cc152f when fixed.

/**
 * Validation schema for {@link Package}.
 */
export const PACKAGE_SCHEMA = yup
  .object()
  .shape({
    /** Unique identifier of the package. */
    id: yup.number().integer().positive().required(),

    /** Unique package name (e.g., junit:junit). */
    package_name: yup.string().required(),

    /** Forge of the package (mvn, pypi, debian). */
    forge: yup.string().required(),

    /** Readable project name (e.g., JUnit). */
    project_name: yup.string().required(),

    /** The repository source of the package. */
    repository: yup.string().required(),

    /** The date when the package was published. */
    created_at: yup.date().max(new Date(Date.now())).nullable(),

    /** The latest version of the package. */
    version: yup.string(),
  })
  .required();

/**
 * The type of the Package instance generated from yup schema {@link PACKAGE_SCHEMA}.
 */
export type Package = yup.InferType<typeof PACKAGE_SCHEMA>[];

/**
 * Default object for {@link Package}
 */
export const defaultPackage: Package = [
  {
    id: 0,
    package_name: "",
    forge: "mvn",
    project_name: "",
    repository: "",
    created_at: null,
  },
];

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link Package}.
 */
export function isValidPackageResponsePayload(
  payload: any
): payload is Package {
  return yup.array().of(PACKAGE_SCHEMA).isValidSync(payload);
}
