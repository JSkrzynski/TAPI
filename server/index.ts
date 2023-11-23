import express from "express";
import {createServer} from "node:http";
import cors from "cors";
import {faker} from "@faker-js/faker";
import { studentRouter } from "./routes/student.js";
import { groupRouter } from "./routes/group.js";
import { lecturerRouter } from "./routes/lecturer.js";
import { roomRouter } from "./routes/room.js";
import { courseRouter } from "./routes/course.js";
import swaggerUi from 'swagger-ui-express';
import swaggerAutogen from 'swagger-autogen';

const endpointsFiles = ['../server/index.ts'];
const doc = {}
const swagger = await swaggerAutogen( {openApi: '3.0.0'} )( 'swagger.json',endpointsFiles,doc )

const PORT = 3000;
const app = express();
const server = createServer(app);

app.use(cors({'Origin':'*'}))

app.use('/student',studentRouter)
app.use('/group',groupRouter)
app.use('/lecturer',lecturerRouter)
app.use('/room',roomRouter)
app.use('/course',courseRouter)
if (swagger) {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger.data, {customCssUrl: "/swaggerDark.css"}));
}



server.listen(PORT, () => {console.log(`Started on port: ${PORT}!`)});