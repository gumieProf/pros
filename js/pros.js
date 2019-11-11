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

class value {
  constructor(data1) {
    this.data1=data1;
  }
idvalue(){

  var data = this.data1;
  return eval('document.getElementById('+data+")");

}

classvalue(){

  var data = this.data1;
  return eval('document.getElementByClass('+data+")");
}
namevalue(){

  var data = this.data1;
  return eval('document.getElementByName('+data+")");
  }
 }

 class pros{
   constructor(data1, data2, data3){
     this.data1 = data1;
     this.data2 = data2;
     this.data3 = data3;
   }
 getid(){
   var data = this.data1;
  return eval("document.getElementById('"+data+"')");
}
  getclass(){
    var data = this.data1;
   return eval("document.getElementByClass('"+data+"')");
}
 getname(){
   var data = this.data1;
   return eval("document.getElementByName('"+data+"')");
}
 loop(){
   var times = this.data1;
   var func = this.data2;
   var arg = this.data3;
 for(var i=0; i=times; ++i){
 if(arg == null || arg == undefined || arg == ""){
   eval(func+"()");
}else{
   eval(func+"("+arg+")");
  }
 }
}
 click(){
   var elem = this.data1;
   var func = this.data2;
   var arg = this.data3;
elem.onclick=function(){
  if(arg == null || arg == undefined || arg ==""){
   eval(func+"()");
}else{
   eval(func+"("+arg+")");
  }
 }
}
 change(){
   var elem = this.data1;
   var func = this.data2;
   var arg = this.data3;
 elem.addEventlistener("change",(event)=>{
 if(arg == null || arg == undefined || arg ==""){
   eval(func+"()");
}else{
   eval(func+"("+arg+")");
  }
 });
}
 keyup(){
   var elem = this.data1;
   var func = this.data2;
   var arg = this.data3;
 elem.addEventlistener("keyup", event=>{
 if(event.isComposing){
 if(data == null || data == undefined || data==""){
   eval(func+"()");
}else{
   eval(func+"("+data+")");
   }
  }
 });
}
 inhtml(){
   var data = this.data1;
   var text = this.data2;
   data.innerHTML = text;
}
 newobj(){
   var name = this.data1;
   var data = this.data2;
   eval(name+"={"+data+"}");
}
 addobj(){
   var name = this.data1;
   var data = this.data2;
   eval(name+".push("+data+")");
}
 newlist(){
   var name = this.data1;
   var data = this.data2;
   eval(name+"=["+data+"];");
}
 addlist(){
   var name = this.data1;
   var data = this.data2;
   eval(name+".push("+data+")");
}
 margevar(){
   var name = this.data1;
   var var1 = this.data2;
   var var2 = this.data3;
  return eval(var1+"+"+var2);
 }
 getvalue(){
 var data1 = this.data1;
 var data2 = this.data2;
 var type = this.data3;
 if(type='id'){
 return value(data1, data2).getid;
}else if(type='class'){
 return value(data1, data2).getclass;
}else if(type='name'){
 return value(data1, data2).getname;
   }
  }
 }
module.exports = new pros();
