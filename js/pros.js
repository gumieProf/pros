﻿exports.getid = function(name, data){
return eval("var" + name+"=document.getElementById("+data+")");
}
exports.getclass = function(name, data){
return eval("var" + name+"=document.getElementByClass("+data+")");
exports.getidval = function(name,data){
return eval("var" + name+"=document.getElementById("+data+").value");
}
exports.getname = function(name, data){
return eval("var" + name+"=document.getElementByName("+data+")");
}
exports.getclassval = function(name, datae){
return eval("var" + name+"=document.getElementByClass("+data+").value");
}
exports.getnamevalue = function(name, data){
return eval("var" + name+"=document.getElementByName("+data+").value");
}
exports.loop = function(times, func, arg){
for(var i=0; i=times; ++i){
if(arg == null || arg == undefined || arg == ""){
return eval(func+"()");
}else{
return eval(func+"("+arg+")");
  }
 }
}
exports.cli = function (elem, func, arg){
elem.onclick=function(){
if(arg == null || arg == undefined || arg ==""){
return eval(func+"()");
}else{
return eval(func+"("+arg+")");
  }
 }
}
this.cha = function (elem, func, arg){
elem.addEventlistener("change",(event)=>{
if(arg == null || arg == undefined || arg ==""){
eval(func+"()");
}else{
eval(func+"("+arg+")");
  }
 });
}
exports.kup = function (ele, func, data){
ele.addEventlistener("keyup", event=>{
if(event.isComposing){
if(data == null || data == undefined || data==""){
return eval(func+"()");
}else{
return eval(func+"("+data+")");
   }
  }
 });
}
exports.inhtm = function(data, text){
return data.innerHTML = text;
}
exports.newobj = function(name, data){
return eval("var "+name+"={"+data+"}");
}
exports.addobj = function(name, data){
return eval(name+".push("+data+")");
}
exports.newlist = function(name, data){
return eval("var "+name+"=["+data+"];");
}
exports.addlist = function(name, data){
return eval(name+".push("+data+")");
}
exports.margevar = function(name, var1, var2){
return eval("var "+name+"="+var1+"+"+var2);
 }
