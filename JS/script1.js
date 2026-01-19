const userName = prompt('Enter your Name') || 'Pratham'
const userAge = parseInt(prompt('Enter your Age')) || 19
const gender = prompt('Please Enter your gender (M for Male, F for Female)') || 'M'
let gen; 
    if(gender == 'M'){
        gen = 'He'
    } else {
        gen = 'She'
    }

console.log(`Name: ${userName}`)
console.log(`Age: ${userAge} `)
debugger
if(userAge >= 18 && userAge <= 24){
    console.log(`${userName} is a Student`)
    console.log(`and ${gen} is learning computer Science`)
} 
 else if(userAge >= 25 && userAge <= 45){
    console.log(`${userName} is a working professinal`)
    console.log(`and ${gen} is  a software devloper`)
}

else(userAge > 45){
    console.log(`${userAge} is retired`)
    console.log(`${gen} is reading newspaper.`)
}

clg
