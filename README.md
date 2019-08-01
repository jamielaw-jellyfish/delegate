# delegate

Simple event delegation in Vanilla JavaScript

Event delegation can be an efficient way to listen for events on many sibling elements, or elements that are being repeatedly added or removed from the DOM. Rather than attaching event listeners to each element, one listener is attached to their common ancestor, and event bubbling ensures that when one of the children is clicked, the listener on the parent node is triggered (see [Understanding Event Delegation](https://learn.jquery.com/events/event-delegation/)).

This utility function offers a simple syntax for event delegation that also ties in with the native `addEventListener` function.

## Example

```js
const parent = document.querySelector('.parent');

parent.addEventListener(delegate('.child', function (e) {
  console.log(this); // the child element
}));
```

It is also possible to add multiple handlers for different groups of children

```js
const parent = document.querySelector('.parent');

parent.addEventListener(delegate({
  '.purple': function () { console.log('You clicked a purple element.'); },
  '.green': function () { console.log('You clicked a green element.'); },
  '.mauve': function () { console.log('You clicked a mauve element.'); },
}));
```
