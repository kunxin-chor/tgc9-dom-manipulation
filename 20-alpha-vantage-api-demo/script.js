let api_key = "RV76S9OYG1OF0XEU";

async function getStockInfo(symbol, api_key) {
    // let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=RV76S9OYG1OF0XEU`
    let url = "https://www.alphavantage.co/query";
    let response = await axios.get(url, {
        params: {
            function: 'TIME_SERIES_DAILY',
            'symbol': symbol,
            'apikey': api_key

        }
    });
    return response.data;
}

async function processGetSymbol() {
    let desiredSymbol = document.querySelector('#search-terms').value;
    let stockData = await getStockInfo(desiredSymbol, api_key);
    let series = stockData["Time Series (Daily)"];

    let output = document.querySelector('#output');

    let header = document.querySelector('#symbol-name');
    header.innerHTML = stockData["Meta Data"]["2. Symbol"];

    for(let date in series) {
        console.log(date, ' closing at ', series[date]['4. close']);
        let closeAmount = series[date]['4. close'];
        let liElement = document.createElement('li');
        liElement.innerHTML = `${date} closes at ${closeAmount}`;
        output.appendChild(liElement);
    }
}

document.querySelector('#search-btn').addEventListener('click',processGetSymbol );