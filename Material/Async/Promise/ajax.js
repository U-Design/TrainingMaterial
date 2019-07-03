let mynewAjax = new Promise(function (resolve, reject) {
    function makeXHRRequest(method, url, done) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function (data) {
            resolve(data)
            doYourOperation(dd, function name(params) {

            })
        };
        xhr.onerror = function (err) { reject(err) };
        xhr.send();
    }
    makeXHRRequest();
});

mynewAjax
    .then(function (data) {

    })
    .then(function (data) {

    })
    .then(function (data) {

    })
    .then(function (data) {

    })
    .catch(function (err) {

    })