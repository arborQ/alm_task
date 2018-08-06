import * as React from "react";
import * as ReactDOM from "react-dom";
import Donate from "./components/donate";
import ProgressBar from "./components/progressbar";
import "./styles";

ReactDOM.render(
  <div className="donate">
    <div className="donate__container">
      <ProgressBar value={33} maxValue={100} />
      <div className="donate__container--text">
        <span className="donate__container--text--highlighted">Only 3 days left</span> to fund this project.
      </div>
      <div className="donate__container--text hidden--mobile">
        <span>Join the </span>
        <span className="donate__container--text--bold">42</span>
        <span> other donors who have already supported this project. Every dollar helps.</span>
      </div>
      <Donate defaultValue={50} />
      <div className="donate__container--text">
        <span className="donate__container--text--info">Why give 50$?</span>
      </div>
    </div>
    <div className="donate__container donate__container--light">
      <div className="layout layout--vertical layout--margin">
        <button type="button" className="donate__button donate__button--default">Save for later</button>
        <a className="donate__button donate__button--default" href={`mailto:?subject=ok`}>Tell a friend</a>
      </div>
    </div>
  </div>,
  document.getElementById("root"),
);
