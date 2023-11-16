import express from "express";
import {createServer} from "node:http";
import cors from "cors";
import {faker} from "@faker-js/faker";
import { studentRouter } from "./routes/student.js";
import { groupRouter } from "./routes/group.js";
import { lecturerRouter } from "./routes/lecturer.js";
import { roomRouter } from "./routes/room.js";
import { courseRouter } from "./routes/course.js";

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
app.use('/group',groupRouter)
app.use('/lecturer',lecturerRouter)
app.use('/room',roomRouter)
app.use('/course',courseRouter)

server.listen(PORT, () => {console.log(`Started on port: ${PORT}!`)});