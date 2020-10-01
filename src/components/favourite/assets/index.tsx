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
      fill: "none",
    },
    b: {
      clipPath: "url(#a)",
    },
    c: {
      fill: "#ff816a",
    },
    cEmpty: {
      fill: "white",
    },
    d: {
      fill: "#21282d",
    },
  })
);

export const FavIcon: FunctionComponent<{
  isEmpty?: boolean;
  width: number;
  height: number;
}> = ({ isEmpty, width, height }) => {
  const styles = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 40.467 36.163"
    >
      <g className={styles.b}>
        <path
          className={isEmpty ? styles.cEmpty : styles.c}
          d="M26.827,24.507c4.361-.228,4.759-3.976,3.684-6.823-1.425-3.8-5.967-10.355-13.71-10.126-5.919.168-9.3,4.409-9.3,10.126s1.969,13.19,19.327,24.229C44.186,30.873,46.155,23.4,46.155,17.684s-3.382-9.946-9.3-10.126c-7.743-.228-12.285,6.33-13.71,10.114-1.075,2.847-.676,6.595,3.684,6.823"
          transform="translate(-6.594 -6.645)"
        />
        <path
          className={styles.d}
          d="M20.233,36.206a.91.91,0,0,1-.483-.144C11.778,30.993,6.4,26.284,3.31,21.7A17.967,17.967,0,0,1,0,11.065,11.44,11.44,0,0,1,2.658,3.329,10.285,10.285,0,0,1,10.183.049a13.805,13.805,0,0,1,10.05,3.964A13.73,13.73,0,0,1,30.284.049a10.126,10.126,0,0,1,7.526,3.291,11.2,11.2,0,0,1,2.658,7.736A17.914,17.914,0,0,1,37.157,21.7c-3.092,4.6-8.468,9.3-16.44,14.367a.91.91,0,0,1-.483.144M10.594,1.839h-.362C5.037,2,1.812,5.527,1.812,11.065a16.134,16.134,0,0,0,3,9.622c2.887,4.3,7.936,8.733,15.426,13.538,7.489-4.817,12.539-9.249,15.426-13.538a16.134,16.134,0,0,0,3-9.622c0-5.538-3.225-9.069-8.42-9.225A12.079,12.079,0,0,0,21.478,5.3a18.742,18.742,0,0,1,3.286,5.454,6.61,6.61,0,0,1-.254,5.91,5.026,5.026,0,0,1-4.228,2.126h-.1a5.056,5.056,0,0,1-4.228-2.126,6.61,6.61,0,0,1-.254-5.91,18.743,18.743,0,0,1,3.286-5.442,12.058,12.058,0,0,0-8.4-3.472m9.64,4.781a16.881,16.881,0,0,0-2.839,4.769,4.945,4.945,0,0,0,.072,4.288,3.3,3.3,0,0,0,2.766,1.309A2.986,2.986,0,0,0,23,15.677a4.945,4.945,0,0,0,.072-4.288,16.87,16.87,0,0,0-2.839-4.757"
          transform="translate(0 -0.037)"
        />
      </g>
    </svg>
  );
};
