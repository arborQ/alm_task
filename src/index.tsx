import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "./components/container";
import ProgressBar from "./components/progressbar";

import "./styles";

ReactDOM.render(
  <Container>
    <ProgressBar value={10} maxValue={100} />
    <div>
      <span className="message-highlighted">Only 3 days left</span> to fund this project.
    </div>
    <div>
      Join the 42 other donors who have already supported this project. Every dollar helps.
    </div>
  </Container>,
  document.getElementById("root"),
);
