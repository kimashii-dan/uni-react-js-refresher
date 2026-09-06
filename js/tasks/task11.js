"use strict";

function runTask11() {
  const users = [
    { name: "Anna", address: { city: "Almaty" } },
    { name: "John" },
  ];

  const lines = [];

  try {
    lines.push(`users[1].address.city: ${users[1].address.city}`);
  } catch (e) {
    lines.push(
      `users[1].address.city -> ${e.constructor.name}: cannot read city of undefined address`,
    );
  }

  lines.push(`users[1].address?.city: ${users[1].address?.city}`);
  lines.push(
    `users[1].address?.city ?? "City not specified": ${users[1].address?.city ?? "City not specified"}`,
  );
  lines.push(
    `users[0].address?.city ?? "City not specified": ${users[0].address?.city ?? "City not specified"}`,
  );

  const testValues = [0, "", false, null, undefined];
  lines.push("Comparing || and ?? against fallback 'fallback':");
  testValues.forEach((value) => {
    lines.push(
      `  value=${JSON.stringify(value)} -> || : ${value || "fallback"}, ?? : ${value ?? "fallback"}`,
    );
  });

  const notes = [
    '<strong>Insight:</strong> || falls back for any falsy value (0, "", false, null, undefined), while ?? only falls back for null or undefined - so 0, "" and false survive with ??.',
  ];

  render("output-11", "explain-11", lines, notes);
}
