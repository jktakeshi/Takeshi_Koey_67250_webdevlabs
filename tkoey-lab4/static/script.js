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

function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("showButton").style.display = "none";
}

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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let isValid = true;

        // Get form fields
        const nameField = document.getElementsByName("name")[0];
        const emailField = document.getElementsByName("email")[0];
        const commentField = document.getElementsByName("comment")[0];

        // Remove existing validation messages
        document.querySelectorAll(".error-message").forEach(msg => msg.remove());

        // Validate Name Field
        if (!nameField.value.trim()) {
            showError(nameField, "Please enter your name.");
            isValid = false;
        }

        // Validate Email Field
        if (!emailField.value.trim()) {
            showError(emailField, "Please enter your email.");
            isValid = false;
        } else if (!emailField.checkValidity()) {
            showError(emailField, "Please enter a valid email address.");
            isValid = false;
        }

        // Validate Comment Field
        if (!commentField.value.trim()) {
            showError(commentField, "Please enter a comment.");
            isValid = false;
        }

        // Submit form if valid
        if (isValid) {
            alert("Form submitted successfully!");
            form.submit(); 
        }
    });

    // Function to show validation messages
    function showError(inputField, message) {
        const errorMsg = document.createElement("p");
        errorMsg.className = "error-message";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "0.9em";
        errorMsg.textContent = message;
        inputField.insertAdjacentElement("afterend", errorMsg);
    }
});
