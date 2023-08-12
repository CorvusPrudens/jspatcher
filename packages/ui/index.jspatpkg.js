/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/color-js/color.js":
/*!****************************************!*\
  !*** ./node_modules/color-js/color.js ***!
  \****************************************/
/***/ ((module) => {

// Copyright (c) 2008-2013, Andrew Brehaut, Tim Baumann, Matt Wilson, 
//                          Simon Heimler, Michel Vielmetter 
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice,
//   this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// color.js - version 1.0.1
//
// HSV <-> RGB code based on code from http://www.cs.rit.edu/~ncs/color/t_convert.html
// object function created by Douglas Crockford.
// Color scheme degrees taken from the colorjack.com colorpicker
//
// HSL support kindly provided by Tim Baumann - http://github.com/timjb

// create namespaces
/*global net */
if ("undefined" == typeof net) {
    var net = {};
}
if (!net.brehaut) {
    net.brehaut = {};
}

// this module function is called with net.brehaut as 'this'
(function() {
    "use strict";
    // Constants

    // css_colors maps color names onto their hex values
    // these names are defined by W3C
    
    var css_colors = {aliceblue:'#F0F8FF',antiquewhite:'#FAEBD7',aqua:'#00FFFF',aquamarine:'#7FFFD4',azure:'#F0FFFF',beige:'#F5F5DC',bisque:'#FFE4C4',black:'#000000',blanchedalmond:'#FFEBCD',blue:'#0000FF',blueviolet:'#8A2BE2',brown:'#A52A2A',burlywood:'#DEB887',cadetblue:'#5F9EA0',chartreuse:'#7FFF00',chocolate:'#D2691E',coral:'#FF7F50',cornflowerblue:'#6495ED',cornsilk:'#FFF8DC',crimson:'#DC143C',cyan:'#00FFFF',darkblue:'#00008B',darkcyan:'#008B8B',darkgoldenrod:'#B8860B',darkgray:'#A9A9A9',darkgrey:'#A9A9A9',darkgreen:'#006400',darkkhaki:'#BDB76B',darkmagenta:'#8B008B',darkolivegreen:'#556B2F',darkorange:'#FF8C00',darkorchid:'#9932CC',darkred:'#8B0000',darksalmon:'#E9967A',darkseagreen:'#8FBC8F',darkslateblue:'#483D8B',darkslategray:'#2F4F4F',darkslategrey:'#2F4F4F',darkturquoise:'#00CED1',darkviolet:'#9400D3',deeppink:'#FF1493',deepskyblue:'#00BFFF',dimgray:'#696969',dimgrey:'#696969',dodgerblue:'#1E90FF',firebrick:'#B22222',floralwhite:'#FFFAF0',forestgreen:'#228B22',fuchsia:'#FF00FF',gainsboro:'#DCDCDC',ghostwhite:'#F8F8FF',gold:'#FFD700',goldenrod:'#DAA520',gray:'#808080',grey:'#808080',green:'#008000',greenyellow:'#ADFF2F',honeydew:'#F0FFF0',hotpink:'#FF69B4',indianred:'#CD5C5C',indigo:'#4B0082',ivory:'#FFFFF0',khaki:'#F0E68C',lavender:'#E6E6FA',lavenderblush:'#FFF0F5',lawngreen:'#7CFC00',lemonchiffon:'#FFFACD',lightblue:'#ADD8E6',lightcoral:'#F08080',lightcyan:'#E0FFFF',lightgoldenrodyellow:'#FAFAD2',lightgray:'#D3D3D3',lightgrey:'#D3D3D3',lightgreen:'#90EE90',lightpink:'#FFB6C1',lightsalmon:'#FFA07A',lightseagreen:'#20B2AA',lightskyblue:'#87CEFA',lightslategray:'#778899',lightslategrey:'#778899',lightsteelblue:'#B0C4DE',lightyellow:'#FFFFE0',lime:'#00FF00',limegreen:'#32CD32',linen:'#FAF0E6',magenta:'#FF00FF',maroon:'#800000',mediumaquamarine:'#66CDAA',mediumblue:'#0000CD',mediumorchid:'#BA55D3',mediumpurple:'#9370D8',mediumseagreen:'#3CB371',mediumslateblue:'#7B68EE',mediumspringgreen:'#00FA9A',mediumturquoise:'#48D1CC',mediumvioletred:'#C71585',midnightblue:'#191970',mintcream:'#F5FFFA',mistyrose:'#FFE4E1',moccasin:'#FFE4B5',navajowhite:'#FFDEAD',navy:'#000080',oldlace:'#FDF5E6',olive:'#808000',olivedrab:'#6B8E23',orange:'#FFA500',orangered:'#FF4500',orchid:'#DA70D6',palegoldenrod:'#EEE8AA',palegreen:'#98FB98',paleturquoise:'#AFEEEE',palevioletred:'#D87093',papayawhip:'#FFEFD5',peachpuff:'#FFDAB9',peru:'#CD853F',pink:'#FFC0CB',plum:'#DDA0DD',powderblue:'#B0E0E6',purple:'#800080',rebeccapurple:'#663399',red:'#FF0000',rosybrown:'#BC8F8F',royalblue:'#4169E1',saddlebrown:'#8B4513',salmon:'#FA8072',sandybrown:'#F4A460',seagreen:'#2E8B57',seashell:'#FFF5EE',sienna:'#A0522D',silver:'#C0C0C0',skyblue:'#87CEEB',slateblue:'#6A5ACD',slategray:'#708090',slategrey:'#708090',snow:'#FFFAFA',springgreen:'#00FF7F',steelblue:'#4682B4',tan:'#D2B48C',teal:'#008080',thistle:'#D8BFD8',tomato:'#FF6347',turquoise:'#40E0D0',violet:'#EE82EE',wheat:'#F5DEB3',white:'#FFFFFF',whitesmoke:'#F5F5F5',yellow:'#FFFF00',yellowgreen:'#9ACD32'};


    // CSS value regexes, according to http://www.w3.org/TR/css3-values/
    var css_integer = '(?:\\+|-)?\\d+';
    var css_float = '(?:\\+|-)?\\d*\\.\\d+';
    var css_number = '(?:' + css_integer + ')|(?:' + css_float + ')';
    css_integer = '(' + css_integer + ')';
    css_float = '(' + css_float + ')';
    css_number = '(' + css_number + ')';
    var css_percentage = css_number + '%';
    var css_whitespace = '\\s*?';

    // http://www.w3.org/TR/2003/CR-css3-color-20030514/
    var hsl_hsla_regex = new RegExp([
        '^hsl(a?)\\(', css_number, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'
    ].join(css_whitespace));
    var rgb_rgba_integer_regex = new RegExp([
        '^rgb(a?)\\(', css_integer, ',', css_integer, ',', css_integer, '(,(', css_number, '))?\\)$'
    ].join(css_whitespace));
    var rgb_rgba_percentage_regex = new RegExp([
        '^rgb(a?)\\(', css_percentage, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'
    ].join(css_whitespace));

    // Package wide variables

    // becomes the top level prototype object
    var color;

    /* registered_models contains the template objects for all the
     * models that have been registered for the color class.
     */
    var registered_models = [];


    /* factories contains methods to create new instance of
     * different color models that have been registered.
     */
    var factories = {};

    // Utility functions

    /* object is Douglas Crockfords object function for prototypal
     * inheritance.
     */
    if (!this.object) {
        this.object = function(o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
    var object = this.object;

    /* takes a value, converts to string if need be, then pads it
     * to a minimum length.
     */
    function pad(val, len) {
        val = val.toString();
        var padded = [];

        for (var i = 0, j = Math.max(len - val.length, 0); i < j; i++) {
            padded.push('0');
        }

        padded.push(val);
        return padded.join('');
    }


    /* takes a string and returns a new string with the first letter
     * capitalised
     */
    function capitalise(s) {
        return s.slice(0, 1).toUpperCase() + s.slice(1);
    }

    /* removes leading and trailing whitespace
     */
    function trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }

    /* used to apply a method to object non-destructively by
     * cloning the object and then apply the method to that
     * new object
     */
    function cloneOnApply(meth) {
        return function() {
            var cloned = this.clone();
            meth.apply(cloned, arguments);
            return cloned;
        };
    }


    /* registerModel is used to add additional representations
     * to the color code, and extend the color API with the new
     * operation that model provides. see before for examples
     */
    function registerModel(name, model) {
        var proto = object(color);
        var fields = []; // used for cloning and generating accessors

        var to_meth = 'to' + capitalise(name);

        function convertAndApply(meth) {
            return function() {
                return meth.apply(this[to_meth](), arguments);
            };
        }

        for (var key in model)
            if (model.hasOwnProperty(key)) {
                proto[key] = model[key];
                var prop = proto[key];

                if (key.slice(0, 1) == '_') {
                    continue;
                }
                if (!(key in color) && "function" == typeof prop) {
                    // the method found on this object is a) public and b) not
                    // currently supported by the color object. Create an impl that
                    // calls the toModel function and passes that new object
                    // onto the correct method with the args.
                    color[key] = convertAndApply(prop);
                } else if ("function" != typeof prop) {
                    // we have found a public property. create accessor methods
                    // and bind them up correctly
                    fields.push(key);
                    var getter = 'get' + capitalise(key);
                    var setter = 'set' + capitalise(key);

                    color[getter] = convertAndApply(
                        proto[getter] = (function(key) {
                            return function() {
                                return this[key];
                            };
                        })(key)
                    );

                    color[setter] = convertAndApply(
                        proto[setter] = (function(key) {
                            return function(val) {
                                var cloned = this.clone();
                                cloned[key] = val;
                                return cloned;
                            };
                        })(key)
                    );
                }
            } // end of for over model

            // a method to create a new object - largely so prototype chains dont
            // get insane. This uses an unrolled 'object' so that F is cached
            // for later use. this is approx a 25% speed improvement

        function F() {}
        F.prototype = proto;

        function factory() {
            return new F();
        }
        factories[name] = factory;

        proto.clone = function() {
            var cloned = factory();
            for (var i = 0, j = fields.length; i < j; i++) {
                var key = fields[i];
                cloned[key] = this[key];
            }
            return cloned;
        };

        color[to_meth] = function() {
            return factory();
        };

        registered_models.push(proto);

        return proto;
    } // end of registerModel

    // Template Objects

    /* color is the root object in the color hierarchy. It starts
     * life as a very simple object, but as color models are
     * registered it has methods programmatically added to manage
     * conversions as needed.
     */
    color = {
        /* fromObject takes an argument and delegates to the internal
         * color models to try to create a new instance.
         */
        fromObject: function(o) {
            if (!o) {
                return object(color);
            }

            for (var i = 0, j = registered_models.length; i < j; i++) {
                var nu = registered_models[i].fromObject(o);
                if (nu) {
                    return nu;
                }
            }

            return object(color);
        },

        toString: function() {
            return this.toCSS();
        }
    };

    var transparent = null; // defined with an RGB later.

    /* RGB is the red green blue model. This definition is converted
     * to a template object by registerModel.
     */
    registerModel('RGB', {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0,

        /* getLuminance returns a value between 0 and 1, this is the
         * luminance calcuated according to
         * http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
         */
        getLuminance: function() {
            return (this.red * 0.2126) + (this.green * 0.7152) + (this.blue * 0.0722);
        },

        /* does an alpha based blend of color onto this. alpha is the
         * amount of 'color' to use. (0 to 1)
         */
        blend: function(color, alpha) {
            color = color.toRGB();
            alpha = Math.min(Math.max(alpha, 0), 1);
            var rgb = this.clone();

            rgb.red = (rgb.red * (1 - alpha)) + (color.red * alpha);
            rgb.green = (rgb.green * (1 - alpha)) + (color.green * alpha);
            rgb.blue = (rgb.blue * (1 - alpha)) + (color.blue * alpha);
            rgb.alpha = (rgb.alpha * (1 - alpha)) + (color.alpha * alpha);

            return rgb;
        },

        /* fromObject attempts to convert an object o to and RGB
         * instance. This accepts an object with red, green and blue
         * members or a string. If the string is a known CSS color name
         * or a hexdecimal string it will accept it.
         */
        fromObject: function(o) {
            if (o instanceof Array) {
                return this._fromRGBArray(o);
            }
            if ("string" == typeof o) {
                return this._fromCSS(trim(o));
            }
            if (o.hasOwnProperty('red') &&
                o.hasOwnProperty('green') &&
                o.hasOwnProperty('blue')) {
                return this._fromRGB(o);
            }
            // nothing matchs, not an RGB object
        },

        _stringParsers: [
            // CSS RGB(A) literal:
            function(css) {
                css = trim(css);

                var withInteger = match(rgb_rgba_integer_regex, 255);
                if (withInteger) {
                    return withInteger;
                }
                return match(rgb_rgba_percentage_regex, 100);

                function match(regex, max_value) {
                    var colorGroups = css.match(regex);

                    // If there is an "a" after "rgb", there must be a fourth parameter and the other way round
                    if (!colorGroups || (!!colorGroups[1] + !!colorGroups[5] === 1)) {
                        return null;
                    }

                    var rgb = factories.RGB();
                    rgb.red = Math.min(1, Math.max(0, colorGroups[2] / max_value));
                    rgb.green = Math.min(1, Math.max(0, colorGroups[3] / max_value));
                    rgb.blue = Math.min(1, Math.max(0, colorGroups[4] / max_value));
                    rgb.alpha = !!colorGroups[5] ? Math.min(Math.max(parseFloat(colorGroups[6]), 0), 1) : 1;

                    return rgb;
                }
            },

            function(css) {
                var lower = css.toLowerCase();
                if (lower in css_colors) {
                    css = css_colors[lower];
                }

                if (!css.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)) {
                    return;
                }

                css = css.replace(/^#/, '');

                var bytes = css.length / 3;

                var max = Math.pow(16, bytes) - 1;

                var rgb = factories.RGB();
                rgb.red = parseInt(css.slice(0, bytes), 16) / max;
                rgb.green = parseInt(css.slice(bytes * 1, bytes * 2), 16) / max;
                rgb.blue = parseInt(css.slice(bytes * 2), 16) / max;
                rgb.alpha = 1;
                return rgb;
            },

            function(css) {
                if (css.toLowerCase() !== 'transparent') return;

                return transparent;
            }
        ],

        _fromCSS: function(css) {
            var color = null;
            for (var i = 0, j = this._stringParsers.length; i < j; i++) {
                color = this._stringParsers[i](css);
                if (color) return color;
            }
        },

        _fromRGB: function(RGB) {
            var newRGB = factories.RGB();

            newRGB.red = RGB.red;
            newRGB.green = RGB.green;
            newRGB.blue = RGB.blue;
            newRGB.alpha = RGB.hasOwnProperty('alpha') ? RGB.alpha : 1;

            return newRGB;
        },

        _fromRGBArray: function(RGB) {
            var newRGB = factories.RGB();

            newRGB.red = Math.max(0, Math.min(1, RGB[0] / 255));
            newRGB.green = Math.max(0, Math.min(1, RGB[1] / 255));
            newRGB.blue = Math.max(0, Math.min(1, RGB[2] / 255));
            newRGB.alpha = RGB[3] !== undefined ? Math.max(0, Math.min(1, RGB[3])) : 1;

            return newRGB;
        },

        // convert to a CSS string. defaults to two bytes a value
        toCSSHex: function(bytes) {
            bytes = bytes || 2;

            var max = Math.pow(16, bytes) - 1;
            var css = [
                "#",
                pad(Math.round(this.red * max).toString(16).toUpperCase(), bytes),
                pad(Math.round(this.green * max).toString(16).toUpperCase(), bytes),
                pad(Math.round(this.blue * max).toString(16).toUpperCase(), bytes)
            ];

            return css.join('');
        },

        toCSS: function(bytes) {
            if (this.alpha === 1) return this.toCSSHex(bytes);

            var max = 255;

            var components = [
                'rgba(',
                Math.max(0, Math.min(max, Math.round(this.red * max))), ',',
                Math.max(0, Math.min(max, Math.round(this.green * max))), ',',
                Math.max(0, Math.min(max, Math.round(this.blue * max))), ',',
                Math.max(0, Math.min(1, this.alpha)),
                ')'
            ];

            return components.join('');
        },

        toHSV: function() {
            var hsv = factories.HSV();
            var min, max, delta;

            min = Math.min(this.red, this.green, this.blue);
            max = Math.max(this.red, this.green, this.blue);
            hsv.value = max; // v

            delta = max - min;

            if (delta == 0) { // white, grey, black
                hsv.hue = hsv.saturation = 0;
            } else { // chroma
                hsv.saturation = delta / max;

                if (this.red == max) {
                    hsv.hue = (this.green - this.blue) / delta; // between yellow & magenta
                } else if (this.green == max) {
                    hsv.hue = 2 + (this.blue - this.red) / delta; // between cyan & yellow
                } else {
                    hsv.hue = 4 + (this.red - this.green) / delta; // between magenta & cyan
                }

                hsv.hue = ((hsv.hue * 60) + 360) % 360; // degrees
            }

            hsv.alpha = this.alpha;

            return hsv;
        },
        toHSL: function() {
            return this.toHSV().toHSL();
        },

        toRGB: function() {
            return this.clone();
        }
    });

    transparent = color.fromObject({
        red: 0,
        blue: 0,
        green: 0,
        alpha: 0
    });


    /* Like RGB above, this object describes what will become the HSV
     * template object. This model handles hue, saturation and value.
     * hue is the number of degrees around the color wheel, saturation
     * describes how much color their is and value is the brightness.
     */
    registerModel('HSV', {
        hue: 0,
        saturation: 0,
        value: 1,
        alpha: 1,

        shiftHue: cloneOnApply(function(degrees) {
            var hue = (this.hue + degrees) % 360;
            if (hue < 0) {
                hue = (360 + hue) % 360;
            }

            this.hue = hue;
        }),

        devalueByAmount: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value - val, 0));
        }),

        devalueByRatio: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value * (1 - val), 0));
        }),

        valueByAmount: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value + val, 0));
        }),

        valueByRatio: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value * (1 + val), 0));
        }),

        desaturateByAmount: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation - val, 0));
        }),

        desaturateByRatio: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation * (1 - val), 0));
        }),

        saturateByAmount: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation + val, 0));
        }),

        saturateByRatio: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation * (1 + val), 0));
        }),

        schemeFromDegrees: function(degrees) {
            var newColors = [];
            for (var i = 0, j = degrees.length; i < j; i++) {
                var col = this.clone();
                col.hue = (this.hue + degrees[i]) % 360;
                newColors.push(col);
            }
            return newColors;
        },

        complementaryScheme: function() {
            return this.schemeFromDegrees([0, 180]);
        },

        splitComplementaryScheme: function() {
            return this.schemeFromDegrees([0, 150, 320]);
        },

        splitComplementaryCWScheme: function() {
            return this.schemeFromDegrees([0, 150, 300]);
        },

        splitComplementaryCCWScheme: function() {
            return this.schemeFromDegrees([0, 60, 210]);
        },

        triadicScheme: function() {
            return this.schemeFromDegrees([0, 120, 240]);
        },

        clashScheme: function() {
            return this.schemeFromDegrees([0, 90, 270]);
        },

        tetradicScheme: function() {
            return this.schemeFromDegrees([0, 90, 180, 270]);
        },

        fourToneCWScheme: function() {
            return this.schemeFromDegrees([0, 60, 180, 240]);
        },

        fourToneCCWScheme: function() {
            return this.schemeFromDegrees([0, 120, 180, 300]);
        },

        fiveToneAScheme: function() {
            return this.schemeFromDegrees([0, 115, 155, 205, 245]);
        },

        fiveToneBScheme: function() {
            return this.schemeFromDegrees([0, 40, 90, 130, 245]);
        },

        fiveToneCScheme: function() {
            return this.schemeFromDegrees([0, 50, 90, 205, 320]);
        },

        fiveToneDScheme: function() {
            return this.schemeFromDegrees([0, 40, 155, 270, 310]);
        },

        fiveToneEScheme: function() {
            return this.schemeFromDegrees([0, 115, 230, 270, 320]);
        },

        sixToneCWScheme: function() {
            return this.schemeFromDegrees([0, 30, 120, 150, 240, 270]);
        },

        sixToneCCWScheme: function() {
            return this.schemeFromDegrees([0, 90, 120, 210, 240, 330]);
        },

        neutralScheme: function() {
            return this.schemeFromDegrees([0, 15, 30, 45, 60, 75]);
        },

        analogousScheme: function() {
            return this.schemeFromDegrees([0, 30, 60, 90, 120, 150]);
        },

        fromObject: function(o) {
            if (o.hasOwnProperty('hue') &&
                o.hasOwnProperty('saturation') &&
                o.hasOwnProperty('value')) {
                var hsv = factories.HSV();

                hsv.hue = o.hue;
                hsv.saturation = o.saturation;
                hsv.value = o.value;
                hsv.alpha = o.hasOwnProperty('alpha') ? o.alpha : 1;

                return hsv;
            }
            // nothing matches, not an HSV object
            return null;
        },

        _normalise: function() {
            this.hue %= 360;
            this.saturation = Math.min(Math.max(0, this.saturation), 1);
            this.value = Math.min(Math.max(0, this.value));
            this.alpha = Math.min(1, Math.max(0, this.alpha));
        },

        toRGB: function() {
            this._normalise();

            var rgb = factories.RGB();
            var i;
            var f, p, q, t;

            if (this.saturation === 0) {
                // achromatic (grey)
                rgb.red = this.value;
                rgb.green = this.value;
                rgb.blue = this.value;
                rgb.alpha = this.alpha;
                return rgb;
            }

            var h = this.hue / 60; // sector 0 to 5
            i = Math.floor(h);
            f = h - i; // factorial part of h
            p = this.value * (1 - this.saturation);
            q = this.value * (1 - this.saturation * f);
            t = this.value * (1 - this.saturation * (1 - f));

            switch (i) {
                case 0:
                    rgb.red = this.value;
                    rgb.green = t;
                    rgb.blue = p;
                    break;
                case 1:
                    rgb.red = q;
                    rgb.green = this.value;
                    rgb.blue = p;
                    break;
                case 2:
                    rgb.red = p;
                    rgb.green = this.value;
                    rgb.blue = t;
                    break;
                case 3:
                    rgb.red = p;
                    rgb.green = q;
                    rgb.blue = this.value;
                    break;
                case 4:
                    rgb.red = t;
                    rgb.green = p;
                    rgb.blue = this.value;
                    break;
                default: // case 5:
                    rgb.red = this.value;
                    rgb.green = p;
                    rgb.blue = q;
                    break;
            }

            rgb.alpha = this.alpha;

            return rgb;
        },
        toHSL: function() {
            this._normalise();

            var hsl = factories.HSL();

            hsl.hue = this.hue;
            var l = (2 - this.saturation) * this.value,
                s = this.saturation * this.value;
            if (l && 2 - l) {
                s /= (l <= 1) ? l : 2 - l;
            }
            l /= 2;
            hsl.saturation = s;
            hsl.lightness = l;
            hsl.alpha = this.alpha;

            return hsl;
        },

        toHSV: function() {
            return this.clone();
        }
    });

    registerModel('HSL', {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 1,

        darkenByAmount: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness - val, 0));
        }),

        darkenByRatio: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness * (1 - val), 0));
        }),

        lightenByAmount: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness + val, 0));
        }),

        lightenByRatio: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness * (1 + val), 0));
        }),

        fromObject: function(o) {
            if ("string" == typeof o) {
                return this._fromCSS(o);
            }
            if (o.hasOwnProperty('hue') &&
                o.hasOwnProperty('saturation') &&
                o.hasOwnProperty('lightness')) {
                return this._fromHSL(o);
            }
            // nothing matchs, not an RGB object
        },

        _fromCSS: function(css) {
            var colorGroups = trim(css).match(hsl_hsla_regex);

            // if there is an "a" after "hsl", there must be a fourth parameter and the other way round
            if (!colorGroups || (!!colorGroups[1] + !!colorGroups[5] === 1)) {
                return null;
            }

            var hsl = factories.HSL();
            hsl.hue = (colorGroups[2] % 360 + 360) % 360;
            hsl.saturation = Math.max(0, Math.min(parseInt(colorGroups[3], 10) / 100, 1));
            hsl.lightness = Math.max(0, Math.min(parseInt(colorGroups[4], 10) / 100, 1));
            hsl.alpha = !!colorGroups[5] ? Math.max(0, Math.min(1, parseFloat(colorGroups[6]))) : 1;

            return hsl;
        },

        _fromHSL: function(HSL) {
            var newHSL = factories.HSL();

            newHSL.hue = HSL.hue;
            newHSL.saturation = HSL.saturation;
            newHSL.lightness = HSL.lightness;

            newHSL.alpha = HSL.hasOwnProperty('alpha') ? HSL.alpha : 1;

            return newHSL;
        },

        _normalise: function() {
            this.hue = (this.hue % 360 + 360) % 360;
            this.saturation = Math.min(Math.max(0, this.saturation), 1);
            this.lightness = Math.min(Math.max(0, this.lightness));
            this.alpha = Math.min(1, Math.max(0, this.alpha));
        },

        toHSL: function() {
            return this.clone();
        },
        toHSV: function() {
            this._normalise();

            var hsv = factories.HSV();

            // http://ariya.blogspot.com/2008/07/converting-between-hsl-and-hsv.html
            hsv.hue = this.hue; // H
            var l = 2 * this.lightness,
                s = this.saturation * ((l <= 1) ? l : 2 - l);
            hsv.value = (l + s) / 2; // V
            hsv.saturation = ((2 * s) / (l + s)) || 0; // S
            hsv.alpha = this.alpha;

            return hsv;
        },
        toRGB: function() {
            return this.toHSV().toRGB();
        }
    });

    // Package specific exports

    /* the Color function is a factory for new color objects.
     */
    function Color(o) {
        return color.fromObject(o);
    }
    Color.isValid = function(str) {
        var key, c = Color(str);

        var length = 0;
        for (key in c) {
            if (c.hasOwnProperty(key)) {
                length++;
            }
        }

        return length > 0;
    };
    net.brehaut.Color = Color;
}).call(net.brehaut);

