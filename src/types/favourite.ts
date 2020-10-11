/**
 * Types
 */

export type FAVOURITE_ACTIONS_NAMES =
  | "FAVOURITE_ADD"
  | "FAVOURITE_REMOVE"
  | "SET_FAVOURITES";

export interface FAVOURITE_ACTIONS {
  type: FAVOURITE_ACTIONS_NAMES;
  data: any;
}
