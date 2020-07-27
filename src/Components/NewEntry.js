import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

function NewEntry({ addTodo }) {
  const [text, updateText] = useState("");
  const [titel, updateTitel] = useState("");
  const [id, updateId] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(id, titel, text);
    updateText("");
    updateTitel("");
    updateId("");
  };

  return (
    <div>
      <label>ID :</label>
      <input value={id} onChange={(e) => updateId(e.target.value)}></input>
      <label>Titel :</label>
      <input
        value={titel}
        onChange={(e) => updateTitel(e.target.value)}
      ></input>
      <label>Text :</label>
      <input value={text} onChange={(e) => updateText(e.target.value)}></input>
      <br></br>

      <Button
        onClick={handleAdd}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </div>
  );
}

export default NewEntry;
