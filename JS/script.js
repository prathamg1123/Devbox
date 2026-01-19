// debugger
// console.log(firstName)
// let firstName = 'Pratham'
// let lastName ='Bairagi'
// let age = 19

// let userIntro = 'My name is ' + firstName + ' ' +  lastName + ' ' + age 

// alert("Your msg is being displaying")
// confirm("Sure??????")
// alert("Your msg is being displaying")
// confirm("Sure??????")
// alert("Your msg is being displaying")
// confirm("Sure??????")
// alert("Your msg is being displaying")
// confirm("Sure??????")
// alert("Your msg is being displaying")

// const userInput =  prompt("Enter Your Name")
// console.log(userInput)

const msg = 'Hello love';
const msg1 = 'I am yours'
const faltumsg = '      HElloooo lellloooo!      '
const finalmsg = faltumsg.trim()

// const finalmsgLowerCase = faltumsg.trim().toLowerCase()
// const finalmsgUpperCase = faltumsg.trim().toUpperCase()
//   finalmsg.includes('lelll')

const conscateMsg = msg.concat(faltumsg)
// console.log(msg.concat(', ' + msg1))

const lastFourDigits = '7854'
const maskedAccountNumber = lastFourDigits.padStart(10, '*')
const concatenatedString = `Last four digit of my Account no. is: ` + lastFourDigits
const templateString = `Last four digit of my Account no. is: ${lastFourDigits.padStart(16, '*')}.`

//math objects
/*
Math.sqrt(x)
Math.PI
Math.pow(x,y) or x**y
Math.floor(x)
Math.ceil(x)
Math.round(x)
Math.randon()
*/


const height = prompt('Please enter height of a rectangle: ')
const width = prompt('Please enter width of a rectangle: ')
console.log('Area of rec is: ' + +height* +width)
document.write(`Area is: ${+height* +width}.`)



