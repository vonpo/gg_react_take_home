import {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "./reducer";
import { IStorage, IFavouriteState, ACTIONS } from "./types";

/**
 * Use favourites hooks.
 * @param {IStorage} storage If provided can is used when adding/removing favourite.
 *
 * It's assumed that IStorage add/remove are sync operations.
 */
export const useFavourites = ({ storage }: { storage?: IStorage }) => {
  const [state, dispatch] = useReducer<Reducer<IFavouriteState, ACTIONS>>(
    reducer,
    {
      favourites: new Map<string, object>(),
    }
  );

  useEffect(() => {
    if (!storage) {
      return;
    }

    dispatch({ type: "SET_FAVOURITES", data: storage.getAll() });
  }, [storage]);

  const add = (id: string, meta: any) => {
    if (storage && !state.favourites.has(id)) {
      storage.add(id, meta);
    }

    dispatch({
      type: "FAVOURITE_ADD",
      data: { id, meta: meta },
    });
  };
  const remove = (id: string) => {
    if (storage && state.favourites.has(id)) {
      storage.remove(id);
    }

    dispatch({ type: "FAVOURITE_REMOVE", data: id });
  };

  return { state, add, remove };
};

/**
 * Favourite context.
 *
 * - returning favourites
 * - add favourite
 * - remove favourite
 *
 */
export const FavouriteContext = createContext<{
  state: { favourites: Map<string, object> };
  add: (id: string, data: object) => void;
  remove: (id: string) => void;
}>({
  state: { favourites: new Map<string, object>() },
  add: (id: string, data: object) => {},
  remove: (id: string) => {},
});

export const useFavouriteContext = () => useContext(FavouriteContext);
