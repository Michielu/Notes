export default getUsers;
var request = require('request');
var xhr = new XMLHttpRequest();
var local = `http://localhost:8000/`

async function getUsers() {
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

    //XMLHttpRequest
    // console.log("1");
    // xhr.open('GET', 'localhost:8000/u/a');
    // console.log('OPENED', xhr.status);
    // xhr.onprogress = function () {
    //     console.log('LOADING', xhr.status);
    // };
    // xhr.onload = () => {
    //     console.log("DONE", xhr.status);
    //     if (xhr.readyState == 4 && xhr.status === 200) {
    //         console.log('User\'s name is ' + xhr.responseText);
    //         return (xhr.responseText);
    //     }
    //     else {
    //         console.log('Request failed.  Returned status of ' + xhr.status + xhr.readyState);
    //     }
    // }
    // console.log("3");
    // xhr.send();

    fetch('http://localhost:8000/u/a', {
        method: 'get',
        //mode: "cors"
    }).then((res) => {
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res.status);
            return;
        }

        // Examine the text in the response
        res.json().then((data) => {
            console.log(data);
            return ("asdf");
        })

    }).catch((err) => {
        console.log("Err :", err);
    })
}