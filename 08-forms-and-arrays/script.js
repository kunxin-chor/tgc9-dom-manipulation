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
    console.log(filtered);

    // next, we have to calculate the total
    // when we do reducing, we need the state variable to accumulate the results
    // let total = 0;
    // for (let service of filtered) {
    //     if (service == 'drink') {
    //         total += 5;
    //     }
    //     if (service == 'printer') {
    //         total += 15;
    //     }
    //     if (service == "spa") {
    //         total += 30;
    //     }
    //     if (service == "buffet") {
    //         total += 25;
    //     }
    // }

    let total = filtered.reduce(function(totalSoFar, currentValue){
        if (currentValue == "drink") {
            return totalSoFar + 5;
        }
        if (currentValue == "printer") {
            return totalSoFar + 15;
        }
        if (currentValue == "spa") {
            return totalSoFar + 30;
        }
        if (currentValue == "buffet") {
            return totalSoFar + 25;
        }
    }, 0)
    console.log("Total=", total);
})