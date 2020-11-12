function updateColorNumber() {
    let counter = document.querySelector('#counter');
      if (parseInt(counter.innerHTML) < 0) {
        counter.style.color = 'red'
    } else {
        counter.style.color = 'green'
    }
}

updateColorNumber();

document.querySelector('#increment').addEventListener('click', function(){
    let counter = document.querySelector('#counter');
    let oldValue = counter.innerHTML;
    counter.innerHTML = parseInt(oldValue) + 1
    updateColorNumber();

    if (parseInt(counter.innerHTML) == 10) {
        document.querySelector('#increment').disabled = true;
    }
});

document.querySelector('#decrement').addEventListener('click', function(){
    let counter = document.querySelector('#counter');
    let oldValue = counter.innerHTML;
    counter.innerHTML = parseInt(oldValue) - 1;

    updateColorNumber();
    if (parseInt(counter.innerHTML) == -10) {
        document.querySelector('#decrement').disabled = true;
    }
});

document.querySelector('#reset').addEventListener('click', function(){
    document.querySelector('#counter').innerHTML = 0;
    updateColorNumber();
});

document.querySelector('#set-btn').addEventListener('click', function(){
    // document.querySelector('#counter').innerHTML = document.querySelector('#desired-number').value;
    let counter = document.querySelector('#counter');
    let textbox = document.querySelector('#desired-number');
    counter.innerHTML = textbox.value;
    updateColorNumber();
})