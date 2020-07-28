import React from "react";
import Entry from "./Entry";

function ToDoList(props) {
  const list = props.entries.map((entry) => (
    <Entry
      key={entry.id}
      id={entry.id}
      titel={entry.titel}
      text={entry.text}
      removeTodo={props.removeTodo}
      doneTodo={props.doneTodo}
    ></Entry>
  ));

  return <div>{list}</div>;
}

export default ToDoList;
