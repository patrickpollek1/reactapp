import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    <div
      style={{
        textAlign: "center", // this does the magic
      }}
    >
      <TextField
        spacing={5}
        id="ID"
        value={id}
        onChange={(e) => updateId(e.target.value)}
        label="ID"
      />
      <br></br>
      <TextField
        spacing={1}
        id="Title"
        value={titel}
        onChange={(e) => updateTitel(e.target.value)}
        label="Titel"
        style={{ justifyContent: "center" }}
      />
      <br></br>

      <TextField
        spacing={1}
        id="Text"
        value={text}
        onChange={(e) => updateText(e.target.value)}
        label="Text"
        style={{ justifyContent: "center" }}
      />
      <br></br>
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
