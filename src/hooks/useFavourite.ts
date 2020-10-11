import { Reducer, useEffect, useReducer } from "react";
import { favourite } from "../reducers/favourite";
import { IStorage } from "../interfaces/storage";
import { IFavouriteState } from "../interfaces/favourite";
import { FAVOURITE_ACTIONS } from "../types/favourite";

/**
 * Use favourites hooks.
 * @param {IStorage} storage If provided can is used when adding/removing favourite.
 *
 * It's assumed that IStorage add/remove are sync operations.
 */
export const useFavourites = ({ storage }: { storage?: IStorage }) => {
  const [state, dispatch] = useReducer<
    Reducer<IFavouriteState, FAVOURITE_ACTIONS>
  >(favourite, {
    favourites: new Map<string, object>(),
  });

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
      data: { id, meta },
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
