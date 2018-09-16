const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal', () => {
		it('is further than k-point', () => {
            const actual = calculateDistancePoints(103, 'normal', 98);
    
            const expected = 70;
    
            assert.equal(actual, expected);
        });
		
		it('is closer than k-point', () => {
            const actual = calculateDistancePoints(90, 'normal', 98);

            const expected = 44;

            assert.equal(actual, expected);
        });

        it('is equal k-point', () => {
            const actual = calculateDistancePoints(98, 'normal', 98);

            const expected = 60;

            assert.equal(actual, expected);
        });
    });

    describe('large', () => {
        it('is further than k-point', () => {
            const actual = calculateDistancePoints(133, 'large', 120);

            const expected = 83.4;

            assert.equal(actual, expected);
        });

        it('is closer than k-point', () => {
            const actual = calculateDistancePoints(116, 'large', 120);

            const expected = 52.8;

            assert.equal(actual, expected);
        });

        it('is equal k-point', () => {
            const actual = calculateDistancePoints(120, 'large', 120);

            const expected = 60;

            assert.equal(actual, expected);
        });
    });

    describe('mammoth', () => {
        it('is further than k-point', () => {
            const actual = calculateDistancePoints(223, 'mammoth', 200);

            const expected = 147.6;

            assert.equal(actual, expected);
        });

        it('is closer than k-point', () => {
            const actual = calculateDistancePoints(196, 'mammoth', 200);

            const expected = 115.2;

            assert.equal(actual, expected);
        });

        it('is equal k-point', () => {
            const actual = calculateDistancePoints(200, 'mammoth', 200);

            const expected = 120;

            assert.equal(actual, expected);
        });
    });
	describe('wrong input', () => {
		it('is wrong name', () => {
            const actual = calculateDistancePoints(215, 'mamoth', 200);

            const expected = 'the data are incorrect, please try again';

            assert.equal(actual, expected);
        });
    });
});