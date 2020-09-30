import * as React from "react";
import { FunctionComponent } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

/**
 *  Icons were generated and copied from svg files so code is not very nice i.e those closes a,b,c,d
 */

const useStyles = makeStyles(() =>
  createStyles({
    a: {
      fill: "#fff",
    },
    b: {
      fill: "#ff816a",
    },
  })
);

export const TrendingIcon: FunctionComponent<{
  empty?: boolean;
  width: number;
  height: number;
}> = ({ empty, width, height }) => {
  const styles = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 60.754 33.988"
    >
      <path
        className={styles.a}
        d="M33.863,40.693l-13.4-13.4L0,47.765l1.6,1.6L20.468,30.471l13.4,13.4L55.63,22.074,54.056,20.5Z"
        transform="translate(0 -15.377)"
      />
      <path
        className={styles.b}
        d="M156.4,5.8l15.869,15.869L178.067,0Z"
        transform="translate(-117.314)"
      />
    </svg>
  );
};
