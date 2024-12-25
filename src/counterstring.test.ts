import { expect, test } from 'vitest'

import { counterstring } from './counterstring'

test.each([
    [0, ""],
    [1, "*"],
    [2, "2*"]
])("counterstring length %i", (length, expected) => {
    expect(counterstring(length)).toBe(expected);
})
