# Challenge: Directory listing

## Objective

Given an array of objects representing people, return an array of strings representing each person's "directory listing."

A typical "person" object follows this schema:

```js
    {
        name: "Charles",
        location: "Washington Heights",
        phone: "555-999-4567"
    }
```

The directory listing for this object would be the following string:

```js
"Charles, Washington Heights (555-999-4567)"
```

Some "person" objects have an additional key, `private`, with a Boolean value. When `private` is `true`, **do not** show the phone number.

```js
"Charles, Washington Heights"
```

## Instructions

Write your code inside the `listPeople` function in `index.js`.

The test case is stored in `people.js` and imported into `index.js`. The `expectedResult` is defined in `index.js`. Feel free to peek at both!

Run `node index.js` in this directory to test your function and get feedback!

## BONUS

Sort the listings in alphabetical order by name. Run `node index.js bonus` to test.

## Resources

- [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN: String concatenation using `+`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenation_using)
- [MDN: Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- **BONUS** [MDN: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) (also... just Google "JavaScript sort alphabetically" tbh. Javascript is weird!!!)