/* Export to CommonJS
 */
if (true) {
    module.exports = net.brehaut.Color;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/ui.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/ui.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.patcher div.box-ui > div.package-ui.package-ui-code {\n  height: 100%;\n  width: 100%;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button.box-ui-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  padding: 0px;\n  margin: 0px;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container {\n  display: flex;\n  flex: 0 0 auto;\n  padding: 4px 5px;\n  width: 100%;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 12px;\n  text-align: left;\n  margin: 0px;\n  overflow-wrap: break-word;\n  cursor: default;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container:first-child {\n  border-top-width: 4px;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container:last-child {\n  border-bottom-width: 4px;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container > span {\n  position: relative;\n  word-break: break-all;\n  width: 100%;\n  line-height: 14px;\n  font-weight: normal;\n  color: black;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container > span.editing {\n  pointer-events: auto;\n  cursor: text;\n  user-select: auto;\n  -webkit-user-select: auto;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container > span:empty::before {\n  content: \"​\";\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container > span::selection {\n  background-color: #004eff;\n  color: white;\n}\n.patcher div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container i.icon {\n  line-height: 14px;\n}\n.patcher div.box-ui > div.package-ui.package-ui-menu > .dropdown {\n  user-select: none;\n  -webkit-user-select: none;\n  font-size: 12px;\n  padding: 4px 15px 4px 5px;\n  min-height: auto;\n}\n.patcher div.box-ui > div.package-ui.package-ui-menu > .dropdown > .dropdown.icon {\n  padding: 5px 5px;\n}\n.patcher div.box-ui > div.package-ui.package-ui-menu > .dropdown > .menu > .item {\n  user-select: none;\n  -webkit-user-select: none;\n  font-size: 12px;\n  padding: 4px 5px !important;\n}\n.patcher div.box-ui > div.package-ui.package-ui-menu > .dropdown > .menu > .item.active {\n  font-weight: 600;\n}\n.patcher div.box-ui > div.package-ui.package-ui-preset .preset-bubble:hover {\n  box-shadow: inset rgba(255, 255, 255, 0.5) 0px 0px 2px 2px;\n}\n.patcher div.box-ui > div.package-ui.package-ui-preset .preset-hovered {\n  position: absolute;\n  overflow: hidden;\n  display: flex;\n  top: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.patcher div.box-ui > div.package-ui.package-ui-preset .preset-hovered > span {\n  margin: 0px 4px;\n}\n\n.patcher.unlocked div.box.selected > div.box-ui > div.package-ui.box-ui-button:hover, .patcher.unlocked div.box.selected > div.box-ui > div.package-ui.box-ui-button:active {\n  background-color: #e0e1e2;\n}\n.patcher.unlocked div.box.selected > div.box-ui > div.package-ui.box-ui-button > .box-ui-text-container {\n  pointer-events: auto;\n}\n.patcher.unlocked div.box.selected > div.box-ui > div.package-ui > span {\n  pointer-events: auto;\n}", "",{"version":3,"sources":["webpack://./src/ui/ui.scss"],"names":[],"mappings":"AAAA,gBAAgB;AACZ;EACI,YAAA;EACA,WAAA;AACR;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;AADZ;AAIQ;EACI,aAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;AAFZ;AAIY;EACI,qBAAA;AAFhB;AAKY;EACI,wBAAA;AAHhB;AAMY;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;AAJhB;AAMgB;EACI,oBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;AAJpB;AAOgB;EACI,YAAA;AALpB;AAQgB;EACI,yBAAA;EACA,YAAA;AANpB;AAUY;EACI,iBAAA;AARhB;AAcQ;EACI,iBAAA;EACA,yBAAA;EACA,eAAA;EACA,yBAAA;EACA,gBAAA;AAZZ;AAcY;EACI,gBAAA;AAZhB;AAeY;EACI,iBAAA;EACA,yBAAA;EACA,eAAA;EACA,2BAAA;AAbhB;AAegB;EACI,gBAAA;AAbpB;AAoBQ;EACI,0DAAA;AAlBZ;AAqBQ;EACI,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,MAAA;EACA,0CAAA;AAnBZ;AAqBY;EACI,eAAA;AAnBhB;;AA4BQ;EAEI,yBAAA;AA1BZ;AA6BQ;EACI,oBAAA;AA3BZ;AA+BI;EACI,oBAAA;AA7BR","sourcesContent":[".patcher div.box-ui>div.package-ui {\n    &.package-ui-code {\n        height: 100%;\n        width: 100%;\n    }\n\n    &.box-ui-button {\n        &.box-ui-container {\n            display: flex;\n            flex-direction: column;\n            height: 100%;\n            overflow: auto;\n            padding: 0px;\n            margin: 0px;\n        }\n\n        &>.box-ui-text-container {\n            display: flex;\n            flex: 0 0 auto;\n            padding: 4px 5px;\n            width: 100%;\n            font-family: 'Roboto Mono', monospace;\n            font-size: 12px;\n            text-align: left;\n            margin: 0px;\n            overflow-wrap: break-word;\n            cursor: default;\n            user-select: none;\n            -webkit-user-select: none;\n\n            &:first-child {\n                border-top-width: 4px;\n            }\n\n            &:last-child {\n                border-bottom-width: 4px;\n            }\n\n            &>span {\n                position: relative;\n                word-break: break-all;\n                width: 100%;\n                line-height: 14px;\n                font-weight: normal;\n                color: black;\n\n                &.editing {\n                    pointer-events: auto;\n                    cursor: text;\n                    user-select: auto;\n                    -webkit-user-select: auto;\n                }\n\n                &:empty::before {\n                    content: \"\\200b\";\n                }\n\n                &::selection {\n                    background-color: #004eff;\n                    color: white;\n                }\n            }\n\n            i.icon {\n                line-height: 14px;\n            }\n        }\n    }\n\n    &.package-ui-menu {\n        &>.dropdown {\n            user-select: none;\n            -webkit-user-select: none;\n            font-size: 12px;\n            padding: 4px 15px 4px 5px;\n            min-height: auto;\n\n            &>.dropdown.icon {\n                padding: 5px 5px;\n            }\n\n            &>.menu>.item {\n                user-select: none;\n                -webkit-user-select: none;\n                font-size: 12px;\n                padding: 4px 5px !important;\n\n                &.active {\n                    font-weight: 600;\n                }\n            }\n        }\n    }\n\n    &.package-ui-preset {\n        & .preset-bubble:hover {\n            box-shadow: inset rgba(255, 255, 255, 0.5) 0px 0px 2px 2px;\n        }\n\n        & .preset-hovered {\n            position: absolute;\n            overflow: hidden;\n            display: flex;\n            top: 0;\n            background-color: rgba(255, 255, 255, 0.5);\n\n            &>span {\n                margin: 0px 4px;\n            }\n        }\n    }\n}\n\n.patcher.unlocked div.box.selected>div.box-ui>div.package-ui {\n    &.box-ui-button {\n\n        &:hover,\n        &:active {\n            background-color: #e0e1e2;\n        }\n\n        &>.box-ui-text-container {\n            pointer-events: auto;\n        }\n    }\n\n    &>span {\n        pointer-events: auto;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../../../frontend/src/core/message.ts":
/*!*********************************************!*\
  !*** ../../../frontend/src/core/message.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "isMessage": () => (/* binding */ isMessage),
/* harmony export */   "extractFirst": () => (/* binding */ extractFirst)
/* harmony export */ });
class Message extends Array {
  static from(tokens) {
    const newArr = new Message();
    for (let i = 0; i < tokens.length; i++) {
      newArr[i] = tokens[i];
    }
    return newArr;
  }
  startsWith(value) {
    if (this.length) {
      return this[0] === value;
    }
    return false;
  }
  endsWith(value) {
    if (this.length) {
      return this[this.length - 1] === value;
    }
    return false;
  }
  arithmetic(op) {
    return (other) => {
      const result = new Message();
      const minLength = Math.min(this.length, other.length);
      for (let i = 0; i < minLength; i++) {
        if (typeof this[i] === "number" && typeof other[i] === "number") {
          result.push(op(this[i], other[i]));
        } else {
          result.push(this[i]);
        }
      }
      return result;
    };
  }
}
function isMessage(value) {
  return value instanceof Message;
}
function extractFirst(data) {
  if (data instanceof Message || data instanceof Array) {
    return data[0];
  } else {
    return data;
  }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "author": () => (/* binding */ author),
/* harmony export */   "license": () => (/* binding */ license),
/* harmony export */   "keywords": () => (/* binding */ keywords),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "jspatcher": () => (/* binding */ jspatcher),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _package_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-info */ "./src/package-info.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const name = _package_info__WEBPACK_IMPORTED_MODULE_0__["default"].name.split("/").pop().replace(/^package-/, "");
const { author, license, keywords, version, description, jspatcher } = _package_info__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__spreadValues({ name, author, license, keywords, version, description }, jspatcher));


/***/ }),

/***/ "./src/objects/base-live.ts":
/*!**********************************!*\
  !*** ./src/objects/base-live.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveObject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _ui_base_live__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/base-live */ "./src/ui/base-live.tsx");



;
class LiveObject extends _sdk__WEBPACK_IMPORTED_MODULE_1__.BaseObject {
  constructor() {
    super(...arguments);
    this.state = { value: 0 };
    this._ = { displayValue: "0" };
  }
  toValidValue(value) {
    const min = this.getProp("min");
    const max = this.getProp("max");
    const step = this.getProp("step");
    const v = Math.min(max, Math.max(min, value));
    return min + Math.floor((v - min) / step) * step;
  }
  toDisplayValue(value) {
    const { type, unitStyle, units, enums } = this.props;
    return (0,_ui_base_live__WEBPACK_IMPORTED_MODULE_2__.getDisplayValue)(value, type, unitStyle, units, enums);
  }
  validateValue(valueIn, id) {
    const value = this.toValidValue(valueIn || 0);
    if (value === this.state.value)
      return;
    this.setState({ value }, id);
    this._.displayValue = this.toDisplayValue(this.state.value);
  }
  onChangeFromUI(e) {
    this.emit("changeFromUI", e);
  }
  subscribe() {
    super.subscribe();
    this.on("updateProps", (props) => {
      if (typeof props.max !== "undefined" || typeof props.min !== "undefined" || typeof props.step !== "undefined") {
        const lastValue = this.state.value;
        this.validateValue(this.state.value);
        if (lastValue !== this.state.value)
          this.updateUI({ value: this.state.value });
      }
    });
  }
}
LiveObject.package = _index__WEBPACK_IMPORTED_MODULE_0__.name;
LiveObject.author = _index__WEBPACK_IMPORTED_MODULE_0__.author;
LiveObject.version = _index__WEBPACK_IMPORTED_MODULE_0__.version;
LiveObject.description = _index__WEBPACK_IMPORTED_MODULE_0__.description;
LiveObject.props = {
  min: {
    type: "number",
    default: 0,
    description: "Minimum value",
    isUIState: true
  },
  max: {
    type: "number",
    default: 127,
    description: "Maximum value",
    isUIState: true
  },
  step: {
    type: "number",
    default: 1,
    description: "Value change step",
    isUIState: true
  },
  type: {
    type: "enum",
    enums: ["enum", "float", "int"],
    default: "int",
    description: "Value type",
    isUIState: true
  },
  enums: {
    type: "object",
    default: [""],
    description: "Enum values",
    isUIState: true
  },
  active: {
    type: "boolean",
    default: true,
    description: "Active state",
    isUIState: true
  },
  focus: {
    type: "boolean",
    default: false,
    description: "Focus state",
    isUIState: true
  },
  shortName: {
    type: "string",
    default: "",
    description: "Short name to display",
    isUIState: true
  },
  longName: {
    type: "string",
    default: "",
    description: "Long name to display",
    isUIState: true
  },
  unitStyle: {
    type: "enum",
    enums: ["float", "int", "time", "hertz", "decibel", "%", "pan", "semitones", "midi", "custom", "native"],
    default: "int",
    description: "Style of unit to display",
    isUIState: true
  },
  units: {
    type: "string",
    default: "",
    description: "If unitStyle set to custom, display this as unit",
    isUIState: true
  },
  exponent: {
    type: "number",
    default: 0,
    description: "UI modulation bpf, 0 for linear",
    isUIState: true
  },
  speedLim: {
    type: "number",
    default: 16,
    description: "Value output speed limit in ms",
    isUIState: true
  },
  frameRate: {
    type: "number",
    default: 60,
    description: "UI refresh rate",
    isUIState: true
  }
};


/***/ }),

/***/ "./src/objects/base.ts":
/*!*****************************!*\
  !*** ./src/objects/base.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIObject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");


class UIObject extends _sdk__WEBPACK_IMPORTED_MODULE_1__.BaseObject {
}
UIObject.package = _index__WEBPACK_IMPORTED_MODULE_0__.name;
UIObject.author = _index__WEBPACK_IMPORTED_MODULE_0__.author;
UIObject.version = _index__WEBPACK_IMPORTED_MODULE_0__.version;
UIObject.description = _index__WEBPACK_IMPORTED_MODULE_0__.description;


/***/ }),

