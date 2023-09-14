{

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clsx": () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/BaseHardwareUI.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/BaseHardwareUI.scss ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hardware-patcher.locked div.box-ui > .hidden {\n  visibility: hidden;\n}\n.hardware-patcher.locked div.box-ui > .ignore-click {\n  pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/core/hardware/objects/base/BaseHardwareUI.scss"],"names":[],"mappings":"AACI;EACI,kBAAA;AAAR;AAEI;EACI,oBAAA;AAAR","sourcesContent":[".hardware-patcher.locked div.box-ui {\n    & > .hidden {\n        visibility: hidden;\n    }\n    & > .ignore-click {\n        pointer-events: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/DefaultHardwareUI.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/DefaultHardwareUI.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.hardware-patcher div.box-ui > div.box-ui-default {\n  background-color: rgb(41, 60, 71);\n}\n.hardware-patcher div.box-ui > div.box-ui-default.box-ui-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 7px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container {\n  display: flex;\n  flex: 0 0 auto;\n  width: 100%;\n  color: white;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 12px;\n  line-height: normal;\n  font-weight: normal;\n  margin: 0px;\n  overflow-wrap: break-word;\n  cursor: default;\n  user-select: none;\n  -webkit-user-select: none;\n  border: rgb(41, 60, 71) solid;\n  border-width: 0px 4px 0px 4px;\n  border-radius: 7px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container:first-child {\n  border-top-width: 4px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container:last-child {\n  border-bottom-width: 4px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container.loading {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: placeHolderShimmer;\n  animation-name: placeHolderShimmer;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  background-size: 1200px 100%;\n}\n@keyframes placeHolderShimmer {\n  0% {\n    background-position: -1200px 0;\n  }\n  100% {\n    background-position: 1200px 0;\n  }\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-container-prepend {\n  flex: 0 0 auto;\n  min-width: 2px;\n  margin-right: 2px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span {\n  position: relative;\n  word-break: break-all;\n  width: 100%;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span.editing {\n  pointer-events: auto;\n  cursor: text;\n  user-select: auto;\n  -webkit-user-select: auto;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span:empty::before {\n  content: \"​\";\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > span::selection {\n  background-color: #004eff;\n  color: white;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown {\n  position: absolute;\n  top: 100%;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown > .box-ui-text-autocomplete {\n  background: #293c47;\n  display: table-row-group;\n  position: absolute;\n  width: auto;\n  max-height: 200px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5333333333);\n  overflow: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown > .box-ui-text-autocomplete td {\n  border-width: 0px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-dropdown > .box-ui-text-autocomplete tr.focused {\n  background-color: #003cac !important;\n  color: #fff !important;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container > .box-ui-text-container-append {\n  flex: 0 0 auto;\n  min-width: 2px;\n  margin-left: 2px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-text-container i.icon {\n  line-height: 14px;\n  margin: 0px 3px;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-dropdown-container {\n  background: #293c47;\n  flex: 1 1 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: rgb(125, 126, 132) solid;\n  padding: 0px;\n  border-width: 0px 0px 4px 0px;\n  overflow: auto;\n}\n.hardware-patcher div.box-ui > div.box-ui-default > .box-ui-toggle {\n  cursor: pointer;\n}\n\n.patcher.unlocked div.box.selected > div.box-ui > div.box-ui-default > .box-ui-text-container {\n  pointer-events: auto;\n}", "",{"version":3,"sources":["webpack://./src/core/hardware/objects/base/DefaultHardwareUI.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,iCAAA;AAEJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;AAER;AACI;EACI,aAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,qCAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,6BAAA;EACA,6BAAA;EACA,kBAAA;AACR;AACQ;EACI,qBAAA;AACZ;AAEQ;EACI,wBAAA;AAAZ;AAGQ;EACI,8BAAA;EACA,sBAAA;EACA,qCAAA;EACA,6BAAA;EACA,2CAAA;EACA,mCAAA;EACA,0CAAA;EACA,kCAAA;EACA,yCAAA;EACA,iCAAA;EACA,4BAAA;AADZ;AAGY;EACI;IACI,8BAAA;EADlB;EAIc;IACI,6BAAA;EAFlB;AACF;AAMQ;EACI,cAAA;EACA,cAAA;EACA,iBAAA;AAJZ;AAOQ;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;AALZ;AAOY;EACI,oBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;AALhB;AAQY;EACI,YAAA;AANhB;AASY;EACI,yBAAA;EACA,YAAA;AAPhB;AAWQ;EACI,kBAAA;EACA,SAAA;AATZ;AAWY;EACI,mBAAA;EACA,wBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,mDAAA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;AAThB;AAWgB;EACI,iBAAA;AATpB;AAYgB;EACI,oCAAA;EACA,sBAAA;AAVpB;AAeQ;EACI,cAAA;EACA,cAAA;EACA,gBAAA;AAbZ;AAgBQ;EACI,iBAAA;EACA,eAAA;AAdZ;AAkBI;EACI,mBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gCAAA;EACA,YAAA;EACA,6BAAA;EACA,cAAA;AAhBR;AAmBI;EACI,eAAA;AAjBR;;AAqBA;EACI,oBAAA;AAlBJ","sourcesContent":[".hardware-patcher div.box-ui>div.box-ui-default {\n    background-color: rgb(41, 60, 71);\n\n    &.box-ui-container {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        border-radius: 7px;\n    }\n\n    &>.box-ui-text-container {\n        display: flex;\n        flex: 0 0 auto;\n        width: 100%;\n        color: white;\n        font-family: 'Roboto Mono', monospace;\n        font-size: 12px;\n        line-height: normal;\n        font-weight: normal;\n        margin: 0px;\n        overflow-wrap: break-word;\n        cursor: default;\n        user-select: none;\n        -webkit-user-select: none;\n        border: rgb(41, 60, 71) solid;\n        border-width: 0px 4px 0px 4px;\n        border-radius: 7px;\n\n        &:first-child {\n            border-top-width: 4px;\n        }\n\n        &:last-child {\n            border-bottom-width: 4px;\n        }\n\n        &.loading {\n            -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n            -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n            -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n            -webkit-animation-name: placeHolderShimmer;\n            animation-name: placeHolderShimmer;\n            -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n            background-size: 1200px 100%;\n\n            @keyframes placeHolderShimmer {\n                0% {\n                    background-position: -1200px 0;\n                }\n\n                100% {\n                    background-position: 1200px 0;\n                }\n            }\n        }\n\n        &>.box-ui-text-container-prepend {\n            flex: 0 0 auto;\n            min-width: 2px;\n            margin-right: 2px;\n        }\n\n        &>span {\n            position: relative;\n            word-break: break-all;\n            width: 100%;\n\n            &.editing {\n                pointer-events: auto;\n                cursor: text;\n                user-select: auto;\n                -webkit-user-select: auto;\n            }\n\n            &:empty::before {\n                content: \"\\200b\";\n            }\n\n            &::selection {\n                background-color: #004eff;\n                color: white;\n            }\n        }\n\n        &>.box-ui-text-dropdown {\n            position: absolute;\n            top: 100%;\n\n            &>.box-ui-text-autocomplete {\n                background: #293c47;\n                display: table-row-group;\n                position: absolute;\n                width: auto;\n                max-height: 200px;\n                box-shadow: 0px 2px 5px #0008;\n                overflow: auto;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n\n                & td {\n                    border-width: 0px\n                }\n\n                & tr.focused {\n                    background-color: #003cac !important;\n                    color: #fff !important;\n                }\n            }\n        }\n\n        &>.box-ui-text-container-append {\n            flex: 0 0 auto;\n            min-width: 2px;\n            margin-left: 2px;\n        }\n\n        i.icon {\n            line-height: 14px;\n            margin: 0px 3px;\n        }\n    }\n\n    &>.box-ui-dropdown-container {\n        background: #293c47;\n        flex: 1 1 100%;\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        border: rgb(125, 126, 132) solid;\n        padding: 0px;\n        border-width: 0px 0px 4px 0px;\n        overflow: auto;\n    }\n\n    &>.box-ui-toggle {\n        cursor: pointer;\n    }\n}\n\n.patcher.unlocked div.box.selected>div.box-ui>div.box-ui-default>.box-ui-text-container {\n    pointer-events: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/InvalidObject.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/InvalidObject.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hardware-patcher div.box-ui > div.package-base.package-base-invalidobject > .box-ui-text-container {\n  background-color: rgb(128, 64, 64);\n}", "",{"version":3,"sources":["webpack://./src/core/hardware/objects/base/InvalidObject.scss"],"names":[],"mappings":"AACI;EACI,kCAAA;AAAR","sourcesContent":[".hardware-patcher div.box-ui > div.package-base {\n    &.package-base-invalidobject > .box-ui-text-container {\n        background-color: rgb(128, 64, 64);\n    }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/core/hardware/Box.ts":
/*!**********************************!*\
  !*** ./src/core/hardware/Box.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HardwareBox)
/* harmony export */ });
/* harmony import */ var _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/TypedEventEmitter */ "./src/utils/TypedEventEmitter.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");



class HardwareBox extends _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(patcherIn, boxIn) {
    var _a;
    super();
    this.text = "";
    this.id = boxIn.id;
    this.text = boxIn.text;
    this.args = boxIn.args || [];
    this.props = boxIn.props || {};
    this.ios = boxIn.ios;
    this._ioLines = new Array(this.ios).fill(null).map(() => /* @__PURE__ */ new Set());
    this.rect = boxIn.rect;
    this.background = boxIn.background;
    this.presentation = boxIn.presentation;
    this.presentationRect = boxIn.presentationRect;
    if (!this.presentationRect)
      this.presentationRect = this.rect.slice();
    this.zIndex = boxIn.zIndex || 0;
    this.data = boxIn.data || ((_a = boxIn.prevData) == null ? void 0 : _a.storage) || {};
    this._editing = !!boxIn._editing;
    this._patcher = patcherIn;
    this.on("dataUpdated", () => this._patcher.emitChanged());
    this.on("argsUpdated", () => this._patcher.emitChanged());
    this.on("propsUpdated", () => this._patcher.emitChanged());
  }
  async init() {
    this._parsed = HardwareBox.parseObjText(this.text);
    const newMeta = this._patcher.getObjectMeta(this._parsed);
    for (const key in this.props) {
      if (!newMeta.props[key])
        delete this.props[key];
    }
    if (this._parsed.args.length)
      this.args = this._parsed.args;
    Object.assign(this.props, this._parsed.props);
    const Constructor = this._patcher.getObjectConstructor(this._parsed);
    if (Constructor === this._patcher.activeLib.InvalidObject) {
      this.error(`Object ${this._parsed.class} not found.`);
    }
    this._Object = Constructor;
    if (!this.size.every((v) => v > 0))
      this.size = this.defaultSize;
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTPresentationRect)(this.presentationRect) || this.presentationSize.every((v) => typeof v === "number") && !this.presentationSize.every((v) => v > 0))
      this.presentationSize = this.defaultSize;
    if (this.objectInit) {
      this._object = new Constructor(this, this._patcher);
      await this._object.init();
    }
    return this;
  }
  async postInit() {
    var _a;
    await ((_a = this._object) == null ? void 0 : _a.postInit());
    return this;
  }
  /**
   * Main function when receive data from a inlet (base 0)
   */
  fn(inlet, data) {
    var _a;
    (_a = this._object) == null ? void 0 : _a.fn(inlet, data);
    return this;
  }
  get UI() {
    return this._Object.UI;
  }
  get defaultSize() {
    var _a;
    return ((_a = this.UI) == null ? void 0 : _a.defaultSize) || [90, 20];
  }
  get meta() {
    var _a;
    return (_a = this._object) == null ? void 0 : _a.meta;
  }
  get ioLines() {
    return this._ioLines;
  }
  get objectInit() {
    return this._patcher.props.objectInit;
  }
  get object() {
    return this._object;
  }
  set object(oIn) {
    this._object = oIn;
  }
  get Object() {
    return this._Object;
  }
  get parsed() {
    return this._parsed;
  }
  addIoLine(line, isA) {
    const index = isA ? line.aIo[1] : line.bIo[1];
    if (!this._ioLines[index])
      this._ioLines[index] = /* @__PURE__ */ new Set();
    this._ioLines[index].add(line);
  }
  removeIoLine(line, isA) {
    const index = isA ? line.aIo[1] : line.bIo[1];
    if (this._ioLines[index])
      this._ioLines[index].delete(line);
  }
  setIos(positions) {
    const lines = this.allLines;
    lines.forEach((line) => line.disable());
    this.ios = positions;
    lines.forEach((line) => line.enable());
    const linesSetLen = this._ioLines.length;
    if (positions.length > linesSetLen)
      this._ioLines.push(...new Array(positions.length - linesSetLen).fill(null).map(() => /* @__PURE__ */ new Set()));
    else if (positions.length < linesSetLen)
      this._ioLines.splice(positions.length);
    this._ioLines.forEach((set) => set.forEach((line) => {
      line.uiUpdateA();
      line.uiUpdateB();
    }));
    this.emit("ioCountChanged", this);
  }
  getIoPos(port) {
    const { rect, ios } = this;
    const [left, top, width, height] = rect;
    const [x1, y1, x2, y2] = {
      "T": [left, top, left + width, top],
      "B": [left, top + height, left + width, top + height],
      "L": [left, top, left, top + height],
      "R": [left + width, top, left + width, top + height]
    }[ios[port].edge];
    let [diffx, diffy] = [x2 - x1, y2 - y1];
    let magnitude = ios[port].position;
    return { top: y1 + diffy * magnitude, left: x1 + diffx * magnitude };
  }
  get ioPositions() {
    const positions = [];
    for (let i = 0; i < this.ios.length; i++) {
      positions[i] = this.getIoPos(i);
    }
    return positions;
  }
  get allLines() {
    return this._ioLines.flatMap((set) => Array.from(set.values()));
  }
  connectedIo(io, otherBoxIo, otherBoxId, lineId) {
    if (this._object)
      this._object.connectedIo(io, otherBoxIo, otherBoxId, lineId);
    this.emit("connectedPort", { io });
    return this;
  }
  disconnectedIo(io, otherBoxIo, otherBoxId, lineId) {
    if (this._object)
      this._object.disconnectedIo(io, otherBoxIo, otherBoxId, lineId);
    this.emit("connectedPort", { io });
    return this;
  }
  // // called when inlet or outlet are connected or disconnected
  // connectedOutlet(outlet: number, destBoxId: string, destInlet: number, lineId: string) {
  //     if (this._object) this._object.connectedOutlet(outlet, destBoxId, destInlet, lineId);
  //     this.emit("connectedPort", { isSrc: true, i: outlet });
  //     return this;
  // }
  // connectedInlet(inlet: number, srcBoxId: string, srcOutlet: number, lineId: string) {
  //     if (this._object) this._object.connectedInlet(inlet, srcBoxId, srcOutlet, lineId);
  //     this.emit("connectedPort", { isSrc: false, i: inlet });
  //     return this;
  // }
  // disconnectedOutlet(outlet: number, destBoxId: string, destInlet: number, lineId: string) {
  //     if (this._object) this._object.disconnectedOutlet(outlet, destBoxId, destInlet, lineId);
  //     const last = this._patcher.getLinesBySrcID(this.id)[outlet].length === 1;
  //     this.emit("disconnectedPort", { isSrc: true, i: outlet, last });
  //     return this;
  // }
  // disconnectedInlet(inlet: number, srcBoxId: string, srcOutlet: number, lineId: string) {
  //     if (this._object) this._object.disconnectedInlet(inlet, srcBoxId, srcOutlet, lineId);
  //     const last = this._patcher.getLinesByDestID(this.id)[inlet].length === 1;
  //     this.emit("disconnectedPort", { isSrc: false, i: inlet, last });
  //     return this;
  // }
  // isOutletTo(outlet: number, box: HardwareBox, inlet: number) {
  //     const iterator = this._outletLines[outlet].values();
  //     let r: IteratorResult<HardwareLine, HardwareLine>;
  //     while (!(r = iterator.next()).done) {
  //         const line = r.value;
  //         if (line.destBox === box && line.destInlet === inlet) return true;
  //     }
  //     return false;
  // }
  // isInletFrom(inlet: number, box: HardwareBox, outlet: number) {
  //     const iterator = this._inletLines[inlet].values();
  //     let r: IteratorResult<HardwareLine, HardwareLine>;
  //     while (!(r = iterator.next()).done) {
  //         const line = r.value;
  //         if (line.srcBox === box && line.srcOutlet === outlet) return true;
  //     }
  //     return false;
  // }
  isConnectedTo(io, otherBox, otherIo) {
    const iterator = this._ioLines[io].values();
    let iter;
    while (!(iter = iterator.next()).done) {
      const line = iter.value;
      if (line.aBox === otherBox && line.aIo[1] === otherIo || line.bBox === otherBox && line.bIo[1] === otherIo)
        return true;
    }
    return false;
  }
  async changeText(textIn, force) {
    var _a, _b;
    if (!force && textIn === this.text)
      return this;
    const { defaultSize: oldDefaultSize } = this;
    this.allLines.forEach((line) => line.disable());
    await ((_a = this._object) == null ? void 0 : _a.destroy());
    this.text = textIn;
    this.args = [];
    await this.init();
    this.allLines.forEach((line) => line.enable());
    const { defaultSize } = this;
    if (!defaultSize.every((v, i) => v === oldDefaultSize[i])) {
      this.size = defaultSize;
      this.presentationSize = defaultSize;
    }
    this.emit("textChanged", this);
    (_b = this._object) == null ? void 0 : _b.setMeta(this._object.meta);
    await this.postInit();
    return this;
  }
  update(e) {
    const { args, props } = e;
    if (args)
      this.args = args;
    if (props) {
      if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTRect)(props.rect)) {
        this.setRect(props.rect);
        delete props.rect;
      }
      if ((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTPresentationRect)(props.presentationRect)) {
        this.setPresentationRect(props.presentationRect);
        delete props.presentationRect;
      }
      if (typeof props.presentation === "boolean") {
        this.setPresentation(props.presentation);
        delete props.presentation;
      }
      if (typeof props.background === "boolean") {
        this.setBackground(props.background);
        delete props.background;
      }
      this.props = Object.assign(this.props, props);
    }
    return this;
  }
  get position() {
    return this.rect.slice(0, 2);
  }
  set position([leftIn, topIn]) {
    const [left, top, width, height] = this.rect;
    this.setRect([typeof leftIn === "number" ? leftIn : left, typeof topIn === "number" ? topIn : top, width, height]);
  }
  get presentationPosition() {
    return this.presentationRect.slice(0, 2);
  }
  set presentationPosition([leftIn, topIn]) {
    const [left, top, width, height] = this.presentationRect;
    this.setPresentationRect([typeof leftIn === "number" || typeof leftIn === "string" ? leftIn : left, typeof topIn === "number" || typeof topIn === "string" ? topIn : top, width, height]);
  }
  get size() {
    return this.rect.slice(2);
  }
  set size([widthIn, heightIn]) {
    const [left, top, width, height] = this.rect;
    this.setRect([left, top, widthIn || width, heightIn || height]);
  }
  get presentationSize() {
    return this.presentationRect.slice(2);
  }
  set presentationSize([widthIn, heightIn]) {
    const [left, top, width, height] = this.presentationRect;
    this.setPresentationRect([left, top, widthIn || width, heightIn || height]);
  }
  getLeft(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][0];
  }
  setLeft(leftIn, inPresentation = false) {
    const positionKey = inPresentation ? "presentationPosition" : "position";
    this[positionKey] = [leftIn, void 0];
  }
  getTop(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][1];
  }
  setTop(topIn, inPresentation = false) {
    const positionKey = inPresentation ? "presentationPosition" : "position";
    this[positionKey] = [void 0, topIn];
  }
  getWidth(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][2];
  }
  setWidth(widthIn, inPresentation = false) {
    const sizeKey = inPresentation ? "presentationSize" : "size";
    this[sizeKey] = [widthIn, void 0];
  }
  getHeight(inPresentation = false) {
    const rectKey = inPresentation ? "presentationRect" : "rect";
    return this[rectKey][3];
  }
  setHeight(heightIn, inPresentation = false) {
    const sizeKey = inPresentation ? "presentationSize" : "size";
    this[sizeKey] = [void 0, heightIn];
  }
  setBackground(bool) {
    if (!!this.background === !!bool)
      return this;
    this.background = bool;
    this.emit("backgroundChanged", this);
    return this;
  }
  setPresentation(bool) {
    if (!!this.presentation === !!bool)
      return this;
    this.presentation = bool;
    if (bool)
      this.presentationRect = this.rect.slice();
    this.emit("presentationChanged", this);
    return this;
  }
  setRect(rect) {
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTRect)(rect))
      return this;
    rect[0] = Math.max(0, rect[0]);
    rect[1] = Math.max(0, rect[1]);
    rect[2] = Math.max(15, rect[2]);
    rect[3] = Math.max(15, rect[3]);
    this.rect = rect;
    this.ioLines.forEach((set) => set.forEach((line) => {
      line.uiUpdateA();
      line.uiUpdateB();
    }));
    this.emit("rectChanged", this);
    return this;
  }
  setPresentationRect(rect) {
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isTPresentationRect)(rect))
      return this;
    if (typeof rect[0] === "number")
      rect[0] = Math.max(0, rect[0]);
    if (typeof rect[1] === "number")
      rect[1] = Math.max(0, rect[1]);
    if (typeof rect[2] === "number")
      rect[2] = Math.max(15, rect[2]);
    if (typeof rect[3] === "number")
      rect[3] = Math.max(15, rect[3]);
    this.presentationRect = rect;
    this.emit("presentationRectChanged", this);
    return this;
  }
  getIsMovable(inPresentation = false) {
    if (!inPresentation)
      return true;
    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isRectMovable)(this.presentationRect);
  }
  getIsResizable(inPresentation = false) {
    if (!inPresentation)
      return true;
    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.isRectResizable)(this.presentationRect);
  }
  setZIndex(zIndex) {
    const oldZIndex = this.zIndex;
    this.zIndex = zIndex;
    this.undoable({ oldZIndex, zIndex });
    this._patcher.emit("zIndexChanged", { boxId: this.id, zIndex });
  }
  error(text) {
    this.emit("error", text);
    this._patcher.newLog("error", "Patcher", text, this);
  }
  highlight() {
    this._patcher.emit("highlightBox", this.id);
  }
  highlightPort(isSrc, portIndex) {
    this._patcher.emit("highlightPort", { boxId: this.id, isSrc, i: portIndex });
  }
  undoable(e) {
    this._patcher.boxChanged(this.id, e);
  }
  minWidth() {
    return 20;
  }
  async changeObject({ args, props, state, zIndex }, options) {
    var _a, _b, _c;
    if (args)
      await ((_a = this._object) == null ? void 0 : _a.updateArgs(args, options));
    if (props)
      await ((_b = this._object) == null ? void 0 : _b.updateProps(props, options));
    if (state)
      await ((_c = this._object) == null ? void 0 : _c.updateState(state, options));
  }
  async destroy() {
    var _a;
    this.allLines.forEach((line) => this._patcher.deleteLine(line.id));
    delete this._patcher.boxes[this.id];
    await ((_a = this._object) == null ? void 0 : _a.destroy());
    return this;
  }
  static parseObjText(strIn) {
    const REGEX = /[^\s]+/gi;
    const strArray = [];
    let match = REGEX.exec(strIn);
    while (match != null) {
      strArray.push(match[1] ? match[1] : match[0]);
      match = REGEX.exec(strIn);
    }
    const objOut = { class: "", args: [], props: {} };
    let lastProp;
    if (strArray.length)
      objOut.class = strArray.shift();
    while (strArray.length) {
      const el = strArray.shift();
      if (typeof lastProp === "undefined" && el.charAt(0) !== "@") {
        const number = Number(el);
        if (!isNaN(number)) {
          objOut.args.push(number);
          continue;
        }
        try {
          objOut.args.push(JSON.parse(el));
        } catch (e) {
          objOut.args.push(el);
        }
        continue;
      }
      if (el.length > 1 && el.charAt(0) === "@") {
        lastProp = el.substr(1);
        objOut.props[lastProp] = [];
        continue;
      }
      try {
        objOut.props[lastProp].push(JSON.parse(el));
      } catch (e) {
        objOut.props[lastProp].push(el);
      }
    }
    for (const key in objOut.props) {
      if (objOut.props[key].length === 0)
        objOut.props[key] = true;
      else if (objOut.props[key].length === 1)
        objOut.props[key] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.parseToPrimitive)(objOut.props[key][0]);
      else
        objOut.props[key] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.parseToPrimitive)(objOut.props[key].join(" "));
    }
    return objOut;
  }
  toString() {
    const { id, text, ios, rect, background, presentation, presentationRect, args, props, data, zIndex } = this;
    const defaultProps = structuredClone(props);
    let pinNames = [];
    if (this.meta) {
      for (const key in this.meta.props) {
        if (this.meta.props[key].alwaysSerialize) {
          if (!(key in defaultProps)) {
            defaultProps[key] = this.meta.props[key].default;
          }
        }
      }
      pinNames = this.meta.ios.map((io) => io.pin.pinName);
    }
    return JSON.stringify({ id, text, pinNames, rect, background, presentation, presentationRect, args, props: defaultProps, data, zIndex });
  }
  toSerializable() {
    return JSON.parse(this.toString());
  }
}


/***/ }),

/***/ "./src/core/hardware/Compatibility.ts":
/*!********************************************!*\
  !*** ./src/core/hardware/Compatibility.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compatibleAnalog": () => (/* binding */ compatibleAnalog),
/* harmony export */   "compatibleBus": () => (/* binding */ compatibleBus),
/* harmony export */   "compatibleDigital": () => (/* binding */ compatibleDigital),
/* harmony export */   "compatiblePins": () => (/* binding */ compatiblePins)
/* harmony export */ });

function compatibleBus(pins) {
  return false;
}
function compatibleDigital(pins) {
  let num_outputs = pins.filter((p) => p.digitalOutput && !p.digitalInput).length;
  if (num_outputs > 1) {
    return false;
  }
  let outputs = pins.map((p, i) => ({ p, i })).filter(({ p }) => p.digitalOutput);
  let some_valid_config = false;
  for (const output of outputs) {
    const { p: pin, i: index } = output;
    if (pins.filter((_, i) => i !== index).every((p) => p.digitalInput || p.tie)) {
      some_valid_config = true;
      break;
    }
  }
  return some_valid_config;
}
function compatibleAnalog(pins) {
  let num_outputs = pins.filter((p) => p.analogOutput && !p.analogInput).length;
  if (num_outputs > 1) {
    return false;
  }
  let outputs = pins.map((p, i) => ({ p, i })).filter(({ p }) => p.analogOutput);
  let some_valid_config = false;
  for (const output of outputs) {
    const { p: pin, i: index } = output;
    if (pins.filter((_, i) => i !== index).every((p) => p.analogInput || p.tie)) {
      some_valid_config = true;
      break;
    }
  }
  return some_valid_config;
}
function compatiblePins(pins) {
  let compatibilities = [
    compatibleBus,
    compatibleDigital,
    compatibleAnalog
  ];
  if (compatibilities.some((f) => f(pins))) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./src/core/hardware/HardwareEditor.ts":
/*!*********************************************!*\
  !*** ./src/core/hardware/HardwareEditor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatcherEditor)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _file_FileEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../file/FileEditor */ "./src/core/file/FileEditor.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./src/core/hardware/Box.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Line */ "./src/core/hardware/Line.ts");
/* harmony import */ var _Compatibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Compatibility */ "./src/core/hardware/Compatibility.ts");

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





