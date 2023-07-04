import Header from "../common/Header";
import Footer from "../common/Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "react-router-dom";
import backEndServer from "../../config";

function NoteMemo(event) {
  const [notes, setNotes] = useState([]);

  function generateUniqueId() {
    return uuidv4();
  }

  useEffect(() => {
    Axios.get(backEndServer + "/notes/getNotes", {
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setNotes(
            response.data.map((note) => ({
              id: note.id,
              title: note.title,
              content: note.content,
            }))
          );
          return response.json();
        } else if (response.status === 401) {
          console.log("redirected");
          return redirect("/login");
        } else {
          throw new Error("Failed to fetch notes");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function AddItem(props) {
    const note = {
      id: generateUniqueId(),
      title: props.note.title,
      content: props.note.content,
    };

    Axios.post(backEndServer + "/notes/createNote", note, {
      withCredentials: true,
    })
      .then(console.log("Information send"))
      .catch((err) => {
        console.error(err);
      });

    setNotes((prevItems) => {
      return [
        ...prevItems,
        {
          ...note,
          key: note.id,
        },
      ];
    });
  }

  function deleteNote(id, index) {
    const deletedNoteIndex = index;
    console.log(id);
    Axios.delete(backEndServer + `/notes/deleteNote/${id}`, {
      withCredentials: true,
    }).then((response) => {
      console.log(response);
    });

    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== deletedNoteIndex;
      });
    });
  }

  return (
    <div className="content">
      <Header />

      <div>
        <AddNote addItem={AddItem} />
      </div>

      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          noteTitle={note.title}
          noteContent={note.content}
          deleteItem={() => deleteNote(note.id, index)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default NoteMemo;
