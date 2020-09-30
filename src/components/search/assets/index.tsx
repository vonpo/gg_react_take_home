import * as React from "react";
import { FunctionComponent } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    a: {
      fill: "#21282d",
      stroke: "#21282d",
    },
    b: {
      clipPath: "url(#a)",
    },
  })
);

export const SearchIcon: FunctionComponent<{
  width?: number;
  height?: number;
}> = ({ width, height }) => {
  const styles = useStyles();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g className={styles.b}>
        <path
          className={styles.a}
          d="M13.847,1.051a12.644,12.644,0,0,1,9.048,3.783,13.041,13.041,0,0,1,0,18.306,12.7,12.7,0,0,1-18.1,0,13.041,13.041,0,0,1,0-18.306,12.644,12.644,0,0,1,9.048-3.783m0-1.051a13.993,13.993,0,0,0,0,27.985A13.993,13.993,0,0,0,13.847,0"
        />
        <path
          className={styles.a}
          d="M205.548,207.993a.876.876,0,0,1-.619-.257l-8.756-8.628a.876.876,0,0,1,1.226-1.249l8.768,8.628a.876.876,0,0,1-.619,1.494"
          transform="translate(-173.057 -174.555)"
        />
        <path
          className={styles.a}
          d="M116.392,127.943a.292.292,0,1,1,0-.584,9.637,9.637,0,0,0,9.574-9.667.292.292,0,0,1,.584,0,10.215,10.215,0,0,1-10.157,10.251"
          transform="translate(-102.545 -103.694)"
        />
        <path
          className={styles.a}
          d="M31.892,42.543a.292.292,0,0,1-.292-.292A10.215,10.215,0,0,1,41.757,32a.292.292,0,0,1,0,.584,9.637,9.637,0,0,0-9.573,9.667.292.292,0,0,1-.292.292"
          transform="translate(-27.911 -28.264)"
        />
      </g>
    </svg>
  );
};
