import React from "react";

export default function ProgressBarFiller(props) {
  return (
    <div className="filler" style={{ width: `${props.percentage}%` }}>
      &nbsp;&nbsp;${props.totalBalance.toLocaleString("en-US")}
    </div>
  );
}
