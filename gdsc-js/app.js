// Add
console.log(6 + 3);

//Subtract
console.log(6 - 3);

//Multiply
console.log(6 * 3);

//Divide
console.log(6 / 3);

const head1 = document.getElementById('head1');
const head2 = document.getElementById('head2');
const numInput = document.getElementById('numInput');

function formInput() {
    console.log(numInput.value);
    if (numInput.value == 7) {
        console.log("Deepak Yadav")
        console.log("Bhupesh Dhapola")
        console.log("Kaustubh Kadu")
    }
}

function changeText() {
    head1.innerHTML = "Hello";
}

function changeTag() {
    let h5 = document.createElement('h5');
    h5.innerHTML = head2.innerHTML;
    head2.parentNode.replaceChild(h5, head2);
}

function memberNames() {
    if (numInput.value == 7) {
        console.log("Deepak Yadav")
        console.log("Bhupesh Dhapola")
        console.log("Kaustubh Kadu")
    }
}