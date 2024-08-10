var x = 5;         // Using var
let y = 10;        // Using let
const z = 15;      // Using const

let a;
console.log(a);    // Output: undefined

// Global Scope: A variable declared outside any function or block has a global scope, meaning it can be accessed from anywhere in the code.

// Function Scope: Variables declared with var inside a function are function-scoped. They are accessible only within that function.

// Block Scope: Variables declared with let or const inside a block (like inside {}) are block-scoped and cannot be accessed outside of that block.

function myFunction() {
    var a = 10;   // Function scoped
    let b = 20;   // Block scoped
    const c = 30; // Block scoped

    if (true) {
        var d = 40;   // Function scoped
        let e = 50;   // Block scoped
        const f = 60; // Block scoped
    }

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
    console.log(d); // 40
    console.log(e); // ReferenceError: e is not defined
    console.log(f); // ReferenceError: f is not defined
}
