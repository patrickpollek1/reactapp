import React from "react";
import DoneEntry from "./DoneTodo";
import { Grid, Paper } from "@material-ui/core";

function makeRow(doneEntries) {
  return doneEntries.map((entry) => (
    <Grid item xs={4}>
      <DoneEntry
        key={entry.id}
        id={entry.id}
        titel={entry.titel}
        text={entry.text}
      ></DoneEntry>
    </Grid>
  ));
}

function DoneList(props) {
  return (
    <div>
      <Grid container item xs={12} spacing={3}>
        {makeRow(props.entries)}
      </Grid>
    </div>
  );
}

export default DoneList;
