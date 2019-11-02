var html = window.document;
var gebi = function(name, data){ 
eval("var" + name+"=document.getElementById("+data+")");
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
var che = function (ele, func, data){
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