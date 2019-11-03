pros.exports = (function() {
var pros = function(){


   this.html = window.document;
this.getid = function(name, data){

eval("var" + name+"=document.getElementById("+data+")");
}
this.getclass = function(name, data){
eval("var" + name+"=document.getElementByClass("+data+")");
this.getidval = function(name,data){
eval("var" + name+"=document.getElementById("+data+").value");
}
this.getname = function(name, data){

eval("var" + name+"=document.getElementByName("+data+")");
this.getclassval = function(name, datae){
eval("var" + name+"=document.getElementByClass("+data+").value");
}
this.getnamevalue = function(name, data){
eval("var" + name+"=document.getElementByName("+data+").value");
}
this.loop = function(times, func, arg){
for(var i=0; i=times; ++i){
if(arg == null || arg == undefined || arg == ""){
eval(func+"()");
}else{
eval(func+"("+arg+")");
  }
 }
}
this.cli = function (elem, func, arg){
elem.onclick=function(){
if(arg == null || arg == undefined || arg ==""){
eval(func+"()");
}else{
eval(func+"("+arg+")");
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
this.kup = function (ele, func, data){
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
this.inhtm = function(data, text){
data.innerHTML = text;
}
this.newobj = function(name, data){
eval("var "+name+"={"+data+"}");
}
this.addobj = function(name, data){
eval(name+".push("+data+")");
}
this.newlist = function(name, data){
eval("var "+name+"=["+data+"];");
}
this.addlist = function(name, data){
eval(name+".push("+data+")");
}
this.margevar = function(name, var1, var2){
eval("var "+name+"="+var1+"+"+var2);
  }
 }
});
