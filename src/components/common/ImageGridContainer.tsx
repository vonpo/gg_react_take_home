import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { IImage } from "../../interfaces/image";
import { splitItemsIntoColumn } from "../../utils/gridLayout";
import { useWindowSize } from "../../hooks/useWindowSize";

const ELEMENT_WIDTH = 200;

/**
 * Get column count.
 *
 * @param {number }availableWidth
 */
const calculateColumns = (availableWidth: number) => {
  return Math.floor(availableWidth / ELEMENT_WIDTH);
};

const HORIZONTAL_LAYOUT = true;

/**
 * Image grid display image components.
 * It uses css flex. Rows are wrapped and space is but between them.
 *
 * @param {IImage[]} images
 * @param {FunctionComponent} ImageView
 *
 * @constructor
 */
export const ImageGridContainer: FunctionComponent<{
  images: IImage[];
  ImageView: FunctionComponent<{ image: IImage }>;
}> = ({ images, ImageView }) => {
  // Adjust grid size when window size changes.
  const windowSize = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current || !windowSize.width) {
      return;
    }

    setColumns(calculateColumns(containerRef.current.clientWidth));
  }, [containerRef.current, windowSize]);

  if (HORIZONTAL_LAYOUT) {
    // This line perfectly fine as long HORIZONTAL_LAYOUT as can't be change during component life cycle.
    /* tslint:disable react-hooks-nesting  */
    const itemsByColumns = useMemo<Map<number, IImage[]>>(
      () => splitItemsIntoColumn(columns, images),
      [columns, images]
    );

    return (
      <Grid container direction="row" justify="center" ref={containerRef}>
        {Array.from(new Array(columns)).map((_, index) => {
          const imageInColumn = itemsByColumns.get(index);

          if (!imageInColumn) {
            return null;
          }

          return (
            <Grid>
              {imageInColumn.map((image: IImage) => (
                <ImageView image={image} key={image.id} />
              ))}
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return (
    <Grid container justify="space-between" direction="row">
      {images.map((image) => (
        <ImageView image={image} key={image.id} />
      ))}
    </Grid>
  );
};
