export default getUsers;


async function getUsers() {
    console.log("b");
    let users = await makeCall();
    console.log("after await");
    return users;
}

function makeCall() {
    return "return users";
}