/***/ "./src/objects/button-live.ts":
/*!************************************!*\
  !*** ./src/objects/button-live.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveButton)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _ui_button_live__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button-live */ "./src/ui/button-live.tsx");
/* harmony import */ var _base_live__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-live */ "./src/objects/base-live.ts");



class LiveButton extends _base_live__WEBPACK_IMPORTED_MODULE_2__["default"] {
  subscribe() {
    super.subscribe();
    const validateAndUpdateUI = (value = 0, id) => {
      this.validateValue(value, id);
      this.updateUI({ value: this.state.value });
    };
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
      validateAndUpdateUI(0);
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        validateAndUpdateUI(1);
        this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
      }
    });
    this.on("changeFromUI", ({ value }) => {
      validateAndUpdateUI(value);
      if (value)
        this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
    });
    this.on("updateState", ({ state: { value }, id }) => {
      validateAndUpdateUI(value, id);
      if (value)
        this.outlet(0, new _sdk__WEBPACK_IMPORTED_MODULE_0__.Bang());
    });
  }
}
LiveButton.description = "Button";
LiveButton.inlets = [{
  isHot: true,
  type: "anything",
  description: "Output a bang when anything is received."
}];
LiveButton.outlets = [{
  type: "bang",
  description: "Bang"
}];
LiveButton.props = {
  shortName: {
    type: "string",
    default: "live.button",
    description: "Short name to display",
    isUIState: true
  },
  longName: {
    type: "string",
    default: "live.button",
    description: "Long name to display",
    isUIState: true
  },
  max: {
    type: "number",
    default: 1,
    description: "Maximum value",
    isUIState: true
  },
  bgColor: {
    type: "color",
    default: "rgba(90, 90, 90, 1)",
    description: "Background color (inactive)",
    isUIState: true
  },
  activeBgColor: {
    type: "color",
    default: "rgba(195, 195, 195, 1)",
    description: "Background color (active)",
    isUIState: true
  },
  bgOnColor: {
    type: "color",
    default: "rgba(195, 195, 195, 1)",
    description: "Background color (on / inactive)",
    isUIState: true
  },
  activeBgOnColor: {
    type: "color",
    default: "rgba(109, 215, 255, 1)",
    description: "Background color (on / active)",
    isUIState: true
  },
  borderColor: {
    type: "color",
    default: "rgba(80, 80, 80, 1)",
    description: "Border color (unfocus)",
    isUIState: true
  },
  focusBorderColor: {
    type: "color",
    default: "rgba(80, 80, 80, 1)",
    description: "Border color (focus)",
    isUIState: true
  }
};
LiveButton.docs = "ui/docs/button.html";
LiveButton.UI = _ui_button_live__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/objects/message.ts":
/*!********************************!*\
  !*** ./src/objects/message.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ message)
/* harmony export */ });
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/objects/base.ts");
/* harmony import */ var _ui_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/message */ "./src/ui/message.tsx");




