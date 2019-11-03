module.exports = (function(data1, data2, data3) {
var html = window.document;
var getid = eval("var" + data1+"=document.getElementById("+data2+")");
var getclass = eval("var" + data1+"=document.getElementByClass("+data2+")");
var getidval = eval("var" + data1+"=document.getElementById("+data2+").value");
var getname = eval("var" + data1+"=document.getElementByName("+data2+")");
var getclassval = eval("var" + data1+"=document.getElementByClass("+data2+").value");
var getnamevalue = function(name, data){ 
eval("var" + name+"=document.getElementByName("+data+").value");
};
var loop = function(){
for(var i=0; i=data1; ++i){
if(data3 == null || data3 == undefined || data3 == ""){
eval(data2+"()");
}else{
eval(data2+"("+data3+")");
}
}
};
var cli = function (){
data1.onclick=function(){
if(data3 == null || data3 == undefined || data3 ==""){
eval(data2+"()");
}else{
eval(data2+"("+data3+")");
}
}
};
var cha = function (){
data1.addEventlistener("change",(event)=>{
if(data3 == null || data3 == undefined || data3 ==""){
eval(data2+"()");
}else{
eval(data2+"("+data3+")")
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
};