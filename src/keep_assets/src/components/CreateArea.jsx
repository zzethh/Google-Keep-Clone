import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>

      {/* <div style={{
        width: "480px",
        margin: "0 auto 0 auto",
        boxShadow: "0 1px 5px rgb(138, 137, 137)",
        background: "#fff",
        padding: "15px"
        }}>
      <input style={{width: "100%",border: "none",outline: "none",resize: "none"}} placeholder="Title"/>
      <textarea style={{width: "100%",border: "none",outline: "none",resize: "none"}} name="content" placeholder="Take a note..." rows="3" />
      </div>

      <div style={{
        width: "480px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        margin: "0 auto 0 auto",
        boxShadow: "0 1px 5px rgb(138, 137, 137)",
        background: "#fff",
        padding: "15px"
        }}>
      <input style={{width: "100%%",border: "none",outline: "none",resize: "none"}} placeholder="Title"/>
      <textarea style={{width: "100%",border: "none",outline: "none",resize: "none"}} name="content" placeholder="Take a note..." rows="3" />
      </div> */}
    </div>
  );
}

export default CreateArea;
