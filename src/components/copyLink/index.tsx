import { FunctionComponent } from "react";
import * as React from "react";
import { IconButton } from "@material-ui/core";
import { CopyLinkIcon } from "./assets";
import Tooltip from "@material-ui/core/Tooltip";
import { logger } from "../logger/logger";
import { useNotificationContext } from "../notification";

const COPY_IMAGE_WIDTH = 30;
const COPY_IMAGE_HEIGHT = 30;

export const CopyLinkContainer: FunctionComponent<{ text: string }> = ({
  text,
}) => {
  const { displayAction } = useNotificationContext();

  const onCopy = async () => {
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    try {
      await navigator.clipboard.writeText(text);
      displayAction("Link was copied!");
    } catch (error) {
      logger.error(error);
      displayAction(
        "Link copy fail please click on gif and copy link from text field!"
      );
    }
  };
  return (
    <Tooltip title="Copy link">
      <IconButton onClick={onCopy}>
        <CopyLinkIcon width={COPY_IMAGE_WIDTH} height={COPY_IMAGE_HEIGHT} />
      </IconButton>
    </Tooltip>
  );
};
