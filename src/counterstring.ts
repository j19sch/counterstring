export function counterstring(length: number) {
  if (typeof length !== "number") {
    // TODO: arguably not needed because TypeScript, but eslint does not report passing a string
    throw new Error("Length should be a number");
  } else if (length < 0) {
    throw new Error("No negative length");
  }

  let counterString = "";

  while (length > 1) {
    const prependThis = length.toString() + "*";
    counterString = prependThis + counterString;
    length -= prependThis.length;
  }

  // At this point length is either 1 (the while-loop prepended 3*) or 0 ( the while-loop prepended 2*).
  // If length is 1, we need to prepend "*" to get the correct counterstring. If it's 0, we're done.
  if (length === 1) {
    counterString = "*" + counterString;
  }

  return counterString;
}
