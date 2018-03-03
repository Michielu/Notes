export default getUsers;
var request = require('request');
var xhr = new XMLHttpRequest();
var local = `http://localhost:8000/`

/*async*/ function getUsers() {
    // return new Promise(resolve => {
    //     var command = `${local}` + 'u/all';
    //     console.log(command);
    //     request(command, function (error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             console.log("body: ", body);
    //             resolve(body);
    //         }
    //     })
    // });

    return fetch('http://localhost:8000/u/a', {
        method: 'get', /*mode: "cors"*/
    }).then((res) => {
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res.status);
            return;
        }

        // Examine the text in the response
        return res.json().then((data) => {
            console.log("In join", data);
            return data;
        });
    }).catch((err) => {
        console.log("Err :", err);
    });
}
