var html = window.document;
var getid = function(name, data){ 
eval("var" + name+"=document.getElementById("+data+")");
};
var getclass = function(name, data){ 
eval("var" + name+"=document.getElementByClass("+data+")");
};
var getidval = function(name, data){ 
eval("var" + name+"=document.getElementById("+data+").value");
};
var getname = function(name, data){ 
eval("var" + name+"=document.getElementByName("+data+")");
};
var getclassval = function(name, data){ 
eval("var" + name+"=document.getElementByClass("+data+").value");
};
var getnamevalue = function(name, data){ 
eval("var" + name+"=document.getElementByName("+data+").value");
};
var loop = function(times, func){
for(var i=0; i=times; ++i){
eval(func+"()");
}
};
var cli = (function (ele, func, data){
ele.onclick=function(){
if(data == null || data == undefined || data==""){
eval(func+"("+data+")");
}else{
eval(func+"()");
}
}
});
var cha = function (ele, func, data){
data.addEventlistener("change",(event)=>{
if(data == null || data == undefined || data==""){
eval(func+"()");
}else{
eval(func+"("+data+")")
}
});
};
var kup = function (ele, func, data){
ele.addEventlistener("keyup", event=>{

if(event.isComposing){
if(data == null || data == undefined || data==""){
eval(func+"()");
}else{
eval(func+"("+data+")");
  }
 }
});
}
var inhtm = function(data, text){
data.innerHTML = text;
};
var newobj = function(name, data){
eval("var "+name+"={"+data+"}");
};
var addobj = function(name, data){
eval(name+".push("+data+")");
};
var newlist = function(name, data){
eval("var "+name+"=["+data+"];");
};
var addlist = function(name, data){
eval(name+".push("+data+")")
};
var margevar = function(name, var1, var2){
eval("var "+name+"="+var1+"+"+var2);
};
