/*MIT License

Copyright (c) 2019 gutsmine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

/*pros prototype
usage "pros(data).property"
*/

class pros {
  static doc() {
    return document;
  }
  static win() {
    return window;
  }
  static getid(data) {
    return document.getElementById(data);
  }
  static getclass(data) {
    return document.getElementByclass(data);
  }
  static getname(data) {
    document.getElementByname(data);
  }
  static loop(times, func, arg) {
    for (var i = 0; (i = times); ++i) {
      if (arg === null || typeof arg === undefined || arg === "") {
        func();
      } else {
        func(arg);
      }
    }
  }
  static click(elem, func, arg) {
    elem.onclick = function() {
      if (arg === null || typeof arg === undefined || arg === "") {
        func();
      } else {
        func(arg);
      }
    };
  }
  static change(elem, func, arg) {
    elem.addEventlistener("change", function() {
      if (arg === null || typeof arg === undefined || arg === "") {
        func();
      } else {
        func(arg);
      }
    });
  }
  static keyup(elem, func, arg) {
    elem.addEventlistener("keyup", event => {
      if (event.isComposing) {
        if (arg === null || typeof arg === undefined || arg === "") {
          func();
        } else {
          func(arg);
        }
      }
    });
  }
  static inhtml(data, text) {
    data.innerHTML = text;
  }
  static newobj(data) {
    return { data };
  }
  static addvar(data) {
    return name.push(data);
  }
  static newlist(data) {
    return [data];
  }
  static margevar(var1, var2) {
    return var1 + var2;
  }
  static getvalue(data, type) {
    if (type == "id") {
      return document.getElementById(data).value;
    } else if (type == "class") {
      return document.getElementsByClassName(data).value;
    } else if (type == "name") {
      return document.getElementsByName(data).value;
    }
  }
}
class ps extends pros {}
module.exports = {
  pros: new pros(),
  ps: new ps()
};
