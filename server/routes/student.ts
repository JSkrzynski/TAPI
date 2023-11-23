import express from "express";
import students from "../../data/students.json" assert {type: "json"};
import { Student } from "../../types";
export const studentRouter = express.Router();

studentRouter.get('/all', (req,res) => {
    // #swagger.tags = ['Students']
    res.send({
        students
    });
})
studentRouter.get<
    {id: number},
    Student,
    null,
    null>('/:id', (req,res) => {
    // #swagger.tags = ['Students']
    const student = students.at(req.params.id)

    res.json({
        id: ,
        name: ,
        surname: ,
        groupId: 
    });
})