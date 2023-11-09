import express from "express";
import {faker} from "@faker-js/faker";
import students from "../data/students.json" assert {type: "json"};
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync("grpc/proto/schedule.proto");
const scheduleProto = grpc.loadPackageDefinition(packageDefinition);

const client = new scheduleProto.ScheduleService('127.0.0.1:9090', grpc.ChannelCredentials.createInsecure());

export const studentRouter = express.Router();

studentRouter.get('/all', (req,res) => {
    res.send({
        students
    });
})
studentRouter.get('/:id', (req,res) => {
    client.GetStudent({studentId: "1"},(err, response) => {
        if(err!==null){
            console.error(err);
        }
        res.send(response);
    })
    const student = students.at(req.params.id)

    // res.send({
    //     student
    // });
})