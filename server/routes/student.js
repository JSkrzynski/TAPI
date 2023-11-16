import express from "express";
import students from "../../data/students.json" assert {type: "json"};
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync("grpc/proto/schedule.proto");
const scheduleProto = grpc.loadPackageDefinition(packageDefinition);

const client = new scheduleProto.ScheduleService('127.0.0.1:9090', grpc.ChannelCredentials.createInsecure());

export const studentRouter = express.Router();

studentRouter.get('/all', (req,res) => {
    // #swagger.tags = ['Students']
    res.send({
        students
    });
})
studentRouter.get('/:id', (req,res) => {
    // #swagger.tags = ['Students']
    const student = students.at(req.params.id)
    client.GetStudent({studentId: student.id, name: student.name, surname: student.surname, groupId: student.groupId},(err, response) => {
        if(err!==null){
            console.error(err);
        }
        res.send(response);
    })

    // res.send({
    //     student
    // });
})