type SET_SEARCH_ACTION = {
  type: "SET_SEARCH";
  query: string;
};

type SET_LIMIT_ACTION = {
  type: "SET_LIMIT";
  limit: number;
};

type SET_OFFSET_ACTION = {
  type: "SET_OFFSET";
  offset: number;
};

export type ACTIONS = SET_SEARCH_ACTION | SET_LIMIT_ACTION | SET_OFFSET_ACTION;

export interface ISearchState {
  query: string;
  limit: number;
  offset: number;
}
