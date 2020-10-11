import fetch from "isomorphic-fetch";
import { logger } from "./logger";
import { ISearchState } from "../interfaces/search";

/**
 * Get external resource.
 *
 * @param resourceUrl
 */
export const getResource = async (resourceUrl: string) => {
  try {
    const response = await fetch(resourceUrl);

    if (response.ok) {
      return { resource: await response.json() };
    }
  } catch (error) {
    logger.error(error);

    return { resource: null };
  }
};

/**
 * Generate current and next resource url
 *
 * @param {ISearchState} state
 * @param {function} getResourceProviderUrl
 *
 */
export function generateResourceUrl(
  state: ISearchState,
  getResourceProviderUrl: (params: ISearchState) => string
) {
  return {
    url: getResourceProviderUrl({
      ...state,
      offset: 0,
    }),
    next: getResourceProviderUrl({
      ...state,
      offset: state.offset + state.limit,
    }),
  };
}
