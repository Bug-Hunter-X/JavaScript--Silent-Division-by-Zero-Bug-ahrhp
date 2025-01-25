# JavaScript: Silent Division by Zero Bug

This repository demonstrates a common yet subtle bug in JavaScript: silent division by zero. The `myFunction` attempts division without proper error handling for zero denominators.  This can lead to unexpected program crashes or incorrect results.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` demonstrates a corrected version that gracefully handles the case of division by zero.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (like Node.js).
3. Observe the error (or unexpected result) when calling `myFunction` with a zero denominator.

## Solution

The solution involves adding explicit checks to handle the division by zero condition.  This ensures the function behaves predictably and avoids runtime errors.