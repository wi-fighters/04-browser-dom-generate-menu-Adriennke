# Generate a menu programatically

Aim for this structure within your `body` element:

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

# WIP

For DOM Manipulation, ask yourself:

WHAT do we need to target?
the closest existing parent element

HOW will it change?
a. it's going to get a new child element... (e.g. header)
b. ... that child element is going to contain the structure for its children

WHEN should it change?
(Don't worry about this for now)

## QUERY the document
grab all the sections
destructure them into arrays
map over them and store their id in a new array

## CREATE elements

Inside the body, create a header.
Inside the header, create a ul
Inside the ul, create many li
Inside each li, create an a
Give each a an href attribute with a string that matches section IDs

## APPEND the elements to the document


