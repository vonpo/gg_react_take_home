import { FunctionComponent } from "react";
import * as React from "react";
import { IconButton } from "@material-ui/core";
import { CopyLinkIcon } from "./assets";

const COPY_IMAGE_WIDTH = 30;
const COPY_IMAGE_HEIGHT = 30;

export const CopyLinkContainer: FunctionComponent<{ text: string }> = ({
  text,
}) => {
  const onCopy = () => {
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript

    navigator.clipboard.writeText(text).then(
      function () {
        console.info("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };
  return (
    <IconButton onClick={onCopy} title="Copy link">
      <CopyLinkIcon width={COPY_IMAGE_WIDTH} height={COPY_IMAGE_HEIGHT} />
    </IconButton>
  );
};
