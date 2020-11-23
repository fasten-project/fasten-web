import {
  APIResponseError,
  getAPIResponseError,
  INTERNET_ERROR,
  UNKNOWN_ERROR,
} from "/requests/errors";

describe("Error parser function", () => {
  const msg = "Abstract error response message";
  const dev = "Dev-friendly error response message";

  test("Network failure", () => {
    // Error without response attribute
    const error = getAPIResponseError(new Error(dev));

    expect(error).toBeInstanceOf(APIResponseError);
    expect(error.message).toBe(INTERNET_ERROR);
    expect(error.debug).toContain(dev);
  });

  test("Server failure", () => {
    // Status 500; server failure.
    const error = getAPIResponseError({
      response: { data: { non_field_error: msg }, status: 500 },
      message: dev,
    });

    expect(error).toBeInstanceOf(APIResponseError);
    expect(error.message).toBe(UNKNOWN_ERROR);
    expect(error.debug).toContain(dev);
  });

  test("Bad request failure", () => {
    // Status 400; bad request failure.
    const error = getAPIResponseError({
      response: { data: { non_field_error: msg }, status: 400 },
      message: dev,
    });

    expect(error).toBeInstanceOf(APIResponseError);
    expect(error.message).toBe(msg);
    expect(error.debug).toContain(dev);
  });
});
