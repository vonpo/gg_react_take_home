import makeStyles from "@material-ui/core/styles/makeStyles";

export const useImagesWithOptionsStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  optionsContainer: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    top: 10,
  },
}));

export const useImageStyles = makeStyles({
  imageContainer: {
    maxWidth: "calc(100vw - 20px)",
  },
});