function splitMessages(text) {
  let messages = [];
  let last_separator = 0;
  let mode = "message";
  for (let i = 0; i < text.length; i++) {
    if (mode === "message") {
      if (text[i] == ",") {
        messages.push(text.slice(last_separator, i).trim());
        last_separator = i + 1;
        i += 1;
      } else if (text[i] === '"') {
        mode = "string";
      }
    } else {
      let escaped = i > 0 && text[i - 1] === "\\";
      if (!escaped && text[i] === '"') {
        mode = "message";
      }
    }
  }
  messages.push(text.slice(last_separator).trim());
  return messages;
}
function isWhitespace(text) {
  return "\n\r	 ".includes(text);
}
function tokenizeMessage(text) {
  let tokens = [];
  let last_whitespace = 0;
  let mode = "message";
  for (let i = 0; i < text.length; i++) {
    if (mode === "message") {
      let last_not_space = i > 0 && !isWhitespace(text[i - 1]);
      if (last_not_space && isWhitespace(text[i])) {
        tokens.push(text.slice(last_whitespace, i).trim());
        last_whitespace = i;
      } else if (text[i] === '"') {
        mode = "string";
      }
    } else {
      let escaped = i > 0 && text[i - 1] === "\\";
      if (!escaped && text[i] === '"') {
        mode = "message";
      }
    }
  }
  if (!isWhitespace(text[text.length - 1]))
    tokens.push(text.slice(last_whitespace).trim());
  for (let i = 0; i < tokens.length; i++) {
    let length = tokens[i].length;
    let start = tokens[i][0] === '"' ? 1 : 0;
    let end = tokens[i][length - 1] === '"' ? length - 1 : length;
    tokens[i] = tokens[i].slice(start, end).replace('\\"', '"');
  }
  let output = _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message.from(tokens.map((value) => {
    const num = Number(value);
    return isNaN(num) ? value : num;
  }));
  return output;
}
const FORMATTER_REGEX = /^\$[1-9][0-9]*$/;
function extractFormatters(message2) {
  let formatters = [];
  for (let i = 0; i < message2.length; i++) {
    const token = message2[i];
    if (typeof token === "string" && FORMATTER_REGEX.test(token)) {
      let inlet_index = parseInt(token.slice(1)) || 0;
      formatters.push({ inlet_index, position: i });
    }
  }
  return formatters;
}
const _message = class extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this._ = { buffer: [], editing: false, formatters: [] };
    this.handleUpdateArgs = (args) => {
      if (typeof args[0] !== "undefined") {
        this.setData({ text: this.stringify(args[0]) });
        this._.buffer = this.parse(args[0]);
        this._.formatters = [];
        if (Array.isArray(this._.buffer)) {
          for (let i = 0; i < this._.buffer.length; i++) {
            this._.formatters.push(...extractFormatters(this._.buffer[i]).map(({ inlet_index, position }) => {
              return { inlet_index, position, message_index: i };
            }));
          }
        }
      } else {
        this._.buffer = [];
        this._.formatters = [];
      }
      this.updateUI({ text: this.data.text });
    };
    this.produceOutput = (data) => {
      if (data && !(0,_sdk__WEBPACK_IMPORTED_MODULE_1__.isBang)(data) && this._.formatters.length) {
        if (data instanceof _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_0__.Message) {
          for (let i = 0; i < data.length; i++)
            this.formatMessage(i + 1, (message2, pos) => this._.buffer[message2][pos] = data[i]);
        } else {
          for (let b = 0; b < this._.buffer.length; b++) {
            this.formatMessage(1, (message2, pos) => this._.buffer[message2][pos] = data);
          }
        }
      }
      this._.buffer.forEach((message2) => this.outlet(0, message2));
    };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = _message.inlets.length;
      this.outlets = 1;
    });
    this.on("postInit", () => {
      const args = this.box.args;
      if (typeof this.data.text === "string")
        this.handleUpdateArgs([this.data.text]);
      else if (typeof args[0] !== "undefined") {
        if (typeof this.data.text !== "string") {
          this.handleUpdateArgs(args);
        }
      } else {
        this.setData({ text: "" });
        this._.buffer = [];
        this._.formatters = [];
      }
    });
    this.on("updateArgs", this.handleUpdateArgs);
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        this.produceOutput(data);
      }
    });
  }
  parse(o) {
    return splitMessages(o).map((m) => tokenizeMessage(m));
  }
  stringify(o) {
    return o.toString();
  }
  formatMessage(target_inlet_index, closure) {
    for (let { inlet_index, message_index, position } of this._.formatters) {
      if (inlet_index === target_inlet_index)
        closure(message_index, position);
    }
  }
};
let message = _message;
message.description = "Message";
message.inlets = [
  {
    isHot: true,
    type: "anything",
    description: "Trigger output the message"
  }
];
message.outlets = [{
  type: "anything",
  description: "Message to send"
}];
message.docs = "ui/docs/message.html";
message.UI = _ui_message__WEBPACK_IMPORTED_MODULE_3__["default"];



/***/ }),

/***/ "./src/objects/number.ts":
/*!*******************************!*\
  !*** ./src/objects/number.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberBox)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _ui_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/number */ "./src/ui/number.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/objects/base.ts");
/* harmony import */ var _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jspatcher/jspatcher/src/core/message */ "../../../frontend/src/core/message.ts");




class NumberBox extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this.state = { value: 0 };
  }
  toValidValue(valueIn) {
    const min = this.getProp("minimum");
    const max = this.getProp("maximum");
    const format = this.getProp("format");
    let value = valueIn || 0;
    if (format !== "Decimal (Floating-Point)")
      value = Math.round(value);
    if (!isNaN(min))
      value = Math.max(min, value);
    if (!isNaN(max))
      value = Math.min(max, value);
    return value;
  }
  validateValue(valueIn, id) {
    const value = this.toValidValue(valueIn);
    if (value === this.state.value)
      return;
    this.setState({ value }, id);
  }
  onChangeFromUI({ value }) {
    this.setState({ value });
    this.outlet(0, value);
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
    });
    this.on("postInit", () => {
      this.validateValue(this.state.value);
      this.updateUI({ value: this.state.value });
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          let value;
          if (data instanceof Array || data instanceof _jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_3__.Message) {
            value = +(0,_jspatcher_jspatcher_src_core_message__WEBPACK_IMPORTED_MODULE_3__.extractFirst)(data);
          } else {
            value = +data;
          }
          this.validateValue(value);
          this.updateUI({ value: this.state.value });
        }
        this.outlet(0, this.state.value);
      }
    });
    this.on("propsUpdated", () => {
      this.validateValue(this.state.value);
      this.updateUI({ value: this.state.value });
    });
    this.on("updateState", ({ state: { value }, id }) => {
      this.validateValue(value, id);
      this.updateUI({ value: this.state.value });
      this.outlet(0, this.state.value);
    });
  }
}
NumberBox.description = "Display and output a number";
NumberBox.inlets = [{
  type: "anything",
  isHot: true,
  description: "Set Displayed Number and Repeat to Output"
}];
NumberBox.outlets = [{
  type: "number",
  description: "Output Incoming or Entered Number"
}];
NumberBox.props = {
  format: {
    type: "enum",
    enums: ["Decimal (Floating-Point)", "Decimal (Integer)", "Hex", "Roland Octal", "Binary", "MIDI", "MIDI (C4)"],
    default: "Decimal (Floating-Point)",
    description: "Sets characteristics of the appearance and behavior of the number box.",
    isUIState: true,
    alwaysSerialize: true
  },
  triangle: {
    type: "boolean",
    default: true,
    description: "Toggles the drawing of a triangular arrow pointing to the number in the number box.",
    isUIState: true
  },
  numDecimalPlaces: {
    type: "number",
    default: 0,
    description: "Number of Decimal Places",
    isUIState: true
  },
  triScale: {
    type: "number",
    default: 1,
    description: "Scales the size of the triangle drawn in the number box.",
    isUIState: true
  },
  bgColor: {
    type: "color",
    default: "rgb(51, 51, 51)",
    description: "Sets the color for the number box object's displayed/unclicked background.",
    isUIState: true
  },
  hTriColor: {
    type: "color",
    default: "rgb(237, 237, 90)",
    description: "Sets the highlight color for the triangle inside the number box object that indicates that the contents are editable.",
    isUIState: true
  },
  textColor: {
    type: "color",
    default: "rgb(247, 247, 247)",
    description: "Sets the color for the number box object's displayed/unclicked number values.",
    isUIState: true
  },
  triColor: {
    type: "color",
    default: "rgb(125, 127, 132)",
    description: "Sets the color for the triangle inside the number box object that indicates that the contents are editable.",
    isUIState: true
  },
  fontFamily: {
    type: "enum",
    enums: ["Lato", "Georgia", "Times New Roman", "Arial", "Tahoma", "Verdana", "Courier New"],
    default: "Lato",
    description: "Font family",
    isUIState: true
  },
  fontSize: {
    type: "number",
    default: 11,
    description: "Text font size",
    isUIState: true
  },
  fontFace: {
    type: "enum",
    enums: ["regular", "bold", "italic", "bold italic"],
    default: "regular",
    description: "Text style",
    isUIState: true
  },
  cantChange: {
    type: "boolean",
    default: false,
    description: "Toggles the ability to disallow changes with the mouse or the computer keyboard.",
    isUIState: true
  },
  outputOnClick: {
    type: "boolean",
    default: false,
    description: "Toggles sending the current value when you click on the number box.",
    isUIState: true
  },
  mouseFilter: {
    type: "boolean",
    default: false,
    description: "Send Value on Mouse Up",
    isUIState: true
  },
  minimum: {
    type: "number",
    default: void 0,
    description: "Sets the minimum value that can be displayed or sent out by the number box.",
    isUIState: true
  },
  maximum: {
    type: "number",
    default: void 0,
    description: "Sets the maximum value that can be displayed or sent out by the number box.",
    isUIState: true
  }
};
NumberBox.docs = "ui/docs/number.html";
NumberBox.UI = _ui_number__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/objects/scope.ts":
/*!******************************!*\
  !*** ./src/objects/scope.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Oscilloscope)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/objects/base.ts");
/* harmony import */ var _ui_scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/scope */ "./src/ui/scope.tsx");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");



class Oscilloscope extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this._ = { node: void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 0;
    });
    this.on("updateProps", (props) => {
      if (this._.node) {
        const { parameters } = this._.node;
        if (props.windowFunction)
          this.applyBPF(parameters.get("windowFunction"), [[["blackman", "hamming", "hann", "triangular"].indexOf(props.windowFunction)]]);
        if (props.fftSize)
          this.applyBPF(parameters.get("fftSize"), [[props.fftSize]]);
        if (props.fftOverlap)
          this.applyBPF(parameters.get("fftOverlap"), [[props.fftOverlap]]);
        if (props.windowSize)
          this.applyBPF(parameters.get("windowSize"), [[props.windowSize]]);
      }
    });
    this.on("postInit", async () => {
      await _sdk__WEBPACK_IMPORTED_MODULE_2__.SpectralAnalyserNode.register(this.audioCtx.audioWorklet);
      this._.node = new _sdk__WEBPACK_IMPORTED_MODULE_2__.SpectralAnalyserNode(this.audioCtx);
      const { parameters } = this._.node;
      this.applyBPF(parameters.get("windowFunction"), [[["blackman", "hamming", "hann", "triangular"].indexOf(this.getProp("windowFunction"))]]);
      this.applyBPF(parameters.get("fftSize"), [[this.getProp("fftSize")]]);
      this.applyBPF(parameters.get("fftOverlap"), [[this.getProp("fftOverlap")]]);
      this.applyBPF(parameters.get("windowSize"), [[this.getProp("windowSize")]]);
      this.disconnectAudioInlet();
      this.inletAudioConnections[0] = { node: this._.node, index: 0 };
      this.connectAudioInlet();
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if ((0,_sdk__WEBPACK_IMPORTED_MODULE_2__.isBang)(data))
          this.updateUI({ paint: {} });
      }
    });
    this.on("destroy", () => {
      if (this._.node)
        this._.node.destroy();
    });
  }
}
Oscilloscope.description = "Oscilloscope visualizer";
Oscilloscope.docs = "ui/docs/scope.html";
Oscilloscope.inlets = [{
  isHot: true,
  type: "signal",
  description: "Signal"
}];
Oscilloscope.props = {
  windowSize: {
    type: "number",
    default: 1024,
    description: "Signal window size"
  },
  fftSize: {
    type: "number",
    default: 1024,
    description: "FFT Size for analysis"
  },
  fftOverlap: {
    type: "number",
    default: 2,
    description: "FFT overlap count (integer)"
  },
  windowFunction: {
    type: "enum",
    enums: ["blackman", "hamming", "hann", "triangular"],
    default: "blackman",
    description: "Window Function aoolied for FFT analysis window"
  },
  continuous: {
    type: "boolean",
    default: true,
    description: "Continuous drawing",
    isUIState: true
  },
  frameRate: {
    type: "number",
    default: 60,
    description: "UI refresh rate",
    isUIState: true
  },
  interleaved: {
    type: "boolean",
    default: false,
    description: "Draw channels seperately",
    isUIState: true
  },
  stablize: {
    type: "boolean",
    default: true,
    description: "Stablize",
    isUIState: true
  },
  range: {
    type: "number",
    default: 1,
    description: "Vertical range",
    isUIState: true
  },
  autoRange: {
    type: "boolean",
    default: true,
    description: "Auto adjust range if > 1",
    isUIState: true
  },
  showStats: {
    type: "boolean",
    default: true,
    description: "Show stats texts",
    isUIState: true
  },
  bgColor: {
    type: "color",
    default: "rgb(40, 40, 40)",
    description: "Background color",
    isUIState: true
  },
  phosphorColor: {
    type: "color",
    default: "hsl(0, 100%, 85%)",
    description: "Phosphor color",
    isUIState: true
  },
  hueOffset: {
    type: "number",
    default: 60,
    description: "Channel Color Hue offset",
    isUIState: true
  },
  textColor: {
    type: "color",
    default: "#DDDD99",
    description: "Info text color",
    isUIState: true
  },
  gridColor: {
    type: "color",
    default: "#404040",
    description: "Grid color",
    isUIState: true
  },
  seperatorColor: {
    type: "color",
    default: "white",
    description: "Channel seperator color",
    isUIState: true
  }
};
Oscilloscope.UI = _ui_scope__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/objects/spectrogram.ts":
/*!************************************!*\
  !*** ./src/objects/spectrogram.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spectrogram)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/objects/base.ts");
/* harmony import */ var _ui_spectrogram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/spectrogram */ "./src/ui/spectrogram.tsx");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");



