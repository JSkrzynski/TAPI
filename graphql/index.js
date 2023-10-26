import express from "express";
import cors from "cors";
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4";
import students from "../data/data.json" assert {type: "json"}

const typeDefs = `#graphql
    type Student {
        id: Int,
        name: String,
        group: Int
    }
    type Course {
        date: String,
        subject: String
    }
    type Group {
        number: Int
    }
    type Room {
        number: Int
    }
`;
const resolvers = {};

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