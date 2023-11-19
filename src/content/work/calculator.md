---
title: Calculator App
publishDate: 2023-10-25 00:00:00
img: /assets/calculator.png
img_alt: Calculator User Interface
description: |
  Simple Calculator App created using ES6 classes. Capable of all the basic calculator operations (addition, subtraction, multiplication, division, and calculating a percent).  
tags:
  - HTML
  - CSS
  - JavaScript
  - jQuery
---
 
This calculator app implements ES6 classes: creating a class, defining a constructor, creating properties and methods, accessing class properties and calling methods, etc.

#### Calculator Class

Within the Calculator class, the constructor method is defined, which initializes the properties of all the DOM elements that need to be selected. The constructor also provides a method to initialize the calculator display and sets default values for the current and previous operands and operation.

#### Methods
 
```
clear(): clear the calculator display
delete(): delete the last digit from the current operand
appendNumber(number): append a new number to the current operand
chooseOperation(operation): choose an operation 
computer(): compute the result of the current operation
getDisplayNumber(number): format a number for display on the calculator
updateDisplay(): update the calculator display
```

#### Instance
 
After creating a new instance of the Calculator class, we add event listeners for each button to update the calculator display based on user input.


#### Try out the calculator on CodePen: <a href="https://codepen.io/Kungsoo-Kim/pen/PoVZdNr" target="_blank">Calculator App</a>


#### View GitHub Repository: <a href="https://github.com/mkim120/mkim120.github.io/tree/main/calculator-app" target="_blank">Simple Calculator</a>
