// interface User{
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// type UpdateProp = Pick<User, 'email' | 'password'>

// type updateUserOptional = Partial<UpdateProp>

// function getUser(props: updateUserOptional){
//     //Logic here
// }

// // /ReadOnly

// interface Guy{
//     name: string;
//     age : number;
// }

// const user: Readonly<Guy> = {
//     name:'john',
//     age: 30
// }


 type User = Record<string, number>;
 
 const user = {
    "mir" : 56,
    "amit" : 45
 }




