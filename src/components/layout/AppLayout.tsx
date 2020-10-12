import { FunctionComponent } from "react";
import { HeaderView } from "../common/Header/HeaderView";
import * as React from "react";
import { useAppStyles } from "./AppLayout.styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SearchContextProvider } from "../../contexts/search";
import { getSearchParams } from "../../utils/search";
import { NotificationContextProvider } from "../../contexts/notification";
import { useLocation } from "react-router-dom";
import { NotificationContainer } from "../common/Notification/NotificationContainer";

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
  const location = useLocation();

  return (
    <SearchContextProvider
      searchQuery={getSearchParams(location.search, "search")}
    >
      <NotificationContextProvider>
        <CssBaseline />
        <div className={styles.root}>
          <HeaderView />
          <div className={styles.main}>{children}</div>
          <div className={styles.left} />
          <div className={styles.right} />
        </div>
        <NotificationContainer />
      </NotificationContextProvider>
    </SearchContextProvider>
  );
};