class PatcherEditor extends _file_FileEditor__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(instance) {
    super(instance);
    this.state = {
      locked: false,
      presentation: false,
      showGrid: true,
      snapToGrid: true,
      selectAfterEdit: true,
      selected: []
    };
    this.handleChangeBoxText = (e) => this.emit("changeBoxText", e);
    this.handlePassiveDeleteLine = (e) => this.emit("delete", { boxes: {}, lines: { [e.id]: e.toSerializable() } });
    this.handleBoxChanged = (e) => this.emit("boxChanged", e);
    this.handlePropsChanged = (e) => this.emit("propsChanged", e);
    this.handleZIndexChanged = (e) => this.emit("zIndexChanged", e);
    this.handleHighlightBox = (e) => this.emit("highlightBox", e);
    this.handleHighlightPort = (e) => this.emit("highlightPort", e);
    this.handleChanged = () => this.instance.emitChanged();
    const { openInPresentation } = this.props;
    this.setState({
      locked: false,
      presentation: !!openInPresentation,
      showGrid: true,
      snapToGrid: true,
      selectAfterEdit: true,
      selected: []
    });
  }
  static async fromProjectItem({ file, env, project, instanceId }) {
    const patcher = await file.instantiate({ env, project, instanceId });
    const editor = new this(patcher);
    return editor.init();
  }
  get isLocked() {
    return this.state.locked;
  }
  get boxes() {
    return this.instance.boxes;
  }
  get lines() {
    return this.instance.lines;
  }
  get props() {
    return this.instance.props;
  }
  get publicProps() {
    return this.instance.publicProps;
  }
  get fileExtension() {
    return this.instance.fileExtension;
  }
  get fileName() {
    return this.instance.fileName;
  }
  get fileIcon() {
    return "sitemap";
  }
  async init() {
    if (!this.instance.isReady) {
      await new Promise((resolve, reject) => {
        const handleReady = () => {
          resolve();
          this.instance.off("ready", handleReady);
        };
        this.instance.on("ready", handleReady);
      });
    }
    this.on("changed", this.handleChanged);
    this.instance.on("changeBoxText", this.handleChangeBoxText);
    this.instance.on("passiveDeleteLine", this.handlePassiveDeleteLine);
    this.instance.on("boxChanged", this.handleBoxChanged);
    this.instance.on("propsChanged", this.handlePropsChanged);
    this.instance.on("zIndexChanged", this.handleZIndexChanged);
    this.instance.on("highlightBox", this.handleHighlightBox);
    this.instance.on("highlightPort", this.handleHighlightPort);
    const { openInPresentation } = this.props;
    this.setState({
      locked: false,
      presentation: !!openInPresentation,
      showGrid: true,
      snapToGrid: true,
      selectAfterEdit: true,
      selected: []
    });
    this._isReady = true;
    this.emit("ready");
    return this;
  }
  setState(state) {
    let changed = false;
    for (const keyIn in state) {
      const key = keyIn;
      if (this.state[key] === state[key])
        continue;
      changed = true;
      if (key === "locked" || key === "presentation")
        this.deselectAll();
      this.state[key] = state[key];
      this.emit(key, state[key]);
    }
    return changed;
  }
  async createBox(boxIn) {
    const box = await this.instance.createBox(boxIn);
    this.emit("create", { boxes: { [box.id]: box.toSerializable() }, lines: {} });
    await box.postInit();
    return box;
  }
  async createBoxFromFile(file, boxIn) {
    const path = file.projectPath;
    const type = file.type;
    const ext = file.fileExtension;
    if (type === "patcher") {
      const extMap = this.props.mode === "daisy" ? { json: "p", jspat: "p", maxpat: "max", gendsp: "gen", dsppat: "pfaust" } : this.props.mode === "faust" ? { gendsp: "gen", dsppat: "p" } : this.props.mode === "gen" ? { gendsp: "gen" } : {};
      const obj = extMap[ext];
      if (obj)
        await this.createBox(__spreadValues({ text: `${obj} ${path}` }, boxIn));
    } else if (type === "audio") {
      await this.createBox(__spreadValues({ text: `buffer~ ${path}` }, boxIn));
    } else if (type === "image") {
      await this.createBox(__spreadValues({ text: `img ${path}` }, boxIn));
    } else if (type === "text") {
      await this.createBox(__spreadValues({ text: `ptext ${path}` }, boxIn));
    }
  }
  async deleteBox(boxId) {
    this.deselect(boxId);
    const box = await this.instance.deleteBox(boxId);
    if (!box)
      return null;
    this.emit("delete", { boxes: { [box.id]: box.toSerializable() }, lines: {} });
    return box;
  }
  createLine(lineIn) {
    const line = this.instance.createLine(lineIn);
    if (!line)
      return null;
    this.emit("create", { boxes: {}, lines: { [line.id]: line.toSerializable() } });
    return line;
  }
  deleteLine(lineId) {
    this.deselect(lineId);
    const line = this.instance.deleteLine(lineId);
    if (!line)
      return null;
    this.emit("delete", { boxes: {}, lines: { [line.id]: line.toSerializable() } });
    return line;
  }
  changeLineA(lineId, aId, aIo) {
    const e = this.instance.changeLineA(lineId, aId, aIo);
    this.emit("changeLineA", e);
  }
  changeLineB(lineId, bId, bIo) {
    const e = this.instance.changeLineB(lineId, bId, bIo);
    this.emit("changeLineB", e);
  }
  async changeBox(boxId, change) {
    var _a, _b;
    if (typeof change.zIndex === "number")
      (_a = this.instance.boxes[boxId]) == null ? void 0 : _a.setZIndex(change.zIndex);
    await ((_b = this.instance.boxes[boxId]) == null ? void 0 : _b.changeObject(change));
  }
  select(...ids) {
    ids.forEach((id) => {
      if (this.state.selected.indexOf(id) >= 0)
        return;
      if (this.boxes[id] || this.lines[id])
        this.state.selected.push(id);
    });
    this.emit("selected", this.state.selected.slice());
  }
  selectAllBoxes() {
    let ids = Object.keys(this.boxes);
    if (this.state.presentation)
      ids = ids.filter((id) => this.boxes[id].presentation);
    this.state.selected = ids;
    this.emit("selected", ids);
  }
  selectOnly(...ids) {
    this.state.selected = [];
    this.select(...ids);
  }
  deselect(...ids) {
    ids.forEach((id) => {
      const i = this.state.selected.indexOf(id);
      if (i === -1)
        return;
      this.state.selected.splice(i, 1);
    });
    this.emit("selected", this.state.selected.slice());
  }
  deselectAll() {
    this.state.selected = [];
    this.emit("selected", []);
  }
  selectedToString() {
    const lineSet = /* @__PURE__ */ new Set();
    const patcher = { lines: {}, boxes: {} };
    this.state.selected.filter((id) => id.startsWith("box") && this.boxes[id]).map((id) => this.boxes[id]).forEach((box) => {
      box.allLines.forEach((line) => lineSet.add(line));
      patcher.boxes[box.id] = box.toSerializable();
    });
    lineSet.forEach((line) => {
      if (patcher.boxes[line.aId] && patcher.boxes[line.bId])
        patcher.lines[line.id] = line.toSerializable();
    });
    if (!Object.keys(patcher.boxes))
      return void 0;
    return JSON.stringify(patcher, void 0, 4);
  }
  bringToFront() {
    this.state.selected.filter((id) => id.startsWith("box") && this.boxes[id]).map((id) => this.boxes[id]).forEach((box) => {
      box.setZIndex((0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTimestamp)());
    });
  }
  sendToBack() {
    this.state.selected.filter((id) => id.startsWith("box") && this.boxes[id]).map((id) => this.boxes[id]).forEach((box) => {
      box.setZIndex(-(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTimestamp)());
    });
  }
  async pasteToPatcher(clipboard) {
    const idMap = {};
    const pasted = { boxes: {}, lines: {} };
    if (!clipboard || !clipboard.boxes)
      return pasted;
    const $init = [];
    const $postInit = [];
    if (Array.isArray(clipboard.boxes) || Array.isArray(clipboard.lines))
      return pasted;
    this.instance.state.preventEmitChanged = true;
    for (const boxId in clipboard.boxes) {
      const box = clipboard.boxes[boxId];
      if (this.boxes[box.id]) {
        idMap[box.id] = "box-" + ++this.props.boxIndexCount;
        box.id = idMap[box.id];
      } else {
        idMap[box.id] = box.id;
        const numID = parseInt(box.id.match(/\d+/)[0]);
        if (numID > this.props.boxIndexCount)
          this.props.boxIndexCount = numID;
      }
      box.rect = [box.rect[0] + 30, box.rect[1] + 30, box.rect[2], box.rect[3]];
      $init.push(this.instance.createBox(box));
    }
    const createdBoxes = (await Promise.all($init)).filter((box) => !!box);
    createdBoxes.forEach((box) => {
      pasted.boxes[box.id] = box.toSerializable();
      $postInit.push(box.postInit());
    });
    await Promise.all($postInit);
    for (const lineId in clipboard.lines) {
      const line = clipboard.lines[lineId];
      line.id = "line-" + ++this.props.lineIndexCount;
      line.aIo[0] = idMap[line.aIo[0]];
      line.bIo[0] = idMap[line.bIo[0]];
      const createdLine = this.instance.createLine(line);
      if (createdLine)
        pasted.lines[createdLine.id] = createdLine.toSerializable();
    }
    this.instance.state.preventEmitChanged = false;
    if (Object.keys(pasted.boxes).length) {
      if (this.state.selectAfterEdit) {
        this.deselectAll();
        this.select(...Object.keys(pasted.boxes));
      }
      this.emit("create", pasted);
      this.instance.emitGraphChanged();
    }
    return pasted;
  }
  async create(objects) {
    const $init = [];
    const $postInit = [];
    const created = { boxes: {}, lines: {} };
    for (const boxId in objects.boxes) {
      const boxIn = objects.boxes[boxId];
      const box = new _Box__WEBPACK_IMPORTED_MODULE_2__["default"](this.instance, boxIn);
      this.boxes[box.id] = box;
      created.boxes[box.id] = box.toSerializable();
      $init.push(box.init());
      $postInit.push(box.postInit());
    }
    await Promise.all($init);
    await Promise.all($postInit);
    for (const lineId in objects.lines) {
      const lineIn = objects.lines[lineId];
      if (!this.instance.canCreateLine(lineIn))
        continue;
      const line = new _Line__WEBPACK_IMPORTED_MODULE_3__["default"](this.instance, lineIn);
      this.lines[line.id] = line;
      created.lines[line.id] = line.toSerializable();
      line.enable();
    }
    if (this.state.selectAfterEdit) {
      this.deselectAll();
      this.select(...Object.keys(objects.boxes));
    }
    this.emit("create", created);
    this.instance.emitGraphChanged();
  }
  async deleteSelected() {
    const boxSet = /* @__PURE__ */ new Set();
    const lineSet = /* @__PURE__ */ new Set();
    this.state.selected.filter((id) => id.startsWith("line")).forEach((id) => lineSet.add(this.lines[id]));
    this.state.selected.filter((id) => id.startsWith("box")).forEach((id) => {
      boxSet.add(this.boxes[id]);
      this.boxes[id].allLines.forEach((line) => lineSet.add(line));
    });
    if (!boxSet.size && !lineSet.size)
      return void 0;
    this.state.selected = [];
    const deleted = { boxes: {}, lines: {} };
    const promises = [];
    lineSet.forEach((line) => {
      deleted.lines[line.id] = line.toSerializable();
      line.destroy();
    });
    boxSet.forEach((box) => {
      deleted.boxes[box.id] = box.toSerializable();
      promises.push(box.destroy());
    });
    await Promise.all(promises);
    this.emit("selected", this.state.selected.slice());
    this.emit("delete", deleted);
    this.instance.emitGraphChanged();
    return deleted;
  }
  async delete(objects) {
    const deleted = { boxes: {}, lines: {} };
    console.log(`deleted objects: ${objects}`);
    console.log(this.instance);
    console.log(Object.keys(this.lines));
    for (const id in objects.lines) {
      console.log(`id: ${id}`);
      deleted.lines[id] = this.lines[id].destroy().toSerializable();
    }
    const promises = [];
    for (const id in objects.boxes) {
      deleted.boxes[id] = this.boxes[id].toSerializable();
      promises.push(this.boxes[id].destroy());
    }
    await Promise.all(promises);
    this.emit("selected", this.state.selected.slice());
    this.emit("delete", deleted);
    this.instance.emitGraphChanged();
  }
  async cut() {
    if (this.state.locked)
      return;
    await this.copy();
    this.deleteSelected();
  }
  async copy() {
    if (this.state.locked)
      return;
    const s = this.selectedToString();
    if (!s)
      return;
    await navigator.clipboard.writeText(s);
  }
  async paste() {
    if (this.state.locked)
      return;
    const s = await navigator.clipboard.readText();
    if (!s)
      return;
    let parsed;
    try {
      parsed = JSON.parse(s);
    } catch (e) {
    }
    await this.pasteToPatcher(parsed);
  }
  async duplicate() {
    if (this.state.locked)
      return;
    const s = this.selectedToString();
    if (!s)
      return;
    let parsed;
    try {
      parsed = JSON.parse(s);
    } catch (e) {
    }
    await this.pasteToPatcher(parsed);
  }
  async selectAll() {
    this.selectAllBoxes();
  }
  selectRegion(selectionRect, selectedBefore) {
    let [left, top, right, bottom] = selectionRect;
    if (left > right)
      [left, right] = [right, left];
    if (top > bottom)
      [top, bottom] = [bottom, top];
    const { presentation } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    const select = selectedBefore.slice();
    for (const boxId in this.boxes) {
      const box = this.boxes[boxId];
      if (presentation && !box.presentation)
        continue;
      const rect = box[rectKey];
      if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isTRect)(rect))
        continue;
      const [boxLeft, boxTop, boxWidth, boxHeight] = rect;
      const [boxRight, boxBottom] = [boxLeft + boxWidth, boxTop + boxHeight];
      if (boxLeft < right && boxTop < bottom && boxRight > left && boxBottom > top) {
        const i = select.indexOf(boxId);
        if (i === -1)
          select.push(boxId);
        else
          select.splice(i, 1);
      }
    }
    const deselect = this.state.selected.filter((id) => select.indexOf(id) === -1);
    this.select(...select);
    this.deselect(...deselect);
  }
  moveSelectedBox(dragOffset, refBoxID) {
    const { presentation, snapToGrid, selected } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    const delta = __spreadValues({}, dragOffset);
    if (refBoxID) {
      const rect = this.boxes[refBoxID][rectKey];
      if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectMovable)(rect))
        return { x: 0, y: 0 };
      delta.x = snapToGrid ? Math.round((rect[0] + dragOffset.x) / this.props.grid[0]) * this.props.grid[0] - rect[0] : dragOffset.x;
      delta.y = snapToGrid ? Math.round((rect[1] + dragOffset.y) / this.props.grid[1]) * this.props.grid[1] - rect[1] : dragOffset.y;
    }
    if (!delta.x && !delta.y)
      return dragOffset;
    this.move(selected, delta, presentation);
    return { x: dragOffset.x - delta.x, y: dragOffset.y - delta.y };
  }
  moveEnd(selected, delta) {
    const { presentation } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    let ids = selected.filter((id) => id.startsWith("box") && this.boxes[id]);
    if (presentation)
      ids = ids.filter((id) => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectMovable)(this.boxes[id][rectKey]));
    const boxes = ids.map((id) => this.boxes[id]);
    boxes.forEach((box) => box.emit(presentation ? "presentationRectChanged" : "rectChanged", box));
    this.emit("moved", { delta, selected: ids, presentation: this.state.presentation });
  }
  move(selected, delta, presentation) {
    if (this.state.selectAfterEdit)
      this.select(...selected);
    const rectKey = presentation ? "presentationRect" : "rect";
    let ids = selected.filter((id) => id.startsWith("box") && this.boxes[id]);
    if (presentation)
      ids = ids.filter((id) => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectMovable)(this.boxes[id][rectKey]));
    const boxes = ids.map((id) => this.boxes[id]);
    if (boxes.length === 0)
      return;
    let [left, top] = boxes[0][rectKey];
    for (let i = 1; i < boxes.length; i++) {
      const box = boxes[i];
      const [$left, $top] = box[rectKey];
      if ($left < left)
        left = $left;
      if ($top < top)
        top = $top;
    }
    delta.x = Math.max(delta.x, -left);
    delta.y = Math.max(delta.y, -top);
    if (delta.x)
      boxes.forEach((box) => box[rectKey][0] += delta.x);
    if (delta.y)
      boxes.forEach((box) => box[rectKey][1] += delta.y);
    if (!delta.x && !delta.y)
      return;
    if (presentation !== this.state.presentation)
      return;
    this.emit("moving", { selected: ids, delta, presentation });
    if (presentation)
      return;
    const lineSet = /* @__PURE__ */ new Set();
    boxes.forEach((box) => {
      box.ioLines.forEach((set) => set.forEach((line) => lineSet.add(line)));
    });
    lineSet.forEach((line) => line.emit("posChanged", line));
  }
  resizeSelectedBox(boxId, dragOffset, type) {
    const { presentation, snapToGrid, selected } = this.state;
    const rectKey = presentation ? "presentationRect" : "rect";
    const rect = this.boxes[boxId][rectKey];
    if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectResizable)(rect))
      return { x: 0, y: 0 };
    const delta = { x: 0, y: 0 };
    if (type === "e" || type === "se" || type === "ne") {
      delta.x = snapToGrid ? Math.round((rect[0] + rect[2] + dragOffset.x) / this.props.grid[0]) * this.props.grid[0] - rect[0] - rect[2] : dragOffset.x;
    }
    if (type === "s" || type === "se" || type === "sw") {
      delta.y = snapToGrid ? Math.round((rect[1] + rect[3] + dragOffset.y) / this.props.grid[1]) * this.props.grid[1] - rect[1] - rect[3] : dragOffset.y;
    }
    if (type === "w" || type === "nw" || type === "sw") {
      delta.x = snapToGrid ? Math.round((rect[0] + dragOffset.x) / this.props.grid[0]) * this.props.grid[0] - rect[0] : dragOffset.x;
    }
    if (type === "n" || type === "nw" || type === "ne") {
      delta.y = snapToGrid ? Math.round((rect[1] + dragOffset.y) / this.props.grid[1]) * this.props.grid[1] - rect[1] : dragOffset.y;
    }
    if (!delta.x && !delta.y)
      return dragOffset;
    this.resize(selected, delta, type, presentation);
    return { x: dragOffset.x - delta.x, y: dragOffset.y - delta.y };
  }
  resizeEnd(selected, delta, type) {
    const { presentation } = this.state;
    this.emit("resized", { delta, type, selected, presentation });
  }
  resize(selected, delta, type, presentation) {
    if (this.state.selectAfterEdit)
      this.select(...selected);
    const rectKey = presentation ? "presentationRect" : "rect";
    let ids = selected.filter((id) => id.startsWith("box") && this.boxes[id]);
    if (presentation)
      ids = ids.filter((id) => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isRectResizable)(this.boxes[id][rectKey]));
    const boxes = ids.map((id) => this.boxes[id]);
    if (boxes.length === 0)
      return;
    let [left, top, width, height] = boxes[0][rectKey];
    for (let i = 1; i < boxes.length; i++) {
      const box = boxes[i];
      const [$left, $top, $width, $height] = box[rectKey];
      if ($left < left)
        left = $left;
      if ($top < top)
        top = $top;
      if ($width < width)
        width = $width;
      if ($height < height)
        height = $height;
    }
    if (type === "sw" || type === "w" || type === "nw")
      delta.x = Math.max(delta.x, -left);
    if (type === "nw" || type === "n" || type === "ne")
      delta.y = Math.max(delta.y, -top);
    if (type === "ne" || type === "e" || type === "se")
      delta.x = Math.max(delta.x, 15 - width);
    if (type === "sw" || type === "w" || type === "nw")
      delta.x = Math.min(delta.x, width - 15);
    if (type === "se" || type === "s" || type === "sw")
      delta.y = Math.max(delta.y, 15 - height);
    if (type === "nw" || type === "n" || type === "ne")
      delta.y = Math.min(delta.y, height - 15);
    boxes.forEach((box) => {
      var _a, _b, _c, _d;
      const sizingX = box.UI ? ((_a = box.UI) == null ? void 0 : _a.sizing) === "horizontal" || ((_b = box.UI) == null ? void 0 : _b.sizing) === "both" : true;
      const sizingY = box.UI ? ((_c = box.UI) == null ? void 0 : _c.sizing) === "vertical" || ((_d = box.UI) == null ? void 0 : _d.sizing) === "both" : true;
      if (delta.x && sizingX) {
        if (type === "ne" || type === "e" || type === "se")
          box[rectKey][2] += delta.x;
        if (type === "sw" || type === "w" || type === "nw") {
          box[rectKey][2] -= delta.x;
          box[rectKey][0] += delta.x;
        }
      }
      if (delta.y && sizingY) {
        if (type === "se" || type === "s" || type === "sw")
          box[rectKey][3] += delta.y;
        if (type === "nw" || type === "n" || type === "ne") {
          box[rectKey][3] -= delta.y;
          box[rectKey][1] += delta.y;
        }
      }
    });
    if (!delta.x && !delta.y)
      return;
    if (presentation !== this.state.presentation)
      return;
    boxes.forEach((box) => box.emit(presentation ? "presentationRectChanged" : "rectChanged", box));
    if (presentation)
      return;
    const lineSet = /* @__PURE__ */ new Set();
    boxes.forEach((box) => {
      box.ioLines.forEach((set) => set.forEach((line) => lineSet.add(line)));
    });
    lineSet.forEach((line) => line.emit("posChanged", line));
  }
  findNearestPort(left, top, from, to) {
    let nearest = [null, null];
    let minDistance = 100;
    if (to && this.getPortsCompatible(from[0], from[1], to[0], to[1])) {
      const currentPos = this.boxes[to[0]].getIoPos(to[1]);
      const currentDistance = ((currentPos.left - left) ** 2 + (currentPos.top - top) ** 2) ** 0.5;
      if (currentDistance < 100) {
        nearest = to;
        minDistance = currentDistance;
      }
    }
    for (const id in this.boxes) {
      const box = this.boxes[id];
      box.ioPositions.map((pos, i) => ({ pos, i, compatible: this.getPortsCompatible(from[0], from[1], id, i) })).filter(({ compatible }) => compatible).forEach(({ pos, i }) => {
        const distance = ((pos.left - left) ** 2 + (pos.top - top) ** 2) ** 0.5;
        if (distance < minDistance) {
          const potentialLine = { aIo: from, bIo: [id, i] };
          const canCreate = this.instance.canCreateLine(potentialLine);
          if (!canCreate)
            return;
          nearest = [id, i];
          minDistance = distance;
        }
      });
    }
    return nearest;
  }
  getLinesByIo(boxId, io) {
    const box = this.boxes[boxId];
    if (!box || io > box.ios.length) {
      return [];
    }
    const lines = [];
    if (box.text.startsWith("tie")) {
      for (let key in this.lines) {
        let line = this.lines[key];
        if (line.aId === boxId || line.bId === boxId) {
          lines.push(line);
        }
      }
    } else {
      for (let key in this.lines) {
        let line = this.lines[key];
        if (line.aId === boxId && line.aIo[1] === io || line.bId === boxId && line.bIo[1] === io) {
          lines.push(line);
        }
      }
    }
    return lines;
  }
  getConnectedPins(boxId, io) {
    let lines = this.getLinesByIo(boxId, io);
    let all_boxes = lines.flatMap((line) => [line.aIo, line.bIo]);
    let unique_boxes = Array.from(/* @__PURE__ */ new Set([...all_boxes, [boxId, io]]));
    return unique_boxes.map(([id, io2]) => this.boxes[id].meta.ios[io2].pin);
  }
  getPortsCompatible(aBox, aIo, bBox, bIo) {
    if (aBox === bBox) {
      return false;
    }
    let aPins = this.getConnectedPins(aBox, aIo);
    let bPins = this.getConnectedPins(bBox, bIo);
    return (0,_Compatibility__WEBPACK_IMPORTED_MODULE_4__.compatiblePins)([...aPins, ...bPins]);
  }
  // TODO -- this is where the magic happens
  highlightNearestPort(findSrc, dragOffset, from, to) {
    const origPos = to ? this.boxes[to[0]].getIoPos(to[1]) : this.boxes[from[0]].getIoPos(from[1]);
    const left = origPos.left + dragOffset.x;
    const top = origPos.top + dragOffset.y;
    const [boxId, portIndex] = this.findNearestPort(left, top, from, to);
    if (boxId)
      this.highlightPort(boxId, findSrc, portIndex);
    else
      this.unhighlightPort();
    return [boxId, portIndex];
  }
  highlightBox(boxId) {
    this.emit("highlightBox", boxId);
  }
  highlightPort(boxId, isSrc, portIndex) {
    this.emit("highlightPort", { boxId, isSrc, i: portIndex });
  }
  unhighlightPort() {
    this.emit("highlightPort", null);
  }
  bubblePorts(boxId, portIndex, pin) {
    this.emit("bubblePorts", { boxId, i: portIndex, pin });
  }
  unBubblePorts() {
    this.emit("bubblePorts", null);
  }
  tempLine(findSrc, from) {
    this.emit("tempLine", { findSrc, from });
    this.bubblePorts(from[0], from[1], this.boxes[from[0]].meta.ios[from[1]].pin);
    return this;
  }
  inspector(box) {
    if (box)
      this.emit("inspector");
    else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found])
        this.emit("inspector");
    }
  }
  reference(box) {
    if (box)
      this.emit("reference");
    else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found])
        this.emit("reference");
    }
  }
  help(box) {
    if (box) {
      this.emit("help");
    } else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found]) {
        this.emit("help");
      }
    }
  }
  dockUI(box) {
    if (box && box.UI.dockable)
      this.emit("dockUI", box.id);
    else if (this.state.selected.length) {
      const found = this.state.selected.find((id) => id.startsWith("box"));
      if (found && this.boxes[found] && this.boxes[found].UI.dockable)
        this.emit("dockUI", found);
    }
  }
  onUiResized() {
  }
  async toTempData() {
    return this.instance.toSerializable();
  }
}


/***/ }),

/***/ "./src/core/hardware/HardwareHistory.ts":
/*!**********************************************!*\
  !*** ./src/core/hardware/HardwareHistory.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatcherHistory)
/* harmony export */ });
/* harmony import */ var _file_History__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file/History */ "./src/core/file/History.ts");


class PatcherHistory extends _file_History__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get eventListening() {
    return [
      "create",
      "delete",
      "changeBoxText",
      "boxChanged",
      "changeLineA",
      "changeLineB",
      "moved",
      "resized",
      "propsChanged"
    ];
  }
  async undoOf(editor, eventName, eventData) {
    if (eventName === "delete") {
      const e = eventData;
      await editor.create(e);
    } else if (eventName === "changeBoxText") {
      const e = eventData;
      const { boxId, oldText } = e;
      await editor.instance.changeBoxText(boxId, oldText);
    } else if (eventName === "boxChanged") {
      const e = eventData;
      const { boxId, oldArgs, oldProps, oldState, oldZIndex } = e;
      await editor.changeBox(boxId, { args: oldArgs, props: oldProps, state: oldState, zIndex: oldZIndex });
    } else if (eventName === "moved") {
      const e = eventData;
      const { selected, delta, presentation } = e;
      const d = { x: -1 * delta.x, y: -1 * delta.y };
      editor.move(selected, d, presentation);
      editor.moveEnd(selected, d);
    } else if (eventName === "changeLineA") {
      const e = eventData;
      const { lineId, oldA } = e;
      editor.changeLineA(lineId, oldA[0], oldA[1]);
    } else if (eventName === "changeLineB") {
      const e = eventData;
      const { lineId, oldB } = e;
      editor.changeLineB(lineId, oldB[0], oldB[1]);
    } else if (eventName === "create") {
      const e = eventData;
      await editor.delete(e);
    } else if (eventName === "resized") {
      const e = eventData;
      const { selected, delta, type: t, presentation } = e;
      const d = { x: -1 * delta.x, y: -1 * delta.y };
      editor.resize(selected, d, t, presentation);
      editor.resizeEnd(selected, d, t);
    } else if (eventName === "propsChanged") {
      const e = eventData;
      editor.instance.setProps(e.oldProps);
    }
  }
  async redoOf(editor, eventName, eventData) {
    if (eventName === "create") {
      const e = eventData;
      await editor.create(e);
    } else if (eventName === "changeBoxText") {
      const e = eventData;
      const { boxId, text } = e;
      await editor.instance.changeBoxText(boxId, text);
    } else if (eventName === "boxChanged") {
      const e = eventData;
      const { boxId, args, props, state, zIndex } = e;
      await editor.changeBox(boxId, { args, props, state, zIndex });
    } else if (eventName === "moved") {
      const e = eventData;
      const { selected, delta, presentation } = e;
      editor.move(selected, delta, presentation);
      editor.moveEnd(selected, delta);
    } else if (eventName === "changeLineA") {
      const e = eventData;
      const { lineId, newA } = e;
      editor.changeLineA(lineId, newA[0], newA[1]);
    } else if (eventName === "changeLineB") {
      const e = eventData;
      const { lineId, newB } = e;
      editor.changeLineB(lineId, newB[0], newB[1]);
    } else if (eventName === "delete") {
      const e = eventData;
      await editor.delete(e);
    } else if (eventName === "resized") {
      const e = eventData;
      const { selected, delta, type: t, presentation } = e;
      editor.resize(selected, delta, t, presentation);
      editor.resizeEnd(selected, delta, t);
    } else if (eventName === "propsChanged") {
      const e = eventData;
      editor.instance.setProps(e.props);
    }
  }
  async mergeChanges(...events) {
    this.editors.forEach((e) => e.state.selectAfterEdit = false);
    const merged = await super.mergeChanges(...events);
    this.editors.forEach((e) => e.state.selectAfterEdit = true);
    return merged;
  }
}


