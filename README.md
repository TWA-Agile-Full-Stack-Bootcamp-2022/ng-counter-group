# Angular Counter Component

## Requirements
1. Create angular app to create angular development stack
2. Implement Counter component in this stack:

> Two Buttons: "+" and "-"

>One number, with initial value 0

>When the "+" is clicked, the number should be increased by 1, and if you continue to click, it will get accumulated according to this rule.

>When the "-" is clicked, the number should be decreased by 1, and If you continue to click, it will get decreased according to this rule.

3. Create a new component CounterGroup, with a number attribute size, and the number represents the number of Counter components.
4. When user clicks on any of the Counter components "+" or "-", user expects to see the sum of all the counters at the bottom.
5. As a user, I want to write size in an input and press enter or click the "setSize" button beside, then the count of Counters show in CounterGroup will change. 
6. As a user, I want to a reset button in counter component beside "-", when click it number of counter will be set to 0, sum will also change.
7. As a user, I want to a reset button in counter group component beside sum, when click it number of counter will be set to 0, sum will also change.

# Tips - how to create angular project
- `ng new angular-counter-group`