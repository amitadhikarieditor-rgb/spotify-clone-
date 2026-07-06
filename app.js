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
    for(let i=1; i<str.length; i++){
        if (!newstr.includes(str[1])){
            newstr+=str[i];
        }
    }
          console.log(newstr);
}

unique(str)();
