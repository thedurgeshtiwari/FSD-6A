import { useState } from "react";



export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleWrite = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    alert("Data written!");
  };

  const handleRead = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();
    setOutput(data.text);
  };

  return (
    <div>

    {/* NAVBAR */}
    <nav style={{
      backgroundColor: "#0f172a",
      color: "white",
      padding: "15px 30px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
      <img
        src="https://vitejs.dev/logo.svg"
        alt="logo"
        width="35"
      />
      <h2>FS Node App</h2>
    </nav>

    {/* MAIN CONTENT */}
    <div style={{ padding: "40px" }}>
      <h1>fs model for node</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="4"
        cols="40"
      />

      <br /><br />

      <button onClick={handleWrite}>fs create write</button>
      <button onClick={handleRead} style={{ marginLeft: "10px" }}>
        fs read
      </button>

      <h3>Output:</h3>
      <div>{output}</div>
    </div>

  </div>
  );
}
