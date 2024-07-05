function scuberGreetingForFeet(distance){
  // Write your code here!
let result;
if (distance> 2500){
  result= `No can do.`
}else if (distance>=2000){
  result= `I will gladly take your thirty bucks.`
}else if (distance>= 400 && distance <=2000){
  result= `That will be twenty bucks.`
}else {
   result= `This one is on me!`
}
  return result; 
} 
console.log(scuberGreetingForFeet)

  // Write your code here!
function ternaryCheckCity(City){
 return (City === `NYC`? `Ok, sounds good.`:`No go.`)
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch(Tip){
    case `generous`: 
    return `Thank you so much.`
    case `not as generous`: 
    return `Thank you.`
    default : `if anything else`
    return `Bye.` 
  }
  }