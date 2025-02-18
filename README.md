# Uncommon JavaScript Bug: Implicit Null Handling in Addition

This repository demonstrates a subtle bug related to null value handling in JavaScript addition.  The `foo` function is designed to add two numbers, but its null handling is incomplete, potentially leading to unexpected behavior.

## Bug Description
The original `bug.js` file contains a function that handles null values for individual inputs (`a` and `b`) gracefully. However, it does not explicitly address the scenario where *both* `a` and `b` are null. This omission can cause issues when integrating the function into a system where null inputs are possible.