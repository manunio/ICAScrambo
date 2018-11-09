# ICAScrambo - Puzzle Scramble Generator
![scrambo](http://rawgithub.com/nickcolley/scrambo/master/scrambo.svg)

## Usage
```javascript
// Generate a new 4x4 scramble with the seed of 1
var seeded_scramble = new ICAScrambow().setType('444').setSeed(1).get();
console.log(seeded_scramble);

// Generate 5 scrambles (defaults to 3x3)
var multiple_scrambles = new ICAScrambowow().get(5);
console.log(multiple_scrambles);
```

## Cli
```bash
npm install -g icascrambo
```
### Command line options
```
-V, --version        output the version number
-n, --number [num]   set amount of scrambles to generate
-t, --type [string]  set the scramble type (default: "333")
-s, --seed [num]     set seed
-l, --length [num]   set scramble length
-h, --help           output usage information
```

## Node.js
```bash
npm install icascrambo
```
```javascript
var Scrambow = require('icascrambo').Scrambow;

var threebythree = new ICAScrambow(); // Defaults to 3x3
console.log(threebythree.get(5)); // Returns 5 scrambles
```

## API
```javascript
.get(num); // Returns a number of scrambles, defaults to 1.
.setType(str); // Sets the scramble type, defaults to 333.
.setSeed(num); // Repeatable scrambles.
.setLength(num); // Set scramble length, currently only for NNN, minx scrambles.
```

## Current status
Working!
Fixed - state of 222 and pyram

## Credits
This is a fork of [scrambo](https://github.com/nickcolley/scrambo)
