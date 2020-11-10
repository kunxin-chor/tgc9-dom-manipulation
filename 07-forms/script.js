document.querySelector("#submit-btn").addEventListener("click", function() {
  console.log(document.querySelector("#first-name").value);
  let fname = document.querySelector("#first-name").value;

  // 1. get all the radio buttons of the related group
  let allBedRadios = document.querySelectorAll(".bed");
  
  // INVARIANT: Before the for loop, there is no selected bed
  // STATE VARIABLE: we use this variable to represent the selected bed
  let selectedBed = null;

  // 2. go through each radio button
  for (let radio of allBedRadios) {
    if (radio.checked) {
      // 3. if the current radio button is checked (i.e selecte)
      // then that is the selected radio button
      selectedBed = radio.value;
      break;
    }
  }
  // INVARAINT: Once the loop is over, selectedBed will refer
  // to the value of the selected radio button
  console.log(selectedBed);

  // GET ALL THE CHECKBOXES
  // INVARIANT: Before the start of the for loop, no amentities has
  // been retrieved, so it's an empty array
  let selectedAmentities = [];

  let allAmentities = document.querySelectorAll('.amentities');
  for (let eachCheckbox of allAmentities) {
      if (eachCheckbox.checked) {
          selectedAmentities.push(eachCheckbox.value);
      }
  }
  // INVARIANT: At the end of the loop, selectedAmentities will
  // have the values of all the checkboxes that has been checked
  console.log(selectedAmentities);

  let selectedTiming = document.querySelector('#timing').value;
  console.log(selectedTiming);

});
