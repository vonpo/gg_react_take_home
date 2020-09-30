import {
  FormEvent,
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
} from "react";
import * as React from "react";
import { createStyles, Paper, Theme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { SearchIcon } from "../assets";
import { useHistory } from "react-router-dom";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDetectPath } from "../../route";
import { useSearchContext } from "../hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      flex: 1,
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

  return <Search onSubmit={onSubmit} searchRef={searchRef} />;
};
