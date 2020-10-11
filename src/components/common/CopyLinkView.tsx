import { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";
import { CopyLinkIcon } from "../../icons/CopyLink";
import Tooltip from "@material-ui/core/Tooltip";
import * as React from "react";

const COPY_IMAGE_WIDTH = 30;
const COPY_IMAGE_HEIGHT = 30;

export const CopyLinkView: FunctionComponent<{ onCopy: () => void }> = ({
  onCopy,
}) => {
  return (
    <Tooltip title="Copy link">
      <IconButton onClick={onCopy}>
        <CopyLinkIcon width={COPY_IMAGE_WIDTH} height={COPY_IMAGE_HEIGHT} />
      </IconButton>
    </Tooltip>
  );
};
