# prof

<img src="pros.png" style="zoom:50%;" />

<img src="https://badgen.net/bundlephobia/min/pros">


### This is a new javascript framework.

-----
## How to use

#### Please clone this repository

    git@github.com:gutsmine/pros

#### Or run the following command in npm

```
npm install pros
```

#### Embed it in your project.

    <script src="pros.js"></script>
### Or

    var pros = require('pros');

----

## syntax

#### Add "pros." before the following syntax.

### html

    window.document

#### It will be the same shape as

### getid(Variable name, Id to get)

#### Gets an element from id.

    var Variable name = document.getElementById(Id to get);
#### It will be the same shape as

#### You can use getclass and getname in the same way.

## click(Element variable, The function to execute, argument)

#### Allows click processing of an element.

    Element variable.onclick(function(argument){The function to execute}
#### It will be the same shape as 

#### In addition, we plan to make it possible to specify multiple arguments using variables.

## change(Element variable, The function to execute, argument)

#### Allows processing when an element changes.

    Element variable.addEventlistener("chenge",(event)=>{
    Function name(argument)
    })
#### It will be the same shape as

## keyup(Element variable, Function name, argument)

#### Allows processing when a keyboard is pressed within an element.

    Element variable.addEventlistener("keyup",(event)=>{
    if(event.isComposing){
    Function name(argument)
    }
    })  
#### It will be the same shape as

## inhtml(Element variable, text)

#### Change the text of the element.

    Element variable.innerHTML=text;
   #### It will be the same shape as

## newobj(Variable name, The text to add)

#### Create a new object variable.

```
var Variable name = {The text to add};
```

#### It will be the same shape as

## addobj(Variable name, The text to add)

#### Append to object variable.

```
Variable name.push(The text to add);
```

#### It will be the same shape as

#### There are also newlist and addlist.

## mergevar(Variable name to add, variable1, variable2)

#### Integrate variables.

```
var Variable name to add = Variable 1 +  Variable 2;
```

#### It will be the same shape as

-----
   ### Due to the current development process, problems may occur.

 This repository is licensed under MIT LICENSE (this license). You must comply with this license to use this file. A copy of this license can be obtained from:

https://github.com/gutsmine/pros/blob/master/LICENSE



<img src="gutsminemade-by.png" style="zoom:50%;" />
