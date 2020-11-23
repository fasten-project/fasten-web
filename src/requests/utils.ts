import axios, { AxiosRequestConfig } from "axios";
import { APIResponseError, getAPIResponseError } from "./errors";

/**
 * Auxiliary function to handle the common function of sending an API request,
 * validating the payload and throwing the necessary errors with descriptive messages.
 *
 * @param method HTTP verb - e.g. `get`, `patch`, `post`
 * @param url the path part of the endpoint
 * @param base the base url of the endpoint
 * @param responseValidator A function with a type guard that asserts that that
 *                          response from the API is of type `ResponseT`
 * @param data The data to send as the request body.
 * @param config Extra config for the Axios request.
 */
export async function sendRequest<RequestT, ResponseT>(
  method: AxiosRequestConfig["method"],
  url: string,
  base: string,
  responseValidator: (data: any) => data is ResponseT,
  config?: AxiosRequestConfig,
  data?: RequestT
): Promise<ResponseT> {
  try {
    const response = await axios(new URL(url, base).href, {
      method,
      data,
      ...config,
    });

    // TODO: replace occurrences of `response.data[0]` with `response.data`.
    //       It is a workaround for https://github.com/fasten-project/fasten/issues/131.

    if (responseValidator(response.data[0])) {
      return response.data[0];
    } else {
      throw new APIResponseError(
        "Received malformed API data!",
        `Data received: ${JSON.stringify(response.data[0])}`
      );
    }
  } catch (error) {
    // If the error is already APIResponseError, we don't need to dive into it
    if (error instanceof APIResponseError) {
      throw error;
    } else {
      console.log(error.debug);
      throw getAPIResponseError(error);
    }
  }
}
