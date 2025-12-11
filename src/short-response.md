Short Responses
===============

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

*   \[\] Addresses all parts of the prompt
    
*   \[\] Accurately uses relevant technical terminology
    
*   \[\] Is free of grammar and spelling mistakes (double check with grammarly!)
    
*   \[\] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
    
*   \[\] Is easy to comprehend
    

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

Prompt 1
--------

Read the following code:

    const playlist1 = { name: "My Favorites", songCount: 10 };
    const playlist2 = playlist1;
    playlist2.songCount = 15;
    console.log(playlist1.songCount);

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

Logging `playlist1.songCount` to the console will produce an output of `15`. The songCount of `playlist1` will be modified to `playlist2`'s value because a copy of `playlist1` was not created when initializing `playlist2`.

**Corrected Code:**

    // fix this!
    const playlist1 = { name: "My Favorites", songCount: 10 };
    const playlist2 = {...playlist1};
    playlist2.songCount = 15;
    console.log(playlist1.songCount);

* * *

Prompt 2
--------

    const students = [
      { name: "Maya", grade: 92, passed: true },
      { name: "Jamal", grade: 78, passed: true },
      { name: "Destiny", grade: 88, passed: true },
      { name: "Marcus", grade: 95, passed: true }
    ];

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1.  You need to get an array containing only students who scored above 85.
    
2.  You need to find the student named "Destiny" and update their grade to 90.
    
3.  You need to calculate the average grade of all students.
    
4.  You need to create an array of strings in the format: "Maya: 92"
    

### Response 2

*   `students.filter()`
    
*   `students.find()`
    
*   `students.reduce()`
    
*   `students.forEach()`
    

* * *

Prompt 3
--------

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

    const letters = ['a', 'b', 'c', 'd'];
    const capitalize = (str) => str.toUpperCase();
    
    const upperCaseLetters = letters.map(capitalize());
    // Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    
    console.log(upperCaseLetters);

### Response 3

*   The type error occurs because there is no argument inside of the `capitalize()` function call, specifically a reference to the `letters` array.
    
*   It can be fixed by using the correct syntax for the `.map()` method and using the reference to the `letters` array as an input for the `capitalize()` function call.
    

Here is an example of the fix:

    const upperCaseLetters = letters.map((letter) => capitalize(letter));

*   To avoid this error in the future, make sure to use the correct `map` method syntax and use references properly when calling functions.
    

  

* * *

Prompt 4
--------

Given this code:

    const orders = [
      { id: 1, total: 45 },
      { id: 2, total: 23 },
      { id: 3, total: 67 }
    ];
    
    const grandTotal = orders.reduce((sum, order) => {
      return sum + order.total;
    }, 0);

*   Part A: What will `grandTotal` equal after this code runs?
    
*   Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
    
*   Part C: Walk through what happens in the FIRST iteration of reduce:
    
    *   What is the value of sum?
        
    *   What is the value of order?
        
    *   What gets returned?
        

### Response 4

*   After the code runs, `grandTotal` will equal 135 .
    
*   The zero at the end of the `reduce` method gives the method a start value. Otherwise, calculations start at index `0` of the array.
    
*   The value of `sum` is the initial value of `0`, while `order` is index `0` of the array, which holds the value of `45`. `45` is returned on the first iteration;