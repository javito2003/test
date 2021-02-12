const fecthApi = require('../src/callback')

it('Should return users info', done => {
    const API = 'https://jsonplaceholder.typicode.com/users/1'

    function callback(err, data) {
        try {
            expect(data).not.toBeNull()

            expect(data.username).toBe('Bret')

            done()
        } catch (error) {
            done(error)
        }
    }
    
    fecthApi(API,callback)
});

it('should ull url', () => {
    const API = 'fsafsafasfas'
    
    function callback(err) {
        expect(err)
        done()
    }
    fecthApi(API,callback)
});