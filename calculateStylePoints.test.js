const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should not rejected the same notes', () => {
        const actual = calculateStylePoints([18, 17, 18, 18, 20]);

        const expected = 54;

        assert.equal(actual, expected);
    });

    it('should return only one of two equal notes', () => {
        const actual = calculateStylePoints([17, 17, 18.5, 19.5, 20]);

        const expected = 55;

        assert.equal(actual, expected);
    });

    it('should not return more than 20', () => {
        const actual = calculateStylePoints([21, 17.5, 18.5, 19.5, 21]);

        const expected = 58;

        assert.equal(actual, expected);
    });

    it('should round number to 0.5', () => {
        const actual = calculateStylePoints([17, 18.6, 19.3, 19, 20]);

        const expected = 57;

        assert.equal(actual, expected);
    });

    it('should reject numbers that are at the end of sepcturm', () => {
        const actual = calculateStylePoints([15, 17.5, 19.5, 19, 20]);

        const expected = 56;

        assert.equal(actual, expected);
    });

});