import makeStyles from "@material-ui/core/styles/makeStyles";

export const useDetailsDialogStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 15,
  },
  userDetails: {
    marginTop: 40,
  },
  link: {
    marginTop: 40,
    height: 40,
    width: "100%",
    "& input": {
      textAlign: "center",
    },
  },
  imageContainer: {
    "& img": {
      maxWidth: "100%",
    },
    "& span": {
      maxWidth: "100%",
    },
  },
}));
