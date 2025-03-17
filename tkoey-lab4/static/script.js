let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello";
let B = "world!";
let C = A + " " + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}
SumNPrint(x, y);
SumNPrint(A, B);

// Conditional Statement
if (C.length > z) {
    console.log(C);
} 
else if (C.length < z) {
    console.log(z);
}
else {
    console.log("good job!");
}

// Arrays
let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array, array_name) {
    array.forEach(item => {
        if (item === "Banana") {
            // alert("We found a banana in the " + array_name);
        }
    });
}
findTheBanana(L1, "first array");
findTheBanana(L2, "second array");

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (5<h && h<12) {
        greeting = "Good morning";
    }
    else if (12<=h && h<18) {
        greeting = "Good afternoon";
    }
    else if (18<=h && h<20) {
        greeting = "Good evening";
    }
    else {
        greeting = "Good night";
    }
    let E = document.getElementById("greeting");
    E.innerHTML = greeting + ", I am Takeshi Koey";
}
greetingFunc();