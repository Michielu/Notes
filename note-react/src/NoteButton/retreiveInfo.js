export default getUsers;
var request = require('request');

async function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`[{
                username: kerno,
            },{
                username: mich,
            }]`);
        }, 2000);
    });;
}