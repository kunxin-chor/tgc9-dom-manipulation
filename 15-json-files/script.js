setTimeout(function(){
    console.log("Time's up")
}, 3000);  // <-- three second later, the function will called

// RELATIVE FILEPATH
// Assume the starting point to be in the same
// directory as script.js
axios.get('data.json').then(function(response){
    // when axios has finished loading the data, axios will then call this function
    console.log('data.json is loaded');
    console.log(response.data);
}); // <-- axios will not wait for the file to load in in
// JavaScript will just go on next line without waiting

axios.get('data2.json').then(function(response){
    console.log("data2.json is loaded")
    console.log(response.data);
})

axios.get('products.json').then(function(response){
    let products = response.data;
    let productListElement = document.querySelector('#product-list');
    for (let p of products) {
        let productElement = document.createElement('li');
        productElement.innerHTML = `${p.name} (${p.sku}) - ${p.cost}`;
        productListElement.appendChild(productElement);
    }
})