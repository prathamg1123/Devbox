const day = 7

// if(day == 0){
//     console.log('Day is Sunday.')
// } else if(day == 1){
//     console.log('Day is Monday.')
// } else if(day == 2){
//     console.log('Day is Tueday.')
// } else if(day == 3){
//     console.log('Day is Wednesday.')
// } else if(day == 4){
//     console.log('Day is Thursday.')
// } else if(day == 5){
//     console.log('Day is Friday.')
// } else if(day == 6){
//     console.log('Day is Satuarday.')
// } else{
//     console.log('Enter a valid no.')
// }

switch(day){
    case 0: {
        console.log('Day is Sunday.')
        break
    }
    case 1:  {
        console.log('Day is Monday.')
        break
    }
    case 2:  {
        console.log('Day is Tuesday.')
        break
    }
    case 3:  {
        console.log('Day is Wednesday.')
        break
    }
    case 4:  {
        console.log('Day is Thursday.')
        break
    }
    case 5:  {
        console.log('Day is Friday.')
        break
    }
    case 6:  {
        console.log('Day is Satuarday.')
        break
    }
    default:
    {
        console.log('Enter valid no.')
    }

}


const userName = 5 > 2 ? 'Pratham' : 'Yash'

const gender = 'g'

const msg = `${gender.toLowerCase() === 'f' ? 'She' : 'He'} is college student`

console.log(msg)

const isValid = `${false ? '18+' : 'No' ? '15+' : 'No'}`
console.log(isValid)
