"use client";

import React, { useState } from "react";

const digits = ["0","1","2","3","4","5","6","7","8","9"];
const ops = ["+","-","*","/"];

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const append = (v: string) => {
    setInput((p) => p + v);
  };

  const backspace = () => {
    setInput((p) => p.slice(0, -1));
  };

  const clear = () => {
    setInput("");
    setResult("0");
  };

  const evaluate = () => {
    try {
      if (!input.trim()) return;
      const out = Function(`"use strict"; return (${input});`)();
      setResult(String(out));
    } catch {
      setResult("Error");
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <div data-testid="displayscreen">
        <h2>{result}</h2>
        <h3>{input || result}</h3>

      </div>

      <div>
        {digits.map((d) => (
          <button key={d} type="button" onClick={() => append(d)}>
            {d}
          </button>
        ))}

        {ops.map((op) => (
          <button key={op} type="button" onClick={() => append(op)}>
            {op}
          </button>
        ))}

        <button type="button" onClick={() => append(".")}>.</button>
        <button type="button" onClick={clear}>clear</button>
        <button type="button" onClick={backspace}>BackSpace</button>
        <button type="button" onClick={evaluate}>=</button>
      </div>
    </main>
  );
}
