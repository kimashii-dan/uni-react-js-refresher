"use strict";

function render(outputId, explainId, lines, notes) {
  document.getElementById(outputId).textContent = lines.join("\n");
  document.getElementById(explainId).innerHTML = notes
    .map((n) => `<p>${n}</p>`)
    .join("");
}
