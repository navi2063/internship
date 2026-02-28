// For Loop
function forLoopDemo() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }
    alert("For Loop Output: " + result);
}

// While Loop
function whileLoopDemo() {
    let i = 1;
    let result = "";
    while (i <= 5) {
        result += i + " ";
        i++;
    }
    alert("While Loop Output: " + result);
}

// Do While Loop
function doWhileLoopDemo() {
    let i = 1;
    let result = "";
    do {
        result += i + " ";
        i++;
    } while (i <= 5);
    alert("Do While Loop Output: " + result);
}

// For Of Loop
function forOfDemo() {
    let numbers = [10, 20, 30, 40];
    let result = "";
    for (let num of numbers) {
        result += num + " ";
    }
    alert("For Of Loop Output: " + result);
}

// For In Loop
function forInDemo() {
    const student = { name: "Misbah Samann", age: 22, course: "AI & DS" };
    let result = "";
    for (let key in student) {
        result += key + ": " + student[key] + "\n";
    }
    alert("For In Loop Output:\n" + result);
}

// Break Demo
function breakDemo() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        result += i + " ";
    }
    alert("Break Demo Output (Stops at 2): " + result);
}

// Continue Demo
function continueDemo() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        result += i + " ";
    }
    alert("Continue Demo Output (Skips 3): " + result);
}

// Nested Loop
function nestedLoopDemo() {
    let result = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            result += "(" + i + "," + j + ") ";
        }
        result += "\n";
    }
    alert("Nested Loop Output:\n" + result);
}