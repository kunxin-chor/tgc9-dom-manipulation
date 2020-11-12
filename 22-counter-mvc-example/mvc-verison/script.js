let counterModel = {
    count: 0,
    max: 20,
    min: -20
}

// view 
// counterID is a string that targets the counter element (for example, '#counter')
function render(counterID, model) {
    let counterElement = document.querySelector(counterID);
    counterElement.innerHTML = model.count;
    if (model.count < 0) {
        counterElement.style.backgroundColor = 'red';
    } else {
        counterElement.style.backgroundColor = 'green';
    }
    if (model.count >= model.max) {
        document.querySelector("#increment").disabled = true;
    } else {
        document.querySelector("#increment").disabled = false;
    }
    if (model.count <= model.min) {
        document.querySelector("#decrement").disabled = true;
    } else {
        document.querySelector("#decrement").disabled = false;
    }
    
}
// runController("#counter", model);
function runController(counterID, model) {

    render(counterID, model);

    document.querySelector('#increment').addEventListener('click', function(){
        model.count = model.count + 1;
        // model.count++;
        render(counterID, model);
    })

    document.querySelector('#decrement').addEventListener('click', function(){
        model.count -= 1;
        render(counterID, model);
    })

    document.querySelector("#set-btn").addEventListener('click', function(){
        model.count = parseInt(document.querySelector('#desired-number').value);
        render(counterID, model);
    })

    document.querySelector("#get-from-json").addEventListener('click', function(){
        let r = await axios.get('number.json');
        model.count = r.data;
        render(counterID, model);
    })
}

runController("#counter", counterModel);