class Spectrogram extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this._ = { node: void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 0;
    });
    this.on("updateProps", (props) => {
      if (this._.node) {
        const { parameters } = this._.node;
        if (props.windowFunction)
          this.applyBPF(parameters.get("windowFunction"), [[["blackman", "hamming", "hann", "triangular"].indexOf(props.windowFunction)]]);
        if (props.fftSize)
          this.applyBPF(parameters.get("fftSize"), [[props.fftSize]]);
        if (props.fftOverlap)
          this.applyBPF(parameters.get("fftOverlap"), [[props.fftOverlap]]);
        if (props.windowSize)
          this.applyBPF(parameters.get("windowSize"), [[props.windowSize]]);
      }
    });
    this.on("postInit", async () => {
      await _sdk__WEBPACK_IMPORTED_MODULE_2__.SpectralAnalyserNode.register(this.audioCtx.audioWorklet);
      this._.node = new _sdk__WEBPACK_IMPORTED_MODULE_2__.SpectralAnalyserNode(this.audioCtx);
      const { parameters } = this._.node;
      this.applyBPF(parameters.get("windowFunction"), [[["blackman", "hamming", "hann", "triangular"].indexOf(this.getProp("windowFunction"))]]);
      this.applyBPF(parameters.get("fftSize"), [[this.getProp("fftSize")]]);
      this.applyBPF(parameters.get("fftOverlap"), [[this.getProp("fftOverlap")]]);
      this.applyBPF(parameters.get("windowSize"), [[this.getProp("windowSize")]]);
      this.disconnectAudioInlet();
      this.inletAudioConnections[0] = { node: this._.node, index: 0 };
      this.connectAudioInlet();
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if ((0,_sdk__WEBPACK_IMPORTED_MODULE_2__.isBang)(data))
          this.updateUI({ paint: {} });
      }
    });
    this.on("destroy", () => {
      if (this._.node)
        this._.node.destroy();
    });
  }
}
Spectrogram.description = "Spectrogram visualizer";
Spectrogram.docs = "ui/docs/spectrogram.html";
Spectrogram.inlets = [{
  isHot: true,
  type: "signal",
  description: "Signal"
}];
Spectrogram.props = {
  windowSize: {
    type: "number",
    default: 65536,
    description: "Signal window size"
  },
  fftSize: {
    type: "number",
    default: 1024,
    description: "FFT Size for analysis"
  },
  fftOverlap: {
    type: "number",
    default: 2,
    description: "FFT overlap count (integer)"
  },
  windowFunction: {
    type: "enum",
    enums: ["blackman", "hamming", "hann", "triangular"],
    default: "blackman",
    description: "Window Function aoolied for FFT analysis window"
  },
  continuous: {
    type: "boolean",
    default: true,
    description: "Continuous drawing",
    isUIState: true
  },
  frameRate: {
    type: "number",
    default: 60,
    description: "UI refresh rate",
    isUIState: true
  },
  bgColor: {
    type: "color",
    default: "rgb(40, 40, 40)",
    description: "Background color",
    isUIState: true
  },
  gridColor: {
    type: "color",
    default: "#404040",
    description: "Grid color",
    isUIState: true
  },
  seperatorColor: {
    type: "color",
    default: "white",
    description: "Channel seperator color",
    isUIState: true
  }
};
Spectrogram.UI = _ui_spectrogram__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/objects/spectroscope.ts":
/*!*************************************!*\
  !*** ./src/objects/spectroscope.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spectroscope)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/objects/base.ts");
/* harmony import */ var _ui_spectroscope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/spectroscope */ "./src/ui/spectroscope.tsx");
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");



class Spectroscope extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this._ = { node: void 0 };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 0;
    });
    this.on("updateProps", (props) => {
      if (this._.node) {
        const { parameters } = this._.node;
        if (props.windowFunction)
          this.applyBPF(parameters.get("windowFunction"), [[["blackman", "hamming", "hann", "triangular"].indexOf(props.windowFunction)]]);
        if (props.fftSize)
          this.applyBPF(parameters.get("fftSize"), [[props.fftSize]]);
        if (props.fftOverlap)
          this.applyBPF(parameters.get("fftOverlap"), [[props.fftOverlap]]);
        if (props.windowSize)
          this.applyBPF(parameters.get("windowSize"), [[props.windowSize]]);
      }
    });
    this.on("postInit", async () => {
      await _sdk__WEBPACK_IMPORTED_MODULE_2__.SpectralAnalyserNode.register(this.audioCtx.audioWorklet);
      this._.node = new _sdk__WEBPACK_IMPORTED_MODULE_2__.SpectralAnalyserNode(this.audioCtx);
      const { parameters } = this._.node;
      this.applyBPF(parameters.get("windowFunction"), [[["blackman", "hamming", "hann", "triangular"].indexOf(this.getProp("windowFunction"))]]);
      this.applyBPF(parameters.get("fftSize"), [[this.getProp("fftSize")]]);
      this.applyBPF(parameters.get("fftOverlap"), [[this.getProp("fftOverlap")]]);
      this.applyBPF(parameters.get("windowSize"), [[this.getProp("windowSize")]]);
      this.disconnectAudioInlet();
      this.inletAudioConnections[0] = { node: this._.node, index: 0 };
      this.connectAudioInlet();
    });
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if ((0,_sdk__WEBPACK_IMPORTED_MODULE_2__.isBang)(data))
          this.updateUI({ paint: {} });
      }
    });
    this.on("destroy", () => {
      if (this._.node)
        this._.node.destroy();
    });
  }
}
Spectroscope.description = "Spectroscope visualizer";
Spectroscope.docs = "ui/docs/spectroscope.html";
Spectroscope.inlets = [{
  isHot: true,
  type: "signal",
  description: "Signal"
}];
Spectroscope.props = {
  windowSize: {
    type: "number",
    default: 1024,
    description: "Signal window size"
  },
  fftSize: {
    type: "number",
    default: 1024,
    description: "FFT Size for analysis"
  },
  fftOverlap: {
    type: "number",
    default: 2,
    description: "FFT overlap count (integer)"
  },
  windowFunction: {
    type: "enum",
    enums: ["blackman", "hamming", "hann", "triangular"],
    default: "blackman",
    description: "Window Function aoolied for FFT analysis window"
  },
  continuous: {
    type: "boolean",
    default: true,
    description: "Continuous drawing",
    isUIState: true
  },
  frameRate: {
    type: "number",
    default: 60,
    description: "UI refresh rate",
    isUIState: true
  },
  bgColor: {
    type: "color",
    default: "rgb(40, 40, 40)",
    description: "Background color",
    isUIState: true
  },
  fgColor: {
    type: "color",
    default: "hsl(0, 100%, 85%)",
    description: "Foreground color",
    isUIState: true
  },
  hueOffset: {
    type: "number",
    default: 60,
    description: "Channel Color Hue offset",
    isUIState: true
  },
  gridColor: {
    type: "color",
    default: "#404040",
    description: "Grid color",
    isUIState: true
  },
  seperatorColor: {
    type: "color",
    default: "white",
    description: "Channel seperator color",
    isUIState: true
  }
};
Spectroscope.UI = _ui_spectroscope__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/objects/toggle.ts":
/*!*******************************!*\
  !*** ./src/objects/toggle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveToggle)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _ui_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/toggle */ "./src/ui/toggle.tsx");
/* harmony import */ var _base_live__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-live */ "./src/objects/base-live.ts");



class LiveToggle extends _base_live__WEBPACK_IMPORTED_MODULE_2__["default"] {
  subscribe() {
    super.subscribe();
    const validateAndUpdateUI = (value = 0, id) => {
      this.validateValue(value, id);
      this.updateUI({ value: this.state.value });
    };
    const handleUpdateArgs = (args) => {
      if (typeof args[0] === "number") {
        validateAndUpdateUI(args[0]);
      }
    };
    this.on("preInit", () => {
      this.inlets = 1;
      this.outlets = 1;
      validateAndUpdateUI(this.args[0] || 0);
    });
    this.on("updateArgs", handleUpdateArgs);
    this.on("inlet", ({ data, inlet }) => {
      if (inlet === 0) {
        if (!(0,_sdk__WEBPACK_IMPORTED_MODULE_0__.isBang)(data)) {
          let number = +data;
          if (number !== 0)
            number = 1;
          if (number != this.state.value) {
            validateAndUpdateUI(+data);
            this.outlet(0, this.state.value);
          }
        } else {
          this.state.value = this.state.value === 0 ? 1 : 0;
          this.updateUI({ value: this.state.value });
          this.outlet(0, this.state.value);
        }
      }
    });
    this.on("changeFromUI", ({ value }) => {
      this.validateValue(value);
      this.outletAll([this.state.value]);
    });
    this.on("updateState", ({ state: { value }, id }) => {
      validateAndUpdateUI(value, id);
      this.outletAll([this.state.value]);
    });
  }
}
LiveToggle.description = "Toggle";
LiveToggle.inlets = [{
  isHot: true,
  type: "anything",
  description: "Set the value with 1 or 0, or toggle with a bang."
}];
LiveToggle.outlets = [{
  type: "number",
  description: "Number value"
}];
LiveToggle.args = [{
  type: "number",
  optional: true,
  default: 0,
  description: "Initial value"
}];
LiveToggle.props = {
  max: {
    type: "number",
    default: 1,
    description: "Maximum value",
    isUIState: true
  },
  bgColor: {
    type: "color",
    default: "rgba(90, 90, 90, 1)",
    description: "Background color (inactive)",
    isUIState: true
  },
  activeBgColor: {
    type: "color",
    default: "rgba(195, 195, 195, 1)",
    description: "Background color (active)",
    isUIState: true
  },
  bgOnColor: {
    type: "color",
    default: "rgba(195, 195, 195, 1)",
    description: "Background color (on / inactive)",
    isUIState: true
  },
  activeBgOnColor: {
    type: "color",
    default: "rgba(109, 215, 255, 1)",
    description: "Background color (on / active)",
    isUIState: true
  },
  borderColor: {
    type: "color",
    default: "rgba(80, 80, 80, 1)",
    description: "Border color (unfocus)",
    isUIState: true
  },
  focusBorderColor: {
    type: "color",
    default: "rgba(80, 80, 80, 1)",
    description: "Border color (focus)",
    isUIState: true
  }
};
LiveToggle.docs = "ui/docs/toggle.html";
LiveToggle.UI = _ui_toggle__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/package-info.ts":
/*!*****************************!*\
  !*** ./src/package-info.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/ (_package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_package_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_package_json__WEBPACK_IMPORTED_MODULE_0__, 2))));


/***/ }),

/***/ "./src/sdk.ts":
/*!********************!*\
  !*** ./src/sdk.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "React": () => (/* binding */ React),
/* harmony export */   "ReactDOM": () => (/* binding */ ReactDOM),
/* harmony export */   "SemanticUI": () => (/* binding */ SemanticUI),
/* harmony export */   "PatcherAudio": () => (/* binding */ PatcherAudio),
/* harmony export */   "OperableAudioBuffer": () => (/* binding */ OperableAudioBuffer),
/* harmony export */   "TempTextFile": () => (/* binding */ TempTextFile),
/* harmony export */   "PatcherText": () => (/* binding */ PatcherText),
/* harmony export */   "TextEditor": () => (/* binding */ TextEditor),
/* harmony export */   "TextEditorUI": () => (/* binding */ TextEditorUI),
/* harmony export */   "Patcher": () => (/* binding */ Patcher),
/* harmony export */   "PatcherEditor": () => (/* binding */ PatcherEditor),
/* harmony export */   "PatcherEditorUI": () => (/* binding */ PatcherEditorUI),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "BaseObject": () => (/* binding */ BaseObject),
/* harmony export */   "DefaultObject": () => (/* binding */ DefaultObject),
/* harmony export */   "BaseUI": () => (/* binding */ BaseUI),
/* harmony export */   "DefaultUI": () => (/* binding */ DefaultUI),
/* harmony export */   "CanvasUI": () => (/* binding */ CanvasUI),
/* harmony export */   "CodeUI": () => (/* binding */ CodeUI),
/* harmony export */   "DefaultPopupUI": () => (/* binding */ DefaultPopupUI),
/* harmony export */   "CodePopupUI": () => (/* binding */ CodePopupUI),
/* harmony export */   "DOMUI": () => (/* binding */ DOMUI),
/* harmony export */   "generateDefaultObject": () => (/* binding */ generateDefaultObject),
/* harmony export */   "generateRemoteObject": () => (/* binding */ generateRemoteObject),
/* harmony export */   "generateRemotedObject": () => (/* binding */ generateRemotedObject),
/* harmony export */   "Bang": () => (/* binding */ Bang),
/* harmony export */   "isBang": () => (/* binding */ isBang),
/* harmony export */   "TransmitterNode": () => (/* binding */ TransmitterNode),
/* harmony export */   "TemporalAnalyserNode": () => (/* binding */ TemporalAnalyserNode),
/* harmony export */   "SpectralAnalyserNode": () => (/* binding */ SpectralAnalyserNode),
/* harmony export */   "MathUtils": () => (/* binding */ MathUtils),
/* harmony export */   "BufferUtils": () => (/* binding */ BufferUtils),
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "getReactMonacoEditor": () => (/* binding */ getReactMonacoEditor)
/* harmony export */ });
const sdk = globalThis.jspatcherEnv.sdk;
const {
  React,
  ReactDOM,
  SemanticUI,
  PatcherAudio,
  OperableAudioBuffer,
  TempTextFile,
  PatcherText,
  TextEditor,
  TextEditorUI,
  Patcher,
  PatcherEditor,
  PatcherEditorUI,
  Box,
  Line,
  BaseObject,
  DefaultObject,
  BaseUI,
  DefaultUI,
  CanvasUI,
  CodeUI,
  DefaultPopupUI,
  CodePopupUI,
  DOMUI,
  generateDefaultObject,
  generateRemoteObject,
  generateRemotedObject,
  Bang,
  isBang,
  TransmitterNode,
  TemporalAnalyserNode,
  SpectralAnalyserNode,
  MathUtils,
  BufferUtils,
  Utils,
  getReactMonacoEditor
} = sdk;


