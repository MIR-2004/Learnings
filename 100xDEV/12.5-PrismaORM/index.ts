import { prisma } from "./lib/prisma.js";

async function createUser(email: string, password: string, firstname: string, lastname: string){
    const response = await prisma.user.create({
        data: {
            email,
            password,
            firstname,
            lastname
        }
    })
    console.log(response)
} 

async function createTodo(title: string, description: string, userId: number){
    const response = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        }
    })

    console.log(response)
} 

async function getTodosAndUserDetails(userId: number){
    const response = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            title: true,
            description: true,
            user: true
        }
    })
    console.log(response);
}

getTodosAndUserDetails(1);

