export function createListAndReverseIt(length: number) {
  const token = "*";
  const tokenLength: number = token.length;

  const stringList: string[] = [];
  stringList.push("");

  let latestTokenPosition: number;
  let insertLength: number;

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

export function fullyOptimizedPlusTernary(length: number) {
  let counterString = "";

  while (length > 1) {
    const prependThis = length.toString() + "*";
    counterString = prependThis + counterString;
    length -= prependThis.length;
  }

  counterString =
    length === 1 ? (counterString = "*" + counterString) : counterString;

  return counterString;
}

export function fullyOptimizedPlus(length: number) {
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

export function fullyOptimizedConcat(length: number) {
  let counterString = "";

  while (length > 1) {
    const prependThis = length.toString().concat("*");
    counterString = prependThis.concat(counterString);
    length -= prependThis.length;
  }

  if (length === 1) {
    counterString = "*".concat(counterString);
  }

  return counterString;
}

export function fullyOptimizedTemplateString(length: number) {
  let counterString = "";

  while (length > 1) {
    const prependThis = `${length.toString()}*`;
    counterString = `${prependThis}${counterString}`;
    length -= prependThis.length;
  }

  if (length === 1) {
    counterString = `*${counterString}`;
  }

  return counterString;
}

export function recursive(length: number, counterString = "") {
  if (length > 1) {
    const prependThis = length.toString() + "*";
    counterString = prependThis + counterString;
    return recursive(length - prependThis.length, counterString);
  } else if (length === 1) {
    return "*" + counterString;
  } else if (length === 0) {
    return counterString;
  }
}
export function makeCS(length: number) {
  // TODO: does not work properly
  // taken from PerlClip, translated to TS
  // build the thing in reverse, then reverse the thing
  let pos: number = length;
  const pip = "*";

  const target = pos;
  let text = "";

  while (text.length + pos.toString().length + 1 <= target) {
    // length of pos + 1 is the length of the thing we'll add to the string
    // reversing a string in TypeScript is not trivial
    text = text + pip + pos.toString().split("").reverse().join("");
    pos = pos - (pos.toString().length + 1); // subtract the length of the thing we're adding
  }

  text = text + pip.repeat(target - text.length); // should be 1 or 0

  return text.split("").reverse().join("");
}

export function evilTester(count: number) {
  // taken from https://www.eviltester.com/blog/eviltester/chrome-extensions/2019-02-19-counterstring-snippets/
  // refactor adds a function to reverse the string
  // https://github.com/eviltester/counterstringjs/blob/master/snippets/counterstring.js
  // "The simplest, and most elegant way to create a CounterString seems to be the approach used in PerlClip." - https://www.eviltester.com/2018/05/counterstring-algorithms
  // this is JavaScript, I did change vars to lets
  // the substring is smart
  let counterString = "";

  while (count > 0) {
    let appendThis = "*" + count.toString().split("").reverse().join("");

    if (appendThis.length > count) {
      appendThis = appendThis.substring(0, count);
    }

    counterString = counterString + appendThis;

    count = count - appendThis.length;
  }

  return counterString.split("").reverse().join("");
}

export function evilTesterCreateListAndReverse(count: number) {
  const counterList = [];

  while (count > 0) {
    let appendThis = count.toString() + "*";

    if (appendThis.length > count) {
      appendThis = appendThis.substring(count, appendThis.length);
    }

    /*
    The if-statement above can be replaced with: appendThis = count === 1 ? "*" : appendThis
    
    Reason:
    appendThis.length can only be 2 or higher.
    count can only be 1 or higher.
    count will be higher than appendThis.length until right at the end of generating the counterstring.
    So appendThis.length will only be larger than count when count is 1.
    In that case we need to prepend our counterstring with "*". Else we can leave the counterstring as is.
    */

    counterList.push(appendThis);

    count = count - appendThis.length;
  }

  return counterList.reverse().join("");
}