/***/ }),

/***/ "./src/ui/base-live.tsx":
/*!******************************!*\
  !*** ./src/ui/base-live.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDisplayValue": () => (/* binding */ getDisplayValue),
/* harmony export */   "default": () => (/* binding */ LiveObjectUI)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

const getDisplayValue = (value, type, unitstyle, units, enums) => {
  if (type === "enum")
    return enums[value];
  if (unitstyle === "int")
    return value.toFixed(0);
  if (unitstyle === "float")
    return value.toFixed(2);
  if (unitstyle === "time")
    return value.toFixed(type === "int" ? 0 : 2) + " ms";
  if (unitstyle === "hertz")
    return value.toFixed(type === "int" ? 0 : 2) + " Hz";
  if (unitstyle === "decibel")
    return value.toFixed(type === "int" ? 0 : 2) + " dB";
  if (unitstyle === "%")
    return value.toFixed(type === "int" ? 0 : 2) + " %";
  if (unitstyle === "pan")
    return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
  if (unitstyle === "semitones")
    return value.toFixed(type === "int" ? 0 : 2) + " st";
  if (unitstyle === "midi")
    return _sdk__WEBPACK_IMPORTED_MODULE_0__.MathUtils.toMIDI(value);
  if (unitstyle === "custom")
    return value.toFixed(type === "int" ? 0 : 2) + " " + units;
  if (unitstyle === "native")
    return value.toFixed(type === "int" ? 0 : 2);
  return "N/A";
};
class LiveObjectUI extends _sdk__WEBPACK_IMPORTED_MODULE_0__.CanvasUI {
  constructor() {
    super(...arguments);
    this.$changeTimer = -1;
    this.state = __spreadProps(__spreadValues({}, this.state), {
      value: this.object.state.value
    });
    this.handleKeyDown = (e) => {
    };
    this.handleKeyUp = (e) => {
    };
    this.handleTouchStart = (e) => {
      this.canvas.focus();
      const rect = this.canvas.getBoundingClientRect();
      let prevX = e.touches[0].clientX;
      let prevY = e.touches[0].clientY;
      const fromX = prevX - rect.left;
      const fromY = prevY - rect.top;
      const prevValue = this.state.value;
      this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
      const handleTouchMove = (e2) => {
        e2.preventDefault();
        const clientX = e2.changedTouches[0].clientX;
        const clientY = e2.changedTouches[0].clientY;
        const movementX = clientX - prevX;
        const movementY = clientY - prevY;
        prevX = clientX;
        prevY = clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX, movementY, originalEvent: e2 });
      };
      const handleTouchEnd = (e2) => {
        e2.preventDefault();
        const x = e2.changedTouches[0].clientX - rect.left;
        const y = e2.changedTouches[0].clientY - rect.top;
        this.handlePointerUp({ x, y, originalEvent: e2 });
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });
    };
    this.handleWheel = (e) => {
    };
    this.handleClick = (e) => {
    };
    this.handleMouseDown = (e) => {
      e.preventDefault();
      this.canvas.focus();
      const rect = this.canvas.getBoundingClientRect();
      const fromX = e.clientX - rect.left;
      const fromY = e.clientY - rect.top;
      const prevValue = this.state.value;
      this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
      const handleMouseMove = (e2) => {
        e2.preventDefault();
        const x = e2.clientX - rect.left;
        const y = e2.clientY - rect.top;
        this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX: e2.movementX, movementY: e2.movementY, originalEvent: e2 });
      };
      const handleMouseUp = (e2) => {
        e2.preventDefault();
        const x = e2.clientX - rect.left;
        const y = e2.clientY - rect.top;
        this.handlePointerUp({ x, y, originalEvent: e2 });
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
    this.handleMouseOver = (e) => {
    };
    this.handleMouseOut = (e) => {
    };
    this.handleContextMenu = (e) => {
    };
    this.handlePointerDown = (e) => {
    };
    this.handlePointerDrag = (e) => {
    };
    this.handlePointerUp = (e) => {
    };
    this.handleFocusIn = (e) => this.setState({ focus: true });
    this.handleFocusOut = (e) => this.setState({ focus: false });
    this.changeCallback = () => {
      this.props.object.onChangeFromUI({ value: this.state.value, displayValue: this.displayValue });
      this.$changeTimer = -1;
    };
  }
  get distance() {
    return LiveObjectUI.getDistance(this.state);
  }
  static getDistance(state) {
    const { type, max, min, value, exponent, enums } = state;
    const normalized = type === "enum" ? Math.max(0, Math.min(enums.length - 1, value)) / (enums.length - 1) : (Math.max(min, Math.min(max, value)) - min) / (max - min);
    return _sdk__WEBPACK_IMPORTED_MODULE_0__.MathUtils.iNormExp(normalized || 0, exponent);
  }
  get stepsCount() {
    const { type, max, min, step, enums } = this.state;
    if (type === "enum")
      return enums.length - 1;
    if (type === "float")
      return Math.min(Number.MAX_SAFE_INTEGER, Math.floor((max - min) / step));
    return Math.min(Math.floor((max - min) / (Math.round(step) || 1)), max - min);
  }
  get displayValue() {
    const { value, type, unitStyle, units, enums } = this.state;
    return getDisplayValue(value, type, unitStyle, units, enums);
  }
  setValueToOutput(value) {
    this.setState({ value });
    this.scheduleChangeHandler();
  }
  scheduleChangeHandler() {
    if (this.$changeTimer === -1)
      this.$changeTimer = window.setTimeout(this.changeCallback, this.state.speedLim);
  }
  paint() {
  }
  render() {
    return /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_sdk__WEBPACK_IMPORTED_MODULE_0__.BaseUI, __spreadValues({}, this.props), /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement("canvas", __spreadValues({
      ref: this.refCanvas,
      className: ["live-component", this.className].join(" "),
      style: { position: "absolute", display: "inline-block", width: "100%", height: "100%" },
      tabIndex: 1,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleKeyUp,
      onTouchStart: this.handleTouchStart,
      onWheel: this.handleWheel,
      onClick: this.handleClick,
      onMouseDown: this.handleMouseDown,
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut,
      onContextMenu: this.handleContextMenu,
      onFocus: this.handleFocusIn,
      onBlur: this.handleFocusOut
    }, this.props.canvasProps)));
  }
}


/***/ }),

/***/ "./src/ui/button-live.tsx":
/*!********************************!*\
  !*** ./src/ui/button-live.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveButtonUI)
/* harmony export */ });
/* harmony import */ var _ui_base_live__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/base-live */ "./src/ui/base-live.tsx");

const _LiveButtonUI = class extends _ui_base_live__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.className = "live-button";
    this.inTouch = false;
    this.$resetTimer = -1;
    this.resetCallback = () => {
      this.setValueToOutput(0);
      this.$resetTimer = -1;
    };
    this.handlePointerDown = () => {
      this.inTouch = true;
      this.setValueToOutput(1);
    };
    this.handlePointerUp = () => {
      this.inTouch = false;
      this.setValueToOutput(0);
    };
  }
  componentDidMount() {
    super.componentDidMount();
    this.box.setWidth(_LiveButtonUI.defaultSize[0]);
    this.box.setHeight(_LiveButtonUI.defaultSize[1]);
  }
  paint() {
    if (this.$resetTimer !== -1) {
      window.clearTimeout(this.$resetTimer);
      this.resetCallback();
    }
    const {
      active,
      focus,
      bgColor,
      activeBgColor,
      bgOnColor,
      activeBgOnColor,
      borderColor,
      focusBorderColor,
      value
    } = this.state;
    const ctx = this.ctx;
    if (!ctx)
      return;
    const borderWidth = 1;
    const [width, height] = this.fullSize();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = borderWidth;
    const buttonBgColor = active ? value ? activeBgOnColor : activeBgColor : value ? bgOnColor : bgColor;
    const buttonBorderColor = focus ? focusBorderColor : borderColor;
    ctx.fillStyle = buttonBgColor;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.5 - 2 * borderWidth, height * 0.5 - 2 * borderWidth, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = buttonBorderColor;
    ctx.stroke();
    if (value && !this.inTouch)
      this.$resetTimer = window.setTimeout(this.resetCallback, 100);
  }
};
let LiveButtonUI = _LiveButtonUI;
LiveButtonUI.defaultSize = [30, 30];



/***/ }),

/***/ "./src/ui/button.tsx":
/*!***************************!*\
  !*** ./src/ui/button.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonUI)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

class ButtonUI extends _sdk__WEBPACK_IMPORTED_MODULE_0__.BaseUI {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues({}, this.state), { loading: false, text: this.props.object.data.text });
    this.refSpan = _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.handleChanged = (text) => {
    };
    this.handleMouseDown = (e) => this.props.editing ? e.stopPropagation() : null;
    this.handleClickSpan = (e) => this.props.editing ? e.stopPropagation() : null;
    this.handleClick = (e) => {
    };
    this.handleKeyDown = (e) => {
      if (!this.props.editing)
        return;
      if (e.key === "Enter") {
        e.preventDefault();
        return;
      }
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    };
    this.handlePaste = (e) => {
      if (!this.props.editing)
        return;
      e.preventDefault();
      document.execCommand("insertHTML", false, e.clipboardData.getData("text/plain"));
    };
  }
  componentDidMount() {
    super.componentDidMount();
    if (this.props.editing)
      this.toggleEdit(this.props.editing);
  }
  componentDidUpdate(prevProps) {
    if (this.props.editing !== prevProps.editing)
      this.toggleEdit(this.props.editing);
  }
  toggleEdit(toggle) {
    const { editor, box } = this;
    if (editor.state.locked)
      return;
    if (!this.refSpan.current)
      return;
    const span = this.refSpan.current;
    if (toggle) {
      editor.selectOnly(box.id);
      this.setState({ text: span.textContent }, () => {
        span.focus();
        _sdk__WEBPACK_IMPORTED_MODULE_0__.Utils.selectElementRange(span);
      });
    } else {
      window.getSelection().removeAllRanges();
      span.blur();
      this.setState({ text: span.textContent });
      this.handleChanged(span.textContent);
    }
  }
  render() {
    const classArray = ["box-ui-button", "ui", "button", "compact", "mini"];
    return /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_sdk__WEBPACK_IMPORTED_MODULE_0__.BaseUI, __spreadProps(__spreadValues({}, this.props), {
      additionalClassName: classArray.join(" "),
      containerProps: { onClick: this.handleClick }
    }), /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "box-ui-text-container"
    }, /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
      contentEditable: this.props.editing,
      className: "editable" + (this.props.editing ? " editing" : ""),
      ref: this.refSpan,
      onMouseDown: this.handleMouseDown,
      onClick: this.handleClickSpan,
      onPaste: this.handlePaste,
      onKeyDown: this.handleKeyDown,
      onBlur: this.props.onEditEnd,
      suppressContentEditableWarning: true
    }, this.state.text)));
  }
}


/***/ }),

/***/ "./src/ui/message.tsx":
/*!****************************!*\
  !*** ./src/ui/message.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageUI)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/ui/button.tsx");

class MessageUI extends _button__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.handleChanged = (text) => this.object.handleUpdateArgs([text]);
    this.handleClick = (e) => {
    };
    this.handleMouseDown = (e) => {
      if (this.editor.state.locked)
        this.object.produceOutput(null);
    };
  }
}
MessageUI.editableOnUnlock = true;


/***/ }),

