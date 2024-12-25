import { expect, test } from 'vitest'

import { counterstring } from './counterstring'

test("counterstring length 0", () => {
    const result = counterstring(0)
    expect(result).toBe("")
})