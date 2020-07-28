import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

function DoneEntry(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: "70%",
      backgroundColor: "green",
      textAlign: "center",
      margin: "10px",
    },
  });

  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <p>
          ID : {props.id} Titel : {props.titel} :
        </p>
        <h2>{props.text}</h2>
      </CardContent>
    </Card>
  );
}

export default DoneEntry;
