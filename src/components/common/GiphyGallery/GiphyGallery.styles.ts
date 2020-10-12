import makeStyles from "@material-ui/core/styles/makeStyles";

export const useGiphyGalleryStyles = makeStyles((theme) => ({
  header: {
    marginTop: 84,
    marginBottom: 40,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 60,
    },
  },
  label: {
    marginLeft: 10,
  },
}));