/***/ }),

/***/ "./src/core/hardware/Line.ts":
/*!***********************************!*\
  !*** ./src/core/hardware/Line.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HardwareLine)
/* harmony export */ });
/* harmony import */ var _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/TypedEventEmitter */ "./src/utils/TypedEventEmitter.ts");


class HardwareLine extends _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(patcherIn, lineIn) {
    super();
    this.disabled = true;
    this.updateType = () => {
      const type = this.calcType();
      if (type !== this._type) {
        this._type = type;
        this.emit("typeChanged", type);
      }
    };
    this.id = lineIn.id;
    this.aIo = lineIn.aIo;
    this.bIo = lineIn.bIo;
    this.disabled = true;
    this._patcher = patcherIn;
    const { aBox, bBox } = this;
    this._type = this.calcType();
    if (aBox) {
      aBox.on("metaUpdated", this.updateType);
      aBox.addIoLine(this, true);
    }
    if (bBox) {
      bBox.on("metaUpdated", this.updateType);
      bBox.addIoLine(this, false);
    }
  }
  static compare(line1, line2) {
    return line2.positionHash - line1.positionHash;
  }
  get presentation() {
    return this.aBox && this.aBox.presentation && this.bBox && this.bBox.presentation;
  }
  setA(a) {
    const aId = a[0];
    const aIo = a[1];
    if (aId === this.aIo[0] && aIo === this.aIo[1])
      return this;
    this.aBox.off("metaUpdated", this.updateType);
    this.disable();
    this.aBox.removeIoLine(this, true);
    this.aIo = [aId, aIo];
    this.aBox.addIoLine(this, true);
    this.enable();
    this.aBox.on("metaUpdated", this.updateType);
    this.updateType();
    return this.uiUpdateA();
  }
  getA() {
    return this.aIo;
  }
  uiUpdateA() {
    this.emit("aPosChanged", this.aPos);
    return this;
  }
  setB(b) {
    const bId = b[0];
    const bIo = b[1];
    if (bId === this.bIo[0] && bIo === this.bIo[1])
      return this;
    this.aBox.off("metaUpdated", this.updateType);
    this.disable();
    this.bBox.removeIoLine(this, false);
    this.bIo = [bId, bIo];
    this.bBox.removeIoLine(this, false);
    this.enable();
    this.bBox.on("metaUpdated", this.updateType);
    this.updateType();
    return this.uiUpdateB();
  }
  getB() {
    return this.aIo;
  }
  uiUpdateB() {
    this.emit("bPosChanged", this.bPos);
    return this;
  }
  disable(bool) {
    if (bool === false)
      return this.enable();
    if (this.disabled)
      return this;
    this.disabled = true;
    const { aBox, bBox } = this;
    if (this._patcher.getLinesByBox(this.aId, this.bId, this.aIo[1], this.bIo[1]).length > 1)
      return this;
    aBox.disconnectedIo(this.aIo[1], this.bIo[1], bBox.id, this.id);
    bBox.disconnectedIo(this.bIo[1], this.aIo[1], aBox.id, this.id);
    return this;
  }
  enable(bool) {
    if (bool === false)
      return this.disable();
    if (!this.disabled)
      return this;
    const { aBox, bBox } = this;
    if (this.aIo[1] >= aBox.ios.length || this.bIo[1] >= bBox.ios.length)
      return this._patcher.deleteLine(this.id);
    if (this._patcher.getLinesByBox(this.aId, this.bId, this.aIo[1], this.bIo[1]).length > 1)
      return this;
    this.disabled = false;
    aBox.connectedIo(this.aIo[1], this.bIo[1], bBox.id, this.id);
    bBox.connectedIo(this.bIo[1], this.aIo[1], aBox.id, this.id);
    return this;
  }
  destroy() {
    this.bBox.off("metaUpdated", this.updateType);
    this.aBox.off("metaUpdated", this.updateType);
    this.disable();
    this.aBox.removeIoLine(this, true);
    this.bBox.removeIoLine(this, false);
    delete this._patcher.lines[this.id];
    return this;
  }
  pass(data) {
    this.emit("passData", data);
    return this.disabled ? this : this.bBox.fn(this.bIo[1], data);
  }
  get positionHash() {
    const { top, left } = this._patcher.boxes[this.bIo[0]].getIoPos(this.bIo[1]);
    return left * 65536 + top;
  }
  get aPos() {
    return this._patcher.boxes[this.aIo[0]].getIoPos(this.aIo[1]);
  }
  get bPos() {
    return this._patcher.boxes[this.bIo[0]].getIoPos(this.bIo[1]);
  }
  get aId() {
    return this.aIo[0];
  }
  // get srcOutlet() {
  //     return this.src[1];
  // }
  get bId() {
    return this.bIo[0];
  }
  // get destInlet() {
  //     return this.bIo[1];
  // }
  get aBox() {
    return this._patcher.boxes[this.aIo[0]];
  }
  get bBox() {
    return this._patcher.boxes[this.bIo[0]];
  }
  calcType() {
    return "analog";
  }
  get type() {
    return this._type;
  }
  toString() {
    return JSON.stringify(this.toSerializable());
  }
  toSerializable() {
    const { id, aIo, bIo, disabled } = this;
    return { id, aIo: [...aIo], bIo: [...bIo], disabled };
  }
}


/***/ }),

/***/ "./src/core/hardware/Patcher.ts":
/*!**************************************!*\
  !*** ./src/core/hardware/Patcher.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patcher)
/* harmony export */ });
/* harmony import */ var _file_FileInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file/FileInstance */ "./src/core/file/FileInstance.ts");
/* harmony import */ var _HardwareEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HardwareEditor */ "./src/core/hardware/HardwareEditor.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ "./src/core/hardware/Line.ts");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box */ "./src/core/hardware/Box.ts");
/* harmony import */ var _HardwareHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HardwareHistory */ "./src/core/hardware/HardwareHistory.ts");
/* harmony import */ var _objects_base_BaseHardwareObjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objects/base/BaseHardwareObjects */ "./src/core/hardware/objects/base/BaseHardwareObjects.ts");
/* harmony import */ var _objects_soms_SomObjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objects/soms/SomObjects */ "./src/core/hardware/objects/soms/SomObjects.ts");
/* harmony import */ var _objects_hardware_HardwareObjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./objects/hardware/HardwareObjects */ "./src/core/hardware/objects/hardware/HardwareObjects.ts");

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








const _Patcher = class extends _file_FileInstance__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.lib = __spreadValues(__spreadValues(__spreadValues({}, _objects_base_BaseHardwareObjects__WEBPACK_IMPORTED_MODULE_5__["default"]), _objects_soms_SomObjects__WEBPACK_IMPORTED_MODULE_6__["default"]), _objects_hardware_HardwareObjects__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.lines = {};
    this.boxes = {};
    this._history = new _HardwareHistory__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._state = {
      name: "patcher",
      isReady: false,
      log: [],
      selected: [],
      // pkgMgr: undefined,
      preventEmitChanged: false
    };
    this.lines = {};
    this.boxes = {};
    this.props = {
      mode: "daisy",
      dependencies: _Patcher.props.dependencies.default.slice(),
      bgColor: _Patcher.props.bgColor.default,
      editingBgColor: _Patcher.props.editingBgColor.default,
      grid: _Patcher.props.grid.default.slice(),
      openInPresentation: _Patcher.props.openInPresentation.default,
      boxIndexCount: 0,
      lineIndexCount: 0,
      objectInit: typeof options.objectInit === "boolean" ? options.objectInit : true
      // inlets: [],
      // outlets: []
    };
  }
  static async fromProjectItem(options) {
    return new this(options).init();
  }
  async getEditor() {
    const editor = new _HardwareEditor__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    return editor.init();
  }
  get state() {
    return this._state;
  }
  // get activePkg() {
  //     return this._state.pkgMgr.pkg;
  // }
  // get activeLib() {
  //     return this._state.pkgMgr.lib;
  // }
  get activeLib() {
    return this.lib;
  }
  get isReady() {
    var _a;
    return !!((_a = this._state) == null ? void 0 : _a.isReady);
  }
  get audioCtx() {
    var _a;
    return ((_a = this.project) == null ? void 0 : _a.audioCtx) || this.env.audioCtx;
  }
  get fileExtension() {
    return {
      daisy: "daisy"
    }[this.props.mode];
  }
  get fileName() {
    var _a;
    return ((_a = this.file) == null ? void 0 : _a.name) || `${this._state.name}.${this.fileExtension}`;
  }
  emitGraphChanged() {
    if (this._state.preventEmitChanged)
      return;
    this.emit("graphChanged");
    this.emitChanged();
  }
  emitChanged() {
    if (this._state.preventEmitChanged)
      return;
    this.emit("changed");
  }
  boxChanged(boxId, changed) {
    this.emit("boxChanged", __spreadValues({ boxId }, changed));
  }
  async init(data = ((_a) => (_a = this.file) == null ? void 0 : _a.data)(), fileName = this.fileName) {
    if (data instanceof ArrayBuffer) {
      if (!data.byteLength)
        return this.load({});
      const patcherIn = await new Response(data).json();
      const splitName = fileName.split(".");
      const ext = splitName.pop();
      const extMap = { daisy: "daisy" };
      return this.load(patcherIn, extMap[ext] || "daisy");
    }
    return this.load(data || {});
  }
  async load(patcherIn, modeIn) {
    this._state.isReady = false;
    this._state.preventEmitChanged = true;
    await this.unload();
    if (typeof patcherIn !== "object") {
      this._state.isReady = true;
      this._state.preventEmitChanged = false;
      this.emit("ready");
      return this;
    }
    await this.env.taskMgr.newTask(this, "Loading patcher...", async (onUpdate) => {
      var _a;
      this.props.mode = ((_a = patcherIn.props) == null ? void 0 : _a.mode) || modeIn || "js";
      const { mode } = this.props;
      const $init = [];
      onUpdate("Decoding Patcher...");
      let patcher;
      if ("data" in patcherIn && "hardware" in patcherIn) {
        patcher = patcherIn.patcher;
      } else {
        patcher = patcherIn;
      }
      if (patcher.props)
        this.props = __spreadProps(__spreadValues(__spreadValues({}, this.props), patcher.props), { mode });
      if (Array.isArray(this.props.bgColor))
        this.props.bgColor = `rgba(${this.props.bgColor.join(", ")})`;
      if (Array.isArray(this.props.editingBgColor))
        this.props.editingBgColor = `rgba(${this.props.editingBgColor.join(", ")})`;
      if (mode === "daisy" && this.props.dependencies) {
        const { dependencies } = this.props;
        if (!Array.isArray(dependencies)) {
          this.props.dependencies = [];
          for (const key in dependencies) {
            this.props.dependencies.push([key, dependencies[key]]);
          }
        }
      }
      onUpdate("Creating Boxes...");
      if (patcher.boxes) {
        for (const id in patcher.boxes) {
          onUpdate(`Creating Boxes ${id}`);
          const $ = this.createBox(patcher.boxes[id]);
          $init.push($);
          const numID = parseInt(id.match(/\d+/)[0]);
          if (numID > this.props.boxIndexCount)
            this.props.boxIndexCount = numID;
        }
      }
      onUpdate("Initializing Boxes...");
      await Promise.all($init);
      onUpdate("Creating Lines...");
      if (patcher.lines) {
        for (const id in patcher.lines) {
          this.createLine(patcher.lines[id]);
          const numID = parseInt(id.match(/\d+/)[0]);
          if (numID > this.props.lineIndexCount)
            this.props.lineIndexCount = numID;
        }
      }
      onUpdate("Finishing...");
      this._state.isReady = true;
      this._state.preventEmitChanged = false;
      this.emitGraphChanged();
      this.emit("ready");
      await Promise.all(Object.keys(this.boxes).map((id) => this.boxes[id].postInit()));
      this.emit("postInited");
    });
    return this;
  }
  // async getPatcherNode(inputs = 2, outputs = 2) {
  //     if (this.props.mode === "jsaw" && this.env.thread === "main") {
  //         const PatcherNode = (await import("../worklets/PatcherNode")).default;
  //         await PatcherNode.register(this.audioCtx.audioWorklet);
  //         this.state.patcherNode = new PatcherNode(this.audioCtx, { env: this.env, instanceId: this.id, fileId: this.file?.id, data: this.file ? undefined : this.toSerializable(), inputs, outputs });
  //         await this.state.patcherNode.init();
  //         return this.state.patcherNode;
  //     }
  //     return null;
  // }
  async loadFromURL(url) {
    try {
      const file = await fetch(url);
      if (!file.ok)
        throw new Error();
      const parsed = await file.json();
      return this.load(parsed);
    } catch (e) {
      this.error(`Fetch file ${url} failed.`);
    }
    return this;
  }
  async loadFromString(sIn) {
    try {
      const parsed = JSON.parse(sIn);
      return this.load(parsed);
    } catch (e) {
      this.error(`Load from string: ${sIn.slice(20)}... failed.`);
    }
    return this;
  }
  async loadFromFile(file) {
    const splitName = file.name.split(".");
    const ext = splitName.pop();
    const name = splitName.join(".");
    const extMap = { daisy: "daisy" };
    if (!extMap[ext])
      return this;
    const reader = new FileReader();
    reader.onload = () => {
      let parsed;
      try {
        parsed = JSON.parse(reader.result.toString());
      } catch (e) {
        this.error(e.message);
      }
      if (parsed) {
        this.load(parsed, extMap[ext]);
        this._state.name = name;
      }
    };
    reader.onerror = () => this.error(reader.error.message);
    reader.readAsText(file, "UTF-8");
    return this;
  }
  async unload() {
    await this.emit("unload");
    if (Object.keys(this.boxes).length) {
      this._state.preventEmitChanged = true;
      await Promise.all(Object.keys(this.boxes).map((id) => this.boxes[id].destroy()));
      this._state.preventEmitChanged = false;
      this.emitGraphChanged();
    }
    this.lines = {};
    this.boxes = {};
    this.props = {
      mode: "daisy",
      dependencies: _Patcher.props.dependencies.default.slice(),
      bgColor: _Patcher.props.bgColor.default,
      editingBgColor: _Patcher.props.editingBgColor.default,
      grid: _Patcher.props.grid.default.slice(),
      openInPresentation: _Patcher.props.openInPresentation.default,
      boxIndexCount: 0,
      lineIndexCount: 0,
      objectInit: true
      // inlets: [],
      // outlets: [],
    };
    this._state.selected = [];
  }
  async destroy() {
    await this.unload();
    await super.destroy();
  }
  // async addPackage(namespace: string, url: string) {
  //     const { dependencies } = this.props;
  //     dependencies.push([namespace, url]);
  //     this.setProps({ dependencies: dependencies.slice() });
  //     await this.state.pkgMgr.init();
  //     if (!(namespace in this.activePkg)) {
  //         this.setProps({ dependencies: dependencies.filter(([id]) => id !== namespace) });
  //     }
  // }
  // async removePackage(id: string) {
  //     const { dependencies } = this.props;
  //     const i = dependencies.findIndex(t => t[0] === id);
  //     if (i === -1) return;
  //     dependencies.splice(i, 1);
  //     this.setProps({ dependencies: dependencies.slice() });
  //     await this.state.pkgMgr.init();
  // }
  async createBox(boxIn) {
    if (!boxIn.id || boxIn.id in this.boxes)
      boxIn.id = "box-" + ++this.props.boxIndexCount;
    const box = new _Box__WEBPACK_IMPORTED_MODULE_3__["default"](this, boxIn);
    this.boxes[box.id] = box;
    await box.init();
    this.emitGraphChanged();
    this.changeIO();
    return box;
  }
  getObjectConstructor(parsed) {
    const className = parsed.class;
    if (typeof className !== "string" || className.length === 0)
      return this.activeLib.EmptyObject;
    if (this.activeLib[className])
      return this.activeLib[className];
    return this.activeLib.InvalidObject;
  }
  getObjectMeta(parsed) {
    return this.getObjectConstructor(parsed).meta;
  }
  async changeBoxText(boxId, text) {
    const oldText = this.boxes[boxId].text;
    if (oldText === text)
      return this.boxes[boxId];
    await this.boxes[boxId].changeText(text);
    this.emit("changeBoxText", { oldText, text, boxId });
    this.emitGraphChanged();
    return this.boxes[boxId];
  }
  async deleteBox(boxId) {
    const box = this.boxes[boxId];
    if (!box)
      return null;
    await box.destroy();
    this.emitGraphChanged();
    this.changeIO();
    return box;
  }
  createLine(lineIn) {
    if (!this.canCreateLine(lineIn))
      return null;
    if (!lineIn.id || lineIn.id in this.lines)
      lineIn.id = "line-" + ++this.props.lineIndexCount;
    const line = new _Line__WEBPACK_IMPORTED_MODULE_2__["default"](this, lineIn);
    this.lines[line.id] = line;
    line.enable();
    this.emitGraphChanged();
    return line;
  }
  canCreateLine(lineIn) {
    if (lineIn.aIo[1] >= this.boxes[lineIn.aIo[0]].ios.length)
      return false;
    if (this.getLinesByBox(lineIn.aIo[0], lineIn.bIo[0], lineIn.aIo[1], lineIn.bIo[1]).length > 0)
      return false;
    return true;
  }
  deleteLine(lineId) {
    const line = this.lines[lineId];
    if (!line)
      return null;
    line.destroy();
    if (!this._state.preventEmitChanged)
      this.emit("passiveDeleteLine", line);
    this.emitGraphChanged();
    return line;
  }
  changeLineA(lineId, aId, aIo) {
    const line = this.lines[lineId];
    const oldA = [...line.aIo];
    const newA = [aId, aIo];
    line.setA(newA);
    this.emitGraphChanged();
    return { lineId, oldA, newA };
  }
  changeLineB(lineId, bId, bIo) {
    const line = this.lines[lineId];
    const oldB = [...line.bIo];
    const newB = [bId, bIo];
    line.setB(newB);
    this.emitGraphChanged();
    return { lineId, oldB, newB };
  }
  // changeLineSrc(lineId: string, srcId: string, srcOutlet: number) {
  //     const line = this.lines[lineId];
  //     // if (this.instance.getLinesByBox(srcId, line.destId, srcOutlet, line.destInlet).length > 0) return line;
  //     const oldSrc: [string, number] = [line.srcId, line.srcOutlet];
  //     const src: [string, number] = [srcId, srcOutlet];
  //     line.setSrc(src);
  //     this.emitGraphChanged();
  //     return { lineId, oldSrc, src };
  // }
  // changeLineDest(lineId: string, destId: string, destOutlet: number) {
  //     const line = this.lines[lineId];
  //     // if (this.getLinesByBox(line.srcId, destId, line.destInlet, destOutlet).length > 0) return line;
  //     const oldDest: [string, number] = [line.destId, line.destInlet];
  //     const dest: [string, number] = [destId, destOutlet];
  //     line.setDest(dest);
  //     this.emitGraphChanged();
  //     return { lineId, oldDest, dest };
  // }
  getLinesByAId(aId) {
    const result = [];
    for (let i = 0; i < this.boxes[aId].ios.length; i++) {
      result[i] = [];
    }
    for (const id in this.lines) {
      const line = this.lines[id];
      if (line && line.aId === aId) {
        const bIo = line.bIo;
        if (!result[bIo[1]])
          result[bIo[1]] = [id];
        else
          result[bIo[1]].push(id);
      }
    }
    return result;
  }
  getLinesByBId(bId) {
    const result = [];
    for (let i = 0; i < this.boxes[bId].ios.length; i++) {
      result[i] = [];
    }
    for (const id in this.lines) {
      const line = this.lines[id];
      if (line && line.bId === bId) {
        const aIo = line.aIo;
        if (!result[aIo[1]])
          result[aIo[1]] = [id];
        else
          result[aIo[1]].push(id);
      }
    }
    return result;
  }
  // getLinesBySrcID(srcId: string) {
  //     const result = [];
  //     for (let i = 0; i < this.boxes[srcId].outlets; i++) { // Array.fill fills the array with same instance
  //         result[i] = [];
  //     }
  //     for (const id in this.lines) {
  //         const line = this.lines[id];
  //         if (line && line.srcId === srcId) {
  //             const srcOutlet = line.srcOutlet;
  //             if (!result[srcOutlet]) result[srcOutlet] = [id];
  //             else result[srcOutlet].push(id);
  //         }
  //     }
  //     return result;
  // }
  // getLinesByDestID(destId: string) {
  //     const result = [];
  //     for (let i = 0; i < this.boxes[destId].inlets; i++) {
  //         result[i] = [];
  //     }
  //     for (const id in this.lines) {
  //         const line = this.lines[id];
  //         if (line && line.destId === destId) {
  //             const destInlet = line.destInlet;
  //             if (!result[destInlet]) result[destInlet] = [id];
  //             else result[destInlet].push(id);
  //         }
  //     }
  //     return result;
  // }
  getLinesByBox(aId, bId, aIo, bIo) {
    const result = [];
    let aIds = [];
    let bIds = [];
    const aIosWrapped = this.getLinesByAId(aId);
    if (aIo !== void 0)
      aIds = aIosWrapped[aIo];
    else
      aIosWrapped.forEach((el) => aIds = aIds.concat(el));
    const bIosWrapped = this.getLinesByBId(bId);
    if (bIo !== void 0)
      bIds = bIosWrapped[bIo];
    else
      bIosWrapped.forEach((el) => bIds = bIds.concat(el));
    if (!aIds || !bIds)
      return result;
    bIds.forEach((idOut) => bIds.forEach((idIn) => idIn === idOut ? result.push(idIn) : void 0));
    return result;
  }
  // getLinesByIo(boxId: string, io: number) {
  //     const box = this.boxes[boxId];
  //     if (!box || io > box.ios.length) {
  //         return [];
  //     }
  //     const lines = [];
  //     if (box.text.startsWith("tie")) {
  //         for (let key in this.lines) {
  //             let line = this.lines[key];
  //             if (line.aId === boxId || line.bId === boxId) {
  //                 lines.push(line);
  //             }
  //         }
  //     } else {
  //         for (let key in this.lines) {
  //             let line = this.lines[key];
  //             if ((line.aId === boxId && line.aIo[1] === io) || (line.bId === boxId && line.bIo[1] === io)) {
  //                 lines.push(line);
  //             }
  //         }
  //     }
  //     return lines;
  // }
  // getConnectedPins(boxId: string, io: number) {
  //     let lines = this.getLinesByIo(boxId, io);
  //     let all_boxes = lines.flatMap(line => [line.aIo, line.bIo]);
  //     let unique_boxes = Array.from(new Set(all_boxes));
  //     return unique_boxes.map(([id, io]) => this.boxes[id].meta.ios[io].pin);
  // }
  fn(data, inlet) {
  }
  inputAudio(input, buffer) {
    this.emitSync("audioInput", { input, buffer });
  }
  inputParam(param, buffer) {
    this.emitSync("paramInput", { param, buffer });
  }
  outputAudio(output, buffer) {
    this.emitSync("audioOutput", { output, buffer });
  }
  // outlet(outlet: number, data: any) {
  //     this.emit("dataOutput", { data, outlet });
  // }
  changeIO() {
    this.emit("ioChanged", this.meta);
  }
  get meta() {
    const { metaFromPatcher } = this;
    return __spreadValues({
      name: this.props.name || "",
      icon: null,
      version: this.props.version || "",
      description: this.props.description || ""
    }, metaFromPatcher);
  }
  get metaFromPatcher() {
    const inlets = /* @__PURE__ */ new Map();
    const outlets = /* @__PURE__ */ new Map();
    for (const boxId in this.boxes) {
      const box = this.boxes[boxId];
      if (box.meta.patcherInlets) {
        for (const [index, inlet] of box.meta.patcherInlets.entries()) {
          inlets.set([boxId, index], inlet);
        }
      }
      if (box.meta.patcherOutlets) {
        for (const [index, outlet] of box.meta.patcherOutlets.entries()) {
          outlets.set([boxId, index], outlet);
        }
      }
    }
    return { args: [], props: {}, patcherInlets: inlets, patcherOutlets: outlets };
  }
  log(message) {
    this.newLog("none", "Patcher", message, this);
  }
  error(message) {
    this.newLog("error", "Patcher", message, this);
  }
  newLog(errorLevel, title, message, emitter) {
    this.env.newLog(errorLevel, title, message, emitter);
  }
  setProps(props) {
    let changed = false;
    const oldProps = {};
    for (const keyIn in props) {
      const key = keyIn;
      if (this.props[key] === props[key])
        continue;
      changed = true;
      oldProps[key] = this.props[key];
      this.props[key] = props[key];
      this.emit(key, props[key]);
    }
    if (changed) {
      this.emit("propsChanged", { props, oldProps });
      this.emitChanged();
    }
  }
  get publicProps() {
    const { dependencies, bgColor, editingBgColor, grid, openInPresentation } = this.props;
    return { dependencies, bgColor, editingBgColor, grid, openInPresentation };
  }
  toString(spacing) {
    const { props, meta } = this;
    const boxes = {};
    const lines = {};
    const inlets = Array.from(meta.patcherInlets.entries()).map(([key, _]) => key);
    const outlets = Array.from(meta.patcherOutlets.entries()).map(([key, _]) => key);
    for (const id in this.boxes) {
      boxes[id] = this.boxes[id].toSerializable();
    }
    for (const id in this.lines) {
      lines[id] = this.lines[id].toSerializable();
    }
    return JSON.stringify({ boxes, lines, props, inlets, outlets }, void 0, spacing);
  }
  toSerializable() {
    return JSON.parse(this.toString());
  }
  serialize() {
    return new Blob([this.toString()]).arrayBuffer();
  }
};
let Patcher = _Patcher;
Patcher.props = {
  dependencies: {
    type: "object",
    description: "Patcher dependencies",
    default: []
  },
  bgColor: {
    type: "color",
    description: "Background color",
    default: "rgba(61, 65, 70, 1)"
  },
  editingBgColor: {
    type: "color",
    description: "Background color while unlocked",
    default: "rgba(82, 87, 94, 1)"
  },
  grid: {
    type: "object",
    description: "Grid size",
    default: [15, 15]
  },
  openInPresentation: {
    type: "boolean",
    description: "Open patcher in presentation",
    default: false
  }
};



/***/ }),

/***/ "./src/core/hardware/objects/base/AbstractHardwareObject.ts":
/*!******************************************************************!*\
  !*** ./src/core/hardware/objects/base/AbstractHardwareObject.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractObject),
/* harmony export */   "isJSPatcherObject": () => (/* binding */ isJSPatcherObject),
/* harmony export */   "isJSPatcherObjectConstructor": () => (/* binding */ isJSPatcherObjectConstructor)
/* harmony export */ });
/* harmony import */ var _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/TypedEventEmitter */ "./src/utils/TypedEventEmitter.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Line */ "./src/core/hardware/Line.ts");

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



