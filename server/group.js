import express from "express";
import {faker} from "@faker-js/faker";

export const groupRouter = express.Router();
const students = []
const courses = []

groupRouter.get('/all', (req,res) => {

    for(let i = 0; i < 20; i++ ) {
          students[i] = faker.number.int({min: 0, max: 299})
    }
    for(let i = 0; i < 6; i++ ) {
          courses[i] = faker.number.int({min: 1, max: 25})
    }
    

    res.json({
        students,
        courses
    });
})