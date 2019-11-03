module.exports = (function() {
var datas = function(data1, data2){
this.name = data1;
this.data = data2;
this.prototype.get = function(){
  return this.name;
  return this.data;
};
var pros = function(data1, data2, data3){


var html = window.document;
var getid = function(){
new datas(data1, data2);
eval("var" + datas.name+"=document.getElementById("+datas.data+")");
};
var getclass = function(){
new datas(data1, data2);
eval("var" + datas.name+"=document.getElementByClass("+datas.data+")");
};
var getidval = function(){
new datas(data1, data2);
eval("var" + datas.name+"=document.getElementById("+datas.data+").value");
};
var getname = function(){
new datas(data1, data2);
eval("var" + datas.name+"=document.getElementByName("+datas.data+")");
var getclassval = function(){
new datas(data1, data2);
eval("var" + datas.name+"=document.getElementByClass("+datas.data+").value");
};
var getnamevalue = function(){
new datas(data1, data2);
eval("var" + datas.name+"=document.getElementByName("+datas.data+").value");{ 
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
window.pros = window.# = pros;
};
