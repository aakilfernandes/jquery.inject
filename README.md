jquery.inject is a plugin for avoiding ugly, unreadable  HTML DOM object injections

The old way:

````javascript
$('body').append('<div id="header" class="wrapped"></div>');`
````

The new way:

````javascript
var body = $('body');
body.inject('div#header.wrapped');
````

You can even pass in an array
````javascript
var body = $('body');
body.inject(['div#header.wrapped','div#main.wrapped']);
````

Injections automatically create a tree that can be easily traverse. Object names are dynamically created from the first given attribute ('id' or 'class').
````javascript
var body = $('body');
body.inject(['div#header.wrapped','div#main.wrapped']);
//Automatically creates body.header and body.main
body.header.inject('span.title');
body.main.inject('div.left');
body.main.inject('div.right');
````
