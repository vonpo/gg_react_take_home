import { FunctionComponent } from "react";
import * as React from "react";
import { logger } from "../../../utils/logger";
import { useNotificationContext } from "../../../contexts/notification";
import { CopyLinkView } from "./CopyLinkView";
import { copy } from "../../../utils/copy";

export const CopyLinkContainer: FunctionComponent<{ text: string }> = ({
  text,
}) => {
  const { displayAction } = useNotificationContext();

  const handleCopy = async () => {
    try {
      await copy(text);
      displayAction("Link was copied!");
    } catch (error) {
      logger.error(error);
      displayAction(
        "Link copy fail please click on gif and copy link from text field!"
      );
    }
  };

  return <CopyLinkView onCopy={handleCopy} />;
};
