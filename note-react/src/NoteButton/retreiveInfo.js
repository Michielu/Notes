export default getUsers;
var xhr = new XMLHttpRequest();
var local = `http://localhost:8000/`

async function getUsers() {
    try {
        const res = await fetch('http://localhost:8000/u/a', { method: 'get', /*mode: "cors"*/ });
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res.status);
            return;
        }
        return await convertJson(res);
    }
    catch (err) {
        console.log("Failed to get users: ", err);
    }
}

async function convertJson(res) {
    const data = await res.json();
    return data;
}