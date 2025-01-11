export function reverseList(length: number) {
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

export function templateString(length: number) {
  const token = "*";
  const tokenLength: number = token.length;

  let result = "";

  let latestTokenPosition;
  let insertLength;

  while (length > 0) {
    if (latestTokenPosition) {
      result = `${latestTokenPosition.toString()}${result}`;
      insertLength = latestTokenPosition.toString().length;
      latestTokenPosition = null;
    } else {
      result = `${token}${result}`;
      latestTokenPosition = length;
      insertLength = tokenLength;
    }
    length -= insertLength;
  }

  return result;
}

export function concatenateString(length: number) {
  const token = "*";
  const tokenLength: number = token.length;

  let result = "";

  let latestTokenPosition;
  let insertLength;

  while (length > 0) {
    if (latestTokenPosition) {
      result = latestTokenPosition.toString().concat(result);
      insertLength = latestTokenPosition.toString().length;
      latestTokenPosition = null;
    } else {
      result = token.concat(result);
      latestTokenPosition = length;
      insertLength = tokenLength;
    }
    length -= insertLength;
  }

  return result;
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
