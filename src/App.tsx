// TODO: prevent the formated curl been re-fromated
// local storage the previous result 

import React from "react";
import "./App.scss";
import { Formatter } from "./Formatter/Formatter";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          format copied{" "}
          <a
            className="curl-link"
            href="https://curl.haxx.se/https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            curl
          </a>
        </h3>
      </header>
      <section className="App-body">
        <Formatter></Formatter>
      </section>
    </div>
  );
};
