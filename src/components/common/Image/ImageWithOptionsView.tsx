import makeStyles from "@material-ui/core/styles/makeStyles";
import { FunctionComponent, useEffect, useState } from "react";
import { IImage } from "../../../interfaces/image";
import { CopyLinkContainer } from "../CopyLink/CopyLinkContainer";
import { FavouriteToggleContainer } from "../FavouriteToggle/FavouriteToggleContainer";
import { DetailsDialogView } from "../DetailsDialog/DetailsDialogView";
import { ButtonBase } from "@material-ui/core";
import * as React from "react";
import { ImageView } from "./ImageView";
import { useImagesWithOptionsStyles } from "./Image.styles";

/**
 * Display image and image options:
 *
 * - favourite
 * - copy link
 * - on hover display popup with options (won't work on touch devices but we have see same options
 *  after we click and open details popup)
 *
 * @param {IImage} image
 * @constructor
 */
export const ImageWithOptionsView: FunctionComponent<{ image: IImage }> = ({
  image,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [areDetailsShown, setAreDetailsShown] = useState<boolean>(false);
  const styles = useImagesWithOptionsStyles();

  useEffect(() => {
    if (areDetailsShown) {
      setIsShown(false);
    }
  }, [areDetailsShown]);
  return (
    <div
      className={styles.root}
      onMouseEnter={() => !areDetailsShown && setIsShown(true)}
      onMouseLeave={() => !areDetailsShown && setIsShown(false)}
    >
      {isShown && (
        <div className={styles.optionsContainer}>
          <CopyLinkContainer text={image.url} />
          <FavouriteToggleContainer id={image.id} meta={image} />
        </div>
      )}

      <DetailsDialogView
        isOpen={areDetailsShown}
        image={image}
        handleClose={() => setAreDetailsShown(false)}
      />
      <ButtonBase onClick={() => setAreDetailsShown(true)}>
        <ImageView image={image} thumbnail={true} />
      </ButtonBase>
    </div>
  );
};
