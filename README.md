# :zap: Javascript30 Tutorial Codepattern Function

* Wes Bos Youtube Tutorial: [JavaScript KONAMI CODE! #JavaScript30 12/30](https://www.youtube.com/watch?v=_A5eVOIqGLU).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Uses javascript to detect a sequence of keys. A function is run to show a unicorn if the sequence is detected.

## :camera: Screenshots

![Example screenshot](./img/pattern.png).

## :signal_strength: Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## :computer: Code Examples

* Code to check a sequence of keys is the same as a defined string constant.

```javascript
  // join letters to make a string then check if it is the same as the secret code
  if (pressed.join('').includes(secretCode)) {
    console.log('Ding Dong!');
    cornify_add();
  }
```

## :cool: Features

* A unicorn is shown if the sequence is typed correctly.

## :clipboard: Status & To-Do List

* Status: Working. Updated to work from browser, not from Glitch.
* To-Do: Nothing. Could use a response header to avoid the warning from the unicorn site but not urgent.

## :clap: Inspiration

* Wes Bos Youtube Tutorial: [JavaScript KONAMI CODE! #JavaScript30 12/30](https://www.youtube.com/watch?v=_A5eVOIqGLU)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
