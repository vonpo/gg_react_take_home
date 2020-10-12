/**
 * Get search params from query url by param name.
 *
 * @param {string} search
 * @param {string} paramName
 */
export const getSearchParams = (search: string, paramName: string): string => {
  return new URLSearchParams(search).get(paramName) || "";
};
