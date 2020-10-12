import { createContext, FunctionComponent, useContext } from "react";
import * as React from "react";
import { useFavourites } from "../hooks/useFavourite";
import { IStorage } from "../interfaces/storage";

/**
 * Favourite context.
 *
 * - returning favourites
 * - add favourite
 * - remove favourite
 *
 */
const FavouriteContext = createContext<{
  state: { favourites: Map<string, object> };
  addAction: (id: string, data: object) => void;
  removeAction: (id: string) => void;
}>({
  state: { favourites: new Map<string, object>() },
  addAction: (id: string, data: object) => {},
  removeAction: (id: string) => {},
});

/**
 * Use fav context.
 */
export const useFavouriteContext = () => useContext(FavouriteContext);

/**
 * Favourite context wrapper.
 *
 * @param {IStorage} storage
 * @param [Object] children
 *
 * @constructor
 */
export const FavouriteContextProvider: FunctionComponent<{
  storage?: IStorage;
}> = ({ storage, children }) => {
  const searchContext = useFavourites({ storage });

  return (
    <FavouriteContext.Provider value={searchContext}>
      {children}
    </FavouriteContext.Provider>
  );
};
