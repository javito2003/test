const getData = require('../src/promise')
const API = 'https://jsonplaceholder.typicode.com/users/1'

 it('should return user1 data', async() => {
     const res = await getData(API)

     expect(res.data.username).toBe('Bret')
     expect(res).not.toBeNull()
 });

it('should wrong the test because the url is invalid', async() => {
    expect.assertions(1)
    try {
        await getData('asfasfasfsa')
    } catch (error) {
        expect(error).not.toBeNull()
    }
});