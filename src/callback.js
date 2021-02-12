var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function fecthApi(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function (event) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                callback(null,JSON.parse(req.responseText))
            } else {
                const error = new Error(`Invalid URL ${url}`)
                return callback(error,null)
            }
        }
    }

    req.send()
}

module.exports = fecthApi