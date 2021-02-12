const suma = require('../src/sum')

describe('Pruebas para suma', () => {
    test('1 + 2 es 3', () => {
        expect(suma(1,2)).toBe(3)
    })  
    it('should return 3 with 1 + 2', () => {
        expect(suma(1,2)).toBe(3)
    });

    test('1 + (-2) is -1', () => {
        expect(suma(1,-2)).toBe(-1)
    });
    test('-1 + (-2) is -3', () => {
        expect(suma(-1,-2)).toBe(-3)
    });
})


















// test('asignacion de objeto', () => {
//     const data = { uno: 1 }
//     data['dos'] = 2
//     expect(data).toEqual({uno:1,dos:2})
// })

// test('Agregando un numero positivo que no sea 0', () => {
//     for (let a = 1; a < 10; a++){
//         for (let b = 0; b < 10; b++) {
//             expect(a+b).not.toBe(0)
            
//         }
//     }
// })

// test('null', () => {
//     const n = null
//     expect(n).toBeNull()
//     expect(n).toBeDefined()
//     expect(n).not.toBeUndefined()
//     expect(n).not.toBeTruthy()
//     expect(n).toBeFalsy()
// })

// test('cero', () => {
//     const z = 0
//     expect(z).not.toBeNull()
//     expect(z).toBeDefined()
//     expect(z).not.toBeUndefined()
//     expect(z).not.toBeTruthy()
//     expect(z).toBeFalsy
// })

// test('dos mas dos', () => {
//     const value = 2 + 2
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);


//       // toBe y toEqual son equivalentes para números
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });