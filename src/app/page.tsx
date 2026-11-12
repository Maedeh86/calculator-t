"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";
import BackButton from "../components/BackButton";

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

  const handleKeyboardClick = (value: string) => {
  if (value === "=") {
    evaluate();
  } else if (value === "clear") {
  clear();
  } else {
    append(value);
  }
};

  

return (

  <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8">
   <div className="w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-900 p-6 text-white shadow-2xl">
      <Header pageTitle="Calculator" />

      <Display input={input} result={result} />

      <Keyboard onClick={handleKeyboardClick} />

      <BackButton onBackspace={backspace} />
    </div>
  </main>
);

       
}
