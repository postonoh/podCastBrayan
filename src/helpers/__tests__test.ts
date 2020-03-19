import { truncate } from "./text";


describe('Text helpers', () => {
    describe('truncate', () => {
        it('should truncate if text is longer than 7', () => {
            const expected = 'hello woo..';

            expect(truncate('hello world', 7, '...')).toBe(expected)
        })
    })
});