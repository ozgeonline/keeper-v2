import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded,setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //input & textarea
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //addIcon
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); //olay engelleyici 
  }

  //textarea zoom
  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
         : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 4 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon color="primary"/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
