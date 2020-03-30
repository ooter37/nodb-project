import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBarDesign/ProgressBar";

const ProgressBarWealth = props => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setPercentage(props.totalBalance / 4000);
  }, [props.totalBalance, percentage]);

  return (
    <div>
      <ProgressBar percentage={percentage} totalBalance={props.totalBalance} />
    </div>
  );
};

export default ProgressBarWealth;
