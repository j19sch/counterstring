export function counterstring(length:number) {
    let stringList: string[] = [];
    stringList.push("")

    while (length > 0) {
        stringList.push("*")
        length =- 1
    }

    // TODO: or unshift(), so no reverse()?
    const counterString = stringList.reverse().join("")
    return counterString
}
