import express from "express";
import courses from "../data/courses.json" assert {type: "json"};

export const courseRouter = express.Router();

courseRouter.get('/all', (req,res) => {
    res.send({
        courses
    });
})