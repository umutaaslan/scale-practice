import { jest } from '@jest/globals';
import {sum} from "./majorScalesPracticerFunctionality.js";

test("sum", () => {
    expect(sum(1,2)).toBe(3);
})