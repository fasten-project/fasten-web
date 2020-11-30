import { AxiosResponse } from "axios";

/**
 * Auxiliary function to construct a success response with the provided payload.
 * @param data Payload to use for the response (ProfileResponsePayload object)
 */
export function constructSuccessResponse<T>(data: T): AxiosResponse<T> {
  return {
    data: data,
    status: 200,
    statusText: "success",
    headers: {},
    config: {},
  };
}
