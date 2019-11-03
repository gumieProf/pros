var pros=function(){
this.prototype = {

 getid: function(name, data){
return eval("var" + name+"=document.getElementById("+data+")");
},
  getclass: function(name, data){
return eval("var" + name+"=document.getElementByClass("+data+")");
},
 getname: function(name, data){
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