//type inferrance


import {z} from 'zod';
import express from 'express';

const app = express();

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
})

app.put('/user', (req, res) => {
   
})