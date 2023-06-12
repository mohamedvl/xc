

// let mainob={
//     hasd:true,
//     show:function(){
//         return `you ${this.hasd ? " yes":"dont" } `
//     }
// }
// console.log(mainob.show())


// let other=Object.create(mainob);

// other.hasd = false;

// // console.log(other.hasd)
// // console.log(other.show())

// let user={name:'osama'}


// console.log(user)
// console.log(user.name)

// delete user .name;

// console.log(user)
// console.log(user.name)



// function phone(age){
    
//     this.age=age;
//     this.day=function(){
//     return age
//     }

// }

// let phone2 = new phone(2)
// let phone1 = new phone(4)
// console.log(phone2.day())
// console.log(phone1.day())

// function user(name){
//     this.name=name;
//     this.welcom=function(){
//         return `welcom ${this.name}`
//     };
// }

// let user1=new user('mohamed')
// console.log(user1.welcom())
// let user2=new user('hossam')

// let arr=[1,9,5,6,4]
// console.log(arr.sort())
// console.log(Array.prototype)

// console.log(String.prototype)


// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     sayhello(){
//         return `Hello ${this.name}`
//     }

//     shoEmail(){
//         return `Your Email Is ${this.email}`
//     }
// }

// class admin extends user{
//     constructor(name,email){
//         super(name,email)

//     }
    
//     adminmasg(){
//         return `your are admin`
//     }
// }

// let admin1=new admin('mohamed','emkxdsl')



// class User{
//     #e
//     constructor(id, username,salary){
//         this.i=id;
//         this.u=username;
//         this.#e=salary;
//     }
// }

// console.log(User.prototype)

// class admin extends User{
//     constructor(id,username,salary){
//         super(id,username,salary)
//     }
// }

// let admin1=new admin(33,'mohamed',3000)
// console.log(admin1.i)
// console.log(admin1.e)
// console.log(admin1.u)



// String.prototype.id='99'
// let str='mohamed'
// console.log(String.prototype)

/*##########################################*/



let dateNow=new Date();
console.log(dateNow)

let birthDay=new Date('oct 1,2004');

console.log(birthDay)

console.log(dateNow.getDate())
console.log(dateNow.getDay())
console.log(dateNow.getTime())
console.log(dateNow.getSeconds())
console.log(dateNow.getFullYear())
console.log(dateNow.getHours())