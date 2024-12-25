export function counterstring(length:number) {
    let stringList: string[] = [];
    stringList.push("")

    let latestTokenPosition;

    while (length > 0) {
        if (latestTokenPosition) {
            stringList.push(latestTokenPosition.toString())
            latestTokenPosition = null
        } else {
            stringList.push("*")
            latestTokenPosition = length
        }
        length -= 1
    }

    const counterString = stringList.reverse().join("")
    return counterString
}