const isJSPatcherObjectConstructor = (x) => typeof x === "function" && (x == null ? void 0 : x.isJSPatcherObjectConstructor);
const isJSPatcherObject = (x) => typeof x === "object" && (x == null ? void 0 : x.isJSPatcherObject);
class AbstractObject extends _utils_TypedEventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  // inletAudioConnections: TAudioNodeInletConnection[] = [];
  // outletAudioConnections: TAudioNodeOutletConnection[] = [];
  constructor(box, patcher) {
    super();
    this.isHardwarePatcherObject = true;
    this._meta = this.constructor.meta;
    this.setState = (stateIn, id) => {
      const oldState = __spreadValues({}, this.state);
      this.state = Object.assign(this.state, stateIn);
      this.emit("stateUpdated", { oldState, state: __spreadValues({}, this.state), id });
    };
    this.setProps = (propsIn) => {
      const keys = Object.keys(propsIn);
      const oldProps = __spreadValues({}, this.props);
      this.box.update({ props: propsIn });
      const props = __spreadValues({}, this.props);
      for (const key in oldProps) {
        if (keys.indexOf(key) === -1) {
          delete oldProps[key];
          delete props[key];
        }
      }
      this.emit("propsUpdated", { oldProps, props });
    };
    this.setArgs = (args) => {
      const oldArgs = this.args.slice();
      this.box.update({ args });
      this.emit("argsUpdated", { oldArgs, args: this.args.slice() });
    };
    this._patcher = patcher;
    this._box = box;
    this.id = this.env.generateId(this);
  }
  static get _name() {
    return this.name;
  }
  static get meta() {
    return {
      name: this._name,
      icon: this.icon,
      // semantic icon to display in UI
      version: this.version,
      description: this.description,
      ios: this.ios,
      args: this.args,
      props: this.props,
      patcherInlets: this.patcherInlets,
      patcherOutlets: this.patcherOutlets,
      docs: this.docs,
      helpFiles: this.helpFiles
    };
  }
  get class() {
    return this.constructor.name;
  }
  get patcher() {
    return this._patcher;
  }
  get Patcher() {
    return this._patcher.constructor;
  }
  get box() {
    return this._box;
  }
  get env() {
    return this.patcher.env;
  }
  get audioCtx() {
    return this.patcher.audioCtx;
  }
  get meta() {
    return this._meta;
  }
  setMeta(metaIn) {
    const oldMeta = __spreadValues({}, this.meta);
    this._meta = Object.assign(this.meta, metaIn);
    this.emit("metaUpdated", { oldMeta, meta: __spreadValues({}, this.meta) });
  }
  get data() {
    return this._box.data;
  }
  setData(dataIn) {
    const oldData = __spreadValues({}, this._box.data);
    this._box.data = Object.assign(this.data, dataIn);
    this.emit("dataUpdated", { oldData, data: __spreadValues({}, this.data) });
  }
  get props() {
    const props = {};
    for (const key in this.meta.props) {
      props[key] = this.getProp(key);
    }
    return props;
  }
  getProp(key) {
    if (key === "rect")
      return this.box.rect;
    if (key === "presentationRect")
      return this.box.presentationRect;
    if (key === "background")
      return this.box.background;
    if (key === "presentation")
      return this.box.presentation;
    return typeof this.box.props[key] === "undefined" ? this.meta.props[key].default : this.box.props[key];
  }
  get args() {
    return this.box.args;
  }
  get ios() {
    return this._box.ios;
  }
  set ios(i) {
    this._box.setIos(i);
  }
  get ioLines() {
    return this._box.ioLines;
  }
  async init() {
    this.subscribe();
    await this.emit("preInit");
  }
  async postInit() {
    await this.emit("postInit");
  }
  /** Do everything here */
  subscribe() {
  }
  updateUI(state) {
    this.emit("updateUI", state);
  }
  async updateArgs(args, options) {
    if (args == null ? void 0 : args.length) {
      const oldArgs = this.args.slice();
      await this.emit("updateArgs", args);
      if (options == null ? void 0 : options.undoable)
        this.undoable({ oldArgs, args: this.args.slice() });
    }
  }
  async updateProps(propsIn, options) {
    if (propsIn && Object.keys(propsIn).length) {
      const keys = Object.keys(propsIn);
      const oldProps = __spreadValues({}, this.props);
      await this.emit("updateProps", propsIn);
      const props = __spreadValues({}, this.props);
      for (const key in oldProps) {
        if (keys.indexOf(key) === -1) {
          delete oldProps[key];
          delete props[key];
        }
      }
      if (options == null ? void 0 : options.undoable)
        this.undoable({ oldProps, props });
    }
  }
  async updateState(state, options) {
    if (state && Object.keys(state).length) {
      const oldState = __spreadValues({}, this.state);
      await this.emit("updateState", { id: options == null ? void 0 : options.id, state });
      if (options == null ? void 0 : options.undoable)
        this.undoable({ oldState, state: __spreadValues({}, this.state) });
    }
  }
  fn(io, data) {
    if (io === 0) {
      if (data !== null && typeof data === "object") {
        const propsInKeys = Object.keys(data);
        const propsKeys = Object.keys(this.meta.props);
        if (propsInKeys.length && propsInKeys.every((k) => propsKeys.indexOf(k) !== -1)) {
          this.updateProps(data);
          return;
        }
      }
    }
  }
  outlet(io, data) {
    if (io >= this.ios.length)
      return;
    Array.from(this.ioLines[io]).sort(_Line__WEBPACK_IMPORTED_MODULE_2__["default"].compare).map((line) => line.pass(data));
  }
  // outletAll(outputs: Partial<O>) {
  //     for (let i = outputs.length - 1; i >= 0; i--) {
  //         if (i in outputs) this.outlet(i, outputs[i]);
  //     }
  // }
  undoable(e) {
    this.box.undoable(e);
  }
  async destroy() {
    await this.emit("destroy");
  }
  connectedIo(io, otherIo, otherBox, lineId) {
    this.emit("connectedIo", { io, otherIo, otherBox, lineId });
  }
  disconnectedIo(io, otherIo, otherBox, lineId) {
    this.emit("disconnectedIo", { io, otherIo, otherBox, lineId });
  }
  // connectedIo(aIo: number, bIo: number, bBoxId: string, lineId: string): void {
  //     this.emit("connectedIo", { aIo, bIo, bBoxId, lineId })
  // }
  // disconnectedIo(aIo: number, bIo: number, bBoxId: string, lineId: string): void {
  //     this.emit("disconnectedIo", { aIo, bIo, bBoxId, lineId })
  // }
  post(data) {
    this._patcher.newLog("none", this.meta.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data), this._box);
  }
  error(data) {
    const s = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data);
    this._patcher.newLog("error", this.meta.name, s, this._box);
    this._box.error(s);
  }
  info(data) {
    this._patcher.newLog("info", this.meta.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data), this._box);
  }
  warn(data) {
    this._patcher.newLog("warn", this.meta.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.stringifyError)(data), this._box);
  }
  highlight() {
    this._box.highlight();
  }
  applyBPF(param, bpf) {
    const { audioCtx } = this;
    const { currentTime } = audioCtx;
    param.cancelScheduledValues(currentTime);
    param.setValueAtTime(param.value, currentTime);
    let t = 0;
    bpf.forEach((a) => {
      if (a.length === 1) {
        param.setValueAtTime(a[0], currentTime + t);
      } else if (a.length > 1) {
        t += a[1];
        param.linearRampToValueAtTime(a[0], currentTime + t);
      }
    });
  }
  async getSharedItem(id = this.box.id, type = "unknown", data, onceCreate) {
    let item;
    let newItem = false;
    const { fileMgr, tempMgr } = this.patcher.env;
    try {
      item = fileMgr.getProjectItemFromPath(id);
    } catch (e) {
      try {
        item = tempMgr.getProjectItemFromPath(id);
      } catch (e2) {
        if (data) {
          const d = await data();
          try {
            item = await tempMgr.root.addFile(id, d, type);
            newItem = true;
          } catch (e3) {
            item = tempMgr.getProjectItemFromPath(id);
          }
        } else {
          if (onceCreate) {
            const off = () => {
              fileMgr.off("treeChanged", handleFileMgrTreeChanged);
              tempMgr.off("treeChanged", handleTempMgrTreeChanged);
            };
            const handleFileMgrTreeChanged = () => {
              try {
                item = fileMgr.getProjectItemFromPath(id);
                off();
                onceCreate(item);
              } catch (e3) {
              }
            };
            const handleTempMgrTreeChanged = () => {
              try {
                item = tempMgr.getProjectItemFromPath(id);
                off();
                onceCreate(item);
              } catch (e3) {
              }
            };
            fileMgr.on("treeChanged", handleFileMgrTreeChanged);
            tempMgr.on("treeChanged", handleTempMgrTreeChanged);
            return { id, item: null, newItem, off };
          }
          return { id, item: null, newItem };
        }
      }
    }
    if (item.type !== type)
      throw new Error(`Getting shared item ${id}, but returned item is of type ${item.type}, not of type ${type}.`);
    return { id, item, newItem };
  }
}
AbstractObject.isHardwarePatcherObjectConstructor = true;
AbstractObject.package = "Base";
AbstractObject.icon = null;
AbstractObject.author = "";
AbstractObject.version = "0.0.0";
AbstractObject.description = "";
AbstractObject.ios = [];
AbstractObject.args = [];
AbstractObject.props = {};
AbstractObject.patcherInlets = [];
AbstractObject.patcherOutlets = [];
AbstractObject.docs = "";
AbstractObject.helpFiles = [];


/***/ }),

/***/ "./src/core/hardware/objects/base/AbstractHardwareUI.tsx":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/base/AbstractHardwareUI.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

class AbstractUI extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues(__spreadValues({}, this.state), this.objectProps), {
      width: this.box.getWidth(this.editor.state.presentation),
      height: this.box.getHeight(this.editor.state.presentation)
    });
    this._handleUIUpdate = (e) => {
      if (e)
        this.setState(e);
      else
        this.forceUpdate();
    };
    this._handleResized = () => {
      const width = this.box.getWidth(this.editor.state.presentation);
      const height = this.box.getHeight(this.editor.state.presentation);
      if (width !== this.state.width || height !== this.state.height)
        this.setState({ width, height });
    };
  }
  get dockable() {
    return this.constructor.dockable;
  }
  get object() {
    return this.props.object;
  }
  get patcher() {
    return this.props.object.patcher;
  }
  get env() {
    return this.props.object.patcher.env;
  }
  get editor() {
    return this.props.editor;
  }
  get box() {
    return this.props.object.box;
  }
  get objectProps() {
    const props = {};
    const objectProps = this.object.meta.props;
    for (const key in objectProps) {
      if (objectProps[key].isUIState)
        props[key] = this.object.getProp(key);
    }
    return props;
  }
  componentDidMount() {
    delete this.box._editing;
    this.object.on("updateUI", this._handleUIUpdate);
    if (this.dockable && this.props.inDock)
      return;
    this.box.on("rectChanged", this._handleResized);
    this.box.on("presentationRectChanged", this._handleResized);
    this.editor.on("presentation", this._handleResized);
  }
  componentWillUnmount() {
    this.object.off("updateUI", this._handleUIUpdate);
    if (this.dockable && this.props.inDock)
      return;
    this.box.off("rectChanged", this._handleResized);
    this.box.off("presentationRectChanged", this._handleResized);
    this.editor.off("presentation", this._handleResized);
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  }
}


/***/ }),

/***/ "./src/core/hardware/objects/base/BaseHardwareObject.ts":
/*!**************************************************************!*\
  !*** ./src/core/hardware/objects/base/BaseHardwareObject.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseObject)
/* harmony export */ });
/* harmony import */ var _AbstractHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractHardwareObject */ "./src/core/hardware/objects/base/AbstractHardwareObject.ts");

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

class BaseObject extends _AbstractHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.isUIStateKey = (x) => this.meta.props[x] && this.meta.props[x].isUIState;
    this.updateUIFromProps = (props) => {
      if (props) {
        const uiState = {};
        for (const key in props) {
          if (this.isUIStateKey(key))
            uiState[key] = props[key];
        }
        this.updateUI(uiState);
      }
    };
  }
  static get meta() {
    const thisName = this._name;
    const superMeta = Object.getPrototypeOf(this).meta;
    const superProps = superMeta.props;
    const thisProps = this.props;
    for (const key in thisProps) {
      thisProps[key].group = key in superProps ? superProps[key].group : thisName;
    }
    return {
      name: this._name,
      icon: this.icon,
      version: this.version,
      description: this.description,
      ios: [...this.ios],
      args: [...this.args],
      props: __spreadValues(__spreadValues({}, superProps), thisProps),
      patcherInlets: [...this.patcherInlets],
      patcherOutlets: [...this.patcherOutlets],
      docs: this.docs,
      helpFiles: this.helpFiles
    };
  }
  subscribe() {
    super.subscribe();
    this.on("metaUpdated", (e) => this.box.emit("metaUpdated", e));
    this.on("argsUpdated", (e) => this.box.emit("argsUpdated", e));
    this.on("propsUpdated", (e) => this.box.emit("propsUpdated", e));
    this.on("dataUpdated", (e) => this.box.emit("dataUpdated", e));
    this.on("stateUpdated", (e) => this.box.emit("stateUpdated", e));
    this.on("updateArgs", this.setArgs);
    this.on("updateProps", this.setProps);
    this.on("updateProps", this.updateUIFromProps);
  }
}
BaseObject.package = "base";
BaseObject.props = {
  hidden: {
    type: "boolean",
    default: false,
    description: "Hide on lock",
    isUIState: true
  },
  background: {
    type: "boolean",
    default: false,
    description: "Include in background"
  },
  presentation: {
    type: "boolean",
    default: false,
    description: "Include in presentation"
  },
  rect: {
    type: "object",
    default: [0, 0, 90, 20],
    description: "Position and dimensions in patch"
  },
  presentationRect: {
    type: "object",
    default: [0, 0, 90, 20],
    description: "Position and dimensions in presentation"
  },
  ignoreClick: {
    type: "boolean",
    default: false,
    description: "Ignore Click",
    isUIState: true
  },
  hint: {
    type: "string",
    default: "",
    description: "Hint on hover",
    isUIState: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/base/BaseHardwareObjects.ts":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/base/BaseHardwareObjects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHardwareObject */ "./src/core/hardware/objects/base/BaseHardwareObject.ts");
/* harmony import */ var _EmptyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyObject */ "./src/core/hardware/objects/base/EmptyObject.ts");
/* harmony import */ var _InvalidObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvalidObject */ "./src/core/hardware/objects/base/InvalidObject.ts");
/* harmony import */ var _ImageObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  BaseHardwareObject: _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"],
  EmptyObject: _EmptyObject__WEBPACK_IMPORTED_MODULE_1__["default"],
  InvalidObject: _InvalidObject__WEBPACK_IMPORTED_MODULE_2__["default"],
  "image": _ImageObject__WEBPACK_IMPORTED_MODULE_3__["default"]
});


/***/ }),

/***/ "./src/core/hardware/objects/base/BaseHardwareUI.tsx":
/*!***********************************************************!*\
  !*** ./src/core/hardware/objects/base/BaseHardwareUI.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AbstractHardwareUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractHardwareUI */ "./src/core/hardware/objects/base/AbstractHardwareUI.tsx");
/* harmony import */ var _BaseHardwareUI_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseHardwareUI.scss */ "./src/core/hardware/objects/base/BaseHardwareUI.scss");

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



class BaseUI extends _AbstractHardwareUI__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues({}, this.state), {
      background: this.box.background || false,
      presentation: this.box.presentation || false
    });
    this._handleMouseEnter = (e) => {
      if (this.editor.state.locked)
        e.currentTarget.title = this.state.hint;
    };
    this._handleMouseLeave = (e) => e.currentTarget.title = "";
  }
  render() {
    const { object } = this;
    const className = object.meta.name.toLowerCase();
    const classArray = [className, "box-ui-container"];
    if (this.props.additionalClassName)
      classArray.push(this.props.additionalClassName);
    if (this.state.hidden)
      classArray.push("hidden");
    if (this.state.ignoreClick)
      classArray.push("ignore-click");
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadProps(__spreadValues({ className: classArray.join(" ") }, this.props.containerProps), { onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave }), this.props.children);
  }
}
BaseUI.sizing = "horizontal";
BaseUI.defaultSize = [90, 20];
BaseUI.editableOnUnlock = false;
BaseUI.dockable = false;


/***/ }),

/***/ "./src/core/hardware/objects/base/DefaultHardwareObject.ts":
/*!*****************************************************************!*\
  !*** ./src/core/hardware/objects/base/DefaultHardwareObject.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultObject)
/* harmony export */ });
/* harmony import */ var _DefaultHardwareUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHardwareUI */ "./src/core/hardware/objects/base/DefaultHardwareUI.tsx");
/* harmony import */ var _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseHardwareObject */ "./src/core/hardware/objects/base/BaseHardwareObject.ts");



class DefaultObject extends _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_1__["default"] {
  get env() {
    return super.env;
  }
}
DefaultObject.props = {
  bgColor: {
    type: "color",
    default: "rgb(41, 60, 71)",
    description: "Background color",
    isUIState: true
  },
  borderColor: {
    type: "color",
    default: "rgb(41, 60, 71)",
    description: "Border color",
    isUIState: true
  },
  textColor: {
    type: "color",
    default: "rgb(255, 255, 255)",
    description: "Text color",
    isUIState: true
  },
  fontFamily: {
    type: "enum",
    enums: ["Lato", "Georgia", "Times New Roman", "Arial", "Tahoma", "Verdana", "Courier New", "Roboto Mono"],
    default: "Roboto Mono",
    description: "Font family",
    isUIState: true
  },
  fontSize: {
    type: "number",
    default: 12,
    description: "Text font size",
    isUIState: true
  },
  fontStyle: {
    type: "enum",
    enums: ["normal", "italic", "oblique"],
    default: "normal",
    description: "Text style",
    isUIState: true
  },
  fontWeight: {
    type: "string",
    default: "normal",
    description: 'Text style: "normal" | "bold" | "lighter" | "bolder" | number',
    isUIState: true
  },
  textAlign: {
    type: "enum",
    enums: ["left", "center", "right"],
    default: "left",
    description: "Text style",
    isUIState: true
  }
};
DefaultObject.UI = _DefaultHardwareUI__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/core/hardware/objects/base/DefaultHardwareUI.tsx":
/*!**************************************************************!*\
  !*** ./src/core/hardware/objects/base/DefaultHardwareUI.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-js */ "./node_modules/color-js/color.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");
/* harmony import */ var _utils_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/symbols */ "./src/utils/symbols.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseHardwareUI */ "./src/core/hardware/objects/base/BaseHardwareUI.tsx");
/* harmony import */ var _DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultHardwareUI.scss */ "./src/core/hardware/objects/base/DefaultHardwareUI.scss");

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







class DefaultUIDropdownObjects extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = { $: -1, items: [] };
    this.refTBody = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  }
  next() {
    const { items, $ } = this.state;
    this.setState({ $: Math.min(items.length - 1, $ + 1) });
    if ($ >= 0 && this.refTBody.current && items[$ + 1]) {
      const table = this.refTBody.current.parentElement;
      const row = this.refTBody.current.children[$ + 1];
      if (row.offsetTop + row.offsetHeight > table.scrollTop + table.offsetHeight)
        row.scrollIntoView(false);
    }
  }
  prev() {
    const { items, $ } = this.state;
    this.setState({ $: Math.max(-1, $ - 1) });
    if ($ >= 0 && this.refTBody.current && items[$ - 1]) {
      const table = this.refTBody.current.parentElement;
      const row = this.refTBody.current.children[$ - 1];
      if (row.offsetTop < table.scrollTop)
        row.scrollIntoView(true);
    }
  }
  get current() {
    return this.state.items[this.state.$];
  }
  static getItems(propsIn) {
    const { lib, query, staticMethodOnly } = propsIn;
    const keys = Object.keys(lib).sort();
    const items = [];
    for (let i = 0; i < keys.length; i++) {
      if (items.length >= 16)
        break;
      const key = keys[i];
      if (key.startsWith(query)) {
        const o = lib[key];
        const { icon, description } = o.meta;
        if (staticMethodOnly) {
          if (o[_utils_symbols__WEBPACK_IMPORTED_MODULE_2__.ImportedStaticMethodObject]) {
            items.push({ key, icon, description });
          }
        } else {
          items.push({ key, icon, description });
        }
      }
    }
    return items;
  }
  componentDidMount() {
    this.setState({ items: DefaultUIDropdownObjects.getItems(this.props), $: -1 });
  }
  shouldComponentUpdate(nextProps, nextState, context) {
    if (nextProps.query !== this.props.query || nextProps.staticMethodOnly !== this.props.staticMethodOnly) {
      this.setState({ items: DefaultUIDropdownObjects.getItems(nextProps), $: -1 });
      return false;
    }
    if (nextState.$ !== this.state.$ || nextState.items !== this.state.items)
      return true;
    return false;
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "box-ui-text-dropdown" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "ui small inverted selectable striped unstackable very compact table box-ui-text-autocomplete" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { ref: this.refTBody }, this.state.items.map((option, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: option.key, className: i === this.state.$ ? "focused" : "", onMouseDown: (e) => this.props.onSelect(e, option.key) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: option.icon }) : void 0), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.key), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.description))))));
  }
}
class DefaultUIDropdownArgv extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = { $: -1, items: [] };
    this.refTBody = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  }
  next() {
  }
  prev() {
  }
  get current() {
    return this.state.items[this.state.$];
  }
  static getItems(propsIn) {
    const { obj } = propsIn;
    const { args, props } = obj.meta;
    const items = [];
    for (let i = 0; i < args.length; i++) {
      const { type, optional, varLength, description } = args[i];
      items.push({ key: i, type, optional, varLength, description });
    }
    Object.keys(props).reverse().forEach((key) => {
      const { type, description } = props[key];
      items.push({ key, type, description });
    });
    return items;
  }
  componentDidMount() {
    this.setState({ items: DefaultUIDropdownArgv.getItems(this.props), $: -1 });
  }
  shouldComponentUpdate(nextProps, nextState, context) {
    if (nextProps.obj !== this.props.obj || nextProps.argv !== this.props.argv) {
      this.setState({ items: DefaultUIDropdownArgv.getItems(nextProps), $: -1 });
      return false;
    }
    if (nextState.$ !== this.state.$ || nextState.items !== this.state.items)
      return true;
    return false;
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "box-ui-text-dropdown" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "ui small inverted selectable striped unstackable very compact table box-ui-text-autocomplete" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { ref: this.refTBody }, this.state.items.map((option, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: option.key, className: i === this.state.$ ? "focused" : "", onMouseDown: (e) => this.props.onSelect(e, option.key) }, typeof option.key === "number" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: "ellipsis horizontal" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.optional ? `[${option.varLength ? "..." : ""}arg${option.key}]` : `${option.varLength ? "..." : ""}arg${option.key}`)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: "at" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.key)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { color: "#30a0a0" } }, option.type), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, option.description))))));
  }
}
class DefaultUI extends _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues({}, this.state), {
      text: this.box.text || "",
      loading: false
    });
    this.refSpan = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.refDropdownObject = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.refDropdownArgv = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.handleMouseDown = (e) => this.props.editing ? e.stopPropagation() : null;
    this.handleClick = (e) => this.props.editing ? e.stopPropagation() : null;
    this.handleKeyDown = (e) => {
      if (!this.props.editing)
        return;
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.refDropdownObject.current && this.refSpan.current) {
          const { current } = this.refDropdownObject.current;
          if (current) {
            const text = this.getApplied(current.key);
            this.refSpan.current.textContent = text;
            this.setState({ text });
            this.props.onContentsChanged();
          }
        }
        return;
      }
      if (e.key === "Tab") {
        if (this.refDropdownObject.current && this.refSpan.current) {
          const span = this.refSpan.current;
          const { current } = this.refDropdownObject.current;
          if (current) {
            const text = this.getApplied(current.key);
            this.refSpan.current.textContent = text;
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
            this.setState({ text });
            e.preventDefault();
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            this.props.onContentsChanged();
            return;
          } else {
            const items = this.refDropdownObject.current.state.items;
            if (items.length) {
              const text = this.getApplied(items[0].key);
              this.refSpan.current.textContent = text;
              (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
              this.setState({ text });
              e.preventDefault();
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              this.props.onContentsChanged();
              return;
            }
          }
        }
      }
      if (e.key === " ") {
        if (this.refDropdownObject.current && this.refSpan.current) {
          const span = this.refSpan.current;
          const { current } = this.refDropdownObject.current;
          if (current) {
            const text = this.getApplied(current.key);
            this.refSpan.current.textContent = text;
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
            this.setState({ text });
          }
        }
      }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        if (this.refDropdownObject.current) {
          if (e.key === "ArrowUp")
            this.refDropdownObject.current.prev();
          else if (e.key === "ArrowDown")
            this.refDropdownObject.current.next();
        }
      }
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      if (e.key.length === 1 || e.key == "Backspace") {
        this.props.onContentsChanged();
      }
    };
    this.handleKeyUp = () => {
      if (!this.refSpan.current)
        return;
      if (this.refSpan.current.textContent === this.state.text)
        return;
      this.setState({ text: this.refSpan.current.textContent });
    };
    this.handlePaste = (e) => {
      e.preventDefault();
      document.execCommand("insertHTML", false, e.clipboardData.getData("text/plain"));
    };
    this.handleSelect = (e, textIn) => {
      e.preventDefault();
      if (this.refSpan.current) {
        const span = this.refSpan.current;
        const text = this.getApplied(textIn);
        this.refSpan.current.textContent = text;
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementPos)(span, text.length);
        this.setState({ text });
      }
    };
  }
  componentDidMount() {
    super.componentDidMount();
    if (this.props.editing)
      this.toggleEdit(this.props.editing);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.editing !== prevProps.editing)
      this.toggleEdit(this.props.editing);
  }
  toggleEdit(toggle) {
    const { patcher, box, editor } = this;
    if (editor.state.locked)
      return;
    if (!this.refSpan.current)
      return;
    const span = this.refSpan.current;
    if (toggle) {
      editor.selectOnly(box.id);
      this.setState({ text: span.textContent }, () => {
        span.focus();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.selectElementRange)(span);
      });
    } else {
      window.getSelection().removeAllRanges();
      patcher.changeBoxText(box.id, span.textContent);
      this.setState({ text: span.textContent });
    }
  }
  get dropdownQuery() {
    let { text } = this.state;
    if (!this.props.editing || !text.length)
      return { Dropdown: void 0, query: void 0 };
    if (text.startsWith("new "))
      text = text.slice(4);
    else if (text.startsWith("func "))
      text = text.slice(5);
    const splitted = text.split(/\s/);
    if (splitted.length === 1)
      return { Dropdown: DefaultUIDropdownObjects, query: splitted[0] };
    const [className, ...argv] = splitted;
    const obj = this.patcher.activeLib[className];
    if (!obj)
      return { Dropdown: void 0, query: void 0 };
    return { Dropdown: DefaultUIDropdownArgv, query: { obj, argv } };
  }
  getApplied(textIn) {
    let { text } = this.state;
    let keyword = "";
    if (text.startsWith("new ")) {
      keyword = "new ";
      text = text.slice(4);
    } else if (text.startsWith("func ")) {
      keyword = "func ";
      text = text.slice(5);
    }
    const splitted = text.split(/\s/);
    if (splitted.length === 1) {
      return `${keyword}${textIn}`;
    }
    return textIn;
  }
  render() {
    const { object, dropdownQuery } = this;
    const textContainerStyle = {
      borderColor: this.state.borderColor,
      backgroundColor: this.state.bgColor
    };
    if (this.state.loading) {
      const bgColor = color_js__WEBPACK_IMPORTED_MODULE_1__(this.state.bgColor);
      const gradIsWhite = bgColor.getLightness() < 0.5;
      const gradColor = gradIsWhite ? bgColor.lightenByAmount(0.25) : bgColor.darkenByAmount(0.25);
      textContainerStyle.backgroundImage = `linear-gradient(to right, ${this.state.bgColor} 0%, ${gradColor.toCSS()} 20%, ${this.state.bgColor} 40%, ${this.state.bgColor} 200%)`;
    }
    const spanStyle = {
      color: this.state.textColor,
      fontFamily: `${this.state.fontFamily}, Tahoma, sans-serif`,
      fontSize: this.state.fontSize,
      fontWeight: this.state.fontWeight,
      fontStyle: this.state.fontStyle,
      textAlign: this.state.textAlign
    };
    const textContainerProps = __spreadValues({}, this.props.textContainerProps);
    textContainerProps.style = __spreadValues(__spreadValues({}, textContainerProps.style), textContainerStyle);
    const spanProps = __spreadValues({}, this.props.spanProps);
    spanProps.style = __spreadValues(__spreadValues({}, spanProps.style), spanStyle);
    const { Dropdown, query } = dropdownQuery;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseHardwareUI__WEBPACK_IMPORTED_MODULE_4__["default"], __spreadValues({ additionalClassName: "box-ui-default" }, this.props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: "box-ui-text-container" + (this.state.loading ? " loading" : "") }, textContainerProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: "box-ui-text-container-prepend" }, this.props.prependProps), object.meta.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { inverted: true, size: "small", name: object.meta.icon }) : null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __spreadValues({ contentEditable: this.props.editing, className: "editable" + (this.props.editing ? " editing" : ""), ref: this.refSpan, onMouseDown: this.handleMouseDown, onClick: this.handleClick, onPaste: this.handlePaste, onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp, onBlur: this.props.onEditEnd, suppressContentEditableWarning: true }, spanProps), object.box.text), Dropdown === DefaultUIDropdownObjects && typeof query === "string" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultUIDropdownObjects, { lib: this.patcher.activeLib, query, onSelect: this.handleSelect, staticMethodOnly: this.state.text.startsWith("new "), ref: this.refDropdownObject }) : Dropdown === DefaultUIDropdownArgv && typeof query === "object" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultUIDropdownArgv, { obj: query.obj, argv: query.argv, onSelect: this.handleSelect, ref: this.refDropdownArgv }) : void 0, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: "box-ui-text-container-append" }, this.props.appendProps))));
  }
}
DefaultUI.editableOnUnlock = true;


