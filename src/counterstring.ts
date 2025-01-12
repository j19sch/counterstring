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

  if (length === 1) {
    counterString = "*" + counterString;
  }

  return counterString;
}
