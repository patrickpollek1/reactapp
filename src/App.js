import React, { useState, useMemo } from "react";
import Text from "./Components/Text";
import ToDoList from "./Components/ToDoList";
import "./App.css";
import NewEntry from "./Components/NewEntry";

function App(props) {
  const [entries, setEntries] = useState([
    { id: 1, titel: "Test1", text: "Test" },
    { id: 2, titel: "Test2", text: "Test" },
    { id: 3, titel: "Test3", text: "Test" },
  ]);

  const [del, setDel] = useState(0);

  const addTodo = (id, titel, text) => {
    const newTodos = [...entries, { id, titel, text }];
    setEntries(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = entries.filter((e) => e.id !== id);
    setDel(del + 1);
    setEntries(newTodos);
  };

  const col = useMemo(() => (del % 2 === 0 ? "red" : "green"), [del]);

  return (
    <div>
      <h1>TodoApp</h1>
      <Text text="ToDo" color={col}></Text>
      <Text text={del} color="red"></Text>
      <ToDoList entries={entries} removeTodo={removeTodo}></ToDoList>
      <Text text="Neu" color="black"></Text>
      <NewEntry addTodo={addTodo}></NewEntry>
    </div>
  );
}

export default App;
