import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function expandAreas() {
    setExpand(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleAddNote() {
    props.addItem({ note });
    setNote({
      title: "",
      content: "",
    });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddNote();
    }
  }

  return (
    <div>
      <form className="create-note container-fluid">
        <input
          style={{ display: expand ? "block" : "none" }}
          onChange={(event) => {
            handleChange(event);
          }}
          value={note.title}
          name="title"
          placeholder="Title"
          onKeyDown={handleKeyDown}
        />
        <textarea
          onChange={(event) => {
            handleChange(event);
          }}
          value={note.content}
          name="content"
          placeholder="Add a new note..."
          rows={expand ? 3 : 1}
          onClick={expandAreas}
          onKeyDown={handleKeyDown}
        />
        <Zoom in={expand}>
          <Fab
            size="large"
            color="inherit"
            aria-label="add"
            onClick={handleAddNote}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
