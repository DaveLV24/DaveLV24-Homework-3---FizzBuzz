console.log("Loaded");

let minValue = document.getElementById("id-min-val");
let maxValue = document.getElementById("id-max-val");
let fizz = document.getElementById("id-fizz");
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

// function onlyFizz() {
//   var elementFizz = document.getElementsByClassName("fizz");
//   element.classList.toggle(".num .buzz .fizzbuzz");
//   console.log(onlyFizz);
// }

// var pElements = document.getElementsByClassName("class-fizz");
// var pElement = pElements[0];
// pElement.onclick = function () {
//   if (this.getAttribute("class") == ("class-fizz")
//     this.setAttribute("class", ".fizzbuzz .buzz .num");
//   else this.setAttribute("class", "fizz");
// };

function main() {
  const clearBtn = document.getElementById("id-clear");
  clearBtn.onclick = clearValue;
  const refreshBtn = document.getElementById("id-refresh");
  refreshBtn.onclick = refreshValue;
  for (let i = minValue.value; i <= maxValue.value; i++) {
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
