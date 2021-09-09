

const apiUrl = 'https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge'

//GET method implementation:
export default async function getData() {

    try {
        const response = await fetch(apiUrl, {
            mode: 'cors', // no-cors, *cors, same-origin
        })
        const data = await response.json()
        console.log("Fetched")
        return data;
    }
    catch (err) {
        console.log(err)
    }
}
//POST method implementation:
export async function postData(data) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        console.log(response.json, "Post Response")
        //if response good then return true
        return response.json()
    }
    catch (err) {
        console.log(err)
    }
}
