import React, { useState, useMemo } from "react";
import ToDoList from "./Components/ToDoList";
import "./App.css";
import NewEntry from "./Components/NewEntry";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import DoneList from "./Components/DoneList";

function App(props) {
  const [entries, setEntries] = useState([
    { id: 1, titel: "Test1", text: "Test" },
    { id: 2, titel: "Test2", text: "Test" },
    { id: 3, titel: "Test3", text: "Test" },
  ]);

  const [del, setDel] = useState(0);
  const [done, setDone] = useState([]);

  const addTodo = (id, titel, text) => {
    const newTodos = [...entries, { id, titel, text }];
    setEntries(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = entries.filter((e) => e.id !== id);
    setDel(del + 1);
    setEntries(newTodos);
  };

  const doneTodo = (id) => {
    const newTodos = entries.filter((e) => e.id !== id);
    setDone([...done, ...entries.filter((e) => e.id === id)]);
    setEntries(newTodos);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    paper2: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: col,
    },
    grid: {
      itemAlign: "center",
    },
  }));

  const col = useMemo(() => (del % 2 === 0 ? "red" : "green"), [del]);
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper1}>ToDo-App</Paper>
          <Paper className={classes.paper1}>{done.length}</Paper>
        </Grid>
        <Grid item xs={6} align="center">
          <Paper className={classes.paper2}>ToDo's</Paper>
          <ToDoList
            entries={entries}
            removeTodo={removeTodo}
            doneTodo={doneTodo}
          ></ToDoList>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper1}>Neu</Paper>
          <NewEntry addTodo={addTodo}></NewEntry>
        </Grid>
      </Grid>
      <Paper className={classes.paper1}>Done !</Paper>
      <DoneList entries={done}></DoneList>
    </div>
  );
}

export default App;
