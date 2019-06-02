import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./scenes";
import registerServiceWorker from './registerServiceWorker';


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
registerServiceWorker()