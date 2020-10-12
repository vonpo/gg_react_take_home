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
  favGridArea: { gridArea: "fav", backgroundColor: "white" },
  emptyGridArea: { gridArea: "empty", backgroundColor: "white" },
  link: { textDecoration: "none" },
  linkLabel: { marginRight: 25 },
  favButton: { padding: 5, borderRadius: 15 },
  favButtonLabel: { marginLeft: 5 },
}));
