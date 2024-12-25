export function counterstring(length: number) {
  if (typeof length !== "number") {
    // TODO: arguably not needed because TypeScript, but eslint does not report passing a string
    throw new Error("Length should be a number");
  } else if (length < 0) {
    throw new Error("No negative length");
  } else if (length > 1000) {
    throw new Error("Max length is 1000");
  }

  const token = "*";
  const tokenLength: number = token.length;

  const stringList: string[] = [];
  stringList.push("");

  let latestTokenPosition;
  let insertLength;

  while (length > 0) {
    if (latestTokenPosition) {
      stringList.push(latestTokenPosition.toString());
      insertLength = latestTokenPosition.toString().length;
      latestTokenPosition = null;
    } else {
      stringList.push(token);
      latestTokenPosition = length;
      insertLength = tokenLength;
    }
    length -= insertLength;
  }

  const counterString = stringList.reverse().join("");
  return counterString;
}