/***/ "./src/ui/number.tsx":
/*!***************************!*\
  !*** ./src/ui/number.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberBoxUI)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));


const _NumberBoxUI = class extends _sdk__WEBPACK_IMPORTED_MODULE_0__.CanvasUI {
  constructor() {
    super(...arguments);
    this.refCanvasUI = _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.state = __spreadProps(__spreadValues({}, this.state), {
      value: this.object.state.value,
      focus: false,
      inTouch: false,
      inputBuffer: ""
    });
    this.multiplier = 1;
    this.handleKeyDown = (e) => {
      if (this.state.cantChange)
        return;
      if (!this.state.inputBuffer) {
        let addStep = 0;
        if (e.key === "ArrowUp" || e.key === "ArrowRight")
          addStep = 1;
        if (e.key === "ArrowDown" || e.key === "ArrowLeft")
          addStep = -1;
        if (addStep !== 0) {
          const newValue = this.object.toValidValue(this.state.value + addStep);
          if (newValue !== this.state.value)
            this.setValueToOutput(newValue);
        }
      }
      if (e.key.match(/[0-9.-]/)) {
        this.setState({ inputBuffer: this.state.inputBuffer + e.key });
        return;
      }
      if (e.key === "Backspace") {
        this.setState({ inputBuffer: this.state.inputBuffer.slice(0, -1) });
        return;
      }
      if (e.key === "Enter") {
        const newValue = this.object.toValidValue(+this.state.inputBuffer);
        this.setState({ inputBuffer: "" });
        if (newValue !== this.state.value)
          this.setValueToOutput(newValue);
      }
    };
    this.handleKeyUp = (e) => {
    };
    this.handleTouchStart = (e) => {
      e.currentTarget.focus();
      const rect = e.currentTarget.getBoundingClientRect();
      let prevX = e.touches[0].clientX;
      let prevY = e.touches[0].clientY;
      const fromX = prevX - rect.left;
      const fromY = prevY - rect.top;
      const prevValue = this.state.value;
      this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
      const handleTouchMove = (e2) => {
        e2.preventDefault();
        const clientX = e2.changedTouches[0].clientX;
        const clientY = e2.changedTouches[0].clientY;
        const movementX = clientX - prevX;
        const movementY = clientY - prevY;
        prevX = clientX;
        prevY = clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX, movementY, originalEvent: e2 });
      };
      const handleTouchEnd = (e2) => {
        e2.preventDefault();
        const x = e2.changedTouches[0].clientX - rect.left;
        const y = e2.changedTouches[0].clientY - rect.top;
        this.handlePointerUp({ x, y, originalEvent: e2 });
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });
    };
    this.handleWheel = (e) => {
    };
    this.handleClick = (e) => {
    };
    this.handleMouseDown = (e) => {
      e.preventDefault();
      e.currentTarget.focus();
      const rect = e.currentTarget.getBoundingClientRect();
      const fromX = e.clientX - rect.left;
      const fromY = e.clientY - rect.top;
      const prevValue = this.state.value;
      this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
      const handleMouseMove = (e2) => {
        e2.preventDefault();
        const x = e2.clientX - rect.left;
        const y = e2.clientY - rect.top;
        this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX: e2.movementX, movementY: e2.movementY, originalEvent: e2 });
      };
      const handleMouseUp = (e2) => {
        e2.preventDefault();
        const x = e2.clientX - rect.left;
        const y = e2.clientY - rect.top;
        this.handlePointerUp({ x, y, originalEvent: e2 });
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
    this.handleMouseOver = (e) => {
    };
    this.handleMouseOut = (e) => {
    };
    this.handleContextMenu = (e) => {
    };
    this.mouseDownValue = this.state.value;
    this.handlePointerDown = (e) => {
      const { ctx } = this.refCanvasUI.current;
      if (!ctx)
        return;
      let { value, numDecimalPlaces, fontFamily, fontFace, fontSize, format, cantChange, outputOnClick, triangle, triScale } = this.state;
      if (cantChange)
        return;
      if (outputOnClick)
        this.setValueToOutput(this.state.value);
      this.mouseDownValue = this.state.value;
      const { width } = e.originalEvent.currentTarget.getBoundingClientRect();
      if (numDecimalPlaces === 0)
        numDecimalPlaces = 6;
      ctx.font = `${fontFace === "regular" ? "" : fontFace} ${fontSize}px ${fontFamily}, sans-serif`;
      const { PADDING, LEFT_TEXT_OFFSET } = _NumberBoxUI;
      const stringValue = value.toFixed(numDecimalPlaces);
      const decimalArray = stringValue.split(".");
      const leftTextOffset = LEFT_TEXT_OFFSET * triScale;
      const textStart = +triangle * leftTextOffset + 3 * PADDING / 2;
      if (format === "Decimal (Floating-Point)") {
        for (let i = -1; i < numDecimalPlaces; i++) {
          let numberText;
          if (i === -1) {
            numberText = decimalArray[0] + ".";
          } else {
            numberText = decimalArray[0] + "." + decimalArray[1].substring(0, i + 1);
          }
          const textWidth = ctx.measureText(numberText).width;
          if (e.x < textWidth + textStart) {
            this.multiplier = Math.pow(10, -(i + 1));
            break;
          } else {
            this.multiplier = Math.pow(10, -numDecimalPlaces);
          }
        }
      }
      this.setState({ inTouch: true });
    };
    this.handlePointerDrag = (e) => {
      const { value, cantChange, format } = this.state;
      if (cantChange)
        return;
      const multiplier = format === "Decimal (Floating-Point)" ? this.multiplier : 1;
      const decimals = -Math.log10(multiplier);
      let newValue = this.toFixedTruncate(value, decimals);
      newValue = newValue - e.movementY * multiplier;
      newValue = this.object.toValidValue(newValue);
      newValue = Math.round(newValue * 10 ** decimals) / 10 ** decimals;
      this.setState({ value: newValue });
      if (!this.state.mouseFilter && newValue !== value)
        this.setValueToOutput(newValue);
    };
    this.handlePointerUp = (e) => {
      const { value, cantChange } = this.state;
      if (cantChange)
        return;
      if (this.state.mouseFilter && this.mouseDownValue !== value)
        this.setValueToOutput(this.state.value);
      this.setState({ inTouch: false });
    };
    this.handleFocusIn = (e) => this.setState({ focus: true });
    this.handleFocusOut = () => {
      if (this.state.inputBuffer) {
        const newValue = this.object.toValidValue(+this.state.inputBuffer);
        this.setState({ inputBuffer: "" });
        if (newValue !== this.state.value)
          this.setValueToOutput(newValue);
      }
      this.setState({ focus: false });
    };
    this.onPaint = (ctx) => {
      if (!ctx)
        return;
      const {
        fontSize,
        fontFamily,
        fontFace,
        bgColor,
        textColor,
        triangle,
        triColor,
        triScale,
        hTriColor,
        inTouch
      } = this.state;
      const { PADDING, TRIANGLE_BASE, TRIANGLE_HEIGHT, LEFT_TEXT_OFFSET } = _NumberBoxUI;
      const triangleBase = TRIANGLE_BASE * triScale;
      const triangleHeight = TRIANGLE_HEIGHT * triScale;
      const leftTextOffset = LEFT_TEXT_OFFSET * triScale;
      const valueStr = this.state.inputBuffer || this._formatValue(this.state.value);
      const [width, height] = this.refCanvasUI.current.fullSize();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontFace === "regular" ? "" : fontFace} ${fontSize}px ${fontFamily}, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textBaseline = "middle";
      if (triangle) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fillTextLine)(ctx, valueStr, leftTextOffset + 3 * PADDING / 2, height / 2, width - leftTextOffset - (PADDING + 2));
        ctx.fillStyle = inTouch ? hTriColor : triColor;
        ctx.beginPath();
        ctx.moveTo(PADDING, height / 2 - triangleBase / 2);
        ctx.lineTo(PADDING, height / 2 + triangleBase / 2);
        ctx.lineTo(PADDING + triangleHeight, height / 2);
        ctx.fill();
      } else {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fillTextLine)(ctx, valueStr, 3 * PADDING / 2, height / 2, width - (PADDING + 2));
      }
    };
  }
  toFixedTruncate(num, fixed) {
    const re = new RegExp(`^-?\\d+(?:.\\d{0,${fixed || -1}})?`);
    return parseFloat(num.toString().match(re)[0]);
  }
  _formatValue(value = this.state.value) {
    const {
      format,
      numDecimalPlaces
    } = this.state;
    let retStr;
    switch (format) {
      case "Decimal (Integer)":
        retStr = Math.round(value).toString();
        break;
      case "Decimal (Floating-Point)":
        if (value % 1 === 0 && numDecimalPlaces === 0) {
          retStr = value + ".";
        } else {
          if (numDecimalPlaces === 0) {
            retStr = parseFloat(value.toFixed(_NumberBoxUI.MAX_NUM_DECIMAL_PLACES)).toString();
          } else {
            retStr = value.toFixed(numDecimalPlaces);
          }
        }
        break;
      case "MIDI":
      case "MIDI (C4)": {
        const noteArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        let base = 2;
        if (format === "MIDI (C4)")
          base = 1;
        const note = noteArray[value % 12] + (Math.floor(value / 12) - base).toString();
        if (value <= 127 && value >= 0) {
          retStr = note;
        } else if (value < 0) {
          retStr = "-";
        } else if (value > 127) {
          retStr = "+";
        }
        break;
      }
      case "Binary":
        retStr = (value >>> 0).toString(2);
        break;
      case "Hex":
        retStr = (value >>> 0).toString(16).toUpperCase();
        break;
      case "Roland Octal": {
        let dec1 = (value >> 3) + 1;
        let dec2 = (value & 7) + 1;
        retStr = dec1.toString() + dec2.toString();
        break;
      }
      default:
        retStr = value.toString();
        break;
    }
    return retStr;
  }
  setValueToOutput(value) {
    this.setState({ value });
    this.props.object.onChangeFromUI({ value });
  }
  render() {
    return /* @__PURE__ */ _sdk__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_sdk__WEBPACK_IMPORTED_MODULE_0__.CanvasUI, __spreadProps(__spreadValues({
      ref: this.refCanvasUI,
      onPaint: this.onPaint
    }, this.props), {
      canvasProps: {
        tabIndex: 1,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onTouchStart: this.handleTouchStart,
        onWheel: this.handleWheel,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onContextMenu: this.handleContextMenu,
        onFocus: this.handleFocusIn,
        onBlur: this.handleFocusOut
      }
    }));
  }
};
let NumberBoxUI = _NumberBoxUI;
NumberBoxUI.MAX_NUM_DECIMAL_PLACES = 6;
NumberBoxUI.PADDING = 4;
NumberBoxUI.TRIANGLE_BASE = 12;
NumberBoxUI.TRIANGLE_HEIGHT = 6;
NumberBoxUI.LEFT_TEXT_OFFSET = _NumberBoxUI.TRIANGLE_HEIGHT;



/***/ }),

/***/ "./src/ui/scope.tsx":
/*!**************************!*\
  !*** ./src/ui/scope.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OscilloscopeUI)
/* harmony export */ });
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-js */ "./node_modules/color-js/color.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");


class OscilloscopeUI extends _sdk__WEBPACK_IMPORTED_MODULE_1__.CanvasUI {
  componentDidMount() {
    const { bgColor } = this.state;
    const ctx = this.ctx;
    if (!ctx)
      return;
    const [width, height] = this.fullSize();
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    super.componentDidMount();
  }
  async paint() {
    if (this.state.continuous)
      this.schedulePaint();
    if (!this.object._.node)
      return;
    if (this.object._.node.destroyed)
      return;
    const {
      stablize,
      interleaved,
      range,
      autoRange,
      showStats,
      bgColor,
      phosphorColor,
      hueOffset,
      textColor,
      gridColor,
      seperatorColor
    } = this.state;
    const ctx = this.ctx;
    if (!ctx)
      return;
    const left = 0;
    const bottom = 0;
    const { estimatedFreq, buffer } = await this.object._.node.gets("estimatedFreq", "buffer");
    const l = this.object.getProp("windowSize");
    const { sampleRate } = this.object.audioCtx;
    const [width, height] = this.fullSize();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    if (!buffer)
      return;
    const { $read: $ui32, data: t } = buffer;
    if (!t || !t.length || !t[0].length)
      return;
    const $ = Atomics.load($ui32, 0);
    const channels = t.length;
    const dl = t[0].length;
    let yMin = -range;
    let yMax = range;
    let yFactor = range;
    if (autoRange) {
      let i = channels;
      let s;
      while (i--) {
        let j = l;
        while (j--) {
          s = t[i][($ + j) % dl];
          if (s < yMin)
            yMin = s;
          else if (s > yMax)
            yMax = s;
        }
      }
      yFactor = Math.max(1, Math.abs(yMin), Math.abs(yMax));
    }
    const calcY = (v, i) => channelHeight * (+interleaved * i + 1 - (v - yMin) / (yMax - yMin));
    ctx.strokeStyle = gridColor;
    let vStep = 0.25;
    while (yFactor / 2 / vStep > 2)
      vStep *= 2;
    ctx.beginPath();
    ctx.setLineDash([]);
    const gridChannels = interleaved ? channels : 1;
    const channelHeight = (height - bottom) / gridChannels;
    for (let i = 0; i < gridChannels; i++) {
      let y = calcY(0, i);
      ctx.moveTo(left, y);
      ctx.lineTo(width, y);
      for (let j = vStep; j < yFactor; j += vStep) {
        y = calcY(j, i);
        ctx.moveTo(left, y);
        ctx.lineTo(width, y);
        y = calcY(-j, i);
        ctx.moveTo(left, y);
        ctx.lineTo(width, y);
      }
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([4, 2]);
    ctx.strokeStyle = seperatorColor;
    for (let i = 1; i < gridChannels; i++) {
      ctx.moveTo(left, i * channelHeight);
      ctx.lineTo(width, i * channelHeight);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    const channelColor = [];
    let $zerox = 0;
    const period = sampleRate / estimatedFreq[0];
    const times = Math.floor(l / period) - 1;
    for (let i = 0; i < channels; i++) {
      let $0 = 0;
      let $1 = l;
      let drawL = l;
      if (stablize) {
        if (i === 0) {
          const thresh = (yMin + yMax) * 0.5 + 1e-3;
          while ($zerox < l && t[i][($ + $zerox++) % dl] > thresh)
            ;
          if ($zerox >= l - 1) {
            $zerox = 0;
          } else {
            while ($zerox < l && t[i][($ + $zerox++) % dl] < thresh)
              ;
            $zerox--;
            if ($zerox >= l - 1 || $zerox < 0) {
              $zerox = 0;
            }
          }
        }
        drawL = times > 0 && isFinite(period) ? ~~Math.min(period * times, l - $zerox) : l - $zerox;
      }
      $0 = Math.round($zerox);
      $1 = Math.round($zerox + drawL);
      const pixelsPerSamp = (width - left) / ($1 - 1 - $0);
      const sampsPerPixel = Math.max(1, Math.round(1 / pixelsPerSamp));
      if (interleaved) {
        ctx.save();
        const clip = new Path2D();
        clip.rect(0, i * channelHeight, width, channelHeight);
        ctx.clip(clip);
      }
      ctx.beginPath();
      channelColor[i] = color_js__WEBPACK_IMPORTED_MODULE_0__(phosphorColor).shiftHue(i * hueOffset).toHSL();
      ctx.strokeStyle = channelColor[i];
      let maxInStep;
      let minInStep;
      let $j;
      let samp;
      let $step;
      let x;
      let y;
      for (let j = $0; j < $1; j++) {
        $j = (j + $) % dl;
        samp = t[i][$j];
        $step = (j - $0) % sampsPerPixel;
        if ($step === 0) {
          maxInStep = samp;
          minInStep = samp;
        } else {
          if (samp > maxInStep)
            maxInStep = samp;
          if (samp < minInStep)
            minInStep = samp;
        }
        if ($step !== sampsPerPixel - 1)
          continue;
        x = (j - $step - $0) * pixelsPerSamp;
        y = calcY(maxInStep, i);
        if (j === $0)
          ctx.moveTo(x, y);
        else
          ctx.lineTo(x, y);
        if (minInStep !== maxInStep) {
          y = calcY(minInStep, i);
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      if (interleaved)
        ctx.restore();
    }
    if (showStats) {
      ctx.font = "bold 12px Consolas, monospace";
      ctx.fillStyle = textColor;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(yFactor.toFixed(2), 2, 2);
      ctx.textBaseline = "bottom";
      ctx.fillText((-yFactor).toFixed(2), 2, height - 2);
      ctx.textAlign = "right";
      const freqStatY = height - 2 - (estimatedFreq.length - 1) * 14;
      for (let i = 0; i < estimatedFreq.length; i++) {
        const freq = estimatedFreq[i];
        ctx.fillStyle = textColor;
        const y = interleaved ? channelHeight * (i + 1) - 2 : freqStatY + 14 * i;
        ctx.fillText(freq.toFixed(2) + "Hz", width - 2, y);
      }
    }
  }
}
OscilloscopeUI.defaultSize = [120, 60];


/***/ }),

/***/ "./src/ui/spectrogram.tsx":
/*!********************************!*\
  !*** ./src/ui/spectrogram.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpectrogramUI)
/* harmony export */ });
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");

