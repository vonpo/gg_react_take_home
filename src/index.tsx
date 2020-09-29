import * as React from "react";
import * as ReactDOM from "react-dom";
import { FunctionComponent } from "react";

const element = document.createElement("div");

document.body.appendChild(element);

const App: FunctionComponent = () => {
    return <div>test</div>
}

ReactDOM.render(<App/>, element);
