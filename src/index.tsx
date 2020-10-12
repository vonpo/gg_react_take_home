import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppView } from "./components/common/App/AppView";

const element = document.createElement("div");

document.body.appendChild(element);

ReactDOM.render(<AppView />, element);
