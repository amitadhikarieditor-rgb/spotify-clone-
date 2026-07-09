let color = "red"

switch(color){
    case "red":
        console.log(stop)
        break;
    case "yellow":
        console.log(wait)
        break;
    case "green":
        console.log("go")
        break;
    case "default":
        console.log("the light is broken")
         break;
    }
    

let name= prompt ("type your first name");

let lastname=prompt("write your last name");

console.log(name+lastname); 

alert("Hey Mr. recruiter most welcome!!!!");

let i=1;

while(i<10){
    console.log(i);
    i++;
}

  let firstname =prompt("write your first name");
  let lastname=prompt("write your last name");
  console.log(`welcome ${firstname} ${lastname}`);


let str="   hello    ";


console.log(str.trim());

for (let i=1; i<=5; i++){
    console.log(i);

}
let i=1;
while (i>=5){

console.log(i);
i++;


}
let str= ("I AM IIT PATNA STUDENT OF 2025 BATCH");

function unique(str){
    let newstr="";
    for(let i=0; i<str.length; i++){
        if (!newstr.includes(str[i])){
            newstr+=str[i];
        }
    }
          console.log(newstr);
}

unique(str);


//array methods
/*forEach() 
arr.map()
filter 
SVGPoint,e 
every
reduce */

let arr=[2,3,3,4,5,5];
let print=function(el){
    console.log(el)
};  
arr.forEach(print);

let arry=[1,2,3,4,5];

let ans= arry.map((el) => {
    return el*el;
});


//function
let heading=function introduction(name,age){
    console.log(`hello!! ${name} you are ${age} years old`);
}
heading("prateek",19);
//------------------------------------------------------------------------------------------------------------
//high order function
function greet(){
    return "hello world!";
}
function execute(a){
    return a();
}
console.log(execute(greet));
//-----------------------------------------------------------------------------------------------------------
//this 
let student ={
    name:"amit adhikari",
    age:19,
    College:"indian institute of technology patna'27",

    intro(){
        console.log(this.name,this.age,this.college);
    }
};

student.intro();
//call and bind
let vidyarthi1 ={
    name:"prateek",
    age:19,
    year:"2nd",
};
let vidyarthi2 ={
    name:"amit",
    age:20,
    year:"3rd",
};

function intro(){
    console.log(this.name,this.age,this.year);
}

intro.call(vidyarthi1);
intro.call(vidyarthi2);

//arrow function
const sum =(a,b)=> a+b;
console.log(sum(2,3));

const average=(arr)=>{
    let a=0
    for(let i=0;i<arr.length;i++){
        a+=a[i];
    }
    return a/arr.length
}
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,27,28,29,20,21,22,23,24,25,26,27,28,29,30];
console.log(average(arr))

let array = [1,2,3,4,5,];

array.forEach((el)=>{
    console.log(el);
});

let array = [1,2,3,4,5,];
let newarr= array.map((el)=>{
    return el*el;
})
console.log(newarr);

let marks = [35, 80, 22, 90, 45, 65];

let newMarks= marks.filter((el)=>{
    if(el>=40){
        return true;
    }else{
        return false;
    }
});

console.log(newMarks);


let max=6;
let random=Math.floor(Math.random()*max)+1;
console.log(random);

let numbers = [10, 20, 30];

let result=numbers.reduce((acc,el)=>{
    return acc+el;
},0);

console.log(result);


const student1 ={
    name:"prateek",
    age:19,
    year:"2nd",
}

let {name1,age1,year1}=student1;

const student2 ={
    name:"amit",
    age:20,
    year:"3rd",
}

let {name2,age2,year2}=student2;


console.log(name1,age2,year2);



