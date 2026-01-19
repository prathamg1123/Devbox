const name = 'Pratham'

const user = {
    Name: 'Atul Sahu',
    Age: 19,
    Department: 'BBA',
    uni: 'SVVV',
    isStudent: {
        student: 'Yes',
        Sem: '3rd',
        cgpa: '6.2'
    }
}

console.log(user.Name) //dot notation
console.log(user['Name'])//bracket Notation

user.Age = 20;

user.isStudent.cgpa = 6.5

delete user.Age

Object.seal(user)//you can update a value of variable using seal
Object.freeze(user)//you cannot update--