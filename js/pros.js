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
usage "pros.syntax(data)"
*/

var pros=function(){
this.prototype = {

 getid: function(name, data){
/* var name = document.getElementById("data") */
return eval("var" + name+"=document.getElementById("+data+")");
},
  getclass: function(name, data){
/* var name = document.getElementByclass("data") */
return eval("var" + name+"=document.getElementByClass("+data+")");
},
 getname: function(name, data){
/* var name = document.getElementBybname("data") */
return eval("var" + name+"=document.getElementByName("+data+")");
},
 loop: function(times, func, arg){
for(var i=0; i=times; ++i){
if(arg == null || arg == undefined || arg == ""){
return eval(func+"()");
}else{
return eval(func+"("+arg+")");
  }
 }
},
 click: function (elem, func, arg){
elem.onclick=function(){
if(arg == null || arg == undefined || arg ==""){
return eval(func+"()");
}else{
return eval(func+"("+arg+")");
  }
 }
},
 change: function (elem, func, arg){
elem.addEventlistener("change",(event)=>{
if(arg == null || arg == undefined || arg ==""){
eval(func+"()");
}else{
eval(func+"("+arg+")");
  }
 });
},
 keyup: function (ele, func, data){
ele.addEventlistener("keyup", event=>{
if(event.isComposing){
if(data == null || data == undefined || data==""){
return eval(func+"()");
}else{
return eval(func+"("+data+")");
   }
  }
 });
},
 inhtml: function(data, text){
return data.innerHTML = text;
},
 newobj: function(name, data){
return eval("var "+name+"={"+data+"}");
},
 addobj: function(name, data){
return eval(name+".push("+data+")");
},
 newlist: function(name, data){
return eval("var "+name+"=["+data+"];");
},
 addlist: function(name, data){
return eval(name+".push("+data+")");
},
 margevar: function(name, var1, var2){
return eval("var "+name+"="+var1+"+"+var2);
  }
 }
}

/*node exports*/

 exports.getid = function(data1, data2){
pros.getid(data1, data2);
}
 exports.getclass = function(data1, data2){
pros.getclass(data1, data2);
}
 exports.getname = function(data1, data2){
pros.getname(data1, data2);
}
 exports.loop = function(data1, data2, data3){
pros.loop(data1, data2, data3);
}
exports.click = function(data1, data2 ,data3){
pros.click(data1, data2, data3);
}
exports.change = function(data1, data2 ,data3){
pros.change(data1, data2, data3);
}
 exports.keyup = function(data1, data2, data3){
pros.keyup(data1, data2, data3);
}
exports.inhtm = function(data1, data2){
pros.inhtml(data1, data2);
}
exports.newobj = function(data1, data2){
pros.newobj(data1, data2);
}
exports.addobj = function(data1, data2){
pros.addobj(data1, data2);
}
exports.newlist = function(data1, data2){
pros.newlist(data1, data2);
}
exports.addlist = function(data1, data2){
pros.addlist(data1, data2);
}
exports.margevar = function(data1, data2 ,data3){ 
pros.margevar(data1, data2, data3);
}