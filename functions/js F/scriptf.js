function functionDeclaration() {
    alert("This is a Function Declaration example!");
}


const functionExpression = function () {
    alert("This is a Function Expression example!");
};


const arrowFunction = () => {
    alert("This is an Arrow Function example!");
};


function parametersDemo() {
    function greet(name) {
        alert("Hello, " + name + "! This is Parameters Demo.");
    }
    greet("Student");
}


function callbackDemo() {
    function mainFunction(callback) {
        alert("Main function executed!");
        callback();
    }

    function callbackFunction() {
        alert("Callback function executed!");
    }

    mainFunction(callbackFunction);
}