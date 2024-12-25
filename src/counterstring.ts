export function counterstring(length:number) {
    const token:string = "*"
    const tokenLength:number = token.length

    let stringList: string[] = [];
    stringList.push("")

    let latestTokenPosition;
    let insertLength;

    while (length > 0) {
        if (latestTokenPosition) {
            stringList.push(latestTokenPosition.toString())
            insertLength = latestTokenPosition.toString().length
            latestTokenPosition = null
        } else {
            stringList.push(token)
            latestTokenPosition = length
            insertLength = tokenLength
        }
        length -= insertLength
    }

    const counterString = stringList.reverse().join("")
    return counterString
}
