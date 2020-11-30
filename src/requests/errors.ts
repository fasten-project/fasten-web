import { v4 as uuidv4 } from "uuid";

export const UNKNOWN_ERROR =
  "An unknown error has occurred! Please try again later!";
export const INTERNET_ERROR =
  "Please check your internet connection and try again!";

/**
 * Interface to represent a user-friendly error.
 *
 * Should be used for exceptions that can be supplemented by
 * an additional debug message, separate from a user-friendly message.
 */
export interface UserError {
  /** unique identifier */
  uid: string;

  /** User friendly message */
  message: string;

  /** Debug message */
  debug: string;
}

/**
 * Error class representing API Response errors
 */
export class APIResponseError extends Error implements UserError {
  public readonly name = "APIResponseError";
  public readonly uid = uuidv4();

  debug: string;

  /**
   * Creates a new API Response Error instance
   *
   * @param message User-friendly message
   * @param debug Debug message
   */
  constructor(message: string, debug: string) {
    super(message);
    this.debug = debug;
  }
}

/**
 * Method for getting responsive error instance.
 * Converts {AxiosError} into custom {APIResponseError}.
 * @param error
 * @returns instance of {APIResponseError} with UI-friendly message.
 */
export const getAPIResponseError = (error: any): APIResponseError => {
  if (!error.response) {
    // no response -> connectivity issues
    return new APIResponseError(
      INTERNET_ERROR,
      "Bad Response: " + error.message
    );
  } else if (error.response.status < 500) {
    // if server processed, but request was not fulfilled (4xx errors)

    let msg: string;

    try {
      // Although not supposed, API may theoretically return inline error message.
      msg = Object.values<string>(error.response.data)[0];
    } catch (err) {
      // In case response error from backend is of unrecognizable structure,
      // return unknown error message.
      msg = UNKNOWN_ERROR;
    }

    return new APIResponseError(msg, "Bad Response: " + error.message);
  } else {
    // if server has failed (5xx errors)
    return new APIResponseError(
      UNKNOWN_ERROR,
      "Server has failed: " + error.message
    );
  }
};
