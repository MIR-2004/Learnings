interface User{
    id: number;
    name: string;
    email: string;
    age: number;
    password: string;
};

type UserUpdate = Pick<User, 'name' | 'email' | 'age' | 'password'>

type UserUpdateOptional = Partial<UserUpdate>;

function updateUser(updateProps: UserUpdate){

}
