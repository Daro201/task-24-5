
const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('Wind and gate numbers are positive', () => {
        it('should return sum of notes, on normal slope', () => {
            const actual = calculateTotalPoints(93, 'normal', 90, [14, 16, 15, 15.5, 15.5], 4, 6);
    
            const expected = 122;
    
            assert.equal(actual, expected);
        });
    
        it('should return sum of notes, on large slope ', () => {
            const actual = calculateTotalPoints(130, 'large', 120, [14, 16, 15, 15.5, 15.5], 10, 5);

            const expected = 139;

            assert.equal(actual, expected);
        });
        it('on biggest hill should return sum of notes, distance, gate, wind', () => {
            const actual = calculateTotalPoints(210, "mammoth", 200, [14, 16, 15, 15.5, 15.5], 10, 5);

            const expected = 193;

      assert.equal(actual, expected);
    });
     
    });

    describe('Wind or gate factor has a negative number', () => {
        it('should return sum of notes, on normal slope', () => {
            const actual = calculateTotalPoints(93, 'normal', 90, [14, 16, 15, 15.5, 15.5], -10, 5);

            const expected = 107;

            assert.equal(actual, expected);
        });

        it('should return sum of notes, on large slope', () => {
            const actual = calculateTotalPoints(122.5, 'large', 120, [18, 18, 19, 15.5, 19], -1.3, -3.6);

            const expected = 114.6;

            assert.equal(actual, expected);
        });

      
           it('should return sum of notes, on mammoth slope', () => {
            const actual = calculateTotalPoints(210, 'mammoth', 200, [14, 16, 15, 15.5, 15.5], -10, 5);

            const expected = 173;

            assert.equal(actual, expected);
        });
    
    });

    describe('Wind or gate factor contains 0', () => {
        it('should return sum of notes, on normal slope', () => {
            const actual = calculateTotalPoints(93, 'normal', 90, [14, 16, 15, 15.5, 15.5], 0, -6);

            const expected = 106;

            assert.equal(actual, expected);
        });

        it('should return sum of notes, on large slope', () => {
            const actual = calculateTotalPoints(130, 'large', 120, [18, 18, 19, 15.5, 19], -1.4, 0);

            const expected = 131.6;

            assert.equal(actual, expected);
        });

      it('should return sum of notes, on mammoth slope', () => {
            const actual = calculateTotalPoints(210, 'mammoth', 200, [14, 16, 15, 15.5, 15.5], 0, 0);

            const expected = 178;

            assert.equal(actual, expected);
      });
     
    });
});