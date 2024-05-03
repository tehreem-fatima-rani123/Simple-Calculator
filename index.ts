#! /usr/bin/env node 

import inquirer from "inquirer";

console.log("\n\twellcome To \'tehreem fatima\' - CLI SIMPLE CALCULATOR\n");

const answer =await inquirer.prompt([{
    message:"enter your first number",
    type:"number",
    name:"num1",
},
{message:"enter your second number",
type:"number",
name:"num2",
},
{
    message:"select your operator",
    type:"list",
    name:"operators",
    choices:["Addition","Subtraction","Multiplication","Division"],
},]);
console.log(answer);

if (answer.operators==="Addition"){
    console.log(answer.num1+answer.num2)
}else if (answer.operators==="Subtraction"){
    console.log(answer.num1-answer.num2)
}else if (answer.operators==="Multiplication"){
    console.log(answer.num1*answer.num2)
}else if (answer.operators==="Division"){
    console.log(answer.num1/answer.num2)
}
