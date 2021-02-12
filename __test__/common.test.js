test('2 + 2 = 4', () => {
    expect(2+2).toBe(4)
})

test('object validation', () => {
    const data = { username: 'Peron' }
    const data2 = { username: 'Evita' }
    
    expect(data).toEqual({ username: 'Peron' })
    expect(data).not.toEqual(data2)
});