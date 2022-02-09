
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    var ageValEl = document.getElementById("ageVal");
    var ageCalc = 21-inputVal;
    // Displaying the value
    console.log(inputVal);
    console.log(ageValEl.textContent);
    if(inputVal<20) {
        ageValEl.textContent = "Try in " + ageCalc + " more years";
    }else if(inputVal<21){
        ageValEl.textContent = "Try in " + ageCalc + " more year"
    }else{
        location.href = "index_2.html" 
    }
}

 function letsExplore(){
    var enterAge = document.querySelector(".enterAge");
    var exploreBtn = document.querySelector(".explore");

    enterAge.setAttribute("class", "show")
    exploreBtn.setAttribute("class", "hide")
    exploreBtn.setAttribute("value","text")
 }