console.log("hellooooooooooo")
//dynamic data typing
//javascript have two types of data type
//primitive and non-primitive/reference
//primitive:- number,string,boolean,undefined,null etc
//non-primitive:- arrys,objects,symbols,date,set,map etc.
//1. number type(all numerical literals in js)
let a = 20.35686;
let b= a.toFixed(3) //it fix 3 digit after decimal point i.e 20.356 
let c= a.toPrecision(3)//it will give first 3 digit of number i.e 20.4(round off 35 to 4)
let d= Math.floor(20.3695)// it will give the lowest value in btw 20&21 i.e 20. Math.ceil will givwe you the highest value in tw the two i.e 21.
let e = Math.abs(-10) // this value gets converted into the positive 10.
let f = Math.min(2,3) // gives the mininum value i.e 2
let g = Math.max(6,2) // gve the maximun value i.e 6
let h =Math.random()//gives any random no. btw 0 to 1
let i =Math.round(Math.random()*1000)//random no. gets multiplied and the roundoff to the decimal no.
let j =Math.pow(2,3)// 2*2*2= 8
console.log(j)
console.log(i)
console.log(h)
console.log(e)
console.log(f)
console.log(g)
console.log(d)
console.log(b)
console.log(c)
console.log(typeof(a))// it gives the data type of a i.e Number.
alert("hey anushri!!")//dialog box appears with msg. 


let 