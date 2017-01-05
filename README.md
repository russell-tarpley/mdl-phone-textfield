# mdl-phone-textfield
An Material Design Lite phone textfield implementation for capturing user entered phones (https://github.com/google/material-design-lite)

[![Bower Version](https://img.shields.io/bower/v/mdl-phone-textfield.svg)](https://github.com/rathxxx/mdl-phone-textfield)
[![NPM Version](https://img.shields.io/npm/v/mdl-phone-textfield.svg)](https://www.npmjs.com/package/mdl-phone-textfield)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/rathxxx/mdl-phone-textfield/blob/master/LICENSE)

[![bitHound Overall Score](https://www.bithound.io/github/rathxxx/mdl-phone-textfield/badges/score.svg)](https://www.bithound.io/github/rathxxx/mdl-phone-textfield)
[![bitHound Dependencies](https://www.bithound.io/github/rathxxx/mdl-phone-textfield/badges/dependencies.svg)](https://www.bithound.io/github/rathxxx/mdl-phone-textfield/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rathxxx/mdl-phone-textfield/badges/devDependencies.svg)](https://www.bithound.io/github/rathxxx/mdl-phone-textfield/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rathxxx/mdl-phone-textfield/badges/code.svg)](https://www.bithound.io/github/rathxxx/mdl-phone-textfield)

> A custom textfield implementation of phone number component for [Material Design Lite](https://github.com/google/material-design-lite)

## Install

Via npm:

````
npm install mdl-phone-textfield
````

Then include in your html:

````
<link rel="stylesheet" href="./bower_components/mdl-phone-textfield/dist/mdl-phone-textfield.min.css">
...
<script src="./bower_components/mdl-phone-textfield/dist/mdl-phone-textfield.min.js"></script>
````

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.

### To include a MDL **phone textfield** component:

&nbsp;1. Code a `<div>` element to hold the phone text field.
```html
<div>
...
</div>
```
&nbsp;2. Inside the div, code an `<input>` element add an `id` attribute of your choice.
```html
<div>
  <input type="text" id="sample3">
</div>
```
&nbsp;3. Also inside the div, after the `<input>` field, code a `<label>` element with a `for` attribute whose value matches the `input` element's `id` value, and a short string to be used as the field's placeholder text.
```html
<div>
		<input type="text" id="sample3">
        <label for="sample3">phone Example...</label>
</div>
```
&nbsp;4. Add one or more MDL classes, separated by spaces, to the div container, input field, input label, and error message using the `class` attribute.
```html
<div class="mdl-phone-textfield mdl-js-phone-textfield mdl-phone-textfield--floating-label">
        <input class="mdl-phone-textfield__input" type="text" id="sample3">
        <label class="mdl-phone-textfield__label" for="sample3">phone Example...</label>
</div>
```
The phone textfield component is ready for use.

#### Examples

phone field with a standard label.
```html
<div class="mdl-phone-textfield mdl-js-phone-textfield">
        <input class="mdl-phone-textfield__input" type="text" id="sample1">
        <label class="mdl-phone-textfield__label" for="sample1">phone Example...</label>
</div>
```

phone field with a floating label.
```html
<div class="mdl-phone-textfield mdl-js-phone-textfield mdl-phone-textfield--floating-label">
        <input class="mdl-phone-textfield__input" type="text" id="sample4">
        <label class="mdl-phone-textfield__label" for="sample4">phone Example...</label>
</div>
```

phone field with a standard label, and error message.
```html
<div class="mdl-phone-textfield mdl-js-phone-textfield">
        <input class="mdl-phone-textfield__input" type="text" id="sample4">
        <label class="mdl-phone-textfield__label" for="sample4">phone Example...</label>
		<span class="mdl-phone-textfield__error">(999)999-9999</span>
</div>
```
