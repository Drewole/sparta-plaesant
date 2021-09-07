

const apiUrl = 'https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge'

//GET method implementation:
export default async function getData() {

    try {
        const response = await fetch(apiUrl, {
            mode: 'cors', // no-cors, *cors, same-origin
        })
        const data = await response.json()
        return data;
    }
    catch (err) {
        console.log(err)
    }
}
//POST method implementation:
export async function postData(data) {

    const response = await fetch(apiUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).catch((error) => {
        console.log(error)
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
