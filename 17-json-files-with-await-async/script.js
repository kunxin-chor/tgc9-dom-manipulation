// by putting the word `async` in of the word function, the function becomes an 'async function'
async function main() {
    // PAUSE UNTIL axios.get GIVES US BACK THE DATA
    let response = await axios.get('data.json');
    console.log(response.data)
}

async function waitForTwoAxios() {
    let response = await axios.get('data.json');
    let response2 = await axios.get('data2.json');
    // by putting two await one line after another, it becomes sequenital (synchronized)
    console.log(response.data, response2.data)
}

async function waitForTwoAxiosAsync() {
    let request = axios.get('data.json');
    let request2 = axios.get('data2.json');
    // by this line, the browser is fetching both files in the background

    let response = await request;
    let response2 = await request2;

    console.log(response.data);
    console.log(response2.data);

}

// main();
// waitForTwoAxios();
waitForTwoAxiosAsync();