/***/ }),

/***/ "./src/core/hardware/objects/base/EmptyObject.ts":
/*!*******************************************************!*\
  !*** ./src/core/hardware/objects/base/EmptyObject.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyObject)
/* harmony export */ });
/* harmony import */ var _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");


class EmptyObject extends _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.state = { editing: false };
  }
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        ...["T", "B", "L", "R"].map((edge) => ({
          edge,
          position: 0.5
        }))
      ];
    });
  }
}
EmptyObject.author = "Corvus Prudens";
EmptyObject.version = "1.0.0";
EmptyObject.description = "Bypass input";
EmptyObject.ios = [
  ...Array.from({ length: 4 }, (_, i) => ({
    isHot: true,
    pin: { pinName: "", tie: true },
    type: "anything",
    description: "output same thing"
  }))
];


/***/ }),

/***/ "./src/core/hardware/objects/base/ImageObject.ts":
/*!*******************************************************!*\
  !*** ./src/core/hardware/objects/base/ImageObject.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageObject)
/* harmony export */ });
/* harmony import */ var _UIObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIObject */ "./src/core/hardware/objects/base/UIObject.ts");
/* harmony import */ var _ImageObjectUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageObjectUI */ "./src/core/hardware/objects/base/ImageObjectUI.tsx");

var _a;


async function getImageDimensions(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      reject(new Error(`Could not load image at ${url}`));
    };
    img.src = url;
  });
}
class ImageObject extends _UIObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this._ = { key: (_a = this.box.args[0]) == null ? void 0 : _a.toString(), image: void 0, file: void 0, url: "", element: void 0, scale: 1 };
  }
  subscribe() {
    super.subscribe();
    const handleFilePathChanged = () => {
      var _a2;
      this._.key = (_a2 = this._.file) == null ? void 0 : _a2.projectPath;
    };
    const subscribeItem = async () => {
      const { image, file } = this._;
      if (image)
        await image.addObserver(this);
      if (file) {
        file.on("destroyed", reload);
        file.on("nameChanged", handleFilePathChanged);
        file.on("pathChanged", handleFilePathChanged);
      }
    };
    const unsubscribeItem = async () => {
      const { image, file } = this._;
      if (file) {
        file.off("destroyed", reload);
        file.off("nameChanged", handleFilePathChanged);
        file.off("pathChanged", handleFilePathChanged);
      }
      if (image)
        await image.removeObserver(this);
    };
    const reload = async () => {
      await unsubscribeItem();
      const { key } = this._;
      let image;
      let url;
      try {
        const { item } = await this.getSharedItem(key, "image");
        image = await item.instantiate({ env: this.patcher.env, project: this.patcher.project });
        this._.image = image;
        this._.file = item;
        url = image.objectURL;
      } catch (e) {
        url = key;
      } finally {
        this._.url = url;
        this.updateUI({ url });
        await subscribeItem();
      }
    };
    this.on("postInit", async () => {
      await reload();
      const { width, height } = await getImageDimensions(this._.url);
      this.box.setHeight(height * this._.scale || 100);
      this.box.setWidth(width * this._.scale || 100);
      this.patcher.changeIO();
    });
    this.on("destroy", () => {
      unsubscribeItem();
      this.patcher.changeIO();
    });
  }
}
ImageObject.description = "Display an image";
// static inlets: IIosMeta = [{
//     isHot: true,
//     type: "anything",
//     description: "Image file name or url"
// }];
// static args: IArgsMeta = [{
//     type: "string",
//     optional: true,
//     description: "Image file name or url"
// }];
// static props: IPropsMeta<ImgProps> = {
//     scroll: {
//         type: "boolean",
//         default: false,
//         description: "Allow overflow-scroll",
//         isUIState: true
//     },
//     objectFit: {
//         type: "enum",
//         enums: ["fill", "cover", "contain", "none", "scale-down"],
//         default: "contain",
//         description: "CSS object-fit property",
//         isUIState: true
//     },
//     objectPosition: {
//         type: "string",
//         default: "50% 50%",
//         description: 'CSS object-position property, for example "50% 50%" or "left top"',
//         isUIState: true
//     },
//     opacity: {
//         type: "number",
//         default: 1,
//         description: "Opacity of the image (0-1)",
//         isUIState: true
//     }
// };
ImageObject.UI = _ImageObjectUI__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./src/core/hardware/objects/base/ImageObjectUI.tsx":
/*!**********************************************************!*\
  !*** ./src/core/hardware/objects/base/ImageObjectUI.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImgUI)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseHardwareUI */ "./src/core/hardware/objects/base/BaseHardwareUI.tsx");

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


class ImgUI extends _BaseHardwareUI__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.state = __spreadProps(__spreadValues({}, this.state), { url: this.object._.url });
    this.imgRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.handleLoadedMetadata = () => this.object.outlet(0, this.imgRef.current);
  }
  componentDidMount() {
    super.componentDidMount();
    const image = this.imgRef.current;
    if (image) {
      this.object._.element = image;
      this.object.outlet(0, image);
      image.addEventListener("loadedmetadata", this.handleLoadedMetadata);
    }
  }
  componentWillUnmount() {
    var _a;
    super.componentWillUnmount();
    (_a = this.imgRef.current) == null ? void 0 : _a.removeEventListener("loadedmetadata", this.handleLoadedMetadata);
  }
  render() {
    const { objectFit, objectPosition, scroll, opacity } = this.state;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseHardwareUI__WEBPACK_IMPORTED_MODULE_1__["default"], __spreadValues({}, this.props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { position: "absolute", width: "100%", height: "100%", display: "block", overflow: "auto" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ref: this.imgRef, src: this.state.url, style: __spreadProps(__spreadValues({ position: "absolute" }, scroll ? {} : { width: "100%", height: "100%" }), { objectFit, objectPosition, opacity }) })));
  }
}
ImgUI.sizing = "both";
ImgUI.defaultSize = [210, 90];


/***/ }),

/***/ "./src/core/hardware/objects/base/InvalidObject.ts":
/*!*********************************************************!*\
  !*** ./src/core/hardware/objects/base/InvalidObject.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvalidObject)
/* harmony export */ });
/* harmony import */ var _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");
/* harmony import */ var _InvalidObject_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvalidObject.scss */ "./src/core/hardware/objects/base/InvalidObject.scss");



class InvalidObject extends _DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    this.patcher.on("libChanged", () => this.box.changeText(this.box.text, true));
  }
}
InvalidObject.description = "invalid object";
InvalidObject.inlets = [{
  isHot: false,
  type: "anything",
  varLength: true,
  description: "nothing"
}];
InvalidObject.props = {
  bgColor: {
    type: "color",
    default: "rgb(128, 64, 64)",
    description: "Background color",
    isUIState: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/base/UIObject.ts":
/*!****************************************************!*\
  !*** ./src/core/hardware/objects/base/UIObject.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIObject)
/* harmony export */ });
/* harmony import */ var _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHardwareObject */ "./src/core/hardware/objects/base/BaseHardwareObject.ts");


class UIObject extends _BaseHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
UIObject.author = "Corvus Prudens";
UIObject.version = "v1.0.0";
UIObject.description = "Basic UI object";


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Button.ts":
/*!******************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Button.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");


class Button extends _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "T",
          position: 0.5
        }
      ];
    });
  }
}
Button.author = "Corvus Prudens";
Button.version = "v1.0.0";
Button.description = "Momentary push button";
Button.ios = [
  {
    pin: { pinName: "button", digitalOutput: true },
    type: "anything",
    description: "The button's pin"
  }
];
Button.patcherOutlets = [
  {
    type: "number",
    description: "Current button state"
  },
  {
    type: "bang",
    description: "Rising edge of button press"
  },
  {
    type: "bang",
    description: "Falling edge of button press"
  }
];
Button.props = {
  polarity: {
    type: "number",
    default: 0,
    description: "determines button polarity (0 = active low, 1 = active high)",
    alwaysSerialize: true
  },
  pull: {
    type: "number",
    default: 0,
    description: "determines if the pull-up or pull-down state (0 = pull-down, 1 = pull-up, 2 = none)",
    alwaysSerialize: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Cv.ts":
/*!**************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Cv.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cv)
/* harmony export */ });
/* harmony import */ var _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");


class Cv extends _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "T",
          position: 0.5
        }
      ];
    });
  }
}
Cv.author = "Corvus Prudens";
Cv.version = "v1.0.0";
Cv.description = "CV Input";
Cv.ios = [
  {
    pin: { pinName: "signal", analogOutput: true },
    type: "anything",
    description: "CV signal"
  }
];
Cv.patcherOutlets = [
  {
    type: "number",
    description: "CV level"
  }
];
Cv.props = {
  bipolar: {
    type: "number",
    default: 0,
    description: "determines whether the input is bipolar (i.e. if the input voltage can dip below 0 volts)",
    alwaysSerialize: true
  },
  flip: {
    type: "number",
    default: 0,
    description: "determines whether the input is flipped (i.e. 1.f - input) or not before being processed",
    alwaysSerialize: true
  },
  invert: {
    type: "number",
    default: 0,
    description: "determines whether the input is inverted (i.e. -1.f * input) or note before being processed",
    alwaysSerialize: true
  },
  slew_seconds: {
    type: "number",
    default: 2e-3,
    description: "the slew time in seconds that it takes for the control to change to a new value",
    alwaysSerialize: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Gpi.ts":
/*!***************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Gpi.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gpi)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


class Gpi extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "L",
          position: 0.5
        },
        {
          edge: "R",
          position: 0.5
        }
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111057050366132224/pulse.png";
      this._.scale = 0.05;
    });
  }
}
Gpi.author = "Corvus Prudens";
Gpi.version = "v1.1.0";
Gpi.description = "GPIO input";
Gpi.ios = [
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  },
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  }
];
Gpi.patcherOutlets = [
  {
    type: "number",
    description: "Get GPIO input"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Gpo.ts":
/*!***************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Gpo.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gpo)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


class Gpo extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "L",
          position: 0.5
        },
        {
          edge: "R",
          position: 0.5
        }
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111057050642960446/switch.png";
      this._.scale = 0.05;
    });
  }
}
Gpo.author = "Corvus Prudens";
Gpo.version = "v1.1.0";
Gpo.description = "GPIO output";
Gpo.ios = [
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  },
  {
    pin: { pinName: "gpio", digitalOutput: true },
    type: "anything",
    description: "GPIO pin"
  }
];
Gpo.patcherInlets = [
  {
    isHot: true,
    type: "number",
    description: "Set GPIO output"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/hardware/HardwareObjects.ts":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/hardware/HardwareObjects.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Knob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Knob */ "./src/core/hardware/objects/hardware/Knob.ts");
/* harmony import */ var _Gpi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gpi */ "./src/core/hardware/objects/hardware/Gpi.ts");
/* harmony import */ var _Gpo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gpo */ "./src/core/hardware/objects/hardware/Gpo.ts");
/* harmony import */ var _Mux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mux */ "./src/core/hardware/objects/hardware/Mux.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/core/hardware/objects/hardware/Button.ts");
/* harmony import */ var _Cv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cv */ "./src/core/hardware/objects/hardware/Cv.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "knob": _Knob__WEBPACK_IMPORTED_MODULE_0__["default"],
  "gpi": _Gpi__WEBPACK_IMPORTED_MODULE_1__["default"],
  "gpo": _Gpo__WEBPACK_IMPORTED_MODULE_2__["default"],
  "amux": _Mux__WEBPACK_IMPORTED_MODULE_3__["default"],
  "button": _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
  "cv": _Cv__WEBPACK_IMPORTED_MODULE_5__["default"]
});


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Knob.ts":
/*!****************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Knob.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knob)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


class Knob extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        {
          edge: "B",
          position: 0.5
        }
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111059092342063215/knob.png";
      this._.scale = 0.066;
    });
  }
}
Knob.author = "Corvus Prudens";
Knob.version = "v1.0.0";
Knob.description = "Unipolar Potentiometer";
Knob.ios = [
  {
    pin: { pinName: "signal", analogOutput: true },
    type: "anything",
    description: "knob signal"
  }
];
Knob.patcherOutlets = [
  {
    type: "number",
    description: "Knob voltage"
  }
];
Knob.props = {
  static_threshold: {
    type: "number",
    default: 0.01,
    description: "Threshold beyond which the knob is considered to be moving at rest",
    alwaysSerialize: true
  },
  dynamic_threshold: {
    type: "number",
    default: 1e-3,
    description: "Threshold beyond which the knob remains active while moving",
    alwaysSerialize: true
  },
  timeout: {
    type: "number",
    default: 500,
    description: "Timeout in ms after which the knob is considered to be at rest",
    alwaysSerialize: true
  }
};


/***/ }),

/***/ "./src/core/hardware/objects/hardware/Mux.ts":
/*!***************************************************!*\
  !*** ./src/core/hardware/objects/hardware/Mux.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AMux)
/* harmony export */ });
/* harmony import */ var _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");


class AMux extends _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      this.ios = [
        ...Array.from({ length: 4 }, (_, i) => ({
          edge: "T",
          position: 1 / 5 * i + 1 / 10
        })),
        ...Array.from({ length: 8 }, (_, i) => ({
          edge: "B",
          position: 1 / 9 * i + 1 / 18
        }))
      ];
      this.box.setWidth(8 * 16);
    });
  }
}
AMux.author = "Corvus Prudens";
AMux.version = "v1.0.0";
AMux.description = "Analog multiplexer";
AMux.ios = [
  {
    pin: { pinName: "a0", digitalInput: true },
    type: "anything",
    description: "Address pin 0"
  },
  {
    pin: { pinName: "a1", digitalInput: true },
    type: "anything",
    description: "Address pin 1"
  },
  {
    pin: { pinName: "a2", digitalInput: true },
    type: "anything",
    description: "Address pin 2"
  },
  {
    pin: { pinName: "analogOut", analogOutput: true },
    type: "anything",
    description: "Multiplexed analog signal"
  },
  {
    pin: { pinName: "analogIn0", analogInput: true },
    type: "anything",
    description: "Analog signal 0"
  },
  {
    pin: { pinName: "analogIn1", analogInput: true },
    type: "anything",
    description: "Analog signal 1"
  },
  {
    pin: { pinName: "analogIn2", analogInput: true },
    type: "anything",
    description: "Analog signal 2"
  },
  {
    pin: { pinName: "analogIn3", analogInput: true },
    type: "anything",
    description: "Analog signal 3"
  },
  {
    pin: { pinName: "analogIn4", analogInput: true },
    type: "anything",
    description: "Analog signal 4"
  },
  {
    pin: { pinName: "analogIn5", analogInput: true },
    type: "anything",
    description: "Analog signal 5"
  },
  {
    pin: { pinName: "analogIn6", analogInput: true },
    type: "anything",
    description: "Analog signal 6"
  },
  {
    pin: { pinName: "analogIn7", analogInput: true },
    type: "anything",
    description: "Analog signal 7"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/soms/DaisySeed.ts":
/*!*****************************************************!*\
  !*** ./src/core/hardware/objects/soms/DaisySeed.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaisySeed": () => (/* binding */ DaisySeed)
/* harmony export */ });
/* harmony import */ var _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/ImageObject */ "./src/core/hardware/objects/base/ImageObject.ts");


const DaisyPins = [
  {
    pinName: "D0",
    digitalInput: true,
    digitalOutput: true,
    pwmOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, id: true, dplus: false, dminus: false },
      "UART5": { usart: true, rx: true, tx: false },
      "USART3": { usart: true, cts: false, rts: false, tx: false, rx: false, ck: true }
    }
  },
  {
    pinName: "D1",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: false, dat2: false, dat3: true },
      "USART3": { usart: true, rx: true, tx: false },
      "UART4": { usart: true, rx: true, tx: false },
      "SPI3": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "I2S3": { i2s: true, sd: true, ws: false, sck: false }
    }
  },
  {
    pinName: "D2",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: false, dat2: true, dat3: false },
      "USART3": { usart: true, rx: false, tx: true },
      "UART4": { usart: true, rx: false, tx: true },
      "SPI3": { spi: true, miso: false, mosi: false, sck: true, ss: false },
      "I2S3": { i2s: true, sd: false, ws: false, sck: true }
    }
  },
  {
    pinName: "D3",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: true, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: false, cts: true, rts: false },
      "I2S": { i2s: true, sd: false, ws: false, sck: false }
    }
  },
  {
    pinName: "D4",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: true, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: false, cts: false, rts: true }
    }
  },
  {
    pinName: "D5",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: true, clk: false, dat0: false, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "D6",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: true, dat0: false, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: true },
      "USART3": { usart: true, rx: false, tx: false, cts: false, rts: false, ck: true },
      "SPI3": { spi: true, miso: false, mosi: true, sck: false, ss: false },
      "I2S3": { i2s: true, sd: true, ws: false, sck: false }
    }
  },
  {
    pinName: "D7",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: false, mosi: false, sck: false, ss: true },
      "I2S1": { i2s: true, sd: false, ws: true, sck: false }
    }
  },
  {
    pinName: "D8",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: false, mosi: false, sck: true, ss: false },
      "I2S1": { i2s: true, sd: false, ws: false, sck: true }
    }
  },
  {
    pinName: "D9",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "UART7": { usart: true, rx: false, tx: true },
      "SPI3": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "I2S1": { i2s: true, sd: true, ws: false, sck: false },
      "SPI6": { spi: true, miso: true, mosi: false, sck: false, ss: false }
    }
  },
  {
    pinName: "D10",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: true },
      "UART5": { usart: true, rx: true },
      "I2S1": { i2s: true, sd: true },
      "SPI3": { spi: true, mosi: true },
      "I2S3": { i2s: true, sd: true },
      "SPI6": { spi: true, mosi: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "D11",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C1": { i2c: true, scl: true },
      "UART4": { usart: true, rx: true },
      "I2C4": { i2c: true, scl: true }
    }
  },
  {
    pinName: "D12",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C1": { i2c: true, sda: true },
      "UART4": { usart: true, tx: true },
      "SPI2": { spi: true, ss: true },
      "I2S2": { i2s: true, ws: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "D13",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USART1": { usart: true, tx: true },
      "LPUART1": { usart: true, tx: true },
      "UART5": { usart: true, tx: true },
      "I2C1": { i2c: true, scl: true },
      "I2C4": { i2c: true, scl: true }
    }
  },
  {
    pinName: "D14",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USART1": { usart: true, rx: true },
      "LPUART1": { usart: true, rx: true },
      "I2C1": { i2c: true, sda: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  null,
  null,
  null,
  null,
  null,
  null,
  {
    pinName: "A0",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A1",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "USART2": { usart: true, rx: true }
    }
  },
  {
    pinName: "A2",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A3",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: true },
      "I2S1": { i2s: true, sd: true },
      "SPI6": { spi: true, mosi: true }
    }
  },
  {
    pinName: "A4",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: true },
      "I2S1": { i2s: true, sd: true },
      "SPI6": { spi: true, miso: true }
    }
  },
  {
    pinName: "A5",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A6",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "I2S1": { i2s: true, ws: false, sd: false, sck: true }
    }
  },
  {
    pinName: "A7",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: false, miso: false, sck: true, ss: false },
      "SPI6": { spi: true, mosi: false, miso: false, sck: true, ss: false },
      "I2S1": { i2s: true, ws: false, sd: false, sck: true }
    }
  },
  {
    pinName: "A8",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "SPI3": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "SPI6": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "I2S1": { i2s: true, ws: true, sd: false, sck: false },
      "I2S3": { i2s: true, ws: true, sd: false, sck: false }
    }
  },
  {
    pinName: "A9",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "UART4": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "A10",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "UART4": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D26",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C4": { i2c: true, sda: false, scl: false }
    }
  },
  {
    pinName: "D27",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SAI2": { i2s: true, ws: false, sd: false, sck: false },
      "USART6": { usart: true, rx: true, tx: false },
      "SPI1": { spi: true, mosi: false, miso: true, sck: false, ss: false },
      "I2S1": { i2s: true, ws: false, sd: true, sck: false }
    }
  },
  {
    pinName: "A11",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "USART2": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D29",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, dplus: false, dminus: true },
      "USART1": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D30",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, dplus: true, dminus: false },
      "USART1": { usart: true, rx: true, tx: false }
    }
  },
  null,
  null,
  null
];
class DaisySeed extends _base_ImageObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      const spacing = 1 / 20.8;
      const offset = 0.6 * spacing;
      const right = [];
      for (let i = 0; i < 20; i++) {
        if (DaisyPins[i] != null) {
          right.push({
            edge: "R",
            position: offset + spacing * (19 - i)
          });
        }
      }
      const left = [];
      for (let i = 0; i < 20; i++) {
        if (DaisyPins[20 + i] != null) {
          left.push({
            edge: "L",
            position: offset + spacing * i
          });
        }
      }
      this.ios = [
        ...right,
        ...left
      ];
      this._.key = "https://cdn.discordapp.com/attachments/1049762470694223903/1111025669544095806/Daisy_Seed_illustrated_top.png";
      this._.scale = 0.28;
    });
  }
}
DaisySeed.author = "Corvus Prudens";
DaisySeed.version = "v1.0.0";
DaisySeed.description = "Daisy Seed SOM";
DaisySeed.ios = [
  ...DaisyPins.filter((pin) => pin != null).map((pin) => ({
    type: "anything",
    description: `Pin ${pin.pinName}`,
    pin
  }))
];
DaisySeed.patcherInlets = [
  {
    isHot: true,
    type: "signal",
    description: "Audio DAC left"
  },
  {
    isHot: true,
    type: "signal",
    description: "Audio DAC right"
  },
  {
    isHot: false,
    type: "number",
    description: "Set on-board LED"
  }
];
DaisySeed.patcherOutlets = [
  {
    type: "signal",
    description: "Audio ADC left"
  },
  {
    type: "signal",
    description: "Audio ADC right"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/soms/DaisySeed2DFM.ts":
/*!*********************************************************!*\
  !*** ./src/core/hardware/objects/soms/DaisySeed2DFM.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaisySeed2DFM": () => (/* binding */ DaisySeed2DFM)
/* harmony export */ });
/* harmony import */ var _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/DefaultHardwareObject */ "./src/core/hardware/objects/base/DefaultHardwareObject.ts");


const DaisyPins = [
  {
    pinName: "D0",
    digitalInput: true,
    digitalOutput: true,
    pwmOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, id: true, dplus: false, dminus: false },
      "UART5": { usart: true, rx: true, tx: false },
      "USART3": { usart: true, cts: false, rts: false, tx: false, rx: false, ck: true }
    }
  },
  {
    pinName: "D1",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: false, dat2: false, dat3: true },
      "USART3": { usart: true, rx: true, tx: false },
      "UART4": { usart: true, rx: true, tx: false },
      "SPI3": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "I2S3": { i2s: true, sd: true, ws: false, sck: false }
    }
  },
  {
    pinName: "D2",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: false, dat2: true, dat3: false },
      "USART3": { usart: true, rx: false, tx: true },
      "UART4": { usart: true, rx: false, tx: true },
      "SPI3": { spi: true, miso: false, mosi: false, sck: true, ss: false },
      "I2S3": { i2s: true, sd: false, ws: false, sck: true }
    }
  },
  {
    pinName: "D3",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: false, dat1: true, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: false, cts: true, rts: false },
      "I2S": { i2s: true, sd: false, ws: false, sck: false }
    }
  },
  {
    pinName: "D4",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: false, dat0: true, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: false, cts: false, rts: true }
    }
  },
  {
    pinName: "D5",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: true, clk: false, dat0: false, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "D6",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SDMMC1": { sdmmc: true, cmd: false, clk: true, dat0: false, dat1: false, dat2: false, dat3: false },
      "UART5": { usart: true, rx: false, tx: true },
      "USART3": { usart: true, rx: false, tx: false, cts: false, rts: false, ck: true },
      "SPI3": { spi: true, miso: false, mosi: true, sck: false, ss: false },
      "I2S3": { i2s: true, sd: true, ws: false, sck: false }
    }
  },
  {
    pinName: "D7",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: false, mosi: false, sck: false, ss: true },
      "I2S1": { i2s: true, sd: false, ws: true, sck: false }
    }
  },
  {
    pinName: "D8",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: false, mosi: false, sck: true, ss: false },
      "I2S1": { i2s: true, sd: false, ws: false, sck: true }
    }
  },
  {
    pinName: "D9",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "UART7": { usart: true, rx: false, tx: true },
      "SPI3": { spi: true, miso: true, mosi: false, sck: false, ss: false },
      "I2S1": { i2s: true, sd: true, ws: false, sck: false },
      "SPI6": { spi: true, miso: true, mosi: false, sck: false, ss: false }
    }
  },
  {
    pinName: "D10",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: true },
      "UART5": { usart: true, rx: true },
      "I2S1": { i2s: true, sd: true },
      "SPI3": { spi: true, mosi: true },
      "I2S3": { i2s: true, sd: true },
      "SPI6": { spi: true, mosi: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "D11",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C1": { i2c: true, scl: true },
      "UART4": { usart: true, rx: true },
      "I2C4": { i2c: true, scl: true }
    }
  },
  {
    pinName: "D12",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C1": { i2c: true, sda: true },
      "UART4": { usart: true, tx: true },
      "SPI2": { spi: true, ss: true },
      "I2S2": { i2s: true, ws: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "D13",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USART1": { usart: true, tx: true },
      "LPUART1": { usart: true, tx: true },
      "UART5": { usart: true, tx: true },
      "I2C1": { i2c: true, scl: true },
      "I2C4": { i2c: true, scl: true }
    }
  },
  {
    pinName: "D14",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USART1": { usart: true, rx: true },
      "LPUART1": { usart: true, rx: true },
      "I2C1": { i2c: true, sda: true },
      "I2C4": { i2c: true, sda: true }
    }
  },
  {
    pinName: "A0",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A1",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "USART2": { usart: true, rx: true }
    }
  },
  {
    pinName: "A2",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A3",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: true },
      "I2S1": { i2s: true, sd: true },
      "SPI6": { spi: true, mosi: true }
    }
  },
  {
    pinName: "A4",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, miso: true },
      "I2S1": { i2s: true, sd: true },
      "SPI6": { spi: true, miso: true }
    }
  },
  {
    pinName: "A5",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "A6",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "I2S1": { i2s: true, ws: false, sd: false, sck: true }
    }
  },
  {
    pinName: "A7",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: false, miso: false, sck: true, ss: false },
      "SPI6": { spi: true, mosi: false, miso: false, sck: true, ss: false },
      "I2S1": { i2s: true, ws: false, sd: false, sck: true }
    }
  },
  {
    pinName: "A8",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "SPI1": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "SPI3": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "SPI6": { spi: true, mosi: false, miso: false, sck: false, ss: true },
      "I2S1": { i2s: true, ws: true, sd: false, sck: false },
      "I2S3": { i2s: true, ws: true, sd: false, sck: false }
    }
  },
  {
    pinName: "A9",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "UART4": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "A10",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "UART4": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D26",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "I2C4": { i2c: true, sda: false, scl: false }
    }
  },
  {
    pinName: "D27",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "SAI2": { i2s: true, ws: false, sd: false, sck: false },
      "USART6": { usart: true, rx: true, tx: false },
      "SPI1": { spi: true, mosi: false, miso: true, sck: false, ss: false },
      "I2S1": { i2s: true, ws: false, sd: true, sck: false }
    }
  },
  {
    pinName: "A11",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true,
    busCapabilities: {
      "USART2": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D29",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, dplus: false, dminus: true },
      "USART1": { usart: true, rx: false, tx: true }
    }
  },
  {
    pinName: "D30",
    digitalInput: true,
    digitalOutput: true,
    busCapabilities: {
      "USB_HS": { usb: true, dplus: true, dminus: false },
      "USART1": { usart: true, rx: true, tx: false }
    }
  },
  {
    pinName: "D31",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  },
  {
    pinName: "D32",
    digitalInput: true,
    digitalOutput: true,
    analogInput: true
  }
];
class DaisySeed2DFM extends _base_DefaultHardwareObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  subscribe() {
    super.subscribe();
    this.on("preInit", () => {
      const spacing = 1 / (DaisyPins.length + 1);
      this.ios = DaisyPins.map((pin, i) => ({
        edge: "B",
        position: spacing * 0.5 + spacing * i
      }));
      this.box.setWidth(DaisyPins.length * 16);
    });
  }
}
DaisySeed2DFM.author = "Corvus Prudens";
DaisySeed2DFM.version = "v1.0.0";
DaisySeed2DFM.description = "Daisy Seed 2 DFM SOM";
DaisySeed2DFM.ios = [
  ...DaisyPins.map((pin) => ({
    type: "anything",
    description: `Pin ${pin.pinName}`,
    pin
  }))
];
DaisySeed2DFM.patcherInlets = [
  {
    isHot: true,
    type: "signal",
    description: "Audio DAC left"
  },
  {
    isHot: true,
    type: "signal",
    description: "Audio DAC right"
  },
  {
    isHot: false,
    type: "number",
    description: "Set on-board LED"
  }
];
DaisySeed2DFM.patcherOutlets = [
  {
    type: "signal",
    description: "Audio ADC left"
  },
  {
    type: "signal",
    description: "Audio ADC right"
  }
];


