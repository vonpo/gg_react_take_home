import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "./components/common/App/AppContainer";

const element = document.createElement("div");

document.body.appendChild(element);

ReactDOM.render(<AppContainer />, element);
