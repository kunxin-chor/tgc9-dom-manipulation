let costTable = {
    'drink': 5,
    printer:15,
    spa:30,
    buffet:25,
    'high-speed-internet':5
}

let servicesTable = {
    'drink': {
        'name':'Free-flow drinks',
        'cost': 5
    },
    'printer':{
        'name':'100x black and white printer copies',
        'cost':15
    },
    'buffet':{
        'name':'Access to lunch buffet (discounted)',
        'cost':25
    },
    'high-speed-internet':{
        'name':'100mbps Internet access',
        'cost':10
    },
    'sleeping-pod': {
        'name': 'Pokemon sleeping pod',
        'cost': 15
    },
    'spa': {
        'name': 'Spa access discount',
        'cost': 50
    }
}

let servicesDiv = document.querySelector('#service-list');

// if iterating through an object, we will use
// for (x in y) where x will be the key and y is the object
for (let eachService in servicesTable) {
    console.log(eachService);
    let newServiceElement = document.createElement('div');
    newServiceElement.className = "form-check";

    let serviceInfo = servicesTable[eachService];
    console.log(serviceInfo);

    newServiceElement.innerHTML = `<input class="form-check-input services" type="checkbox" id="gridCheck1" value="${eachService}">
                <label class="form-check-label" for="gridCheck1">
                    ${serviceInfo.name} ($${serviceInfo.cost})
                </label>`

    // append the <div> that will display all the services
    servicesDiv.appendChild(newServiceElement);
}

document.querySelector('#show-btn').addEventListener('click', function(){
    let serviceCheckboxes = document.querySelectorAll(".services");
    let keep = [];
    for (let s of serviceCheckboxes) {
        if(s.checked) {
            keep.push(s.value);
        }
    }
    console.log(keep);
})

document.querySelector("#show-btn-using-fp").addEventListener('click', function(){
    // convert the NodeList that we get from querySelectorAll into a normal array
    // so that we can use filter on it
     let serviceCheckboxes = Array.from(document.querySelectorAll(".services"));

     // use the filter
     let filtered = serviceCheckboxes.filter(function(checkbox){
        console.log(checkbox.value);
        if (checkbox.checked) {
             // keep that this checkbox in the results
             return true;
         } else {
             return false;
         }
     })
     
     console.log(filtered);
     
    //  let selectedValues = filtered.map(function(checkbox){
    //      return checkbox.value;
    //  })

    // let selectedValues = filtered.map( checkbox =>  checkbox.value)

    // TRADITIONAL METHOD
    let selectedValues = [];
    for (let eachCheckbox of filtered) {
        selectedValues.push(eachCheckbox.value);
    }

     console.log(selectedValues);
})

document.querySelector('#show-total-btn').addEventListener('click', function(){
    let checkboxes = document.querySelectorAll('.services');

    // first - filter out checkboxes to keep only those has been selected
    // the variable `filtered` is a state variable -- we use an array
    let filtered = [];
    for (let c of checkboxes) {
        if(c.checked) {
            filtered.push(c.value);
        }
    }
    console.log("Selected checkboxes' values=", filtered);

    // next, we have to calculate the total
    // when we do reducing, we need the state variable to accumulate the results
    let total = 0;
    // example:
    // filtered is ['printer', 'buffet']
    for (let service of filtered) {
        total += servicesTable[service].cost;
        // => total += servicesTable['printer'].cost
        // => total += {
        //     'name':'100x black and white printer copies',
        //     'cost':15
        // }.cost
        // => total += 15
     
    }
      console.log("Total=", total);

    
  
})