import React from "react";

export default function DeleteCard(props) {
  const { id, deletecard } = props;
  return (
    <div>
      <button onClick={() => {
         deletecard(id)
        }}>Delete</button>
    </div>
  );
}