class SpectrogramUI extends _sdk__WEBPACK_IMPORTED_MODULE_0__.CanvasUI {
  constructor() {
    super(...arguments);
    this.$lastFrame = -1;
    this.dataFrames = 1;
    this.offscreenCtx = document.createElement("canvas").getContext("2d");
    this.offscreenVRes = 1024;
  }
  componentDidMount() {
    const { bgColor } = this.state;
    const { ctx, offscreenCtx, dataFrames } = this;
    if (!ctx)
      return;
    const [width, height] = this.fullSize();
    offscreenCtx.canvas.width = dataFrames;
    offscreenCtx.canvas.height = this.offscreenVRes;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    super.componentDidMount();
  }
  async paint() {
    if (this.state.continuous)
      this.schedulePaint();
    if (!this.object._.node)
      return;
    if (this.object._.node.destroyed)
      return;
    const {
      bgColor,
      gridColor,
      seperatorColor
    } = this.state;
    const { ctx, offscreenCtx, offscreenVRes } = this;
    if (!ctx || !offscreenCtx)
      return;
    const left = 0;
    const bottom = 0;
    const allAmplitudes = await this.object._.node.getAllAmplitudes();
    const [width, height] = this.fullSize();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    if (!allAmplitudes)
      return;
    const { data: f, $totalFrames, fftBins: bins, frames, dataFrames, $writeFrame: $writeFrameUi32 } = allAmplitudes;
    if (!f || !f.length || !f[0].length)
      return;
    const l = f[0].length;
    const channels = f.length;
    const $lastFrame = Atomics.load($totalFrames, 0) - 1;
    const $writeFrame = Atomics.load($writeFrameUi32, 0);
    let $frame0 = $writeFrame;
    let $frame1 = $frame0 + dataFrames;
    if (this.dataFrames !== dataFrames) {
      offscreenCtx.canvas.width = dataFrames;
      this.dataFrames = dataFrames;
    } else if ($lastFrame >= this.$lastFrame) {
      $frame0 = Math.max($frame0, $frame1 - ($lastFrame - this.$lastFrame));
    }
    this.$lastFrame = $lastFrame;
    const osChannelHeight = offscreenVRes / channels;
    const step = Math.max(1, Math.round(bins / osChannelHeight));
    const vGrid = osChannelHeight / bins;
    for (let i = 0; i < f.length; i++) {
      for (let j = $frame0; j < $frame1; j++) {
        let maxInStep;
        offscreenCtx.fillStyle = "black";
        offscreenCtx.fillRect(j % dataFrames, i * osChannelHeight, 1, osChannelHeight);
        for (let k = 0; k < bins; k++) {
          const samp = _sdk__WEBPACK_IMPORTED_MODULE_0__.MathUtils.atodb(f[i][(k + j * bins) % l]);
          const $step = k % step;
          if ($step === 0)
            maxInStep = samp;
          if ($step !== step - 1) {
            if ($step !== 0 && samp > maxInStep)
              maxInStep = samp;
            continue;
          }
          const normalized = Math.min(1, Math.max(0, (maxInStep + 10) / 100 + 1));
          if (normalized === 0)
            continue;
          const hue = (normalized * 180 + 240) % 360;
          const lum = normalized * 50;
          offscreenCtx.fillStyle = `hsl(${hue}, 100%, ${lum}%)`;
          offscreenCtx.fillRect(j % dataFrames, (bins - k - 1) * vGrid + i * osChannelHeight, 1, Math.max(1, vGrid));
        }
      }
    }
    ctx.strokeStyle = gridColor;
    const vStep = 0.25;
    const hStep = 0.25;
    ctx.beginPath();
    ctx.setLineDash([]);
    const gridChannels = channels;
    const channelHeight = (height - bottom) / gridChannels;
    for (let i = 0; i < gridChannels; i++) {
      for (let j = vStep; j < 1; j += vStep) {
        const y = (i + j) * channelHeight;
        ctx.moveTo(left, y);
        ctx.lineTo(width, y);
      }
    }
    for (let i = hStep; i < 1; i += hStep) {
      const x = left + (width - left) * i;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, bottom);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([4, 2]);
    ctx.strokeStyle = seperatorColor;
    for (let i = 1; i < gridChannels; i++) {
      ctx.moveTo(left, i * channelHeight);
      ctx.lineTo(width, i * channelHeight);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.imageSmoothingEnabled = false;
    $frame0 = ($frame1 - frames) % dataFrames;
    $frame1 = $frame0 + frames;
    if ($frame1 <= dataFrames) {
      ctx.drawImage(offscreenCtx.canvas, $frame0, 0, frames, offscreenVRes, left, 0, width - left, height - bottom);
    } else {
      const sSplit = dataFrames - $frame0;
      const dSplit = sSplit / frames * (width - left);
      ctx.drawImage(offscreenCtx.canvas, $frame0, 0, sSplit, offscreenVRes, left, 0, dSplit, height - bottom);
      ctx.drawImage(offscreenCtx.canvas, 0, 0, $frame1 - dataFrames - 0.01, offscreenVRes, dSplit + left, 0, width - left - dSplit, height - bottom);
    }
    ctx.restore();
  }
}
SpectrogramUI.defaultSize = [120, 60];


/***/ }),

/***/ "./src/ui/spectroscope.tsx":
/*!*********************************!*\
  !*** ./src/ui/spectroscope.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpectroscopeUI)
/* harmony export */ });
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-js */ "./node_modules/color-js/color.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sdk */ "./src/sdk.ts");


class SpectroscopeUI extends _sdk__WEBPACK_IMPORTED_MODULE_1__.CanvasUI {
  componentDidMount() {
    const { bgColor } = this.state;
    const ctx = this.ctx;
    if (!ctx)
      return;
    const [width, height] = this.fullSize();
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    super.componentDidMount();
  }
  async paint() {
    if (this.state.continuous)
      this.schedulePaint();
    if (!this.object._.node)
      return;
    if (this.object._.node.destroyed)
      return;
    const {
      bgColor,
      fgColor,
      hueOffset,
      gridColor,
      seperatorColor
    } = this.state;
    const ctx = this.ctx;
    if (!ctx)
      return;
    const left = 0;
    const bottom = 0;
    const lastAmplitudes = await this.object._.node.getLastAmplitudes();
    const [width, height] = this.fullSize();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    if (!lastAmplitudes)
      return;
    const { data: f } = lastAmplitudes;
    if (!f || !f.length || !f[0].length)
      return;
    const l = f[0].length;
    const channels = f.length;
    ctx.strokeStyle = gridColor;
    const vStep = 0.25;
    const hStep = 0.25;
    ctx.beginPath();
    ctx.setLineDash([]);
    const gridChannels = channels;
    const channelHeight = (height - bottom) / gridChannels;
    for (let i = 0; i < gridChannels; i++) {
      for (let j = vStep; j < 1; j += vStep) {
        const y = (i + j) * channelHeight;
        ctx.moveTo(left, y);
        ctx.lineTo(width, y);
      }
    }
    for (let i = hStep; i < 1; i += hStep) {
      const x = left + (width - left) * i;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, bottom);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([4, 2]);
    ctx.strokeStyle = seperatorColor;
    for (let i = 1; i < gridChannels; i++) {
      ctx.moveTo(left, i * channelHeight);
      ctx.lineTo(width, i * channelHeight);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    const channelColor = [];
    const $0 = 0;
    const $1 = l;
    const gridX = (width - left) / ($1 - $0);
    const step = Math.max(1, Math.round(1 / gridX));
    for (let i = 0; i < f.length; i++) {
      ctx.beginPath();
      channelColor[i] = color_js__WEBPACK_IMPORTED_MODULE_0__(fgColor).shiftHue(i * hueOffset).toHSL();
      ctx.fillStyle = channelColor[i];
      let maxInStep;
      for (let j = $0; j < $1; j++) {
        const samp = _sdk__WEBPACK_IMPORTED_MODULE_1__.MathUtils.atodb(f[i][j]);
        const $step = (j - $0) % step;
        if ($step === 0)
          maxInStep = samp;
        if ($step !== step - 1) {
          if ($step !== 0 && samp > maxInStep)
            maxInStep = samp;
          continue;
        }
        const x = (j - $0) * gridX + left;
        const y = channelHeight * (i + 1 - Math.min(1, Math.max(0, maxInStep / 100 + 1)));
        if (j === $0)
          ctx.moveTo(x, y);
        else
          ctx.lineTo(x, y);
      }
      ctx.lineTo(width, channelHeight * (i + 1));
      ctx.lineTo(left, channelHeight * (i + 1));
      ctx.closePath();
      ctx.fill();
    }
  }
}
SpectroscopeUI.defaultSize = [120, 60];


/***/ }),

/***/ "./src/ui/toggle.tsx":
/*!***************************!*\
  !*** ./src/ui/toggle.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LiveToggleUI)
/* harmony export */ });
/* harmony import */ var _base_live__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-live */ "./src/ui/base-live.tsx");

class LiveToggleUI extends _base_live__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.className = "live-toggle";
    this.handlePointerDown = () => {
      this.setValueToOutput(1 - +!!this.state.value);
    };
  }
  paint() {
    const {
      active,
      focus,
      bgColor,
      activeBgColor,
      bgOnColor,
      activeBgOnColor,
      borderColor,
      focusBorderColor,
      value
    } = this.state;
    const ctx = this.ctx;
    if (!ctx)
      return;
    const borderWidth = 1;
    const [width, height] = this.fullSize();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = borderWidth;
    const buttonBgColor = active ? value ? activeBgOnColor : activeBgColor : value ? bgOnColor : bgColor;
    const buttonBorderColor = focus ? focusBorderColor : borderColor;
    ctx.fillStyle = buttonBgColor;
    ctx.beginPath();
    ctx.roundRect(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth, 0.2 * (width - 2 * borderWidth));
    ctx.fill();
    ctx.strokeStyle = buttonBorderColor;
    ctx.stroke();
  }
}
LiveToggleUI.defaultSize = [30, 30];


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillTextLine": () => (/* binding */ fillTextLine),
/* harmony export */   "fillTextLines": () => (/* binding */ fillTextLines)
/* harmony export */ });
const fillTextLine = (ctx, textIn, x, y, width) => {
  const ellipsis = "\u2026";
  let textWidth = ctx.measureText(textIn).width;
  let text = textIn;
  if (textWidth > width) {
    let str = textIn.toString();
    let len = str.length;
    while (textWidth >= width && len-- > 1) {
      str = str.substring(0, len);
      textWidth = ctx.measureText(str + ellipsis).width;
    }
    if (textWidth <= width) {
      text = str + ellipsis;
    } else {
      text = str;
    }
  }
  ctx.fillText(text, x, y, width);
  return;
};
const fillTextLines = (ctx, textIn, x, y, width) => {
  let textWidth = ctx.measureText(textIn).width;
  let text = textIn;
  if (textWidth > width) {
    const str = textIn.toString().split("");
    const len = str.length;
    const newString = [];
    for (let i = 0; i < len; i++) {
      if (ctx.measureText(newString.join("").split("\n").pop() + str[i]).width > width) {
        newString.push("\n");
      }
      newString.push(str[i]);
      text = newString.join("");
    }
  }
  ctx.fillText(text, x, y, width);
  return text;
};


/***/ }),

/***/ "./src/ui/ui.scss":
/*!************************!*\
  !*** ./src/ui/ui.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ui.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/ui.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@electrosmith/package-ui","version":"1.0.5","description":"The UI package for JSPatcher","main":"dist/index.js","scripts":{"build":"webpack --mode development","build-watch":"webpack --mode development --watch --stats-children"},"keywords":["jspatcher"],"jspatcher":{"isJSPatcherPackage":true,"thumbnail":"","jspatpkg":"index.jspatpkg.js"},"author":"Fr0stbyteR","license":"GPL-3.0-or-later","repository":"https://github.com/jspatcher/package-ui","devDependencies":{"@jspatcher/jspatcher":"file:../../../frontend","@types/react":"^17.0.30","clean-webpack-plugin":"^4.0.0","color-js":"^1.0.5","css-loader":"^6.4.0","esbuild-loader":"^2.16.0","monaco-editor":"^0.27.0","react":"^17.0.2","react-monaco-editor":"^0.44.0","sass":"^1.45.2","sass-loader":"^12.2.0","semantic-ui-react":"^2.0.4","style-loader":"^3.3.0","typescript":"^4.4.4","util":"^0.12.4","webpack":"^5.58.2","webpack-cli":"^4.9.1"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/index.jspatpkg.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/message */ "./src/objects/message.ts");
/* harmony import */ var _objects_scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/scope */ "./src/objects/scope.ts");
/* harmony import */ var _objects_spectrogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/spectrogram */ "./src/objects/spectrogram.ts");
/* harmony import */ var _objects_spectroscope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/spectroscope */ "./src/objects/spectroscope.ts");
/* harmony import */ var _objects_button_live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects/button-live */ "./src/objects/button-live.ts");
/* harmony import */ var _objects_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/toggle */ "./src/objects/toggle.ts");
/* harmony import */ var _objects_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/number */ "./src/objects/number.ts");
/* harmony import */ var _ui_ui_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ui.scss */ "./src/ui/ui.scss");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => ({
  message: _objects_message__WEBPACK_IMPORTED_MODULE_0__["default"],
  number: _objects_number__WEBPACK_IMPORTED_MODULE_6__["default"],
  "scope~": _objects_scope__WEBPACK_IMPORTED_MODULE_1__["default"],
  "spectrogram~": _objects_spectrogram__WEBPACK_IMPORTED_MODULE_2__["default"],
  "spectroscope~": _objects_spectroscope__WEBPACK_IMPORTED_MODULE_3__["default"],
  "button": _objects_button_live__WEBPACK_IMPORTED_MODULE_4__["default"],
  "toggle": _objects_toggle__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.jspatpkg.js.map