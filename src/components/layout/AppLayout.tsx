import { FunctionComponent } from "react";
import { HeaderView } from "../common/Header/HeaderView";
import * as React from "react";
import { useAppStyles } from "./AppLayout.styles";

/**
 * Create app layout grid with CSS Grid.
 *
 * App has 2 rows and 3 columns layout
 *           - ---- -
 *           - ---- -
 * @constructor
 */
export const AppLayout: FunctionComponent = ({ children }) => {
  const styles = useAppStyles();

  return (
    <div className={styles.root}>
      <HeaderView />
      <div className={styles.main}>{children}</div>
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  );
};
