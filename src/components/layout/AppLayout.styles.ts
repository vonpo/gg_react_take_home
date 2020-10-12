import makeStyles from "@material-ui/core/styles/makeStyles";

export const useAppStyles = makeStyles((theme) => ({
  main: {
    gridArea: "gallery",
    backgroundColor: "#21282D",
    paddingBottom: 60,
    [theme.breakpoints.down("lg")]: {
      padding: "0 10px",
      borderRadius: 25,
    },
  },
  left: {
    gridArea: "left",
    backgroundColor: "#21282D",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  right: {
    gridArea: "right",
    backgroundColor: "#21282D",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  root: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1200px 1fr",
    gridTemplateRows: "78px auto",
    gridTemplateAreas: '"empty header fav" "left gallery right"',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
    // disable overflow anchor as when loading elements it will jump to latest but we want to keep scroll position
    overflowAnchor: "none",
    [theme.breakpoints.down("lg")]: {
      gridTemplateRows: "78px 50px auto",
      gridTemplateColumns: "1fr",
      gridTemplateAreas: '"header" "fav" "gallery"',
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateRows: "128px 50px auto",
    },
  },
}));
