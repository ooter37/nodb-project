import React from "react";
import DataRender from "./DataRender";
import DeleteCard from "./DeleteCard";
import UpdateBalance from "./UpdateBalance";

export default function ListCards(props) {
  const { deletecard, updatebalance } = props;
  const mappedCards = props.cards.map(elem => {
    return (
      <div className="mapped-cards" key={elem.id}>
        <div className="card-elements">
          <div className="card-labels">
            <div className="card-number">
              <pre>Card Number: </pre>
              <DataRender card={elem.card} />
            </div>
            <DeleteCard
              id={elem.id}
              deletecard={deletecard}
              backgroundPicker={props.backgroundPicker}
            />
          </div>
          <div className="card-labels">
            <div className="card-number">
              <pre>Balance: $</pre>
              <DataRender balance={elem.balance.toLocaleString("en-US")} />
            </div>
            <UpdateBalance id={elem.id} updatebalance={updatebalance} />
          </div>
          <br></br>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="submitted-cards">Submitted Cards</h1>
      {mappedCards}
    </div>
  );
}
