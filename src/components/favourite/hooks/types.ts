/**
 * Interfaces and types
 */

export interface IFavouriteState {
  favourites: Map<string, object>;
}

export type FAVOURITE_ACTIONS =
  | "FAVOURITE_ADD"
  | "FAVOURITE_REMOVE"
  | "SET_FAVOURITES";

export interface ACTIONS {
  type: FAVOURITE_ACTIONS;
  data: any;
}

export interface IStorage {
  add: (id: string, data: object) => void;
  remove: (id: string) => void;
  getAll: () => Map<string, object>;
}
