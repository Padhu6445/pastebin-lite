"use client";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [pasteUrl, setPasteUrl] = useState("");

  //  SUBMIT HANDLER (THIS IS WHAT YOU ASKED)
  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("Paste cannot be empty");
      return;
    }

    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    const result = await res.json();

    const url = `${window.location.origin}/p/${result.id}`;
    setPasteUrl(url);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Create Paste</h2>

      <textarea
        placeholder="Type your paste here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "400px", height: "150px" }}
      />

      <br /><br />
      

      <button onClick={handleSubmit}>
        Create Paste
      </button>

      {pasteUrl && (
        <>
          <br /><br />
          <strong>Paste URL:</strong>
          <br />
          <a href={pasteUrl} target="_blank">{pasteUrl}</a>
        </>
      )}
    </div>
  );
}