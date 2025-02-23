'use strict'
const display = document.getElementById(`display`)
const appenttoDisplay=(item)=>{
const lastchar = display.value.slice(-1)
const operators = "+-*/."
if(operators.includes(item)&& operators.includes(lastchar)){
 display.value = display.value.slice(0,-1)+item   
}
else
 display.value+=item
}
const cleardisplay = ()=>{

    
  return display.value = ""   
}

const calculate  =()=>{
    try{
display.value = eval(display.value)}
catch(error){
  display.value = 'Error!'  
}
}

document.addEventListener("keydown",(e)=>{
 const validkeys = "0123456789+-*/."
 if(validkeys.includes(e.key)){
  appenttoDisplay(e.key)}
  else if(e.key === "Enter"){
  calculate();  
  }  
  else if(e.key === "Escape"){
    cleardisplay();
  } 
  else if(e.key=== "Backspace"){
   display.value = display.value.slice(0,-1) 
  }  
})