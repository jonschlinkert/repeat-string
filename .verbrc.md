# {%= name %} {%= badge("fury") %}

> {%= description %}

Based on the `strRepeat` function from [underscore.string](https://github.com/epeli/underscore.string).

## Install
{%= include("install") %}

## Usage
Require `{%= name %}`:

```js
var {%= _.camelCase(name) %} = require('{%= name %}');
console.log({%= _.camelCase(name) %}('A', 5));
//=> AAAAA
```

## Author
{%= contrib("jon") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}