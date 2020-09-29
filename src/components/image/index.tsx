import * as React from "react";
import { FunctionComponent } from "react";
import { IGif, IImage } from "../resource/interfaces";
import Skeleton from "@material-ui/lab/Skeleton";

let renderCount = 0;
/**
 * Display image/gif.
 *
 * This component uses Skeleton element which is displayed before image is loaded.
 *
 * Alternatively we could listen image.load event and re-render component when images is loaded.
 *
 *
 * @param {IGif} gif
 *
 * @constructor
 */
export const Gif: FunctionComponent<{ image: IImage }> = ({ image }) => {
  console.info("render", renderCount++);

  return (
    <div style={{ position: "relative" }}>
      <Skeleton
        variant="rect"
        style={{
          position: "absolute",
          width: image.images.fixed_height.width + "px",
          height: image.images.fixed_height.height + "px",
        }}
      />
      <img
        src={image.images.fixed_height.url}
        width={image.images.fixed_height.width}
        height={image.images.fixed_height.height}
      />
    </div>
  );
};
