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

function addYear() {
    var y = new Date().getFullYear();
    let year = document.getElementById("copyYear")
    year.innerHTML = '&copy; ' + y + ' designed &#129504; and coded &#128640; by Takeshi Koey';
}
addYear();

// function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("showButton").style.display = "none";
// }

$(document).ready(function () {
    // Read More / Read Less Toggle Functionality
    $("#readMore").click(function () {
        $("#shortBio").hide();  // Hide short bio
        $("#longBio").show();   // Show long bio
        $("#readMore").hide();  // Hide "Read More" button
        $("#readLess").show();  // Show "Read Less" button
    });

    $("#readLess").click(function () {
        $("#shortBio").show();  // Show short bio
        $("#longBio").hide();   // Hide long bio
        $("#readMore").show();  // Show "Read More" button
        $("#readLess").hide();  // Hide "Read Less" button
    });
});


function validate() {
    // Get the input fields and validation message element by their IDs
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userText = document.getElementById("text");
    var msg = document.getElementById("ValidateMsg"); // Element to display validation message
    // Check if any of the fields are invalid using checkValidity()
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        // If any field is invalid, display an error message
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again"
        })
}

function initPage() {
    addYear();
    if (window.location.href.includes("contact.html")) {
        document.getElementById("item2")?.addEventListener("submit", function(event) {
            event.preventDefault();
            validate();
        })
        initMap();
    } 
}
