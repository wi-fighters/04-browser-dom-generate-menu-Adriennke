# Generate a menu programmatically

## Aim for this structure within your `body` element:

```html
<header>
    <ul>
        <li><a href="#home"></a></li>
        <li><a href="#about"></a></li>
        <li><a href="#services"></a></li>
        <li><a href="#products"></a></li>
        <li><a href="#newsletter"></a></li>
        <li><a href="#contact"></a></li>
    </ul>
</header>
```

## For DOM Manipulation, ask yourself:

WHAT do we need to target?
- the closest existing parent element

HOW will it change?
a. it's going to get a new child element... (e.g. header)
b. ... that child element is going to contain the structure for its children

WHEN should it change?
(Don't worry about this until we cover Events in class)

## A guideline for how to break down this problem...

### QUERY the document

- grab all the sections
- destructure them into arrays so we can use array methods
- map over them and store their ids in a new array
- use the ids to derive href values
- use the number of ids to count how many lis we should add

### CREATE elements

- Inside the body, create a header.
- Inside the header, create a ul
- Inside the ul, create many li
- Inside each li, create an a
- Give each a an href attribute with a string that matches section IDs

### PREPEND the elements to the document

## YOUR TASK

- study the code provided
- challenge yourself to build something similar without looking, to be sure you understand how it's working
- resolve the TODO comments in `script.js`
