import React  from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function Entry(props) {

    const boarder = {
        border:" black 3px solid",
        width: "30%" ,
        height: "auto",
        margin : "10px",
        display: "inline-block"
      }
  return(
      <div>
    <div style={boarder}>
    <p>ID : {props.id} Titel : {props.titel} :</p>
    <h2>{props.text}</h2>
    </div>
     <IconButton aria-label="delete" >
     <DeleteIcon />
 </IconButton>
 </div>

  )
}

export default Entry;
