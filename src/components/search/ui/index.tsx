import { FormEvent, FunctionComponent, RefObject, useRef } from "react";
import * as React from "react";
import { useSearchContext } from "../hooks";
import { createStyles, Paper, Theme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      margin: "24px auto",
      maxWidth: 500,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    form: {
      display: "flex",
      alignItems: "center",
    },
  })
);

interface SearchProps {
  onSubmit: (_e: FormEvent<HTMLFormElement>) => void;
  searchRef: RefObject<HTMLInputElement>;
}

/**
 * Search presentation component.
 *
 * @param {function} onSubmit
 * @param {Object}searchRef
 * @constructor
 */
const Search: FunctionComponent<SearchProps> = ({ onSubmit, searchRef }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form
        noValidate
        autoComplete="off"
        className={classes.form}
        onSubmit={onSubmit}
      >
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          inputRef={searchRef}
          className={classes.input}
          placeholder="search gifs!"
          inputProps={{ "aria-label": "search gifs!" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </form>
    </Paper>
  );
};
/**
 * Search container component.
 *
 * Handles on search change action.
 *
 * @constructor
 */
export const SearchContainer: FunctionComponent = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { search } = useSearchContext();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search(searchRef.current?.value || "");
  };

  return <Search onSubmit={onSubmit} searchRef={searchRef} />;
};
