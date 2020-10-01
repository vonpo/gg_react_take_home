import * as React from "react";
import { FunctionComponent } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

/**
 *  Icons were generated and copied from svg files so code is not very nice i.e those closes a,b,c,d
 */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    a: {
      fill: "#ff816a",
    },
  })
);

export const LoadingIcon: FunctionComponent<{
  empty?: boolean;
  width: number;
  height: number;
}> = ({ width, height }) => {
  const styles = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 134 11"
    >
      <circle
        className={styles.a}
        cx="5.5"
        cy="5.5"
        r="5.5"
        transform="translate(123)"
      />
      <circle
        className={styles.a}
        cx="5.5"
        cy="5.5"
        r="5.5"
        transform="translate(82)"
      />
      <circle
        className={styles.a}
        cx="5.5"
        cy="5.5"
        r="5.5"
        transform="translate(41)"
      />
      <circle className={styles.a} cx="5.5" cy="5.5" r="5.5" />
    </svg>
  );
};
