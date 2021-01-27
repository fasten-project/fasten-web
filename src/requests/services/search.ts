import { String } from "typescript-string-operations";
import config from "../../config";
import { sendRequest } from "../utils";
import { isValidPackagesArrayResponsePayload } from "../payloads/package-payload";

export const SEARCH_ENDPOINT =
  config.apiSuffix + "/mvn/packages/search?packageName={0}";

export function getSuggestions(query: string) {
  return sendRequest(
    "get",
    String.Format(SEARCH_ENDPOINT, query),
    config.api,
    isValidPackagesArrayResponsePayload,
    {}
  );
}
