console.log("Loaded");

let minValue = document.getElementById("id-min-val");
let maxValue = document.getElementById("id-max-val");
const innerCont = document.getElementById("id-inner-container");

function clearValue() {
  console.log("Cleared");
  while (innerCont.firstChild) {
    innerCont.removeChild(innerCont.firstChild);
  }
}

function refreshValue() {
  clearValue();
  console.log(
    "Custom Numbers Added from " + minValue.value + " till " + maxValue.value
  );
  refreshBtn = main();
}

function onMinChange() {
  console.log("Min value is " + minValue.value);
}

function onMaxChange() {
  console.log("Max value is " + maxValue.value);
}

function main() {
  const clearBtn = document.getElementById("id-clear");
  clearBtn.onclick = clearValue;
  const refreshBtn = document.getElementById("id-refresh");
  refreshBtn.onclick = refreshValue;
  minValue;

  //Creating function that will generate 100 divs.
  //this line creates 100 divs and hides all that do not match input values.
  for (let i = minValue.value; i <= maxValue.value; i++) {
    // for( i = minValue.value; i <= maxValue.value; i++ ) { // <--- 'UNcomment' this line to create divs according to input values.
    let crtDiv = document.createElement("div");
    let crtP = document.createElement("p");

    crtDiv.appendChild(crtP);
    innerCont.appendChild(crtDiv).setAttribute("id", "divID" + i);

    if (i < minValue.value || i > maxValue.value) {
      crtDiv.style = "display: none";
    } else {
      if (i % 3 === 0 && i % 5 === 0) {
        crtP.appendChild(document.createTextNode(i + " is FIZZ BUZZ"));
        innerCont.appendChild(crtDiv).setAttribute("class", "fizzbuzz");
      } else if (i % 3 === 0) {
        crtP.appendChild(document.createTextNode(i + " is FIZZ"));
        innerCont.appendChild(crtDiv).setAttribute("class", "fizz");
      } else if (i % 5 === 0) {
        crtP.appendChild(document.createTextNode(i + " is BUZZ"));
        innerCont.appendChild(crtDiv).setAttribute("class", "buzz");
      } else {
        crtP.appendChild(document.createTextNode(i));
        innerCont.appendChild(crtDiv).setAttribute("class", "num");
      }
    }
  }
}

main();
