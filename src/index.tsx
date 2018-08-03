import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "./components/container";
import ProgressBar from "./components/progressbar";
import "./styles";

ReactDOM.render(
  <div className="donate">
    <Container>
      <ProgressBar value={33} maxValue={100} />
      <div className="donate__container--text">
        <span className="donate__container--text--highlighted">Only 3 days left</span> to fund this project.
      </div>
      <div className="donate__container--text">
        <span>Join the </span>
        <span className="donate__container--text--bold">42</span>
        <span> other donors who have already supported this project. Every dollar helps.</span>
      </div>
    </Container>
  </div>,
  document.getElementById("root"),
);
