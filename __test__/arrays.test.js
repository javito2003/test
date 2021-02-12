const { carList,vehiclesList } = require('../src/arrays')

describe('Check carList', () => {
    test("Array doesn't be null", () => {
        expect(carList).not.toBeNull()
    });

    test('Check if have a HONDA', () => {
        expect(carList()).toContain('HONDA')
    });

    test('Check length of array', () => {
        expect(carList()).toHaveLength(4)
    });
});

describe('Check vehicles than exist', () => {
    test("Array doesn't null", () => {
        expect(vehiclesList()).not.toBeNull()
    });
});