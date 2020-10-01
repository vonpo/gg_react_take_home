import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { IImage } from "../image/interfaces";
import { splitItemsIntoColumn } from "./logic";
import { useWindowSize } from "../resize/hook";

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
export const ImageGrid: FunctionComponent<{
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
    const itemsByColumns = useMemo<Map<number, IImage[]>>(
      () => splitItemsIntoColumn(columns, images),
      [columns, images]
    );

    return (
      <Grid container direction="row" justify="center" ref={containerRef}>
        {Array.from(new Array(columns)).map((_, index) => {
          const images = itemsByColumns.get(index);

          if (!images) {
            return null;
          }

          return (
            <Grid>
              {images.map((image: IImage) => (
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
