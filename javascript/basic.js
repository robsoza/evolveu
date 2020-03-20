console.log("Hello World from basic.js");
// ON BUTTON CLICKED
// function onButtonClicked () {
//     var inputVal=document.getElementById("val");
//     console.log("val");
// }

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var myint;

button.addEventListener("click", function () {
    if (input.value.length > 0) {
        console.log(Number(input.value) + 1);
        myint = input.value;
       // console.log(size());
    }
})

function size() {
    let val;
    //debugger;
    myint=input.value;

    if (input.value.length > 0) {
        if (myint <= 9) {
            val = "small";
        } else
            if (myint >= 10 && myint <= 19) {
                val = "med";
            } else
                if (myint >= 20) {
                    val = "large";
                }
    } 
    console.log(val);
    input.value = "";
} 
button.addEventListener("click", size);
//button.removeEventListener("click", size);