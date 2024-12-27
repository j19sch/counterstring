export function counterstring(length: number) {
  if (typeof length !== "number") {
    // TODO: arguably not needed because TypeScript, but eslint does not report passing a string
    throw new Error("Length should be a number");
  } else if (length < 0) {
    throw new Error("No negative length");
  }

  const token = "*";
  const tokenLength: number = token.length;

  let result = "";

  let latestTokenPosition;
  let insertLength;

  while (length > 0) {
    if (latestTokenPosition) {
      result = latestTokenPosition.toString() + result;
      insertLength = latestTokenPosition.toString().length;
      latestTokenPosition = null;
    } else {
      result = token + result;
      latestTokenPosition = length;
      insertLength = tokenLength;
    }
    length -= insertLength;
  }

  return result;
}
