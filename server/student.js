import express from "express";
import {faker} from "@faker-js/faker";
import students from "../data/students.json" assert {type: "json"};

export const studentRouter = express.Router();

studentRouter.get('/all', (req,res) => {
    res.send({
        students
    });
})
studentRouter.get('/:id', (req,res) => {

    const student = students.at(req.params.id)

    res.send({
        student
    });
})