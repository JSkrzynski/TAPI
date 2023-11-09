import express from "express";
import cors from "cors";
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4";
import students from "../data/students.json" assert {type: "json"}
import courses from "../data/courses.json" assert {type: "json"}
import groups from "../data/groups.json" assert {type: "json"}
import lecturers from "../data/lecturers.json" assert {type: "json"}
import rooms from "../data/rooms.json" assert {type: "json"}

const typeDefs = `#graphql
    type Student {
        id: Int,
        name: String,
        surname: String,
        groupId: Int
    }
    type Course {
        id: Int,
        name: String,
        lecturer: Int,
        group: Int,
        room: Int,
        start: String,
        end: String
    }
    type Group {
        id: Int,
        students: [Int],
        courses: [Int]
    }
    type Lecturer {
        id: Int,
        name: String,
        surname: String,
        assignedCourses: [Int]
    }
    type Room {
        id: Int,
        courses: [Int]
    }
`;
const resolvers = {
    Query: {
        students: () => students,
        student: (parent, args) => students.find(s => s.id === args.id),
        courses: () => courses,
        course: (parent, args) => courses.find(s => s.id === args.id),
        groups: () => groups,
        group: (parent, args) => groups.find(s => s.id === args.id),
        lecturers: () => lecturers,
        lecturer: (parent, args) => lecturers.find(s => s.id === args.id),
        rooms: () => rooms,
        room: (parent, args) => rooms.find(s => s.id === args.id),
    }
};

const server = new ApolloServer({typeDefs, resolvers});
await server.start();

const app = express();
app.use('/graphql',cors(), express.json(), expressMiddleware(server));

app.use(cors({
    origin: '*'
}));

app.listen(8989, () => {
    console.log("Started on http://localhost:8989")
});