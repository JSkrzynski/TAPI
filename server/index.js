import express from "express";
import {createServer} from "node:http";
import cors from "cors";
import {faker} from "@faker-js/faker";
import { studentRouter } from "./student.js";

const PORT = 3000;
const app = express();
const server = createServer(app);

app.use(cors({'Origin':'*'}))
app.get('/hello/:id',(req,res) => {
    faker.internet.email();
    const id = req.params.id;
    res.send('world');
})

app.use('/student',studentRouter)

server.listen(PORT, () => {console.log(`Started on port: ${PORT}!`)});