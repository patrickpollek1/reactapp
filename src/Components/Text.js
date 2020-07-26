import React  from 'react';

function Text(props) {

  return(
  <h1 style={{ padding: "10px 20px", textAlign: "center", color: props.color,display: "inline-block" }}>{props.text}</h1>
  )
}

export default Text;
