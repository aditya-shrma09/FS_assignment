import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ✅ FETCH NOTES
  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ✅ ADD NOTE
  const addNote = async () => {
    await axios.post("http://localhost:5000/notes", {
      title,
      content,
    });

    setTitle("");
    setContent("");

    fetchNotes(); // refresh notes
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sticky Notes App 📝</h1>

      {/* Add Note */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={addNote}>Add Note</button>

      <hr />

      {/* Notes Dashboard */}
      <h2>Your Notes</h2>

      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            border: "1px solid black",
            padding: 10,
            margin: 10,
            width: 250,
          }}
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;