export function counterstringWrapper(input: string) {
  const numericalInput = Number(input);

  if (!isNaN(numericalInput)) {
    if (numericalInput > 999_999) {
      return "Better try something smaller.";
    }

    if (numericalInput >= 0) {
      return counterstring(numericalInput);
    } else {
      return reverseCounterstring(Math.abs(numericalInput));
    }
  } else {
    return counterstring(input.length);
  }
}

export function counterstring(length: number) {
  if (length < 0) {
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

export function reverseCounterstring(length: number) {
  let counterString = "";

  while (length > 1) {
    const appendThis = "*" + length.toString();
    counterString = counterString + appendThis;
    length -= appendThis.length;
  }

  // At this point length is either 1 (the while-loop prepended 3*) or 0 ( the while-loop prepended 2*).
  // If length is 1, we need to prepend "*" to get the correct counterstring. If it's 0, we're done.
  if (length === 1) {
    counterString = counterString + "*";
  }

  return counterString;
}
