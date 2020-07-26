import React, { useState }  from 'react';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

function NewEntry(props) {
   const [text,updateText] = useState("")
   const [titel,updateTitel] = useState("")

   

    

   

    
  return(
      <div>
          <label>Titel :</label>
          <input value={titel} onChange={(e)=>updateTitel(e.target.value)}></input>
          <label>Text :</label>
          <input value={text} onChange={(e)=>updateText(e.target.value)}></input>
          <br></br>
         

          <Button onClick={props.add(titel,text,2)}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>


      </div>
   
  )
}

export default NewEntry;
