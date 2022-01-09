# banglejs-2-four-fold-face #

a simple clock face with numbers 3, 6, 9 and 12 for analog clocks on a Bangle.js 2

This module draws a face with the numbers 3, 6, 9 and 12 for an analog clock running on a [Bangle.js 2](https://www.espruino.com/Bangle.js2).

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let ClockFace = require('https://raw.githubusercontent.com/rozek/banglejs-2-four-fold-face/main/ClockFace.js');
```

Whenever needed, the module's exported `draw` method will then be invoked as follows:

```
ClockFace.draw(Settings, CenterX, CenterY, outerRadius);
```

## License ##

[MIT License](LICENSE.md)