/***/ }),

/***/ "./src/core/hardware/objects/soms/SomObjects.ts":
/*!******************************************************!*\
  !*** ./src/core/hardware/objects/soms/SomObjects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DaisySeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaisySeed */ "./src/core/hardware/objects/soms/DaisySeed.ts");
/* harmony import */ var _DaisySeed2DFM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaisySeed2DFM */ "./src/core/hardware/objects/soms/DaisySeed2DFM.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "seed": _DaisySeed__WEBPACK_IMPORTED_MODULE_0__.DaisySeed,
  "s2dfm": _DaisySeed2DFM__WEBPACK_IMPORTED_MODULE_1__.DaisySeed2DFM
});


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_es_without__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/without */ "./node_modules/lodash-es/without.js");
/* harmony import */ var lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/invoke */ "./node_modules/lodash-es/invoke.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/factories.js");
/* harmony import */ var _IconGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./IconGroup */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js");










/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Icon, _PureComponent);

  function Icon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      (0,lodash_es_invoke__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = Icon.prototype;

  _proto.getIconAriaOptions = function getIconAriaOptions() {
    var ariaOptions = {};
    var _this$props = this.props,
        ariaLabel = _this$props['aria-label'],
        ariaHidden = _this$props['aria-hidden'];

    if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_5__["default"])(ariaLabel)) {
      ariaOptions['aria-hidden'] = 'true';
    } else {
      ariaOptions['aria-label'] = ariaLabel;
    }

    if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_5__["default"])(ariaHidden)) {
      ariaOptions['aria-hidden'] = ariaHidden;
    }

    return ariaOptions;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        bordered = _this$props2.bordered,
        circular = _this$props2.circular,
        className = _this$props2.className,
        color = _this$props2.color,
        corner = _this$props2.corner,
        disabled = _this$props2.disabled,
        fitted = _this$props2.fitted,
        flipped = _this$props2.flipped,
        inverted = _this$props2.inverted,
        link = _this$props2.link,
        loading = _this$props2.loading,
        name = _this$props2.name,
        rotated = _this$props2.rotated,
        size = _this$props2.size;
    var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(color, name, size, (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(bordered, 'bordered'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(circular, 'circular'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(disabled, 'disabled'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(fitted, 'fitted'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(inverted, 'inverted'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(link, 'link'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOnly)(loading, 'loading'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useKeyOrValueAndKey)(corner, 'corner'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useValueAndKey)(flipped, 'flipped'), (0,_lib__WEBPACK_IMPORTED_MODULE_6__.useValueAndKey)(rotated, 'rotated'), 'icon', className);
    var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_7__["default"])(Icon, this.props);
    var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_8__["default"])(Icon, this.props);
    var ariaOptions = this.getIconAriaOptions();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }));
  };

  return Icon;
}(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent);

Icon.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Icon.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().elementType),

  /** Formatted to appear bordered. */
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can formatted to appear circular. */
  circular: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Color of the icon. */
  color: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(_lib__WEBPACK_IMPORTED_MODULE_10__.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['top left', 'top right', 'bottom left', 'bottom right'])]),

  /** Show that the icon is inactive. */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Fitted, without space to left or right of Icon. */
  fitted: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can be flipped. */
  flipped: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can be formatted as a link. */
  link: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Icon can be used as a simple loader. */
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /** Name of the icon. */
  name: _lib__WEBPACK_IMPORTED_MODULE_11__.suggest(_lib__WEBPACK_IMPORTED_MODULE_10__.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf((0,lodash_es_without__WEBPACK_IMPORTED_MODULE_12__["default"])(_lib__WEBPACK_IMPORTED_MODULE_10__.SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-hidden': (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /** Icon can have an aria label. */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
} : 0;
Icon.defaultProps = {
  as: 'i'
};
Icon.Group = _IconGroup__WEBPACK_IMPORTED_MODULE_13__["default"];
Icon.create = (0,_lib__WEBPACK_IMPORTED_MODULE_14__.createShorthandFactory)(Icon, function (value) {
  return {
    name: value
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js":
/*!***************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_es_without__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/without */ "./node_modules/lodash-es/without.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib */ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js");






/**
 * Several icons can be used together as a group.
 */

function IconGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(size, 'icons', className);
  var rest = (0,_lib__WEBPACK_IMPORTED_MODULE_3__["default"])(IconGroup, props);
  var ElementType = (0,_lib__WEBPACK_IMPORTED_MODULE_4__["default"])(IconGroup, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ElementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    className: classes
  }), _lib__WEBPACK_IMPORTED_MODULE_5__.isNil(children) ? content : children);
}

IconGroup.handledProps = ["as", "children", "className", "content", "size"];
IconGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().elementType),

  /** Primary content. */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),

  /** Additional classes. */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),

  /** Shorthand for primary content. */
  content: _lib__WEBPACK_IMPORTED_MODULE_7__.contentShorthand,

  /** Size of the icon group. */
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf((0,lodash_es_without__WEBPACK_IMPORTED_MODULE_8__["default"])(_lib__WEBPACK_IMPORTED_MODULE_9__.SIZES, 'medium'))
} : 0;
IconGroup.defaultProps = {
  as: 'i'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconGroup);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/SUI.js":
/*!***********************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/SUI.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCESSIBILITY": () => (/* binding */ ACCESSIBILITY),
/* harmony export */   "ALL_ICONS_IN_ALL_CONTEXTS": () => (/* binding */ ALL_ICONS_IN_ALL_CONTEXTS),
/* harmony export */   "ARROWS": () => (/* binding */ ARROWS),
/* harmony export */   "AUDIO_VIDEO": () => (/* binding */ AUDIO_VIDEO),
/* harmony export */   "BRANDS": () => (/* binding */ BRANDS),
/* harmony export */   "BUSINESS": () => (/* binding */ BUSINESS),
/* harmony export */   "CHESS": () => (/* binding */ CHESS),
/* harmony export */   "CODE": () => (/* binding */ CODE),
/* harmony export */   "COLORS": () => (/* binding */ COLORS),
/* harmony export */   "COMMUNICATION": () => (/* binding */ COMMUNICATION),
/* harmony export */   "COMPONENT_CONTEXT_SPECIFIC_ICONS": () => (/* binding */ COMPONENT_CONTEXT_SPECIFIC_ICONS),
/* harmony export */   "COMPUTERS": () => (/* binding */ COMPUTERS),
/* harmony export */   "CURRENCY": () => (/* binding */ CURRENCY),
/* harmony export */   "DATE_TIME": () => (/* binding */ DATE_TIME),
/* harmony export */   "DESIGN": () => (/* binding */ DESIGN),
/* harmony export */   "DIRECTIONAL_TRANSITIONS": () => (/* binding */ DIRECTIONAL_TRANSITIONS),
/* harmony export */   "EDITORS": () => (/* binding */ EDITORS),
/* harmony export */   "FILES": () => (/* binding */ FILES),
/* harmony export */   "FLOATS": () => (/* binding */ FLOATS),
/* harmony export */   "GENDERS": () => (/* binding */ GENDERS),
/* harmony export */   "HANDS_GESTURES": () => (/* binding */ HANDS_GESTURES),
/* harmony export */   "HEALTH": () => (/* binding */ HEALTH),
/* harmony export */   "ICONS": () => (/* binding */ ICONS),
/* harmony export */   "ICONS_AND_ALIASES": () => (/* binding */ ICONS_AND_ALIASES),
/* harmony export */   "ICON_ALIASES": () => (/* binding */ ICON_ALIASES),
/* harmony export */   "IMAGES": () => (/* binding */ IMAGES),
/* harmony export */   "INTERFACES": () => (/* binding */ INTERFACES),
/* harmony export */   "LOGISTICS": () => (/* binding */ LOGISTICS),
/* harmony export */   "MAPS": () => (/* binding */ MAPS),
/* harmony export */   "MEDICAL": () => (/* binding */ MEDICAL),
/* harmony export */   "OBJECTS": () => (/* binding */ OBJECTS),
/* harmony export */   "PAYMENTS_SHOPPING": () => (/* binding */ PAYMENTS_SHOPPING),
/* harmony export */   "SHAPES": () => (/* binding */ SHAPES),
/* harmony export */   "SIZES": () => (/* binding */ SIZES),
/* harmony export */   "SPINNERS": () => (/* binding */ SPINNERS),
/* harmony export */   "SPORTS": () => (/* binding */ SPORTS),
/* harmony export */   "STATIC_TRANSITIONS": () => (/* binding */ STATIC_TRANSITIONS),
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "TEXT_ALIGNMENTS": () => (/* binding */ TEXT_ALIGNMENTS),
/* harmony export */   "TRANSITIONS": () => (/* binding */ TRANSITIONS),
/* harmony export */   "USERS_PEOPLE": () => (/* binding */ USERS_PEOPLE),
/* harmony export */   "VEHICLES": () => (/* binding */ VEHICLES),
/* harmony export */   "VERTICAL_ALIGNMENTS": () => (/* binding */ VERTICAL_ALIGNMENTS),
/* harmony export */   "VISIBILITY": () => (/* binding */ VISIBILITY),
/* harmony export */   "WIDTHS": () => (/* binding */ WIDTHS),
/* harmony export */   "WRITING": () => (/* binding */ WRITING)
/* harmony export */ });
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var lodash_es_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/values */ "./node_modules/lodash-es/values.js");
/* harmony import */ var lodash_es_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/keys */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var _numberToWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberToWord */ "./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js");




var COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
var FLOATS = ['left', 'right'];
var SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
var TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
var VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];
var VISIBILITY = ['mobile', 'tablet', 'computer', 'large screen', 'widescreen'];
var WIDTHS = [].concat((0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_0__["default"])(_numberToWord__WEBPACK_IMPORTED_MODULE_1__.numberToWordMap), (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_0__["default"])(_numberToWord__WEBPACK_IMPORTED_MODULE_1__.numberToWordMap).map(Number), (0,lodash_es_values__WEBPACK_IMPORTED_MODULE_2__["default"])(_numberToWord__WEBPACK_IMPORTED_MODULE_1__.numberToWordMap));
var DIRECTIONAL_TRANSITIONS = ['browse', 'browse right', 'drop', 'fade', 'fade up', 'fade down', 'fade left', 'fade right', 'fly up', 'fly down', 'fly left', 'fly right', 'horizontal flip', 'vertical flip', 'scale', 'slide up', 'slide down', 'slide left', 'slide right', 'swing up', 'swing down', 'swing left', 'swing right', 'zoom'];
var STATIC_TRANSITIONS = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];
var TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS); // Generated from:
// https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/icon.css

var ACCESSIBILITY = ['american sign language interpreting', 'assistive listening systems', 'audio description', 'blind', 'braille', 'closed captioning', 'closed captioning outline', 'deaf', 'low vision', 'phone volume', 'question circle', 'question circle outline', 'sign language', 'tty', 'universal access', 'wheelchair'];
var ARROWS = ['angle double down', 'angle double left', 'angle double right', 'angle double up', 'angle down', 'angle left', 'angle right', 'angle up', 'arrow alternate circle down', 'arrow alternate circle down outline', 'arrow alternate circle left', 'arrow alternate circle left outline', 'arrow alternate circle right', 'arrow alternate circle right outline', 'arrow alternate circle up', 'arrow alternate circle up outline', 'arrow circle down', 'arrow circle left', 'arrow circle right', 'arrow circle up', 'arrow down', 'arrow left', 'arrow right', 'arrow up', 'arrows alternate', 'arrows alternate horizontal', 'arrows alternate vertical', 'caret down', 'caret left', 'caret right', 'caret square down', 'caret square down outline', 'caret square left', 'caret square left outline', 'caret square right', 'caret square right outline', 'caret square up', 'caret square up outline', 'caret up', 'cart arrow down', 'chart line', 'chevron circle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron down', 'chevron left', 'chevron right', 'chevron up', 'cloud download', 'cloud upload', 'download', 'exchange', 'expand arrows alternate', 'external alternate', 'external square alternate', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'history', 'level down alternate', 'level up alternate', 'location arrow', 'long arrow alternate down', 'long arrow alternate left', 'long arrow alternate right', 'long arrow alternate up', 'mouse pointer', 'play', 'random', 'recycle', 'redo', 'redo alternate', 'reply', 'reply all', 'retweet', 'share', 'share square', 'share square outline', 'sign-in', 'sign-out', 'sign-in alternate', 'sign-out alternate', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'sync', 'sync alternate', 'text height', 'text width', 'undo', 'undo alternate', 'upload', 'zoom-in', 'zoom-out'];
var AUDIO_VIDEO = ['audio description', 'backward', 'circle', 'circle outline', 'closed captioning', 'closed captioning outline', 'compress', 'eject', 'expand', 'expand arrows alternate', 'fast backward', 'fast forward', 'file audio', 'file audio outline', 'file video', 'file video outline', 'film', 'forward', 'headphones', 'microphone', 'microphone slash', 'music', 'pause', 'pause circle', 'pause circle outline', 'phone volume', 'play', 'play circle', 'play circle outline', 'podcast', 'random', 'redo', 'redo alternate', 'rss', 'rss square', 'step backward', 'step forward', 'stop', 'stop circle', 'stop circle outline', 'sync', 'sync alternate', 'undo', 'undo alternate', 'video', 'volume down', 'volume off', 'volume up'];
var BUSINESS = ['address book', 'address book outline', 'address card', 'address card outline', 'archive', 'balance scale', 'birthday cake', 'book', 'briefcase', 'building', 'building outline', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'certificate', 'chart area', 'chart bar', 'chart bar outline', 'chart line', 'chart pie', 'clipboard', 'clipboard outline', 'coffee', 'columns', 'compass', 'compass outline', 'copy', 'copy outline', 'copyright', 'copyright outline', 'cut', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'eraser', 'fax', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'globe', 'industry', 'paperclip', 'paste', 'pen square', 'pencil alternate', 'percent', 'phone', 'phone square', 'phone volume', 'registered', 'registered outline', 'save', 'save outline', 'sitemap', 'sticky note', 'sticky note outline', 'suitcase', 'table', 'tag', 'tags', 'tasks', 'thumbtack', 'trademark'];
var CHESS = ['chess', 'chess bishop', 'chess board', 'chess king', 'chess knight', 'chess pawn', 'chess queen', 'chess rook', 'square full'];
var CODE = ['archive', 'barcode', 'bath', 'bug', 'code', 'code branch', 'coffee', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file code', 'file code outline', 'filter', 'fire extinguisher', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'microchip', 'qrcode', 'shield alternate', 'sitemap', 'terminal', 'user secret', 'window close', 'window close outline', 'window maximize', 'window maximize outline', 'window minimize', 'window minimize outline', 'window restore', 'window restore outline'];
var COMMUNICATION = ['address book', 'address book outline', 'address card', 'address card outline', 'american sign language interpreting', 'assistive listening systems', 'at', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bullhorn', 'comment', 'comment outline', 'comment alternate', 'comment alternate outline', 'comments', 'comments outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'fax', 'inbox', 'language', 'microphone', 'microphone slash', 'mobile', 'mobile alternate', 'paper plane', 'paper plane outline', 'phone', 'phone square', 'phone volume', 'rss', 'rss square', 'tty', 'wifi'];
var COMPUTERS = ['desktop', 'download', 'hdd', 'hdd outline', 'headphones', 'keyboard', 'keyboard outline', 'laptop', 'microchip', 'mobile', 'mobile alternate', 'plug', 'power off', 'print', 'save', 'save outline', 'server', 'tablet', 'tablet alternate', 'tv', 'upload'];
var CURRENCY = ['dollar sign', 'euro sign', 'lira sign', 'money bill alternate', 'money bill alternate outline', 'pound sign', 'ruble sign', 'rupee sign', 'shekel sign', 'won sign', 'yen sign'];
var DATE_TIME = ['bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'clock', 'clock outline', 'hourglass', 'hourglass outline', 'hourglass end', 'hourglass half', 'hourglass start', 'stopwatch'];
var DESIGN = ['adjust', 'clone', 'clone outline', 'copy', 'copy outline', 'crop', 'crosshairs', 'cut', 'edit', 'edit outline', 'eraser', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'object group', 'object group outline', 'object ungroup', 'object ungroup outline', 'paint brush', 'paste', 'pencil alternate', 'save', 'save outline', 'tint'];
var EDITORS = ['align center', 'align justify', 'align left', 'align right', 'bold', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'columns', 'copy', 'copy outline', 'cut', 'edit', 'edit outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'font', 'heading', 'i cursor', 'indent', 'italic', 'linkify', 'list', 'list alternate', 'list alternate outline', 'list ol', 'list ul', 'outdent', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'paste', 'pencil alternate', 'print', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'share', 'strikethrough', 'subscript', 'superscript', 'sync', 'sync alternate', 'table', 'tasks', 'text height', 'text width', 'th', 'th large', 'th list', 'trash', 'trash alternate', 'trash alternate outline', 'underline', 'undo', 'undo alternate', 'unlink'];
var FILES = ['archive', 'clone', 'clone outline', 'copy', 'copy outline', 'cut', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file archive', 'file archive outline', 'file audio', 'file audio outline', 'file code', 'file code outline', 'file excel', 'file excel outline', 'file image', 'file image outline', 'file pdf', 'file pdf outline', 'file powerpoint', 'file powerpoint outline', 'file video', 'file video outline', 'file word', 'file word outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'paste', 'save', 'save outline', 'sticky note', 'sticky note outline'];
var GENDERS = ['genderless', 'mars', 'mars double', 'mars stroke', 'mars stroke horizontal', 'mars stroke vertical', 'mercury', 'neuter', 'transgender', 'transgender alternate', 'venus', 'venus double', 'venus mars'];
var HANDS_GESTURES = ['hand lizard', 'hand lizard outline', 'hand paper', 'hand paper outline', 'hand peace', 'hand peace outline', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'hand rock', 'hand rock outline', 'hand scissors', 'hand scissors outline', 'hand spock', 'hand spock outline', 'handshake', 'handshake outline', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline'];
var HEALTH = ['ambulance', 'h square', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'medkit', 'plus square', 'plus square outline', 'stethoscope', 'user md', 'wheelchair'];
var IMAGES = ['adjust', 'bolt', 'camera', 'camera retro', 'clone', 'clone outline', 'compress', 'expand', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'file image', 'file image outline', 'film', 'id badge', 'id badge outline', 'id card', 'id card outline', 'image', 'image outline', 'images', 'images outline', 'sliders horizontal', 'tint'];
var INTERFACES = ['ban', 'barcode', 'bars', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bug', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'certificate', 'check', 'check circle', 'check circle outline', 'check square', 'check square outline', 'circle', 'circle outline', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'cloud', 'cloud download', 'cloud upload', 'coffee', 'cog', 'cogs', 'copy', 'copy outline', 'cut', 'database', 'dot circle', 'dot circle outline', 'download', 'edit', 'edit outline', 'ellipsis horizontal', 'ellipsis vertical', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'exclamation', 'exclamation circle', 'exclamation triangle', 'external alternate', 'external square alternate', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'filter', 'flag', 'flag outline', 'flag checkered', 'folder', 'folder outline', 'folder open', 'folder open outline', 'frown', 'frown outline', 'hashtag', 'heart', 'heart outline', 'history', 'home', 'i cursor', 'info', 'info circle', 'language', 'magic', 'meh', 'meh outline', 'microphone', 'microphone slash', 'minus', 'minus circle', 'minus square', 'minus square outline', 'paste', 'pencil alternate', 'plus', 'plus circle', 'plus square', 'plus square outline', 'qrcode', 'question', 'question circle', 'question circle outline', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'rss', 'rss square', 'save', 'save outline', 'search', 'search minus', 'search plus', 'share', 'share alternate', 'share alternate square', 'share square', 'share square outline', 'shield alternate', 'sign-in', 'sign-out', 'signal', 'sitemap', 'sliders horizontal', 'smile', 'smile outline', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'star', 'star outline', 'star half', 'star half outline', 'sync', 'sync alternate', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'times', 'times circle', 'times circle outline', 'toggle off', 'toggle on', 'trash', 'trash alternate', 'trash alternate outline', 'trophy', 'undo', 'undo alternate', 'upload', 'user', 'user outline', 'user circle', 'user circle outline', 'wifi'];
var LOGISTICS = ['box', 'boxes', 'clipboard check', 'clipboard list', 'dolly', 'dolly flatbed', 'pallet', 'shipping fast', 'truck', 'warehouse'];
var MAPS = ['ambulance', 'anchor', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bicycle', 'binoculars', 'birthday cake', 'blind', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'building', 'building outline', 'car', 'coffee', 'crosshairs', 'dollar sign', 'eye', 'eye slash', 'eye slash outline', 'fighter jet', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'gamepad', 'gavel', 'gift', 'glass martini', 'globe', 'graduation cap', 'h square', 'heart', 'heart outline', 'heartbeat', 'home', 'hospital', 'hospital outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'info', 'info circle', 'key', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'location arrow', 'low vision', 'magnet', 'male', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'money bill alternate', 'money bill alternate outline', 'motorcycle', 'music', 'newspaper', 'newspaper outline', 'paw', 'phone', 'phone square', 'phone volume', 'plane', 'plug', 'plus', 'plus square', 'plus square outline', 'print', 'recycle', 'road', 'rocket', 'search', 'search minus', 'search plus', 'ship', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'street view', 'subway', 'suitcase', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'tint', 'train', 'tree', 'trophy', 'truck', 'tty', 'umbrella', 'university', 'utensil spoon', 'utensils', 'wheelchair', 'wifi', 'wrench'];
var MEDICAL = ['ambulance', 'band aid', 'dna', 'first aid', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'hospital symbol', 'pills', 'plus', 'stethoscope', 'syringe', 'thermometer', 'user md', 'weight'];
var OBJECTS = ['ambulance', 'anchor', 'archive', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bicycle', 'binoculars', 'birthday cake', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'bug', 'building', 'building outline', 'bullhorn', 'bullseye', 'bus', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'camera', 'camera retro', 'car', 'clipboard', 'clipboard outline', 'cloud', 'coffee', 'cog', 'cogs', 'compass', 'compass outline', 'copy', 'copy outline', 'cube', 'cubes', 'cut', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'eye', 'eye dropper', 'fax', 'fighter jet', 'file', 'file outline', 'file alternate', 'file alternate outline', 'film', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'futbol', 'futbol outline', 'gamepad', 'gavel', 'gem', 'gem outline', 'gift', 'glass martini', 'globe', 'graduation cap', 'hdd', 'hdd outline', 'headphones', 'heart', 'heart outline', 'home', 'hospital', 'hospital outline', 'hourglass', 'hourglass outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'key', 'keyboard', 'keyboard outline', 'laptop', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'lock', 'lock open', 'magic', 'magnet', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'microchip', 'microphone', 'mobile', 'mobile alternate', 'money bill alternate', 'money bill alternate outline', 'moon', 'moon outline', 'motorcycle', 'newspaper', 'newspaper outline', 'paint brush', 'paper plane', 'paper plane outline', 'paperclip', 'paste', 'paw', 'pencil alternate', 'phone', 'plane', 'plug', 'print', 'puzzle piece', 'road', 'rocket', 'save', 'save outline', 'search', 'shield alternate', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'snowflake', 'snowflake outline', 'space shuttle', 'star', 'star outline', 'sticky note', 'sticky note outline', 'stopwatch', 'subway', 'suitcase', 'sun', 'sun outline', 'tablet', 'tablet alternate', 'tachometer alternate', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'train', 'trash', 'trash alternate', 'trash alternate outline', 'tree', 'trophy', 'truck', 'tv', 'umbrella', 'university', 'unlock', 'unlock alternate', 'utensil spoon', 'utensils', 'wheelchair', 'wrench'];
var PAYMENTS_SHOPPING = ['bell', 'bell outline', 'bookmark', 'bookmark outline', 'bullhorn', 'camera', 'camera retro', 'cart arrow down', 'cart plus', 'certificate', 'credit card', 'credit card outline', 'gem', 'gem outline', 'gift', 'handshake', 'handshake outline', 'heart', 'heart outline', 'key', 'shopping bag', 'shopping basket', 'shopping cart', 'star', 'star outline', 'tag', 'tags', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'trophy'];
var SHAPES = ['bookmark', 'bookmark outline', 'calendar', 'calendar outline', 'certificate', 'circle', 'circle outline', 'cloud', 'comment', 'comment outline', 'file', 'file outline', 'folder', 'folder outline', 'heart', 'heart outline', 'map marker', 'play', 'square', 'square outline', 'star', 'star outline'];
var SPINNERS = ['asterisk', 'certificate', 'circle notch', 'cog', 'compass', 'compass outline', 'crosshairs', 'life ring', 'life ring outline', 'snowflake', 'snowflake outline', 'spinner', 'sun', 'sun outline', 'sync'];
var SPORTS = ['baseball ball', 'basketball ball', 'bowling ball', 'football ball', 'futbol', 'futbol outline', 'golf ball', 'hockey puck', 'quidditch', 'table tennis', 'volleyball ball'];
var STATUS = ['ban', 'battery empty', 'battery full', 'battery half', 'battery quarter', 'battery three quarters', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'cart arrow down', 'cart plus', 'exclamation', 'exclamation circle', 'exclamation triangle', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'info', 'info circle', 'lock', 'lock open', 'minus', 'minus circle', 'minus square', 'minus square outline', 'plus', 'plus circle', 'plus square', 'plus square outline', 'question', 'question circle', 'question circle outline', 'shield alternate', 'shopping cart', 'sign in alternate', 'sign out alternate', 'thermometer empty', 'thermometer full', 'thermometer half', 'thermometer quarter', 'thermometer three quarters', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'toggle off', 'toggle on', 'unlock', 'unlock alternate'];
var USERS_PEOPLE = ['address book', 'address book outline', 'address card', 'address card outline', 'bed', 'blind', 'child', 'female', 'frown', 'frown outline', 'id badge', 'id badge outline', 'id card', 'id card outline', 'male', 'meh', 'meh outline', 'power off', 'smile', 'smile outline', 'street view', 'user', 'user outline', 'user circle', 'user circle outline', 'user md', 'user plus', 'user secret', 'user times', 'users', 'wheelchair'];
var VEHICLES = ['ambulance', 'bicycle', 'bus', 'car', 'fighter jet', 'motorcycle', 'paper plane', 'paper plane outline', 'plane', 'rocket', 'ship', 'shopping cart', 'space shuttle', 'subway', 'taxi', 'train', 'truck', 'wheelchair'];
var WRITING = ['archive', 'book', 'bookmark', 'bookmark outline', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'newspaper', 'newspaper outline', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'pen square', 'pencil alternate', 'quote left', 'quote right', 'sticky note', 'sticky note outline', 'thumbtack'];
var BRANDS = ['500px', 'accessible', 'accusoft', 'adn', 'adversal', 'affiliatetheme', 'algolia', 'amazon', 'amazon pay', 'amilia', 'android', 'angellist', 'angrycreative', 'angular', 'app store', 'app store ios', 'apper', 'apple', 'apple pay', 'asymmetrik', 'audible', 'autoprefixer', 'avianex', 'aviato', 'aws', 'bandcamp', 'behance', 'behance square', 'bimobject', 'bitbucket', 'bitcoin', 'bity', 'black tie', 'blackberry', 'blogger', 'blogger b', 'bluetooth', 'bluetooth b', 'btc', 'buromobelexperte', 'buysellads', 'cc amazon pay', 'cc amex', 'cc apple pay', 'cc diners club', 'cc discover', 'cc jcb', 'cc mastercard', 'cc paypal', 'cc stripe', 'cc visa', 'centercode', 'chrome', 'cloudscale', 'cloudsmith', 'cloudversify', 'codepen', 'codiepie', 'connectdevelop', 'contao', 'cpanel', 'creative commons', 'css3', 'css3 alternate', 'cuttlefish', 'd and d', 'dashcube', 'delicious', 'deploydog', 'deskpro', 'deviantart', 'digg', 'digital ocean', 'discord', 'discourse', 'dochub', 'docker', 'draft2digital', 'dribbble', 'dribbble square', 'dropbox', 'drupal', 'dyalog', 'earlybirds', 'edge', 'elementor', 'ember', 'empire', 'envira', 'erlang', 'ethereum', 'etsy', 'expeditedssl', 'facebook', 'facebook f', 'facebook messenger', 'facebook square', 'firefox', 'first order', 'firstdraft', 'flickr', 'flipboard', 'fly', 'font awesome', 'font awesome alternate', 'font awesome flag', 'fonticons', 'fonticons fi', 'fort awesome', 'fort awesome alternate', 'forumbee', 'foursquare', 'free code camp', 'freebsd', 'get pocket', 'gg', 'gg circle', 'git', 'git square', 'github', 'github alternate', 'github square', 'gitkraken', 'gitlab', 'gitter', 'glide', 'glide g', 'gofore', 'goodreads', 'goodreads g', 'google', 'google drive', 'google play', 'google plus', 'google plus g', 'google plus square', 'google wallet', 'gratipay', 'grav', 'gripfire', 'grunt', 'gulp', 'hacker news', 'hacker news square', 'hips', 'hire a helper', 'hooli', 'hotjar', 'houzz', 'html5', 'hubspot', 'imdb', 'instagram', 'internet explorer', 'ioxhost', 'itunes', 'itunes note', 'jenkins', 'joget', 'joomla', 'js', 'js square', 'jsfiddle', 'keycdn', 'kickstarter', 'kickstarter k', 'korvue', 'laravel', 'lastfm', 'lastfm square', 'leanpub', 'less', 'linechat', 'linkedin', 'linkedin alternate', 'linode', 'linux', 'lyft', 'magento', 'maxcdn', 'medapps', 'medium', 'medium m', 'medrt', 'meetup', 'microsoft', 'mix', 'mixcloud', 'mizuni', 'modx', 'monero', 'napster', 'nintendo switch', 'node', 'node js', 'npm', 'ns8', 'nutritionix', 'odnoklassniki', 'odnoklassniki square', 'opencart', 'openid', 'opera', 'optin monster', 'osi', 'page4', 'pagelines', 'palfed', 'patreon', 'paypal', 'periscope', 'phabricator', 'phoenix framework', 'php', 'pied piper', 'pied piper alternate', 'pied piper pp', 'pinterest', 'pinterest p', 'pinterest square', 'playstation', 'product hunt', 'pushed', 'python', 'qq', 'quinscape', 'quora', 'ravelry', 'react', 'rebel', 'redriver', 'reddit', 'reddit alien', 'reddit square', 'rendact', 'renren', 'replyd', 'resolving', 'rocketchat', 'rockrms', 'safari', 'sass', 'schlix', 'scribd', 'searchengin', 'sellcast', 'sellsy', 'servicestack', 'shirtsinbulk', 'simplybuilt', 'sistrix', 'skyatlas', 'skype', 'slack', 'slack hash', 'slideshare', 'snapchat', 'snapchat ghost', 'snapchat square', 'soundcloud', 'speakap', 'spotify', 'stack exchange', 'stack overflow', 'staylinked', 'steam', 'steam square', 'steam symbol', 'sticker mule', 'strava', 'stripe', 'stripe s', 'studiovinari', 'stumbleupon', 'stumbleupon circle', 'superpowers', 'supple', 'telegram', 'telegram plane', 'tencent weibo', 'themeisle', 'trello', 'tripadvisor', 'tumblr', 'tumblr square', 'twitch', 'twitter', 'twitter square', 'typo3', 'uber', 'uikit', 'uniregistry', 'untappd', 'usb', 'ussunnah', 'vaadin', 'viacoin', 'viadeo', 'viadeo square', 'viber', 'vimeo', 'vimeo square', 'vimeo v', 'vine', 'vk', 'vnv', 'vuejs', 'wechat', 'weibo', 'weixin', 'whatsapp', 'whatsapp square', 'whmcs', 'wikipedia w', 'windows', 'wordpress', 'wordpress simple', 'wpbeginner', 'wpexplorer', 'wpforms', 'xbox', 'xing', 'xing square', 'y combinator', 'yahoo', 'yandex', 'yandex international', 'yelp', 'yoast', 'youtube', 'youtube square'];
var ICONS = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(ACCESSIBILITY, ARROWS, AUDIO_VIDEO, BUSINESS, CHESS, CODE, COMMUNICATION, COMPUTERS, CURRENCY, DATE_TIME, DESIGN, EDITORS, FILES, GENDERS, HANDS_GESTURES, HEALTH, IMAGES, INTERFACES, LOGISTICS, MAPS, MEDICAL, OBJECTS, PAYMENTS_SHOPPING, SHAPES, SPINNERS, SPORTS, STATUS, USERS_PEOPLE, VEHICLES, WRITING, BRANDS));
var ICON_ALIASES = ['chess rock', 'ordered list', 'unordered list', 'user doctor', 'shield', 'puzzle', 'add circle', 'add square', 'add to calendar', 'add to cart', 'add user', 'add', 'alarm mute', 'alarm', 'ald', 'als', 'announcement', 'area chart', 'area graph', 'arrow down cart', 'asexual', 'asl interpreting', 'asl', 'assistive listening devices', 'attach', 'attention', 'balance', 'bar', 'bathtub', 'battery four', 'battery high', 'battery low', 'battery one', 'battery three', 'battery two', 'battery zero', 'birthday', 'block layout', 'bluetooth alternative', 'broken chain', 'browser', 'call square', 'call', 'cancel', 'cart', 'cc', 'chain', 'chat', 'checked calendar', 'checkmark', 'circle notched', 'close', 'cny', 'cocktail', 'commenting', 'computer', 'configure', 'content', 'deafness', 'delete calendar', 'delete', 'detective', 'discussions', 'doctor', 'dollar', 'dont', 'drivers license', 'dropdown', 'emergency', 'envira gallery', 'erase', 'eur', 'euro', 'eyedropper', 'factory', 'favorite', 'feed', 'female homosexual', 'file text', 'file text outline', 'find', 'first aid', 'fork', 'game', 'gay', 'gbp', 'google plus circle', 'google plus official', 'grab', 'graduation', 'grid layout', 'group', 'h', 'hand victory', 'handicap', 'hard of hearing', 'header', 'help circle', 'help', 'heterosexual', 'hide', 'hotel', 'hourglass four', 'hourglass full', 'hourglass one', 'hourglass three', 'hourglass two', 'idea', 'ils', 'in cart', 'inr', 'intergender', 'intersex', 'jpy', 'krw', 'lab', 'law', 'legal', 'lesbian', 'lightning', 'like', 'line graph', 'linkedin square', 'linkify', 'lira', 'list layout', 'magnify', 'mail forward', 'mail outline', 'mail square', 'mail', 'male homosexual', 'man', 'marker', 'mars alternate', 'mars horizontal', 'mars vertical', 'microsoft edge', 'military', 'ms edge', 'mute', 'new pied piper', 'non binary transgender', 'numbered list', 'options', 'other gender horizontal', 'other gender vertical', 'other gender', 'payment', 'paypal card', 'pencil square', 'photo', 'picture', 'pie chart', 'pie graph', 'pied piper hat', 'pin', 'plus cart', 'point', 'pointing down', 'pointing left', 'pointing right', 'pointing up', 'pound', 'power cord', 'power', 'privacy', 'r circle', 'rain', 'record', 'refresh', 'remove circle', 'remove from calendar', 'remove user', 'remove', 'repeat', 'rmb', 'rouble', 'rub', 'ruble', 'rupee', 's15', 'selected radio', 'send', 'setting', 'settings', 'shekel', 'sheqel', 'shipping', 'shop', 'shuffle', 'shutdown', 'sidebar', 'signing', 'signup', 'sliders', 'soccer', 'sort alphabet ascending', 'sort alphabet descending', 'sort ascending', 'sort content ascending', 'sort content descending', 'sort descending', 'sort numeric ascending', 'sort numeric descending', 'sound', 'spy', 'stripe card', 'student', 'talk', 'target', 'teletype', 'television', 'text cursor', 'text telephone', 'theme', 'thermometer', 'thumb tack', 'time', 'tm', 'toggle down', 'toggle left', 'toggle right', 'toggle up', 'translate', 'travel', 'treatment', 'triangle down', 'triangle left', 'triangle right', 'triangle up', 'try', 'unhide', 'unlinkify', 'unmute', 'usd', 'user cancel', 'user close', 'user delete', 'user x', 'vcard', 'video camera', 'video play', 'volume control phone', 'wait', 'warning circle', 'warning sign', 'warning', 'wi-fi', 'winner', 'wizard', 'woman', 'won', 'wordpress beginner', 'wordpress forms', 'world', 'write square', 'x', 'yen', 'zip', 'zoom in', 'zoom out', 'zoom', 'bitbucket square', 'checkmark box', 'circle thin', 'cloud download', 'cloud upload', 'compose', 'conversation', 'credit card alternative', 'currency', 'dashboard', 'diamond', 'disk', 'exchange', 'external share', 'external square', 'external', 'facebook official', 'food', 'hourglass zero', 'level down', 'level up', 'log out', 'meanpath', 'money', 'move', 'pencil', 'protect', 'radio', 'remove bookmark', 'resize horizontal', 'resize vertical', 'sign in', 'sign out', 'spoon', 'star half empty', 'star half full', 'ticket', 'times rectangle', 'write', 'youtube play'];
var ICONS_AND_ALIASES = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(ICONS, ICON_ALIASES)); // Some icon names are not part of icons.css.
// These are only valid as children of other components.
// Their CSS rules are defined by a specific component's CSS.
// We don't want to show name warnings for those usages so we add them as valid names here.

var COMPONENT_CONTEXT_SPECIFIC_ICONS = ['left dropdown' // nested dropdown menu direction icon
];
var ALL_ICONS_IN_ALL_CONTEXTS = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(ICONS_AND_ALIASES, COMPONENT_CONTEXT_SPECIFIC_ICONS));

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findByType": () => (/* binding */ findByType),
/* harmony export */   "isNil": () => (/* binding */ isNil),
/* harmony export */   "someByType": () => (/* binding */ someByType)
/* harmony export */ });
/* harmony import */ var lodash_es_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/find */ "./node_modules/lodash-es/find.js");
/* harmony import */ var lodash_es_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/some */ "./node_modules/lodash-es/some.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */

