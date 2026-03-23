import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  // derived values
  const trimmed = text.trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;
  const reversed = text.split("").reverse().join("");

  // palindrome logic (ignore spaces + case)
  const clean = text.toLowerCase().replace(/\s/g, "");
  const isPalindrome = clean && clean === clean.split("").reverse().join("");

  return (
    <div style={{ padding: "20px" }}>

      {/* INPUT */}
      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* CLEAR BUTTON */}
      <button disabled={!text} onClick={() => setText("")}>
        Clear
      </button>

      {/* TEXT DISPLAY */}
      <h1>{text || "Please enter text"}</h1>

      {/* CONDITIONAL MESSAGE */}
      <p>
        {text.length === 0
          ? ""
          : text.length < 5
          ? "Too short"
          : "Looks good"}
      </p>

      {/* OPERATIONS */}
      <h3>Uppercase: {text.toUpperCase()}</h3>
      <h3>Lowercase: {text.toLowerCase()}</h3>
      <h3>Length: {text.length}</h3>
      <h3>Word Count: {wordCount}</h3>
      <h3>Reverse: {reversed}</h3>

      {/* PALINDROME */}
      <h3>
        Palindrome:{" "}
        {clean
          ? isPalindrome
            ? "Yes"
            : "No"
          : ""}
      </h3>

    </div>
  );
}