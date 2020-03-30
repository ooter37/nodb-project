import React from "react";
import Filler from "./ProgressBarFiller";

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <Filler percentage={Math.min(props.percentage, 100)} totalBalance={props.totalBalance} />
    </div>
  );
}
