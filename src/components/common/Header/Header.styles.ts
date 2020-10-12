import makeStyles from "@material-ui/core/styles/makeStyles";

export const useHeaderStyles = makeStyles((theme) => ({
  search: {
    gridArea: "header",
    backgroundColor: "white",
    [theme.breakpoints.down("lg")]: {
      padding: "0 10px",
    },
  },
  header: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 60,
    },
  },
  searchBox: {
    flex: 1,
  },
}));
