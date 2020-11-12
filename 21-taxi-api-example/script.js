async function getTaxiCoordinates() {
    let url = 'https://api.data.gov.sg/v1/transport/taxi-availability';
    let response = await axios.get(url);
    return response.data;
}

async function main() {
    let taxis = await getTaxiCoordinates();
    console.log(taxis);
    console.log(taxis.features[0].geometry.coordinates.length);
}

setInterval(function(){
    main();
}, 30000)
