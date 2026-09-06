"use strict";

function runTask5() {
  let original = { name: "Alice", score: 10 };
  let copy = original;
  copy.score = 99;
  const afterAssignmentCopy = { original: { ...original }, copy: { ...copy } };

  original = { name: "Alice", score: 10 };
  const spreadCopy = { ...original };
  spreadCopy.score = 50;

  const user = { name: "Alice", address: { city: "Almaty" } };
  const shallowCopy = { ...user };
  shallowCopy.address.city = "Astana";
  const afterShallow = {
    original: JSON.stringify(user),
    shallowCopy: JSON.stringify(shallowCopy),
  };

  const user2 = { name: "Alice", address: { city: "Almaty" } };
  const deepCopy = { ...user2, address: { ...user2.address } };
  deepCopy.address.city = "Astana";

  const lines = [
    `copy = original, then copy.score = 99:`,
    `  original: ${JSON.stringify(afterAssignmentCopy.original)}, copy: ${JSON.stringify(afterAssignmentCopy.copy)}`,
    `spread copy, then spreadCopy.score = 50:`,
    `  original.score: ${original.score}, spreadCopy.score: ${spreadCopy.score}`,
    `shallow spread of nested object, then shallowCopy.address.city = "Astana":`,
    `  original: ${afterShallow.original}, shallowCopy: ${afterShallow.shallowCopy}`,
    `correct nested copy ({...user2, address: {...user2.address}}), then deepCopy.address.city = "Astana":`,
    `  original: ${JSON.stringify(user2)}, deepCopy: ${JSON.stringify(deepCopy)}`,
  ];

  const notes = [
    "<strong>Why copy = original mutates both:</strong> objects are assigned/passed by reference, so copy and original point to the same object in memory.",
    "<strong>Why the shallow spread still leaked:</strong> {...user} only copies top-level keys; the nested address object reference is copied as-is, so both objects still share the same inner object.",
    "<strong>Fix:</strong> spread the nested object too ({...user, address: {...user.address}}), or use structuredClone for deeper structures.",
  ];

  render("output-5", "explain-5", lines, notes);
}
