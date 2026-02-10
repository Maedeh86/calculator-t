## Assignment Information

This project was rebuilt based only on an existing test suite created by another student.

The goal of the assignment was to implement functionality by following automated tests.

## Running Tests

npm install
npm test -- --watchAll=false


The application was developed to satisfy Jest test cases covering:

- Button component
- Keyboard component
- Display functionality
- Calculator page integration

*****************************************************************************************
It is simple Calculor app 

 Features

- Digit and operator buttons
- Input display and result output
- Backspace and clear functionality
- Expression evaluation using `mathjs`

 Testing Strategy
 Unit Tests (20+)

- Use `getByRole`, `getAllByTestId`, `queryByText`
- Cover rendering, props, and event handling


 Integration Tests (4+)

- Confirm input updates, result evaluation, clearing, and backspacing


 Test Organization

All tests are located in the `tests/` directory:

Note: 
Instead of sharing static screenshots, I’ve deployed the application and provided a live link. This allows anyone to explore and interact with the app directly:
https://calculator-six-iota-85.vercel.app/