var someByType = function someByType(children, type) {
  return (0,lodash_es_some__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children), {
    type: type
  });
};
/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */

var findByType = function findByType(children, type) {
  return (0,lodash_es_find__WEBPACK_IMPORTED_MODULE_2__["default"])(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children), {
    type: type
  });
};
/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */

var isNil = function isNil(children) {
  return children === null || children === undefined || Array.isArray(children) && children.length === 0;
};

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js":
/*!*************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeyOnly": () => (/* binding */ useKeyOnly),
/* harmony export */   "useKeyOrValueAndKey": () => (/* binding */ useKeyOrValueAndKey),
/* harmony export */   "useMultipleProp": () => (/* binding */ useMultipleProp),
/* harmony export */   "useTextAlignProp": () => (/* binding */ useTextAlignProp),
/* harmony export */   "useValueAndKey": () => (/* binding */ useValueAndKey),
/* harmony export */   "useVerticalAlignProp": () => (/* binding */ useVerticalAlignProp),
/* harmony export */   "useWidthProp": () => (/* binding */ useWidthProp)
/* harmony export */ });
/* harmony import */ var _numberToWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberToWord */ "./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js");

/*
 * There are 3 prop patterns used to build up the className for a component.
 * Each utility here is meant for use in a classnames() argument.
 *
 * There is no util for valueOnly() because it would simply return val.
 * Use the prop value inline instead.
 *   <Label size='big' />
 *   <div class="ui big label"></div>
 */

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */

var useKeyOnly = function useKeyOnly(val, key) {
  return val && key;
};
/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */

var useValueAndKey = function useValueAndKey(val, key) {
  return val && val !== true && val + " " + key;
};
/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */

var useKeyOrValueAndKey = function useKeyOrValueAndKey(val, key) {
  return val && (val === true ? key : val + " " + key);
}; //
// Prop to className exceptions
//

/**
 * The "multiple" prop implements control of visibility and reserved classes for Grid subcomponents.
 *
 * @param {*} val The value of the "multiple" prop
 * @param {*} key A props key
 *
 * @example
 * <Grid.Row only='mobile' />
 * <Grid.Row only='mobile tablet' />
 * <div class="mobile only row"></div>
 * <div class="mobile only tablet only row"></div>
 */

var useMultipleProp = function useMultipleProp(val, key) {
  if (!val || val === true) return null;
  return val.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (prop) {
    return prop.replace('-', ' ') + " " + key;
  }).join(' ');
};
/**
 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "textAlign" prop
 *
 * @example
 * <Container textAlign='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container textAlign='left' />
 * <div class="ui left aligned container"></div>
 */

var useTextAlignProp = function useTextAlignProp(val) {
  return val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned');
};
/**
 * The "verticalAlign" prop follows the useValueAndKey.
 *
 * @param {*} val The value of the "verticalAlign" prop
 *
 * @example
 * <Grid verticalAlign='middle' />
 * <div class="ui middle aligned grid"></div>
 */

var useVerticalAlignProp = function useVerticalAlignProp(val) {
  return useValueAndKey(val, 'aligned');
};
/**
 * Create "X", "X wide" and "equal width" classNames.
 * "X" is a numberToWord value and "wide" is configurable.
 * @param {*} val The prop value
 * @param {string} [widthClass=''] The class
 * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
 *
 * @example
 * <Grid columns='equal' />
 * <div class="ui equal width grid"></div>
 *
 * <Form widths='equal' />
 * <div class="ui equal width form"></div>
 *
 * <FieldGroup widths='equal' />
 * <div class="equal width fields"></div>
 *
 * @example
 * <Grid columns={4} />
 * <div class="ui four column grid"></div>
 */

var useWidthProp = function useWidthProp(val, widthClass, canEqual) {
  if (widthClass === void 0) {
    widthClass = '';
  }

  if (canEqual === void 0) {
    canEqual = false;
  }

  if (canEqual && val === 'equal') {
    return 'equal width';
  }

  var valType = typeof val;

  if ((valType === 'string' || valType === 'number') && widthClass) {
    return (0,_numberToWord__WEBPACK_IMPORTED_MODULE_0__.numberToWord)(val) + " " + widthClass;
  }

  return (0,_numberToWord__WEBPACK_IMPORTED_MODULE_0__.numberToWord)(val);
};

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectionShorthand": () => (/* binding */ collectionShorthand),
/* harmony export */   "contentShorthand": () => (/* binding */ contentShorthand),
/* harmony export */   "demand": () => (/* binding */ demand),
/* harmony export */   "deprecate": () => (/* binding */ deprecate),
/* harmony export */   "disallow": () => (/* binding */ disallow),
/* harmony export */   "domNode": () => (/* binding */ domNode),
/* harmony export */   "every": () => (/* binding */ every),
/* harmony export */   "givenProps": () => (/* binding */ givenProps),
/* harmony export */   "itemShorthand": () => (/* binding */ itemShorthand),
/* harmony export */   "multipleProp": () => (/* binding */ multipleProp),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "refObject": () => (/* binding */ refObject),
/* harmony export */   "suggest": () => (/* binding */ suggest)
/* harmony export */ });
/* harmony import */ var lodash_es_difference__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es/difference */ "./node_modules/lodash-es/difference.js");
/* harmony import */ var lodash_es_trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es/trim */ "./node_modules/lodash-es/trim.js");
/* harmony import */ var lodash_es_isObject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/isObject */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var lodash_es_pick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/pick */ "./node_modules/lodash-es/pick.js");
/* harmony import */ var lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/keys */ "./node_modules/lodash-es/keys.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var lodash_es_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/min */ "./node_modules/lodash-es/min.js");
/* harmony import */ var lodash_es_sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/sum */ "./node_modules/lodash-es/sum.js");
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/map */ "./node_modules/lodash-es/map.js");
/* harmony import */ var lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/sortBy */ "./node_modules/lodash-es/sortBy.js");
/* harmony import */ var lodash_es_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/take */ "./node_modules/lodash-es/take.js");
/* harmony import */ var lodash_es_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/memoize */ "./node_modules/lodash-es/memoize.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _leven__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leven */ "./node_modules/semantic-ui-react/dist/es/lib/leven.js");
















var typeOf = function typeOf() {
  var _Object$prototype$toS;

  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
};
/**
 * Ensure a prop is a valid DOM node.
 */


var domNode = function domNode(props, propName) {
  // skip if prop is undefined
  if (props[propName] === undefined) return; // short circle for SSR env

  if (typeof Element === 'undefined') return; // skip if prop is valid

  if (props[propName] instanceof Element) return;
  return new Error("Invalid prop \"" + propName + "\" supplied, expected a DOM node.");
};
/**
 * Similar to PropTypes.oneOf but shows closest matches.
 * Word order is ignored allowing `left chevron` to match `chevron left`.
 * Useful for very large lists of options (e.g. Icon name, Flag name, etc.)
 * @param {string[]} suggestions An array of allowed values.
 */

var suggest = function suggest(suggestions) {
  if (!Array.isArray(suggestions)) {
    throw new Error('Invalid argument supplied to suggest, expected an instance of array.');
  }
  /* eslint-disable max-nested-callbacks */


  var findBestSuggestions = (0,lodash_es_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (str) {
    var propValueWords = str.split(' ');
    return (0,lodash_es_take__WEBPACK_IMPORTED_MODULE_1__["default"])((0,lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_2__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestions, function (suggestion) {
      var suggestionWords = suggestion.split(' ');

      var propValueScore = (0,lodash_es_sum__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(propValueWords, function (x) {
        return (0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestionWords, function (y) {
          return (0,_leven__WEBPACK_IMPORTED_MODULE_5__["default"])(x, y);
        });
      }), lodash_es_min__WEBPACK_IMPORTED_MODULE_6__["default"]));

      var suggestionScore = (0,lodash_es_sum__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])((0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestionWords, function (x) {
        return (0,lodash_es_map__WEBPACK_IMPORTED_MODULE_3__["default"])(propValueWords, function (y) {
          return (0,_leven__WEBPACK_IMPORTED_MODULE_5__["default"])(x, y);
        });
      }), lodash_es_min__WEBPACK_IMPORTED_MODULE_6__["default"]));

      return {
        suggestion: suggestion,
        score: propValueScore + suggestionScore
      };
    }), ['score', 'suggestion']), 3);
  });
  /* eslint-enable max-nested-callbacks */
  // Convert the suggestions list into a hash map for O(n) lookup times. Ensure
  // the words in each key are sorted alphabetically so that we have a consistent
  // way of looking up a value in the map, i.e. we can sort the words in the
  // incoming propValue and look that up without having to check all permutations.


  var suggestionsLookup = suggestions.reduce(function (acc, key) {
    acc[key.split(' ').sort().join(' ')] = true;
    return acc;
  }, {});
  return function (props, propName, componentName) {
    var propValue = props[propName]; // skip if prop is undefined or is included in the suggestions

    if (!propValue || suggestionsLookup[propValue]) return; // check if the words were correct but ordered differently.
    // Since we're matching for classNames we need to allow any word order
    // to pass validation, e.g. `left chevron` vs `chevron left`.

    var propValueSorted = propValue.split(' ').sort().join(' ');
    if (suggestionsLookup[propValueSorted]) return; // find best suggestions

    var bestMatches = findBestSuggestions(propValue); // skip if a match scored 0

    if (bestMatches.some(function (x) {
      return x.score === 0;
    })) return;
    return new Error(["Invalid prop `" + propName + "` of value `" + propValue + "` supplied to `" + componentName + "`.", "\n\nInstead of `" + propValue + "`, did you mean:", bestMatches.map(function (x) {
      return "\n  - " + x.suggestion;
    }).join(''), '\n'].join(''));
  };
};
/**
 * Disallow other props from being defined with this prop.
 * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
 */

var disallow = function disallow(disallowedProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(disallowedProps)) {
      throw new Error(['Invalid argument supplied to disallow, expected an instance of array.', " See `" + propName + "` prop in `" + componentName + "`."].join(''));
    } // skip if prop is undefined


    if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(props[propName]) || props[propName] === false) {
      return;
    } // find disallowed props with values


    var disallowed = disallowedProps.reduce(function (acc, disallowedProp) {
      if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(props[disallowedProp]) && props[disallowedProp] !== false) {
        return [].concat(acc, [disallowedProp]);
      }

      return acc;
    }, []);

    if (disallowed.length > 0) {
      return new Error(["Prop `" + propName + "` in `" + componentName + "` conflicts with props: `" + disallowed.join('`, `') + "`.", 'They cannot be defined together, choose one or the other.'].join(' '));
    }
  };
};
/**
 * Ensure a prop adherers to multiple prop type validators.
 * @param {function[]} validators An array of propType functions.
 */

