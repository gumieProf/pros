var pros = (){
 :getid = function(name, data){
return eval("var" + name+"=document.getElementById("+data+")");
}
 :getclass = function(name, data){
return eval("var" + name+"=document.getElementByClass("+data+")");
};
 :getname = function(name, data){
return eval("var" + name+"=document.getElementByName("+data+")");
};
 :loop = function(times, func, arg){
for(var i=0; i=times; ++i){
if(arg == null || arg == undefined || arg == ""){
return eval(func+"()");
}else{
return eval(func+"("+arg+")");
  }
 }
 :click = function (elem, func, arg){
elem.onclick=function(){
if(arg == null || arg == undefined || arg ==""){
return eval(func+"()");
}else{
return eval(func+"("+arg+")");
  }
 }
 :change = function (elem, func, arg){
elem.addEventlistener("change",(event)=>{
if(arg == null || arg == undefined || arg ==""){
eval(func+"()");
}else{
eval(func+"("+arg+")");
  }
 });
 :keyup = function (ele, func, data){
ele.addEventlistener("keyup", event=>{
if(event.isComposing){
if(data == null || data == undefined || data==""){
return eval(func+"()");
}else{
return eval(func+"("+data+")");
   }
  }
 });
 :inhtm = function(data, text){
return data.innerHTML = text;
};
 :newobj = function(name, data){
return eval("var "+name+"={"+data+"}");
};
 :addobj = function(name, data){
return eval(name+".push("+data+")");
};
 :newlist = function(name, data){
return eval("var "+name+"=["+data+"];");
};
 :addlist = function(name, data){
return eval(name+".push("+data+")");
 :margevar = function(name, var1, var2){
return eval("var "+name+"="+var1+"+"+var2);
 };
};

 exports.getid = function(name, data){
new pros();
return pros.getid(name, data);
};
 exports.getclass = function(name, data){
new pros();
return pros.getclass(name, data);};
 exports.getname = function(name, data){
new pros();
return pros.getname(name, data);
};
 exports.loop = function(times, func, arg){
new pros();
return pros.loop(times, func, arg);
};
exports.click = function (elem, func, arg){
new pros();
return pros.getid(elem, func, arg);
};
exports.change = function (elem, func, arg){
new pros();
return pros.change(elem, func, arg);
};
 exports.keyup = function (ele, func, data){
new pros();
return pros.keyup(elem, func, arg);
};
exports.inhtm = function(data, text){
new pros();
return pros.inhtml(data, text);
};
exports.newobj = function(name, data){
new pros();
return pros.newobj(name, data);
};
exports.addobj = function(name, data){
new pros();
return pros.addobj(name, data);
};
exports.newlist = function(name, data){
new pros();
return pros.newlist(name, data);
};
exports.addlist = function(name, data){
new pros();
return pros.addlist(name, data);
};
exports.margevar = function(name, var1, var2){
new pros();
return pros.margevar(name, var1, var2);
};
