import React from "react";

export default function DeleteCard(props) {
  const { id, backgroundPicker, deletecard } = props;
  return (
    <div>
      <button onClick={() => {
         deletecard(id)
        
        }}>Delete</button>
    </div>
  );
}
