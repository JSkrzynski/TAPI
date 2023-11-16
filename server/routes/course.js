import express from "express";
import courses from "../../data/courses.json" assert {type: "json"};

export const courseRouter = express.Router();

courseRouter.get('/all', (req,res) => {
    res.send({
        courses
    });
})
courseRouter.get('/:id', (req,res) => {
    const course = courses.at(req.params.id-1)
    res.send({course});
})