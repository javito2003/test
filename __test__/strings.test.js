describe('email validation', () => {
    
    test('this is an email', () => {
        const email = 'raul@gmail.com'

        expect(email).toMatch(/\S+@\S+\.\S+/)
    });
    test("this isn't an email", () => {
        const email = 'Raul.xd'

        expect(email).not.toMatch(/\S+@\S+\.\S+/)
    });

});