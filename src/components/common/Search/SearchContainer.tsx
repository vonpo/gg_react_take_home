import { FormEvent, FunctionComponent, useEffect, useRef } from "react";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { useSearchContext } from "../../../contexts/search";
import { SearchView } from "./SearchView";

/**
 * Search container component.
 *
 * Handles on search change action.
 *
 * @constructor
 */
export const SearchContainer: FunctionComponent = () => {
  const { state } = useSearchContext();
  const searchRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchRef.current?.value) {
      history.push(`/?search=${searchRef.current?.value}`);
    }
  };

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.value = state.query;
    }
  }, [state.query]);

  return <SearchView onSubmit={onSubmit} searchRef={searchRef} />;
};
