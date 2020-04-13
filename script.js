"use strict"
/*

//  let and const
var a=10;
let b=20;

console.log(a);
console.log(b);  //both work

*/
/*
function testVar()
{
    var a=50;
    if(true){
     var a=20;
     console.log(a)  //20
    }

     console.log(a)  //20
}
*/
/*
function testLet()
{
    let a=50;
    if(true){
      let a=20;
      console.log(a); //20
    }

      console.log(a);  //50
}
testLet()
*/
/*
const a=[];
a.push(10);
a.push(15);
// a=10  error
console.log(a)
*/

//Class and inheritance
/*
class User{
  static a=50;
  constructor(name,age,gender)
  {
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
  Register()
  {
      console.log(this.name +" is registered successfully")
  }
  static count()
  {
    console.log("Total users registered: "+this.a)
    //console.log("Total users registered: "+a) gives error
  }
}

let o1=new User("Supragya",21,"male")
o1.Register();
User.count();
//o1.count();   gives error

class Member extends User{
  constructor(name,age,gender,city)
  {
      super(name,age,gender);
      this.city=city;
  }
  getCity()
  {
    console.log(this.name+"'s city: "+this.city)
  }
}

let o2=new Member("Swaranjal",17,"female","Shimla")
o2.Register();
Member.count();
o2.getCity();

*/


//Template literals
/*
function func(word)
{
  return word.toUpperCase()
}

const temp=`<h1>Hi ${func("Supragya")}</h1>
<p>This is a simple paragraph</p>`
document.getElementById("one").innerHTML=temp;
*/




//new String and Number methods
/*
let string="Hi, I'm Supragya. I'm learning ES2015"

console.log(string.startsWith("hi"));
console.log(string.startsWith("Hi"));
console.log(string.endsWith("015"));
console.log(string.endsWith("learn"));
console.log(string.includes("learn"));
console.log(string.includes("man"));


//hex
console.log(0xA)
//binary
console.log(0b1111)
//octal
console.log(0o77)

console.log(Number.isFinite(Infinity))
console.log(Number.isFinite('Infinity'))
console.log(Number.isFinite('abc'))

console.log(Number.isNaN(Infinity))
console.log(Number.isNaN(NaN))

console.log(Number.isInteger(5))
console.log(Number.isInteger(5.0))

*/


//default parameters
/*
function greetFunction($greeting, $name="Supragya",$nothing)
{
  console.log(`${$greeting} ${$name}
   ${$nothing}`)
}
greetFunction("Hello")
*/