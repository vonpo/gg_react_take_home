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

  const addAction = (id: string, meta: any) => {
    if (storage && !state.favourites.has(id)) {
      storage.add(id, meta);
    }

    dispatch({
      type: "FAVOURITE_ADD",
      data: { id, meta: meta },
    });
  };
  const removeAction = (id: string) => {
    if (storage && state.favourites.has(id)) {
      storage.remove(id);
    }

    dispatch({ type: "FAVOURITE_REMOVE", data: id });
  };

  return { state, addAction, removeAction };
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
  addAction: (id: string, data: object) => void;
  removeAction: (id: string) => void;
}>({
  state: { favourites: new Map<string, object>() },
  addAction: (id: string, data: object) => {},
  removeAction: (id: string) => {},
});

export const useFavouriteContext = () => useContext(FavouriteContext);
