const getData = require('../src/promise')
const API = 'https://jsonplaceholder.typicode.com/users/1'

it('Should return data of user1', () => {
    return getData(API)
            .then((res) => {
            expect(res.data.username).toBe('Bret')


            }).catch((err) => {
        
    });
});

it('Should because invalid url', () => {
    expect.assertions(1)
    return getData('dsagfd').catch(err => {
        expect(err).not.toBeNull()
    })
});