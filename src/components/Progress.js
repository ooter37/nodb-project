import React from "react";
import ProgressBarWealth from "./ProgressBarWealth";

export default class Progress extends React.Component {
  render() {
    const { setImage } = this.props;

    return (
      <div>
        <img alt="treasure progress" src={setImage} />
        <div className="progress-bar-wealth">
          <h1 className="header">WEALTH:</h1>
          <ProgressBarWealth totalBalance={this.props.totalBalance} />
        </div>
      </div>
    );
  }
}
