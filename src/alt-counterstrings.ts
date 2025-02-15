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

export function evilTester(count: number) {
  // copied from https://www.eviltester.com/blog/eviltester/chrome-extensions/2019-02-19-counterstring-snippets/#counterstring-generation-function
  // I changed the vars to lets, because ESlint.
  // "The simplest, and most elegant way to create a CounterString seems to be the approach used in PerlClip." - https://www.eviltester.com/2018/05/counterstring-algorithms
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

export function evilTesterCreateListAndReverseIt(count: number) {
  // combined the evilTester() solution with createListAndReverseIt()
  const counterList = [];

  while (count > 0) {
    let appendThis = count.toString() + "*";

    if (appendThis.length > count) {
      appendThis = appendThis.substring(count, appendThis.length);
    }

    /*
    The if-statement above can be replaced with: appendThis = count === 1 ? "*" : appendThis
    Not doing that, to be able to compare performance with the evilTester solution.
    
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

export function perClipInTS(length: number) {
  // copied from PerlClip, https://www.satisfice.com/download/perlclip
  // I did the translation to TS and added the comments
  let pos: number = length;
  const pip = "*";

  const target = pos;
  let text = "";

  // pos.toString().length + 1 is the length of the thing we want to add

  while (text.length + pos.toString().length + 1 <= target) {
    text = text + pip + pos.toString().split("").reverse().join(""); // Perl has reverse().
    pos = pos - (pos.toString().length + 1);
  }

  text = text + pip.repeat(target - text.length); // target - text.length should be 1 or 0

  return text.split("").reverse().join("");
}

export function recursiveFunction(length: number, counterString = "") {
  if (length > 1) {
    const prependThis = length.toString() + "*";
    counterString = prependThis + counterString;
    return recursiveFunction(length - prependThis.length, counterString);
  } else if (length === 1) {
    return "*" + counterString;
  } else if (length === 0) {
    return counterString;
  }
}

export function whileAndIfButSeparate(length: number) {
  let counterString = "";

  let latestTokenPosition: number = null;

  while (length > 0) {
    if (latestTokenPosition === null) {
      counterString = "*" + counterString;
      latestTokenPosition = length;
      length = length - 1;
    } else {
      counterString = latestTokenPosition.toString() + counterString;
      length = length - latestTokenPosition.toString().length;
      latestTokenPosition = null;
    }
  }
  return counterString;
}

export function whileAndIfWithPlus(length: number) {
  let counterString = "";

  while (length > 1) {
    const prependThis = length.toString() + "*";
    counterString = prependThis + counterString;
    length -= prependThis.length;
  }

  // replacing with ternary operator does not make a difference
  if (length === 1) {
    counterString = "*" + counterString;
  }

  return counterString;
}

export function whileAndIfWithConcat(length: number) {
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

export function whileAndIfWithTemplateString(length: number) {
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