var every = function every(validators) {
  return function (props, propName, componentName) {
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    if (!Array.isArray(validators)) {
      throw new Error(['Invalid argument supplied to every, expected an instance of array.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    var errors = [];
    validators.forEach(function (validator) {
      if (typeof validator !== 'function') {
        throw new Error("every() argument \"validators\" should contain functions, found: " + typeOf(validator) + ".");
      }

      var error = validator.apply(void 0, [props, propName, componentName].concat(rest));

      if (error) {
        errors.push(error);
      }
    }); // we can only return one error at a time

    return errors[0];
  };
};
/**
 * Ensure a validator passes only when a component has a given propsShape.
 * @param {object} propsShape An object describing the prop shape.
 * @param {function} validator A propType function.
 */

var givenProps = function givenProps(propsShape, validator) {
  return function (props, propName, componentName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    if (!(0,lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__["default"])(propsShape)) {
      throw new Error(['Invalid argument supplied to givenProps, expected an object.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    if (typeof validator !== 'function') {
      throw new Error(['Invalid argument supplied to givenProps, expected a function.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    var shouldValidate = (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__["default"])(propsShape).every(function (key) {
      var val = propsShape[key]; // require propShape validators to pass or prop values to match

      return typeof val === 'function' ? !val.apply(void 0, [props, key, componentName].concat(rest)) : val === props[propName];
    });

    if (!shouldValidate) return;
    var error = validator.apply(void 0, [props, propName, componentName].concat(rest));

    if (error) {
      // poor mans shallow pretty print, prevents JSON circular reference errors
      var prettyProps = "{ " + (0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__["default"])((0,lodash_es_pick__WEBPACK_IMPORTED_MODULE_10__["default"])((0,lodash_es_keys__WEBPACK_IMPORTED_MODULE_9__["default"])(propsShape), props)).map(function (key) {
        var val = props[key];
        var renderedValue = val;
        if (typeof val === 'string') renderedValue = "\"" + val + "\"";else if (Array.isArray(val)) renderedValue = "[" + val.join(', ') + "]";else if ((0,lodash_es_isObject__WEBPACK_IMPORTED_MODULE_11__["default"])(val)) renderedValue = '{...}';
        return key + ": " + renderedValue;
      }).join(', ') + " }";
      error.message = "Given props " + prettyProps + ": " + error.message;
      return error;
    }
  };
};
/**
 * Define prop dependencies by requiring other props.
 * @param {string[]} requiredProps An array of required prop names.
 */

var demand = function demand(requiredProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(requiredProps)) {
      throw new Error(['Invalid `requiredProps` argument supplied to require, expected an instance of array.', " See `" + propName + "` prop in `" + componentName + "`."].join(''));
    } // skip if prop is undefined


    if (props[propName] === undefined) return;
    var missingRequired = requiredProps.filter(function (requiredProp) {
      return props[requiredProp] === undefined;
    });

    if (missingRequired.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` requires props: `" + missingRequired.join('`, `') + "`.");
    }
  };
};
/**
 * Ensure an multiple prop contains a string with only possible values.
 * @param {string[]} possible An array of possible values to prop.
 */

var multipleProp = function multipleProp(possible) {
  return function (props, propName, componentName) {
    if (!Array.isArray(possible)) {
      throw new Error(['Invalid argument supplied to some, expected an instance of array.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    }

    var propValue = props[propName]; // skip if prop is undefined

    if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_7__["default"])(propValue) || propValue === false) return;
    var values = propValue.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (val) {
      return (0,lodash_es_trim__WEBPACK_IMPORTED_MODULE_12__["default"])(val).replace('-', ' ');
    });

    var invalid = (0,lodash_es_difference__WEBPACK_IMPORTED_MODULE_13__["default"])(values, possible); // fail only if there are invalid values


    if (invalid.length > 0) {
      return new Error("`" + propName + "` prop in `" + componentName + "` has invalid values: `" + invalid.join('`, `') + "`.");
    }
  };
};
/**
 * Ensure a component can render as a node passed as a prop value in place of children.
 */

var contentShorthand = function contentShorthand() {
  return every([disallow(['children']), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node)]).apply(void 0, arguments);
};
/**
 * Item shorthand is a description of a component that can be a literal,
 * a props object, or an element.
 */

var itemShorthand = function itemShorthand() {
  return every([disallow(['children']), prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)]))])]).apply(void 0, arguments);
};
/**
 * Collection shorthand ensures a prop is an array of item shorthand.
 */

var collectionShorthand = function collectionShorthand() {
  return every([disallow(['children']), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(itemShorthand)]).apply(void 0, arguments);
};
/**
 * Show a deprecated warning for component props with a help message and optional validator.
 * @param {string} help A help message to display with the deprecation warning.
 * @param {function} [validator] A propType function.
 */

var deprecate = function deprecate(help, validator) {
  return function (props, propName, componentName) {
    if (typeof help !== 'string') {
      throw new Error(['Invalid `help` argument supplied to deprecate, expected a string.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
    } // skip if prop is undefined


    if (props[propName] === undefined) return; // deprecation error and help

    var error = new Error("The `" + propName + "` prop in `" + componentName + "` is deprecated.");
    if (help) error.message += " " + help; // add optional validation error message

    if (validator) {
      if (typeof validator === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          args[_key3 - 3] = arguments[_key3];
        }

        var validationError = validator.apply(void 0, [props, propName, componentName].concat(args));

        if (validationError) {
          error.message = error.message + " " + validationError.message;
        }
      } else {
        throw new Error(['Invalid argument supplied to deprecate, expected a function.', "See `" + propName + "` prop in `" + componentName + "`."].join(' '));
      }
    }

    return error;
  };
};
/** A checker that matches the React.RefObject type. */

var refObject = prop_types__WEBPACK_IMPORTED_MODULE_14___default().shape({
  current: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)
});
/** A checker that matches the React.Ref type. */

var ref = prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().func), refObject]);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/factories.js":
/*!*****************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/factories.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHTMLDivision": () => (/* binding */ createHTMLDivision),
/* harmony export */   "createHTMLIframe": () => (/* binding */ createHTMLIframe),
/* harmony export */   "createHTMLImage": () => (/* binding */ createHTMLImage),
/* harmony export */   "createHTMLInput": () => (/* binding */ createHTMLInput),
/* harmony export */   "createHTMLLabel": () => (/* binding */ createHTMLLabel),
/* harmony export */   "createHTMLParagraph": () => (/* binding */ createHTMLParagraph),
/* harmony export */   "createShorthand": () => (/* binding */ createShorthand),
/* harmony export */   "createShorthandFactory": () => (/* binding */ createShorthandFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_es_uniq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es/uniq */ "./node_modules/lodash-es/uniq.js");
/* harmony import */ var lodash_es_isArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es/isArray */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/isFunction */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es/isNumber */ "./node_modules/lodash-es/isNumber.js");
/* harmony import */ var lodash_es_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/isString */ "./node_modules/lodash-es/isString.js");
/* harmony import */ var lodash_es_isBoolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/isBoolean */ "./node_modules/lodash-es/isBoolean.js");
/* harmony import */ var lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isNil */ "./node_modules/lodash-es/isNil.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");











var DEPRECATED_CALLS = {}; // ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */

function createShorthand(Component, mapValueToProps, val, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__["default"])(val) || (0,lodash_es_isBoolean__WEBPACK_IMPORTED_MODULE_4__["default"])(val)) {
    return null;
  }

  var valIsString = (0,lodash_es_isString__WEBPACK_IMPORTED_MODULE_5__["default"])(val);

  var valIsNumber = (0,lodash_es_isNumber__WEBPACK_IMPORTED_MODULE_6__["default"])(val);

  var valIsFunction = (0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(val);

  var valIsReactElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(val);

  var valIsPropsObject = (0,lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_8__["default"])(val);

  var valIsPrimitiveValue = valIsString || valIsNumber || (0,lodash_es_isArray__WEBPACK_IMPORTED_MODULE_9__["default"])(val); // unhandled type return null

  /* eslint-disable no-console */


  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (true) {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement|function.', ' Use null|undefined|boolean for none', " Received " + typeof val + "."].join(''));
    }

    return null;
  }
  /* eslint-enable no-console */
  // ----------------------------------------
  // Build up props
  // ----------------------------------------


  var _options = options,
      _options$defaultProps = _options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

  var _options2 = options,
      _options2$overridePro = _options2.overrideProps,
      overrideProps = _options2$overridePro === void 0 ? {} : _options2$overridePro;
  overrideProps = (0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_7__["default"])(overrideProps) ? overrideProps((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, usersProps, overrideProps); // Merge className


  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = (0,lodash_es_uniq__WEBPACK_IMPORTED_MODULE_10__["default"])(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if ((0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__["default"])(props.key)) {
    var childKey = props.childKey;
    var _options3 = options,
        _options3$autoGenerat = _options3.autoGenerateKey,
        autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;

    if (!(0,lodash_es_isNil__WEBPACK_IMPORTED_MODULE_3__["default"])(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  } // ----------------------------------------
  // Create Element
  // ----------------------------------------
  // Clone ReactElements


  if (valIsReactElement) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(val, props);
  }

  if (typeof props.children === 'function') {
    return props.children(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      children: undefined
    }));
  } // Create ReactElements from built up props


  if (valIsPrimitiveValue || valIsPropsObject) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, props);
  } // Call functions with args similar to createElement()
  // TODO: V3 remove the implementation


  if (valIsFunction) {
    if (true) {
      if (!DEPRECATED_CALLS[Component]) {
        DEPRECATED_CALLS[Component] = true; // eslint-disable-next-line no-console

        console.warn("Warning: There is a deprecated shorthand function usage for \"" + Component + "\". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029");
      }
    }

    return val(Component, props, props.children);
  }
  /* eslint-enable react/prop-types */

} // ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */

function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================

var createHTMLDivision = /* #__PURE__ */createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
var createHTMLIframe = /* #__PURE__ */createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
var createHTMLImage = /* #__PURE__ */createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
var createHTMLInput = /* #__PURE__ */createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
var createHTMLLabel = /* #__PURE__ */createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
var createHTMLParagraph = /* #__PURE__ */createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/getElementType.js":
/*!**********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/getElementType.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props, getDefault) {
  var _Component$defaultPro = Component.defaultProps,
      defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro; // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultProps.as) return props.as; // ----------------------------------------
  // computed default element type

  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  } // ----------------------------------------
  // infer anchor links


  if (props.href) return 'a'; // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getElementType);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js":
/*!*************************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
var getUnhandledProps = function getUnhandledProps(Component, props) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  var _Component$handledPro = Component.handledProps,
      handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
  return Object.keys(props).reduce(function (acc, prop) {
    if (prop === 'childKey') return acc;
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUnhandledProps);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/leven.js":
/*!*************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/leven.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copy of sindre's leven, wrapped in dead code elimination for production
// https://github.com/sindresorhus/leven/blob/master/index.js

/* eslint-disable complexity, import/no-mutable-exports, no-multi-assign, no-nested-ternary, no-plusplus */
var leven = function leven() {
  return 0;
};

if (true) {
  var arr = [];
  var charCodeCache = [];

  leven = function leven(a, b) {
    if (a === b) return 0;
    var aLen = a.length;
    var bLen = b.length;
    if (aLen === 0) return bLen;
    if (bLen === 0) return aLen;
    var bCharCode;
    var ret;
    var tmp;
    var tmp2;
    var i = 0;
    var j = 0;

    while (i < aLen) {
      charCodeCache[i] = a.charCodeAt(i);
      arr[i] = ++i;
    }

    while (j < bLen) {
      bCharCode = b.charCodeAt(j);
      tmp = j++;
      ret = j;

      for (i = 0; i < aLen; i++) {
        tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
        tmp = arr[i];
        ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
      }
    }

    return ret;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leven);

/***/ }),

/***/ "./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js":
/*!********************************************************************!*\
  !*** ./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberToWord": () => (/* binding */ numberToWord),
/* harmony export */   "numberToWordMap": () => (/* binding */ numberToWordMap)
/* harmony export */ });
var numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen'
};
/**
 * Return the number word for numbers 1-16.
 * Returns strings or numbers as is if there is no corresponding word.
 * Returns an empty string if value is not a string or number.
 * @param {string|number} value The value to convert to a word.
 * @returns {string}
 */

function numberToWord(value) {
  var type = typeof value;

  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
}

/***/ }),

/***/ "./src/core/hardware/objects/base/BaseHardwareUI.scss":
/*!************************************************************!*\
  !*** ./src/core/hardware/objects/base/BaseHardwareUI.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BaseHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./BaseHardwareUI.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/BaseHardwareUI.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BaseHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BaseHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BaseHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_BaseHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/hardware/objects/base/DefaultHardwareUI.scss":
/*!***************************************************************!*\
  !*** ./src/core/hardware/objects/base/DefaultHardwareUI.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./DefaultHardwareUI.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/DefaultHardwareUI.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DefaultHardwareUI_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/core/hardware/objects/base/InvalidObject.scss":
/*!***********************************************************!*\
  !*** ./src/core/hardware/objects/base/InvalidObject.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./InvalidObject.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/core/hardware/objects/base/InvalidObject.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InvalidObject_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/lodash-es/_DataView.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);


/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Promise.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);


/***/ }),

/***/ "./node_modules/lodash-es/_Set.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);


/***/ }),

/***/ "./node_modules/lodash-es/_SetCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_SetCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ "./node_modules/lodash-es/_setCacheAdd.js");
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ "./node_modules/lodash-es/_setCacheHas.js");




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);


/***/ }),

/***/ "./node_modules/lodash-es/_WeakMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);


/***/ }),

/***/ "./node_modules/lodash-es/_apply.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_apply.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apply);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayFilter.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayIncludes.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayIncludes.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ "./node_modules/lodash-es/_baseIndexOf.js");


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, 0) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludes);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayIncludesWith.js":
/*!******************************************************!*\
  !*** ./node_modules/lodash-es/_arrayIncludesWith.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludesWith);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayPush.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);


/***/ }),

/***/ "./node_modules/lodash-es/_arraySome.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arraySome.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arraySome);


/***/ }),

/***/ "./node_modules/lodash-es/_asciiToArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_asciiToArray.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asciiToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_baseDifference.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseDifference.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_SetCache.js */ "./node_modules/lodash-es/_SetCache.js");
/* harmony import */ var _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayIncludes.js */ "./node_modules/lodash-es/_arrayIncludes.js");
/* harmony import */ var _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_arrayIncludesWith.js */ "./node_modules/lodash-es/_arrayIncludesWith.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cacheHas.js */ "./node_modules/lodash-es/_cacheHas.js");







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee));
  }
  if (comparator) {
    includes = _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    isCommon = false;
    values = new _SetCache_js__WEBPACK_IMPORTED_MODULE_5__["default"](values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseDifference);


/***/ }),

/***/ "./node_modules/lodash-es/_baseEach.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseEach.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseForOwn.js */ "./node_modules/lodash-es/_baseForOwn.js");
/* harmony import */ var _createBaseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseEach.js */ "./node_modules/lodash-es/_createBaseEach.js");



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = (0,_createBaseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseEach);


/***/ }),

/***/ "./node_modules/lodash-es/_baseExtremum.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseExtremum.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !(0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseExtremum);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFindIndex.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFindIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFlatten.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseFlatten.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isFlattenable.js */ "./node_modules/lodash-es/_isFlattenable.js");



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFlatten);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseFor.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseFor.js */ "./node_modules/lodash-es/_createBaseFor.js");


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = (0,_createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFor);


/***/ }),

/***/ "./node_modules/lodash-es/_baseForOwn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseForOwn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ "./node_modules/lodash-es/_baseFor.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, iteratee, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseForOwn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGet);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseHasIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseHasIn.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseHasIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIndexOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ "./node_modules/lodash-es/_baseFindIndex.js");
/* harmony import */ var _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsNaN.js */ "./node_modules/lodash-es/_baseIsNaN.js");
/* harmony import */ var _strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_strictIndexOf.js */ "./node_modules/lodash-es/_strictIndexOf.js");




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? (0,_strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, fromIndex)
    : (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"], fromIndex);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseInvoke.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseInvoke.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_apply.js */ "./node_modules/lodash-es/_apply.js");
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");
/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./last.js */ "./node_modules/lodash-es/last.js");
/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_parent.js */ "./node_modules/lodash-es/_parent.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");






/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  object = (0,_parent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path);
  var func = object == null ? object : object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_last_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path))];
  return func == null ? undefined : (0,_apply_js__WEBPACK_IMPORTED_MODULE_4__["default"])(func, object, args);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseInvoke);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsEqual.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqual.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ "./node_modules/lodash-es/_baseIsEqualDeep.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && !(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other))) {
    return value !== value && other !== other;
  }
  return (0,_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqual);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsEqualDeep.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ "./node_modules/lodash-es/_equalArrays.js");
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_equalByTag.js */ "./node_modules/lodash-es/_equalByTag.js");
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_equalObjects.js */ "./node_modules/lodash-es/_equalObjects.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
      othIsArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
      objTag = objIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      othTag = othIsArr ? arrayTag : (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) {
    if (!(0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    return (objIsArr || (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object))
      ? (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, other, bitmask, customizer, equalFunc, stack)
      : (0,_equalByTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return (0,_equalObjects_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsEqualDeep);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsMatch.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMatch.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/lodash-es/_baseIsEqual.js");



/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMatch);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNaN.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNaN.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNaN);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIteratee.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIteratee.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMatches_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMatches.js */ "./node_modules/lodash-es/_baseMatches.js");
/* harmony import */ var _baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMatchesProperty.js */ "./node_modules/lodash-es/_baseMatchesProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.js */ "./node_modules/lodash-es/property.js");






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if (typeof value == 'object') {
    return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
      ? (0,_baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value[0], value[1])
      : (0,_baseMatches_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value);
  }
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIteratee);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeys.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_baseLt.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_baseLt.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseLt);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseEach.js */ "./node_modules/lodash-es/_baseEach.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? Array(collection.length) : [];

  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMap);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMatches.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatches.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMatch.js */ "./node_modules/lodash-es/_baseIsMatch.js");
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMatchData.js */ "./node_modules/lodash-es/_getMatchData.js");
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ "./node_modules/lodash-es/_matchesStrictComparable.js");




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = (0,_getMatchData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || (0,_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, source, matchData);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatches);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMatchesProperty.js":
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/_baseMatchesProperty.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/lodash-es/_baseIsEqual.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get.js */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hasIn.js */ "./node_modules/lodash-es/hasIn.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ "./node_modules/lodash-es/_isStrictComparable.js");
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ "./node_modules/lodash-es/_matchesStrictComparable.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");








/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if ((0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) && (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue)) {
    return (0,_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path), srcValue);
  }
  return function(object) {
    var objValue = (0,_get_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, path)
      : (0,_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_6__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMatchesProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_baseOrderBy.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseOrderBy.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseMap.js */ "./node_modules/lodash-es/_baseMap.js");
/* harmony import */ var _baseSortBy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_baseSortBy.js */ "./node_modules/lodash-es/_baseSortBy.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _compareMultiple_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_compareMultiple.js */ "./node_modules/lodash-es/_compareMultiple.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function(iteratee) {
      if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
        return function(value) {
          return (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [_identity_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
  }

  var index = -1;
  iteratees = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_5__["default"]));

  var result = (0,_baseMap_js__WEBPACK_IMPORTED_MODULE_6__["default"])(collection, function(value, key, collection) {
    var criteria = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return (0,_baseSortBy_js__WEBPACK_IMPORTED_MODULE_7__["default"])(result, function(object, other) {
    return (0,_compareMultiple_js__WEBPACK_IMPORTED_MODULE_8__["default"])(object, other, orders);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseOrderBy);


/***/ }),

/***/ "./node_modules/lodash-es/_basePick.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_basePick.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basePickBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_basePickBy.js */ "./node_modules/lodash-es/_basePickBy.js");
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasIn.js */ "./node_modules/lodash-es/hasIn.js");



/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return (0,_basePickBy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, paths, function(value, path) {
    return (0,_hasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePick);


/***/ }),

/***/ "./node_modules/lodash-es/_basePickBy.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_basePickBy.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSet.js */ "./node_modules/lodash-es/_baseSet.js");
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");




/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);

    if (predicate(value, path)) {
      (0,_baseSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_castPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path, object), value);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePickBy);


/***/ }),

/***/ "./node_modules/lodash-es/_baseProperty.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseProperty.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_basePropertyDeep.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_basePropertyDeep.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basePropertyDeep);


/***/ }),

/***/ "./node_modules/lodash-es/_baseRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "./node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setToString.js */ "./node_modules/lodash-es/_setToString.js");




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"]), func + '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseRest);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");






/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return object;
  }
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = (0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue)
          ? objValue
          : ((0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path[index + 1]) ? [] : {});
      }
    }
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_4__["default"])(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSet);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSetToString.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseSetToString.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/lodash-es/constant.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(func, string) {
  return (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string),
    'writable': true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSetToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSlice.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseSlice.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSlice);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSome.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseSome.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ "./node_modules/lodash-es/_baseEach.js");


/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSome);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSortBy.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseSortBy.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSortBy);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSum.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseSum.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSum);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);


/***/ }),

/***/ "./node_modules/lodash-es/_baseToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTrim.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ "./node_modules/lodash-es/_trimmedEndIndex.js");


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUniq.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseUniq.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_SetCache.js */ "./node_modules/lodash-es/_SetCache.js");
/* harmony import */ var _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayIncludes.js */ "./node_modules/lodash-es/_arrayIncludes.js");
/* harmony import */ var _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayIncludesWith.js */ "./node_modules/lodash-es/_arrayIncludesWith.js");
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cacheHas.js */ "./node_modules/lodash-es/_cacheHas.js");
/* harmony import */ var _createSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createSet.js */ "./node_modules/lodash-es/_createSet.js");
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setToArray.js */ "./node_modules/lodash-es/_setToArray.js");







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : (0,_createSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
    if (set) {
      return (0,_setToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(set);
    }
    isCommon = false;
    includes = _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    seen = new _SetCache_js__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUniq);


/***/ }),

/***/ "./node_modules/lodash-es/_baseValues.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseValues.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props, function(key) {
    return object[key];
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseValues);


/***/ }),

/***/ "./node_modules/lodash-es/_cacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cacheHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_castPath.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_castPath.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ "./node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : (0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castPath);


/***/ }),

/***/ "./node_modules/lodash-es/_castSlice.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_castSlice.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/lodash-es/_baseSlice.js");


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : (0,_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, start, end);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castSlice);


/***/ }),

/***/ "./node_modules/lodash-es/_charsEndIndex.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_charsEndIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ "./node_modules/lodash-es/_baseIndexOf.js");


/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (charsEndIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_charsStartIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_charsStartIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ "./node_modules/lodash-es/_baseIndexOf.js");


/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (charsStartIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_compareAscending.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_compareAscending.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAscending);


/***/ }),

/***/ "./node_modules/lodash-es/_compareMultiple.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_compareMultiple.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compareAscending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_compareAscending.js */ "./node_modules/lodash-es/_compareAscending.js");


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = (0,_compareAscending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareMultiple);


/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]["__core-js_shared__"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ "./node_modules/lodash-es/_createBaseEach.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseEach.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseEach);


/***/ }),

/***/ "./node_modules/lodash-es/_createBaseFor.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseFor.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseFor);


/***/ }),

/***/ "./node_modules/lodash-es/_createFind.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_createFind.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");




/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection)) {
      var iteratee = (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(predicate, 3);
      collection = (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFind);


/***/ }),

/***/ "./node_modules/lodash-es/_createSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_createSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop.js */ "./node_modules/lodash-es/noop.js");
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setToArray.js */ "./node_modules/lodash-es/_setToArray.js");




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set_js__WEBPACK_IMPORTED_MODULE_0__["default"] && (1 / (0,_setToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new _Set_js__WEBPACK_IMPORTED_MODULE_0__["default"]([,-0]))[1]) == INFINITY) ? _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"] : function(values) {
  return new _Set_js__WEBPACK_IMPORTED_MODULE_0__["default"](values);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSet);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_equalArrays.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_equalArrays.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ "./node_modules/lodash-es/_SetCache.js");
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ "./node_modules/lodash-es/_arraySome.js");
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ "./node_modules/lodash-es/_cacheHas.js");




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!(0,_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function(othValue, othIndex) {
            if (!(0,_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalArrays);


/***/ }),

/***/ "./node_modules/lodash-es/_equalByTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_equalByTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_equalArrays.js */ "./node_modules/lodash-es/_equalArrays.js");
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapToArray.js */ "./node_modules/lodash-es/_mapToArray.js");
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_setToArray.js */ "./node_modules/lodash-es/_setToArray.js");







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"];

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = (0,_equalArrays_js__WEBPACK_IMPORTED_MODULE_5__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalByTag);


/***/ }),

/***/ "./node_modules/lodash-es/_equalObjects.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_equalObjects.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/lodash-es/_getAllKeys.js");


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
      objLength = objProps.length,
      othProps = (0,_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equalObjects);


/***/ }),

/***/ "./node_modules/lodash-es/_flatRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_flatRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flatten.js */ "./node_modules/lodash-es/flatten.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "./node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setToString.js */ "./node_modules/lodash-es/_setToString.js");




/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, undefined, _flatten_js__WEBPACK_IMPORTED_MODULE_2__["default"]), func + '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatRest);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ "./node_modules/lodash-es/_getMatchData.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getMatchData.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isStrictComparable.js */ "./node_modules/lodash-es/_isStrictComparable.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = (0,_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, (0,_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)];
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMatchData);


/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getSymbols.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);


/***/ }),

/***/ "./node_modules/lodash-es/_getTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ "./node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ "./node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ "./node_modules/lodash-es/_hasPath.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hasPath.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = (0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, length) &&
    ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasPath);


/***/ }),

/***/ "./node_modules/lodash-es/_hasUnicode.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hasUnicode.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasUnicode);


/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ "./node_modules/lodash-es/_isFlattenable.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_isFlattenable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");




/** Built-in value references. */
var spreadableSymbol = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFlattenable);


/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_isIterateeCall.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_isIterateeCall.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,_eq_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object[index], value);
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIterateeCall);


/***/ }),

/***/ "./node_modules/lodash-es/_isKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_isKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKey);


/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_isStrictComparable.js":
/*!*******************************************************!*\
  !*** ./node_modules/lodash-es/_isStrictComparable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isStrictComparable);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_matchesStrictComparable.js":
/*!************************************************************!*\
  !*** ./node_modules/lodash-es/_matchesStrictComparable.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matchesStrictComparable);


/***/ }),

/***/ "./node_modules/lodash-es/_memoizeCapped.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_overRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_overRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply.js */ "./node_modules/lodash-es/_apply.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return (0,_apply_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overRest);


/***/ }),

/***/ "./node_modules/lodash-es/_parent.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_parent.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/lodash-es/_baseSlice.js");



/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, (0,_baseSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path, 0, -1));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parent);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_setCacheAdd.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheAdd.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheAdd);


/***/ }),

/***/ "./node_modules/lodash-es/_setCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_setToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_setToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setToString.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSetToString.js */ "./node_modules/lodash-es/_baseSetToString.js");
/* harmony import */ var _shortOut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shortOut.js */ "./node_modules/lodash-es/_shortOut.js");



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = (0,_shortOut_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToString);


/***/ }),

/***/ "./node_modules/lodash-es/_shortOut.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_shortOut.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortOut);


/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);


/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);


/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);


/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);


/***/ }),

/***/ "./node_modules/lodash-es/_strictIndexOf.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_strictIndexOf.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strictIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_stringToArray.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asciiToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_asciiToArray.js */ "./node_modules/lodash-es/_asciiToArray.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _unicodeToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_unicodeToArray.js */ "./node_modules/lodash-es/_unicodeToArray.js");




/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return (0,_hasUnicode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string)
    ? (0,_unicodeToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
    : (0,_asciiToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToPath.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "./node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0,_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);


/***/ }),

/***/ "./node_modules/lodash-es/_toKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);


/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ "./node_modules/lodash-es/_trimmedEndIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_unicodeToArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_unicodeToArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unicodeToArray);


/***/ }),

/***/ "./node_modules/lodash-es/constant.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/constant.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constant);


/***/ }),

/***/ "./node_modules/lodash-es/difference.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/difference.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseDifference.js */ "./node_modules/lodash-es/_baseDifference.js");
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseFlatten.js */ "./node_modules/lodash-es/_baseFlatten.js");
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLikeObject.js */ "./node_modules/lodash-es/isArrayLikeObject.js");





/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, values) {
  return (0,_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array)
    ? (0,_baseDifference_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 1, _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_1__["default"], true))
    : [];
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (difference);


/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ "./node_modules/lodash-es/find.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/find.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createFind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createFind.js */ "./node_modules/lodash-es/_createFind.js");
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findIndex.js */ "./node_modules/lodash-es/findIndex.js");



/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = (0,_createFind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_findIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (find);


/***/ }),

/***/ "./node_modules/lodash-es/findIndex.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/findIndex.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ "./node_modules/lodash-es/_baseFindIndex.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/lodash-es/toInteger.js");




/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(predicate, 3), index);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findIndex);


/***/ }),

/***/ "./node_modules/lodash-es/flatten.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/flatten.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFlatten.js */ "./node_modules/lodash-es/_baseFlatten.js");


/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, 1) : [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatten);


/***/ }),

/***/ "./node_modules/lodash-es/get.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/get.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);


/***/ }),

/***/ "./node_modules/lodash-es/hasIn.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/hasIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseHasIn.js */ "./node_modules/lodash-es/_baseHasIn.js");
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hasPath.js */ "./node_modules/lodash-es/_hasPath.js");



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && (0,_hasPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, _baseHasIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasIn);


/***/ }),

/***/ "./node_modules/lodash-es/identity.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/identity.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identity);


/***/ }),

/***/ "./node_modules/lodash-es/invoke.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/invoke.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseInvoke_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseInvoke.js */ "./node_modules/lodash-es/_baseInvoke.js");
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/lodash-es/_baseRest.js");



/**
 * Invokes the method at `path` of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 *
 * _.invoke(object, 'a[0].b.c.slice', 1, 3);
 * // => [2, 3]
 */
var invoke = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseInvoke_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invoke);


/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/isArrayLikeObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLikeObject);


/***/ }),

/***/ "./node_modules/lodash-es/isBoolean.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/isBoolean.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == boolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBoolean);


/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);


/***/ }),

/***/ "./node_modules/lodash-es/isNil.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isNil.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNil);


/***/ }),

/***/ "./node_modules/lodash-es/isNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == numberTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNumber);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);


/***/ }),

/***/ "./node_modules/lodash-es/isString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) == stringTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isString);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/keys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);


/***/ }),

/***/ "./node_modules/lodash-es/last.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/last.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (last);


/***/ }),

/***/ "./node_modules/lodash-es/map.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/map.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMap.js */ "./node_modules/lodash-es/_baseMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 3));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);


/***/ }),

/***/ "./node_modules/lodash-es/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/lodash-es/min.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/min.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseExtremum.js */ "./node_modules/lodash-es/_baseExtremum.js");
/* harmony import */ var _baseLt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseLt.js */ "./node_modules/lodash-es/_baseLt.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");




/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? (0,_baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"], _baseLt_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (min);


/***/ }),

/***/ "./node_modules/lodash-es/noop.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/noop.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);


/***/ }),

/***/ "./node_modules/lodash-es/pick.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/pick.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basePick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_basePick.js */ "./node_modules/lodash-es/_basePick.js");
/* harmony import */ var _flatRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_flatRest.js */ "./node_modules/lodash-es/_flatRest.js");



/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = (0,_flatRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, paths) {
  return object == null ? {} : (0,_basePick_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, paths);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pick);


/***/ }),

/***/ "./node_modules/lodash-es/property.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/property.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseProperty.js */ "./node_modules/lodash-es/_baseProperty.js");
/* harmony import */ var _basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_basePropertyDeep.js */ "./node_modules/lodash-es/_basePropertyDeep.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path) ? (0,_baseProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_toKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path)) : (0,_basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);


/***/ }),

/***/ "./node_modules/lodash-es/some.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/some.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ "./node_modules/lodash-es/_arraySome.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _baseSome_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseSome.js */ "./node_modules/lodash-es/_baseSome.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/lodash-es/_isIterateeCall.js");






/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseSome_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (guard && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_4__["default"])(predicate, 3));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (some);


/***/ }),

/***/ "./node_modules/lodash-es/sortBy.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/sortBy.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseFlatten.js */ "./node_modules/lodash-es/_baseFlatten.js");
/* harmony import */ var _baseOrderBy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseOrderBy.js */ "./node_modules/lodash-es/_baseOrderBy.js");
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/lodash-es/_isIterateeCall.js");





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return (0,_baseOrderBy_js__WEBPACK_IMPORTED_MODULE_2__["default"])(collection, (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratees, 1), []);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortBy);


/***/ }),

/***/ "./node_modules/lodash-es/stubArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);


/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);


/***/ }),

/***/ "./node_modules/lodash-es/sum.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/sum.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSum.js */ "./node_modules/lodash-es/_baseSum.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");



/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return (array && array.length)
    ? (0,_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"])
    : 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);


/***/ }),

/***/ "./node_modules/lodash-es/take.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/take.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/lodash-es/_baseSlice.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/lodash-es/toInteger.js");



/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n);
  return (0,_baseSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, 0, n < 0 ? 0 : n);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (take);


/***/ }),

/***/ "./node_modules/lodash-es/toFinite.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toFinite.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFinite);


/***/ }),

/***/ "./node_modules/lodash-es/toInteger.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/toInteger.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ "./node_modules/lodash-es/toFinite.js");


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = (0,_toFinite_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toInteger);


/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ "./node_modules/lodash-es/_baseTrim.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ }),

/***/ "./node_modules/lodash-es/toString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);


/***/ }),

/***/ "./node_modules/lodash-es/trim.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/trim.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseTrim.js */ "./node_modules/lodash-es/_baseTrim.js");
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _charsEndIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_charsEndIndex.js */ "./node_modules/lodash-es/_charsEndIndex.js");
/* harmony import */ var _charsStartIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_charsStartIndex.js */ "./node_modules/lodash-es/_charsStartIndex.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");








/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = (0,_toString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
  if (string && (guard || chars === undefined)) {
    return (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string);
  }
  if (!string || !(chars = (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(chars))) {
    return string;
  }
  var strSymbols = (0,_stringToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string),
      chrSymbols = (0,_stringToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(chars),
      start = (0,_charsStartIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"])(strSymbols, chrSymbols),
      end = (0,_charsEndIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(strSymbols, chrSymbols) + 1;

  return (0,_castSlice_js__WEBPACK_IMPORTED_MODULE_6__["default"])(strSymbols, start, end).join('');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trim);


/***/ }),

/***/ "./node_modules/lodash-es/uniq.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/uniq.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseUniq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseUniq.js */ "./node_modules/lodash-es/_baseUniq.js");


/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? (0,_baseUniq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array) : [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uniq);


/***/ }),

/***/ "./node_modules/lodash-es/values.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/values.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseValues.js */ "./node_modules/lodash-es/_baseValues.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : (0,_baseValues_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (values);


/***/ }),

/***/ "./node_modules/lodash-es/without.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/without.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseDifference.js */ "./node_modules/lodash-es/_baseDifference.js");
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLikeObject.js */ "./node_modules/lodash-es/isArrayLikeObject.js");




/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(array, values) {
  return (0,_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array)
    ? (0,_baseDifference_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array, values)
    : [];
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (without);


/***/ })

};
//# sourceMappingURL=594abc915cb80f87016b.worklet.js.map