"use strict";

function runTask8() {
  const lines = [];
  const message = "global";
  lines.push(`global message: ${message}`);

  function outer() {
    const message = "function";
    lines.push(`inside outer(), message: ${message}`);
    if (true) {
      const message = "block";
      lines.push(`inside if block, message: ${message}`);
    }
    lines.push(`after if block (back to function scope), message: ${message}`);
  }
  outer();
  lines.push(`global message after outer(): ${message}`);

  {
    var varVal = "var value";
    let letVal = "let value";
    const constVal = "const value";
    lines.push(
      `inside block: varVal=${varVal}, letVal=${letVal}, constVal=${constVal}`,
    );
  }
  lines.push(`outside block, varVal (var leaks out): ${varVal}`);
  try {
    lines.push(`outside block, letVal: ${letVal}`);
  } catch (e) {
    lines.push(
      `outside block, letVal -> ${e.constructor.name}: not accessible`,
    );
  }
  try {
    lines.push(`outside block, constVal: ${constVal}`);
  } catch (e) {
    lines.push(
      `outside block, constVal -> ${e.constructor.name}: not accessible`,
    );
  }

  const notes = [
    "<strong>Global scope:</strong> declared outside any function/block, accessible everywhere in the file.",
    "<strong>Function scope:</strong> var and any variable declared inside a function is only visible inside that function.",
    "<strong>Block scope:</strong> let/const declared inside { } (if, for, etc.) only exist inside that block.",
    "<strong>var vs let vs const:</strong> var is function-scoped and leaks out of blocks; let/const are block-scoped; const additionally cannot be reassigned.",
  ];

  render("output-8", "explain-8", lines, notes);
}
