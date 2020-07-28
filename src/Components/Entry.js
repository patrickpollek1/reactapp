import React, { useState } from "react";
import { IconButton, Divider } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

function Entry(props) {
  const [done, setDone] = useState("whithe");
  const [disable, setDisable] = useState(false);

  const useStyles = makeStyles({
    root: {
      maxWidth: "70%",
      backgroundColor: done,
      textAlign: "center",
      margin: "10px",
    },
  });

  const handleDelete = (e) => {
    e.preventDefault();
    props.removeTodo(props.id);
    setDisable(!disable);
  };

  const handleDone = (e) => {
    e.preventDefault();
    props.doneTodo(props.id);
    setDone("green");
    setDisable(!disable);
  };
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <p>
          ID : {props.id} Titel : {props.titel} :
        </p>
        <Divider />
        <h2>{props.text}</h2>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="delete"
          onClick={handleDelete}
          disabled={disable}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleDone} disabled={disable}>
          <CheckCircleIcon style={{ color: green[500] }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Entry;
