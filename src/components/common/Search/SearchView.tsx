import { FunctionComponent } from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { SearchIcon } from "../../../icons/Search";
import * as React from "react";
import { ISearchProps } from "../../../interfaces/search";
import { useSearchStyles } from "./search.styles";

/**
 * Search presentation component.
 *
 * @param {function} onSubmit
 * @param {Object}searchRef
 * @constructor
 */
export const SearchView: FunctionComponent<ISearchProps> = ({
  onSubmit,
  searchRef,
}) => {
  const classes = useSearchStyles();

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.form}
      onSubmit={onSubmit}
    >
      <InputBase
        inputRef={searchRef}
        className={classes.input}
        placeholder="search all the GIFs"
        inputProps={{ "aria-label": "search all the GIFs" }}
        endAdornment={
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon height={33} width={33} />
          </IconButton>
        }
      />
    </form>
  );
};
